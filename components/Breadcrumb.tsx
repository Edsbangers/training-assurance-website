import Link from 'next/link';
import SchemaMarkup from '@/components/SchemaMarkup';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]; // Do not include Home — it's added automatically
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const allItems = [
    { name: 'Home', url: 'https://www.trainingassuranceconsultancy.com' },
    ...items,
  ];

  return (
    <>
      <SchemaMarkup type="breadcrumb" data={{ items: allItems }} />
      <nav aria-label="Breadcrumb" className="px-4 py-2 sm:px-6 lg:px-8">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-400">
          <li>
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
          </li>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.url} className="flex items-center gap-1.5">
                <span aria-hidden="true">/</span>
                {isLast ? (
                  <span className="text-slate-300" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.url} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
