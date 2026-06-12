import SchemaMarkup from '@/components/SchemaMarkup';

const BASE = 'https://www.trainingassuranceconsultancy.com';

export default function SoftwareSolutionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaMarkup
        type="breadcrumb"
        data={{ items: [{ name: 'Home', url: BASE }, { name: 'ISO Compliance Technology', url: `${BASE}/software-solutions` }] }}
      />
      <SchemaMarkup
        type="webpage"
        data={{
          pageType: 'WebPage',
          name: 'ISO Compliance Technology and PICMS Support | TAC',
          description: 'TAC is an ISO consultancy first. We recommend PICMS for ongoing ISO management and selectively support compliance-focused technology. Not a general software development agency.',
          url: `${BASE}/software-solutions`,
        }}
      />
      {children}
    </>
  );
}
