import SchemaMarkup from '@/components/SchemaMarkup';

const BASE = 'https://www.trainingassuranceconsultancy.com';

export default function PICMSLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaMarkup
        type="breadcrumb"
        data={{ items: [{ name: 'Home', url: BASE }, { name: 'PICMS Platform', url: `${BASE}/picms` }] }}
      />
      <SchemaMarkup
        type="webpage"
        data={{
          pageType: 'WebPage',
          name: 'PICMS Platform | ISO Compliance Management Reimagined',
          description: 'ISO compliance platform for UK businesses. AI-powered insights, real-time dashboards and 16+ audit templates for ISO 9001, 14001, 45001 & 27001.',
          url: `${BASE}/picms`,
        }}
      />
      <SchemaMarkup type="softwareApplication" />
      {children}
    </>
  );
}
