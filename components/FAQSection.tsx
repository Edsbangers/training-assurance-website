import { FAQS } from '@/lib/faqs';

interface FAQSectionProps {
  // Show a subset (e.g. first N) — defaults to all.
  limit?: number;
  heading?: string;
  intro?: string;
}

// Visible FAQ rendered with native <details>/<summary> so the answers are in the
// static HTML (crawlable by Google and answer engines) without any client JS.
// Backed by the same lib/faqs.ts array used for the FAQPage JSON-LD.
export default function FAQSection({
  limit,
  heading = 'Frequently Asked Questions',
  intro = 'Common questions about ISO consultancy, audit support and certification.',
}: FAQSectionProps) {
  const faqs = typeof limit === 'number' ? FAQS.slice(0, limit) : FAQS;

  return (
    <section id="faq" className="py-24 relative" aria-label="Frequently asked questions">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-cyan-400 font-medium tracking-widest text-sm uppercase">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">{heading}</h2>
          <p className="text-slate-400">{intro}</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl bg-slate-800/40 border border-slate-700/50 overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-6 text-left font-semibold text-white hover:text-cyan-400 transition-colors">
                <span>{faq.question}</span>
                <svg
                  className="w-5 h-5 flex-shrink-0 text-cyan-400 transition-transform group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 -mt-1 text-slate-400 leading-relaxed">{faq.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
