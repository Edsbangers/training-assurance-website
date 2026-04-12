import { Metadata } from 'next';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Case Studies | Training Assurance Consultancy',
  description: 'Real results from real clients. Explore how we helped organisations achieve ISO certification, implement AI audits, and transform their compliance operations.',
  keywords: ['ISO case study', 'compliance success story', 'AI audit results', 'ISO 9001 certification', 'ISO 45001 implementation', 'SHEQ transformation'],
  openGraph: {
    title: 'Client Success Stories | Training Assurance Consultancy',
    description: 'Discover how UK businesses achieved compliance excellence with 100% certification success rate.',
    type: 'website',
    images: [
      {
        url: 'https://www.trainingassuranceconsultancy.com/api/og?title=Case%20Studies&category=Client%20Success%20Stories',
        width: 1200,
        height: 630,
        alt: 'Training Assurance Consultancy Case Studies',
      },
    ],
  },
};

const BASE = 'https://www.trainingassuranceconsultancy.com';

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaMarkup
        type="breadcrumb"
        data={{ items: [{ name: 'Home', url: BASE }, { name: 'Case Studies', url: `${BASE}/case-studies` }] }}
      />
      <SchemaMarkup
        type="webpage"
        data={{
          pageType: 'CollectionPage',
          name: 'Case Studies | Training Assurance Consultancy',
          description: 'Real results from real clients. Explore how we helped organisations achieve ISO certification and transform their compliance operations.',
          url: `${BASE}/case-studies`,
        }}
      />
      {children}
    </>
  );
}
