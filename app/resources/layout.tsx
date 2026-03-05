import { Metadata } from 'next';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Resources & Guides | Training Assurance Consultancy',
  description: 'Free ISO compliance guides, AI governance frameworks and SHEQ best practices. Download templates, checklists and expert insights for your certification journey.',
  keywords: ['ISO guide', 'compliance template', 'ISO 42001 guide', 'AI governance framework', 'SHEQ checklist', 'ISO certification guide'],
  openGraph: {
    title: 'Free ISO & Compliance Resources | Training Assurance Consultancy',
    description: 'Download free guides, templates, and frameworks for ISO compliance and AI governance.',
    type: 'website',
  },
};

const BASE = 'https://www.trainingassuranceconsultancy.com';

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaMarkup
        type="breadcrumb"
        data={{ items: [{ name: 'Home', url: BASE }, { name: 'Resources', url: `${BASE}/resources` }] }}
      />
      <SchemaMarkup
        type="webpage"
        data={{
          pageType: 'CollectionPage',
          name: 'Resources & Guides | Training Assurance Consultancy',
          description: 'Free ISO compliance guides, AI governance frameworks and SHEQ best practices.',
          url: `${BASE}/resources`,
        }}
      />
      {children}
    </>
  );
}
