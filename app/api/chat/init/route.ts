import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const { sessionId } = await request.json();

    if (!sessionId) {
      return NextResponse.json({ error: "Session ID required" }, { status: 400 });
    }

    // Check if visitor exists, create if not
    let { data: visitor } = await supabaseAdmin
      .from("visitors")
      .select("id")
      .eq("session_id", sessionId)
      .single();

    if (!visitor) {
      const { data: newVisitor, error: visitorError } = await supabaseAdmin
        .from("visitors")
        .insert({ session_id: sessionId })
        .select("id")
        .single();

      if (visitorError) {
        console.error("Error creating visitor:", visitorError);
      }
      visitor = newVisitor;
    }

    // Create new conversation
    const { data: conversation, error: convError } = await supabaseAdmin
      .from("conversations")
      .insert({
        session_id: sessionId,
        visitor_id: visitor?.id || null,
        status: "active",
      })
      .select("id")
      .single();

    if (convError) {
      console.error("Error creating conversation:", convError);
      return NextResponse.json({ error: "Failed to create conversation" }, { status: 500 });
    }

    // Update daily analytics
    const today = new Date().toISOString().split("T")[0];
    try {
      const { data: existing } = await supabaseAdmin
        .from("analytics_daily")
        .select("chat_sessions")
        .eq("date", today)
        .single();

      if (existing) {
        await supabaseAdmin
          .from("analytics_daily")
          .update({ chat_sessions: (existing.chat_sessions || 0) + 1 })
          .eq("date", today);
      } else {
        await supabaseAdmin.from("analytics_daily").insert({
          date: today,
          chat_sessions: 1,
          total_visitors: 0,
          unique_visitors: 0,
          page_views: 0,
          leads_captured: 0,
        });
      }
    } catch (e) {
      console.error("Error updating analytics:", e);
    }

    return NextResponse.json({ conversationId: conversation.id });
  } catch (error) {
    console.error("Chat init error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
