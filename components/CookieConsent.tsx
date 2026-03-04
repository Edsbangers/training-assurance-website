'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';

type ConsentState = 'accepted' | 'rejected' | null;

export default function CookieConsent() {
  const [consent, setConsent] = useState<ConsentState>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('cookie-consent') as ConsentState;
    if (stored === 'accepted' || stored === 'rejected') {
      setConsent(stored);
    } else {
      // Small delay so banner doesn't flash on first paint
      const timer = setTimeout(() => setShowBanner(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setConsent('accepted');
    setShowBanner(false);
  };

  const reject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setConsent('rejected');
    setShowBanner(false);
  };

  return (
    <>
      {/* Only load tracking scripts after explicit consent */}
      {consent === 'accepted' && (
        <>
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "vqnux09ufw");
            `}
          </Script>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-37HMVL7B35"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-37HMVL7B35');
            `}
          </Script>
        </>
      )}

      {/* Cookie banner */}
      {showBanner && (
        <div
          role="dialog"
          aria-label="Cookie consent"
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-700 bg-slate-900 px-4 py-5 shadow-2xl sm:px-6"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex-1">
              <p className="text-sm font-semibold text-white">
                We use cookies to improve your experience
              </p>
              <p className="mt-1 text-sm text-slate-400">
                We use analytics cookies (Google Analytics, Microsoft Clarity) to understand how
                visitors use our site. You can accept all cookies or use essential cookies only.
                See our{' '}
                <a
                  href="/privacy-policy"
                  className="underline hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>{' '}
                for details.
              </p>
            </div>
            <div className="flex shrink-0 gap-3">
              <button
                onClick={reject}
                className="rounded-lg border border-slate-600 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-slate-400 hover:text-white"
              >
                Essential only
              </button>
              <button
                onClick={accept}
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-500"
              >
                Accept all
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
