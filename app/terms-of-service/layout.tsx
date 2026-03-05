import { Metadata } from 'next';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Terms of Service | Training Assurance Consultancy',
  description: 'Terms and conditions for using Training Assurance Consultancy services, website, and PICMS platform.',
  robots: 'noindex, follow',
};

const BASE = 'https://www.trainingassuranceconsultancy.com';

export default function TermsOfServiceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaMarkup
        type="breadcrumb"
        data={{ items: [{ name: 'Home', url: BASE }, { name: 'Terms of Service', url: `${BASE}/terms-of-service` }] }}
      />
      {children}
    </>
  );
}
