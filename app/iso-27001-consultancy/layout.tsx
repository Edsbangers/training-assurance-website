import SchemaMarkup from '@/components/SchemaMarkup';

const BASE = 'https://www.trainingassuranceconsultancy.com';

export default function ISO27001Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaMarkup
        type="breadcrumb"
        data={{ items: [{ name: 'Home', url: BASE }, { name: 'ISO 27001 Consultancy', url: `${BASE}/iso-27001-consultancy` }] }}
      />
      <SchemaMarkup
        type="webpage"
        data={{
          pageType: 'WebPage',
          name: 'ISO 27001 Consultant UK | Information Security Consultancy | TAC',
          description: 'ISO 27001 consultancy for UK businesses — gap analysis, ISMS implementation, risk assessment, Statement of Applicability, internal audits and certification readiness.',
          url: `${BASE}/iso-27001-consultancy`,
        }}
      />
      <SchemaMarkup
        type="service"
        data={{
          name: 'ISO 27001 Consultancy',
          description: 'Information security management system (ISMS) consultancy — gap analysis, implementation, risk assessment, Statement of Applicability, internal audit preparation, certification readiness and ongoing ISMS maintenance.',
          url: `${BASE}/iso-27001-consultancy`,
          serviceType: 'ISO 27001 consultancy',
        }}
      />
      {children}
    </>
  );
}
