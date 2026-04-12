import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import dynamic from "next/dynamic";
import Analytics from "@/components/Analytics";
import SchemaMarkup from "@/components/SchemaMarkup";

const ChatWidget = dynamic(() => import("@/components/ChatWidget"), { ssr: false });
const VisitorTracker = dynamic(() => import("@/components/VisitorTracker"), { ssr: false });
const CookieConsent = dynamic(() => import("@/components/CookieConsent"), { ssr: false });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Training Assurance Consultancy | SHEQ Lead Auditor",
  description: "Strategic SHEQ Lead Auditor Authority specialising in AI Governance & ISO compliance across UK, Ireland, Netherlands, Norway and Italy.",
  keywords: ["Strategic SHEQ Lead Auditor", "AI Governance", "ISO 42001", "ISO compliance", "SHEQ consultancy", "ISO 9001", "ISO 14001", "ISO 45001", "ISO 27001", "UK compliance consultancy", "Lead Auditor", "IRCA auditor", "Construction Safety"],
  authors: [{ name: "Training Assurance Consultancy" }],
  creator: "Training Assurance Consultancy",
  publisher: "Training Assurance Consultancy",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.trainingassuranceconsultancy.com",
    siteName: "Training Assurance Consultancy",
    title: "Training Assurance Consultancy | SHEQ Lead Auditor",
    description: "Strategic SHEQ Lead Auditor Authority. Expert consultancy in AI Governance, Quality, Environmental, Health & Safety and Information Security.",
    images: [
      {
        url: "https://www.trainingassuranceconsultancy.com/api/og?title=Training%20Assurance%20Consultancy&category=Strategic%20SHEQ%20Lead%20Auditor%20Authority",
        width: 1200,
        height: 630,
        alt: "Training Assurance Consultancy - ISO Compliance & AI Governance Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Training Assurance Consultancy | SHEQ Lead Auditor",
    description: "Strategic SHEQ Lead Auditor Authority. Expert consultancy in AI Governance and ISO management systems across Europe.",
    images: ["https://www.trainingassuranceconsultancy.com/api/og?title=Training%20Assurance%20Consultancy&category=Strategic%20SHEQ%20Lead%20Auditor%20Authority"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <SchemaMarkup type="website" />
        <SchemaMarkup type="organization" />
        <SchemaMarkup type="localBusiness" />
        <SchemaMarkup type="person" />
        <SchemaMarkup type="professionalService" />
        <SchemaMarkup type="faqPage" />
        <SchemaMarkup
          type="webpage"
          data={{
            pageType: 'WebPage',
            name: 'Training Assurance Consultancy | Strategic SHEQ Lead Auditor Authority',
            description: 'Strategic SHEQ Lead Auditor Authority specialising in AI Governance & ISO compliance across UK, Ireland, Netherlands, Norway and Italy.',
            url: 'https://www.trainingassuranceconsultancy.com',
            speakable: ['h1', '#main-content p', '#services h2'],
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <VercelAnalytics />
        <SpeedInsights />
        <VisitorTracker />
        {children}
        <ChatWidget />
        <CookieConsent />
      </body>
    </html>
  );
}
