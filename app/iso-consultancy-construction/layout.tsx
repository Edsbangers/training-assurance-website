import SchemaMarkup from '@/components/SchemaMarkup';

const BASE = 'https://www.trainingassuranceconsultancy.com';

export default function ISOConstructionLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaMarkup
        type="breadcrumb"
        data={{ items: [{ name: 'Home', url: BASE }, { name: 'ISO Consultancy for Construction', url: `${BASE}/iso-consultancy-construction` }] }}
      />
      <SchemaMarkup
        type="webpage"
        data={{
          pageType: 'WebPage',
          name: 'ISO Consultancy for Construction UK | ISO 9001, 14001 & 45001 | TAC',
          description: 'ISO consultancy for UK construction firms covering ISO 9001, 14001 and 45001 — aligned with CDM 2015 duties, tenders and PQQs, led by an IRCA Registered Principal Auditor.',
          url: `${BASE}/iso-consultancy-construction`,
        }}
      />
      <SchemaMarkup
        type="service"
        data={{
          name: 'ISO Consultancy for Construction',
          description: 'ISO consultancy for UK construction firms — gap analysis, implementation, audit preparation, internal audits and certification readiness across ISO 9001, ISO 14001 and ISO 45001, aligned with CDM 2015 duties, tenders and PQQs.',
          url: `${BASE}/iso-consultancy-construction`,
          serviceType: 'ISO consultancy',
        }}
      />
      {children}
    </>
  );
}
