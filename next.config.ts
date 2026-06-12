import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // Permanent (308) canonical-host redirect: non-www → www.
        // Vercel performs a platform-level redirect too; this is belt-and-braces
        // so the apex/non-www host always consolidates to the www canonical that
        // every canonical tag, sitemap entry and schema URL points at.
        source: "/:path*",
        has: [{ type: "host", value: "trainingassuranceconsultancy.com" }],
        destination: "https://www.trainingassuranceconsultancy.com/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        // Security headers for all routes
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        // Cache public pages
        source: "/((?!api|admin|_next/static|_next/image|favicon.ico).*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
