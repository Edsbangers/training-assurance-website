import SchemaMarkup from '@/components/SchemaMarkup';

const BASE = 'https://www.trainingassuranceconsultancy.com';

export default function MaritimeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaMarkup
        type="breadcrumb"
        data={{ items: [{ name: 'Home', url: BASE }, { name: 'ISO Consultancy for Maritime', url: `${BASE}/iso-consultancy-maritime` }] }}
      />
      <SchemaMarkup
        type="webpage"
        data={{
          pageType: 'WebPage',
          name: 'ISO Consultancy for Maritime & Marine UK | ISO 9001, 14001, 45001 | TAC',
          description: 'ISO consultancy for UK maritime, marine services and commercial diving operations — covering ISO 9001, 14001, 45001 and ISO 27001, led by an IRCA Registered Principal Auditor.',
          url: `${BASE}/iso-consultancy-maritime`,
        }}
      />
      <SchemaMarkup
        type="service"
        data={{
          name: 'ISO Consultancy for Maritime & Marine Operations',
          description: 'ISO consultancy for UK maritime, marine services and commercial diving operations — gap analysis, implementation, audit preparation, internal audits, certification readiness and ongoing management across ISO 9001, 14001, 45001 and ISO 27001.',
          url: `${BASE}/iso-consultancy-maritime`,
          serviceType: 'ISO consultancy',
        }}
      />
      {children}
    </>
  );
}
