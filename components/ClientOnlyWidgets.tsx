'use client';

import dynamic from 'next/dynamic';

// Loaded client-side only — these widgets touch window/document and must not SSR.
// Wrapping in this client component is the Next.js 15+ pattern (ssr:false is no
// longer permitted in Server Components).
const ChatWidget = dynamic(() => import('./ChatWidget'), { ssr: false });
const VisitorTracker = dynamic(() => import('./VisitorTracker'), { ssr: false });
const CookieConsent = dynamic(() => import('./CookieConsent'), { ssr: false });

interface ClientOnlyWidgetsProps {
  slot: 'tracker' | 'chat' | 'consent';
}

export default function ClientOnlyWidgets({ slot }: ClientOnlyWidgetsProps) {
  if (slot === 'tracker') return <VisitorTracker />;
  if (slot === 'chat') return <ChatWidget />;
  if (slot === 'consent') return <CookieConsent />;
  return null;
}
