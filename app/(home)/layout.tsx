import type { Metadata } from 'next';

// The homepage is a client component, so its metadata lives here.
// Kept out of the root layout so other routes don't inherit canonical "/".
export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
