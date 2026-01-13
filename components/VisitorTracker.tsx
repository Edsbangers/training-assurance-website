"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function VisitorTracker() {
  const pathname = usePathname();
  const pageStartTime = useRef<number>(Date.now());
  const lastPath = useRef<string>("");
  const sessionId = useRef<string>("");

  // Initialize session
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Get or create session ID
    let storedSessionId = localStorage.getItem("tac_session_id");
    if (!storedSessionId) {
      storedSessionId = crypto.randomUUID();
      localStorage.setItem("tac_session_id", storedSessionId);
    }
    sessionId.current = storedSessionId;

    // Track initial visit
    trackVisit();

    // Track when user leaves
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        trackPageTime();
      }
    };

    const handleBeforeUnload = () => {
      trackPageTime();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  // Track page changes
  useEffect(() => {
    if (!sessionId.current || pathname === lastPath.current) return;

    // Track time on previous page
    if (lastPath.current) {
      trackPageTime();
    }

    // Reset timer for new page
    pageStartTime.current = Date.now();
    lastPath.current = pathname;

    // Track new page view
    trackPageView();
  }, [pathname]);

  const getDeviceType = (): string => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet";
    }
    if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
      return "mobile";
    }
    return "desktop";
  };

  const getBrowser = (): string => {
    const ua = navigator.userAgent;
    if (ua.includes("Firefox")) return "Firefox";
    if (ua.includes("SamsungBrowser")) return "Samsung Browser";
    if (ua.includes("Opera") || ua.includes("OPR")) return "Opera";
    if (ua.includes("Edge")) return "Edge";
    if (ua.includes("Chrome")) return "Chrome";
    if (ua.includes("Safari")) return "Safari";
    return "Unknown";
  };

  const trackVisit = async () => {
    try {
      await fetch("/api/analytics/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "visit",
          sessionId: sessionId.current,
          data: {
            userAgent: navigator.userAgent,
            referrer: document.referrer || null,
            landingPage: window.location.pathname,
            deviceType: getDeviceType(),
            browser: getBrowser(),
          },
        }),
      });
    } catch (error) {
      console.error("Failed to track visit:", error);
    }
  };

  const trackPageView = async () => {
    try {
      await fetch("/api/analytics/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "pageview",
          sessionId: sessionId.current,
          data: {
            pageUrl: pathname,
            pageTitle: document.title,
          },
        }),
      });
    } catch (error) {
      console.error("Failed to track page view:", error);
    }
  };

  const trackPageTime = async () => {
    const timeOnPage = Math.round((Date.now() - pageStartTime.current) / 1000);
    if (timeOnPage < 1) return;

    try {
      // Use sendBeacon for reliability when page is unloading
      const data = JSON.stringify({
        type: "pagetime",
        sessionId: sessionId.current,
        data: {
          pageUrl: lastPath.current || pathname,
          timeOnPage,
        },
      });

      if (navigator.sendBeacon) {
        navigator.sendBeacon("/api/analytics/track", data);
      } else {
        await fetch("/api/analytics/track", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: data,
          keepalive: true,
        });
      }
    } catch (error) {
      console.error("Failed to track page time:", error);
    }
  };

  // This component doesn't render anything
  return null;
}
