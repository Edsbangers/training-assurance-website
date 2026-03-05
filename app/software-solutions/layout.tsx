import SchemaMarkup from '@/components/SchemaMarkup';

const BASE = 'https://www.trainingassuranceconsultancy.com';

export default function SoftwareSolutionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaMarkup
        type="breadcrumb"
        data={{ items: [{ name: 'Home', url: BASE }, { name: 'Software Solutions', url: `${BASE}/software-solutions` }] }}
      />
      <SchemaMarkup
        type="webpage"
        data={{
          pageType: 'WebPage',
          name: 'Bespoke Software Solutions | Training Assurance Consultancy',
          description: 'Custom SaaS and software solutions tailored to your business. Streamline operations, boost productivity and achieve compliance with bespoke development.',
          url: `${BASE}/software-solutions`,
        }}
      />
      {children}
    </>
  );
}
