import SchemaMarkup from '@/components/SchemaMarkup';

const BASE = 'https://www.trainingassuranceconsultancy.com';

export default function PICMSLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaMarkup
        type="breadcrumb"
        data={{ items: [{ name: 'Home', url: BASE }, { name: 'PICMS for Ongoing ISO Management', url: `${BASE}/picms` }] }}
      />
      <SchemaMarkup
        type="webpage"
        data={{
          pageType: 'WebPage',
          name: 'How TAC Clients Use PICMS for Ongoing ISO Management',
          description: 'PICMS is the UK-built ISO compliance platform TAC recommends for ongoing compliance after consultancy. TAC implements your ISO management system; PICMS helps you maintain evidence, audits, actions and documentation. PICMS is a separate SaaS product at PICMS.com.',
          url: `${BASE}/picms`,
          mainEntity: {
            '@type': 'SoftwareApplication',
            name: 'PICMS',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web',
            url: 'https://www.picms.com/',
          },
        }}
      />
      {children}
    </>
  );
}
