import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    // Handle both JSON and text body (for sendBeacon)
    let body;
    const contentType = request.headers.get("content-type");

    if (contentType?.includes("application/json")) {
      body = await request.json();
    } else {
      const text = await request.text();
      body = JSON.parse(text);
    }

    const { type, sessionId, data } = body;

    if (!sessionId) {
      return NextResponse.json({ error: "Session ID required" }, { status: 400 });
    }

    const today = new Date().toISOString().split("T")[0];

    switch (type) {
      case "visit": {
        // Check if visitor exists
        const { data: existing } = await supabaseAdmin
          .from("visitors")
          .select("id")
          .eq("session_id", sessionId)
          .single();

        if (!existing) {
          // Create new visitor
          await supabaseAdmin.from("visitors").insert({
            session_id: sessionId,
            user_agent: data.userAgent,
            referrer: data.referrer,
            landing_page: data.landingPage,
            device_type: data.deviceType,
            browser: data.browser,
          });

          // Update daily analytics - new unique visitor
          const { data: analytics } = await supabaseAdmin
            .from("analytics_daily")
            .select("*")
            .eq("date", today)
            .single();

          if (analytics) {
            await supabaseAdmin
              .from("analytics_daily")
              .update({
                total_visitors: (analytics.total_visitors || 0) + 1,
                unique_visitors: (analytics.unique_visitors || 0) + 1,
              })
              .eq("date", today);
          } else {
            await supabaseAdmin.from("analytics_daily").insert({
              date: today,
              total_visitors: 1,
              unique_visitors: 1,
              page_views: 0,
              chat_sessions: 0,
              leads_captured: 0,
            });
          }
        } else {
          // Returning visitor - update last activity
          await supabaseAdmin
            .from("visitors")
            .update({ last_activity: new Date().toISOString() })
            .eq("session_id", sessionId);

          // Update total visitors - create row if it doesn't exist
          const { data: analytics } = await supabaseAdmin
            .from("analytics_daily")
            .select("total_visitors")
            .eq("date", today)
            .single();

          if (analytics) {
            await supabaseAdmin
              .from("analytics_daily")
              .update({ total_visitors: (analytics.total_visitors || 0) + 1 })
              .eq("date", today);
          } else {
            // Create today's row if first activity is from a returning visitor
            await supabaseAdmin.from("analytics_daily").insert({
              date: today,
              total_visitors: 1,
              unique_visitors: 0,
              page_views: 0,
              chat_sessions: 0,
              leads_captured: 0,
            });
          }
        }
        break;
      }

      case "pageview": {
        // Get visitor ID
        const { data: visitor } = await supabaseAdmin
          .from("visitors")
          .select("id, page_views")
          .eq("session_id", sessionId)
          .single();

        if (visitor) {
          // Create page view record
          await supabaseAdmin.from("page_views").insert({
            visitor_id: visitor.id,
            session_id: sessionId,
            page_url: data.pageUrl,
            page_title: data.pageTitle,
          });

          // Update visitor page view count
          await supabaseAdmin
            .from("visitors")
            .update({
              page_views: (visitor.page_views || 0) + 1,
              last_activity: new Date().toISOString(),
            })
            .eq("id", visitor.id);

          // Update daily analytics
          const { data: analytics } = await supabaseAdmin
            .from("analytics_daily")
            .select("page_views")
            .eq("date", today)
            .single();

          if (analytics) {
            await supabaseAdmin
              .from("analytics_daily")
              .update({ page_views: (analytics.page_views || 0) + 1 })
              .eq("date", today);
          }
        }
        break;
      }

      case "pagetime": {
        // Update time on page
        const { data: pageView } = await supabaseAdmin
          .from("page_views")
          .select("id")
          .eq("session_id", sessionId)
          .eq("page_url", data.pageUrl)
          .order("created_at", { ascending: false })
          .limit(1)
          .single();

        if (pageView) {
          await supabaseAdmin
            .from("page_views")
            .update({ time_on_page_seconds: data.timeOnPage })
            .eq("id", pageView.id);
        }

        // Update visitor total time
        const { data: visitor } = await supabaseAdmin
          .from("visitors")
          .select("id, total_time_seconds")
          .eq("session_id", sessionId)
          .single();

        if (visitor) {
          await supabaseAdmin
            .from("visitors")
            .update({
              total_time_seconds: (visitor.total_time_seconds || 0) + data.timeOnPage,
              last_activity: new Date().toISOString(),
            })
            .eq("id", visitor.id);
        }
        break;
      }

      default:
        return NextResponse.json({ error: "Invalid tracking type" }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Analytics tracking error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    // Get last 30 days of analytics
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const { data: analytics, error } = await supabaseAdmin
      .from("analytics_daily")
      .select("*")
      .gte("date", thirtyDaysAgo.toISOString().split("T")[0])
      .order("date", { ascending: false });

    if (error) {
      throw error;
    }

    // Get totals
    const totals = (analytics || []).reduce(
      (acc, day) => ({
        totalVisitors: acc.totalVisitors + (day.total_visitors || 0),
        uniqueVisitors: acc.uniqueVisitors + (day.unique_visitors || 0),
        pageViews: acc.pageViews + (day.page_views || 0),
        chatSessions: acc.chatSessions + (day.chat_sessions || 0),
        leadsCaptured: acc.leadsCaptured + (day.leads_captured || 0),
      }),
      { totalVisitors: 0, uniqueVisitors: 0, pageViews: 0, chatSessions: 0, leadsCaptured: 0 }
    );

    return NextResponse.json({ analytics, totals });
  } catch (error) {
    console.error("Analytics fetch error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
