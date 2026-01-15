import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources & Guides | Training Assurance Consultancy',
  description: 'Free ISO compliance guides, AI governance frameworks, and SHEQ best practices. Download templates, checklists, and expert insights for your certification journey.',
  keywords: ['ISO guide', 'compliance template', 'ISO 42001 guide', 'AI governance framework', 'SHEQ checklist', 'ISO certification guide'],
  openGraph: {
    title: 'Free ISO & Compliance Resources | Training Assurance Consultancy',
    description: 'Download free guides, templates, and frameworks for ISO compliance and AI governance.',
    type: 'website',
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
