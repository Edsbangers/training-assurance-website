import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Training Assurance Consultancy',
  description: 'Meet our IRCA Registered Principal Auditors with 25+ years of experience in ISO compliance, SHEQ management, and AI governance across the UK and Europe.',
  keywords: ['IRCA auditor', 'principal auditor', 'ISO consultant UK', 'SHEQ consultant', 'compliance expert', 'audit team'],
  openGraph: {
    title: 'About Training Assurance Consultancy',
    description: 'Meet our expert team of IRCA Registered Principal Auditors delivering ISO compliance and AI governance across the UK and Europe.',
    type: 'website',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
