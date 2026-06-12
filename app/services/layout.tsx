import SchemaMarkup from '@/components/SchemaMarkup';

const BASE = 'https://www.trainingassuranceconsultancy.com';

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaMarkup
        type="breadcrumb"
        data={{ items: [{ name: 'Home', url: BASE }, { name: 'ISO Consultancy Services', url: `${BASE}/services` }] }}
      />
      <SchemaMarkup
        type="webpage"
        data={{
          pageType: 'CollectionPage',
          name: 'ISO Consultancy Services UK | TAC',
          description: 'ISO consultancy services for UK businesses — ISO 27001, ISO 9001, ISO 14001, ISO 45001, audit support, internal audits, gap analysis and ISO/IEC 42001 support.',
          url: `${BASE}/services`,
        }}
      />
      <SchemaMarkup type="serviceList" />
      {children}
    </>
  );
}
