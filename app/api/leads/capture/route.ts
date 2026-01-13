import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, phone, conversationId, sessionId } = await request.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
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
        lead_source: "chat",
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
          source: "Chat Widget Lead Capture",
          message: `New lead captured from chat widget.\n\nName: ${name}\nEmail: ${email}\nCompany: ${company || "Not provided"}\nPhone: ${phone || "Not provided"}`,
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
