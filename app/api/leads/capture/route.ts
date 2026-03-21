import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

// Simple in-memory rate limiter (per IP, 5 requests per hour)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 3600000 });
    return false;
  }
  entry.count++;
  if (entry.count > 5) return true;
  return false;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    const { name, email, company, phone, conversationId, sessionId, source } = await request.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    // Block obvious spam/test submissions
    if (name.toLowerCase() === "test" || email.includes("test@test")) {
      return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
    }

    // Get visitor ID if exists
    let visitorId = null;
    if (sessionId) {
      const { data: visitor } = await supabaseAdmin
        .from("visitors")
        .select("id")
        .eq("session_id", sessionId)
        .single();
      visitorId = visitor?.id;
    }

    // Determine lead source label
    const leadSourceLabel = source === "book_a_call" ? "Book a Call" : "Chat Widget";

    // Create lead
    const { data: lead, error: leadError } = await supabaseAdmin
      .from("leads")
      .insert({
        name,
        email,
        company: company || null,
        phone: phone || null,
        conversation_id: conversationId || null,
        visitor_id: visitorId,
        lead_source: source || "chat",
        status: "new",
      })
      .select("id")
      .single();

    if (leadError) {
      console.error("Error creating lead:", leadError);
      return NextResponse.json({ error: "Failed to create lead" }, { status: 500 });
    }

    // Update conversation status if exists
    if (conversationId) {
      await supabaseAdmin
        .from("conversations")
        .update({ status: "converted" })
        .eq("id", conversationId);
    }

    // Send email notification via Formspree
    const formspreeId = process.env.FORMSPREE_FORM_ID || "xykkgnrk";
    let emailSent = false;

    try {
      const formspreeResponse = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company: company || "Not provided",
          phone: phone || "Not provided",
          source: leadSourceLabel,
          _subject: `New Lead: ${leadSourceLabel} - ${name}`,
          message: `New lead captured from ${leadSourceLabel}.\n\nName: ${name}\nEmail: ${email}\nCompany: ${company || "Not provided"}\nPhone: ${phone || "Not provided"}\nSource: ${leadSourceLabel}`,
        }),
      });

      emailSent = formspreeResponse.ok;
    } catch (e) {
      console.error("Formspree error:", e);
    }

    // Update lead with email status
    await supabaseAdmin
      .from("leads")
      .update({ email_sent: emailSent })
      .eq("id", lead.id);

    // Update daily analytics
    const today = new Date().toISOString().split("T")[0];
    const { data: existing } = await supabaseAdmin
      .from("analytics_daily")
      .select("leads_captured")
      .eq("date", today)
      .single();

    if (existing) {
      await supabaseAdmin
        .from("analytics_daily")
        .update({ leads_captured: (existing.leads_captured || 0) + 1 })
        .eq("date", today);
    } else {
      await supabaseAdmin
        .from("analytics_daily")
        .insert({ date: today, leads_captured: 1 });
    }

    return NextResponse.json({ success: true, leadId: lead.id });
  } catch (error) {
    console.error("Lead capture error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
