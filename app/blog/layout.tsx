import SchemaMarkup from '@/components/SchemaMarkup';

const BASE = 'https://www.trainingassuranceconsultancy.com';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaMarkup
        type="breadcrumb"
        data={{ items: [{ name: 'Home', url: BASE }, { name: 'Insights', url: `${BASE}/blog` }] }}
      />
      <SchemaMarkup
        type="webpage"
        data={{
          pageType: 'Blog',
          name: 'Strategic Insights | Training Assurance Consultancy',
          description: 'Expert insights on ISO compliance, AI governance, SHEQ management, and industry best practices from our Lead Auditor team.',
          url: `${BASE}/blog`,
          speakable: ['h1', '.blog-intro'],
        }}
      />
      {children}
    </>
  );
}
