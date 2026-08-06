import { Metadata } from 'next';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'About Us | Training Assurance Consultancy',
  description: 'Meet our IRCA Registered Principal Auditors with 25+ years of experience in ISO compliance, SHEQ management, and AI governance across the UK and Europe.',
  alternates: {
    canonical: '/about',
  },
  keywords: ['IRCA auditor', 'principal auditor', 'ISO consultant UK', 'SHEQ consultant', 'compliance expert', 'audit team'],
  openGraph: {
    title: 'About Training Assurance Consultancy',
    description: 'Meet our expert team of IRCA Registered Principal Auditors delivering ISO compliance and AI governance across the UK and Europe.',
    type: 'website',
    images: [
      {
        url: 'https://www.trainingassuranceconsultancy.com/api/og?title=About%20Us&category=Strategic%20SHEQ%20Lead%20Auditor%20Authority',
        width: 1200,
        height: 630,
        alt: 'About Training Assurance Consultancy',
      },
    ],
  },
};

const BASE = 'https://www.trainingassuranceconsultancy.com';

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaMarkup
        type="breadcrumb"
        data={{ items: [{ name: 'Home', url: BASE }, { name: 'About Us', url: `${BASE}/about` }] }}
      />
      <SchemaMarkup
        type="webpage"
        data={{
          pageType: 'AboutPage',
          name: 'About Us | Training Assurance Consultancy',
          description: 'Meet our IRCA Registered Principal Auditors with 25+ years of experience in ISO compliance, SHEQ management, and AI governance.',
          url: `${BASE}/about`,
        }}
      />
      {children}
    </>
  );
}
