import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Training Assurance Consultancy',
  description: 'Terms and conditions for using Training Assurance Consultancy services, website, and PICMS platform.',
  robots: 'noindex, follow',
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
