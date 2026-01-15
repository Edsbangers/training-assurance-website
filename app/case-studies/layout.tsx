import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies | Training Assurance Consultancy',
  description: 'Real results from real clients. Explore how we helped organisations achieve ISO certification, implement AI audits, and transform their compliance operations.',
  keywords: ['ISO case study', 'compliance success story', 'AI audit results', 'ISO 9001 certification', 'ISO 45001 implementation', 'SHEQ transformation'],
  openGraph: {
    title: 'Client Success Stories | Training Assurance Consultancy',
    description: 'Discover how UK businesses achieved compliance excellence with 100% certification success rate.',
    type: 'website',
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
