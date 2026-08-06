import { Metadata } from 'next';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Privacy Policy | Training Assurance Consultancy',
  description: 'How Training Assurance Consultancy collects, uses, and protects your personal data in compliance with UK GDPR and data protection regulations.',
  alternates: {
    canonical: '/privacy-policy',
  },
  robots: 'noindex, follow',
};

const BASE = 'https://www.trainingassuranceconsultancy.com';

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaMarkup
        type="breadcrumb"
        data={{ items: [{ name: 'Home', url: BASE }, { name: 'Privacy Policy', url: `${BASE}/privacy-policy` }] }}
      />
      {children}
    </>
  );
}
