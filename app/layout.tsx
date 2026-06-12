import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import Analytics from "@/components/Analytics";
import SchemaMarkup from "@/components/SchemaMarkup";
import ClientOnlyWidgets from "@/components/ClientOnlyWidgets";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.trainingassuranceconsultancy.com"),
  title: "ISO Consultancy UK | IRCA Registered Principal Auditor | TAC",
  description: "ISO consultancy and audit support for UK businesses. TAC helps organisations implement, maintain and improve ISO 27001, ISO 9001, ISO 14001 and ISO 45001 management systems.",
  keywords: ["ISO consultancy", "ISO consultant UK", "IRCA Registered Principal Auditor", "ISO 27001 consultancy", "ISO 9001 consultancy", "ISO 14001 consultancy", "ISO 45001 consultancy", "ISO audit support", "ISO certification support", "ISO gap analysis", "internal audits", "ISO/IEC 42001", "AI management systems"],
  authors: [{ name: "Training Assurance Consultancy" }],
  creator: "Training Assurance Consultancy",
  publisher: "Training Assurance Consultancy",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.trainingassuranceconsultancy.com",
    siteName: "Training Assurance Consultancy",
    title: "ISO Consultancy UK | IRCA Registered Principal Auditor | TAC",
    description: "ISO consultancy and audit support for UK businesses, led by an IRCA Registered Principal Auditor. Support for ISO 27001, 9001, 14001, 45001 and ISO/IEC 42001.",
    images: [
      {
        url: "https://www.trainingassuranceconsultancy.com/api/og?title=ISO%20Consultancy%20UK&category=IRCA%20Registered%20Principal%20Auditor",
        width: 1200,
        height: 630,
        alt: "Training Assurance Consultancy - ISO Consultancy & Audit Support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ISO Consultancy UK | IRCA Registered Principal Auditor | TAC",
    description: "ISO consultancy and audit support for UK businesses, led by an IRCA Registered Principal Auditor.",
    images: ["https://www.trainingassuranceconsultancy.com/api/og?title=ISO%20Consultancy%20UK&category=IRCA%20Registered%20Principal%20Auditor"],
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
        <SchemaMarkup type="serviceList" />
        <SchemaMarkup
          type="webpage"
          data={{
            pageType: 'WebPage',
            name: 'ISO Consultancy UK | IRCA Registered Principal Auditor | TAC',
            description: 'ISO consultancy and audit support for UK businesses. TAC helps organisations implement, maintain and improve ISO 27001, ISO 9001, ISO 14001 and ISO 45001 management systems.',
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
        <ClientOnlyWidgets slot="tracker" />
        {children}
        <ClientOnlyWidgets slot="chat" />
        <ClientOnlyWidgets slot="consent" />
      </body>
    </html>
  );
}
