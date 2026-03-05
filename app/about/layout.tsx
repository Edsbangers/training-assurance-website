import { Metadata } from 'next';
import SchemaMarkup from '@/components/SchemaMarkup';

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
