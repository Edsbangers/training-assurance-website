import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Training Assurance Consultancy | AI Governance & ISO Compliance Experts",
  description: "Strategic SHEQ compliance and AI governance consultancy. Specialists in ISO/IEC 42001, ISO 9001, 14001, 45001, 27001. 20+ years experience, 500+ audits across Europe.",
  keywords: ["AI governance", "ISO compliance", "SHEQ consultancy", "ISO 42001", "AI auditing", "ISO 9001", "ISO 14001", "ISO 45001", "ISO 27001", "UK compliance consultancy"],
  authors: [{ name: "Training Assurance Consultancy" }],
  creator: "Training Assurance Consultancy",
  publisher: "Training Assurance Consultancy",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.trainingassurance.com",
    siteName: "Training Assurance Consultancy",
    title: "Training Assurance Consultancy | AI Governance & ISO Compliance Experts",
    description: "Strategic SHEQ compliance and AI governance consultancy. Specialists in ISO/IEC 42001 and traditional ISO standards. 20+ years experience across Europe.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Training Assurance Consultancy | AI Governance & ISO Compliance",
    description: "Strategic SHEQ compliance and AI governance consultancy. Specialists in ISO/IEC 42001 and traditional ISO standards.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
