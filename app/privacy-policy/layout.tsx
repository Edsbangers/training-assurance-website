import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Training Assurance Consultancy',
  description: 'How Training Assurance Consultancy collects, uses, and protects your personal data in compliance with UK GDPR and data protection regulations.',
  robots: 'noindex, follow',
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
