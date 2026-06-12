import SchemaMarkup from '@/components/SchemaMarkup';

const BASE = 'https://www.trainingassuranceconsultancy.com';

export default function ISOConsultancySecurityLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaMarkup
        type="breadcrumb"
        data={{ items: [{ name: 'Home', url: BASE }, { name: 'ISO Consultancy for Security', url: `${BASE}/iso-consultancy-security` }] }}
      />
      <SchemaMarkup
        type="webpage"
        data={{
          pageType: 'WebPage',
          name: 'ISO Consultancy for Security Companies UK | ISO 27001 & 9001 | TAC',
          description: 'ISO consultancy for UK security companies — covering ISO 27001 (information security), ISO 9001 (quality) and ISO 14001 (environmental), led by an IRCA Registered Principal Auditor.',
          url: `${BASE}/iso-consultancy-security`,
        }}
      />
      <SchemaMarkup
        type="service"
        data={{
          name: 'ISO Consultancy for Security Companies',
          description: 'ISO consultancy for UK security providers — gap analysis, implementation, audit preparation and internal audits, certification readiness and ongoing management across ISO 27001, ISO 9001 and ISO 14001.',
          url: `${BASE}/iso-consultancy-security`,
          serviceType: 'ISO consultancy',
        }}
      />
      {children}
    </>
  );
}
