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
          name: 'PICMS Platform | The UK Compliance Platform Built by an IRCA Auditor',
          description: 'The only UK compliance platform designed by an IRCA Registered Principal Auditor. 14 ISO standards, 37 modules, 3 industry packs and agentic AI (Master Agent, Smart Fill, Guardian AI v2, Golden Thread, Neural Link). Quantum-ready · NIST FIPS 203/204. Industry starter packs from £69/month.',
          url: `${BASE}/picms`,
        }}
      />
      <SchemaMarkup type="softwareApplication" />
      {children}
    </>
  );
}
