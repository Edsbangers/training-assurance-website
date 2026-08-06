import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'How TAC Clients Use PICMS for Ongoing ISO Management',
  description: 'PICMS is the UK-built ISO compliance platform TAC recommends for ongoing compliance after consultancy. TAC implements your ISO management system; PICMS helps you maintain evidence, audits, actions and documentation. PICMS is a separate SaaS product at PICMS.com.',
  alternates: {
    canonical: '/picms',
  },
  keywords: ['PICMS', 'ongoing ISO management', 'ISO compliance platform', 'TAC PICMS', 'ISO evidence management', 'ISO consultancy software'],
};

export default function PICMSBridgePage() {
  const split = [
    {
      side: 'TAC',
      heading: 'TAC delivers the consultancy',
      colour: 'from-cyan-500 to-blue-600',
      points: [
        'Gap analysis against your target ISO standard',
        'Management system design and implementation',
        'Risk assessment and documentation support',
        'Internal audits and certification readiness',
        'Led by an IRCA Registered Principal Auditor',
      ],
    },
    {
      side: 'PICMS',
      heading: 'PICMS keeps it running',
      colour: 'from-emerald-500 to-cyan-500',
      points: [
        'Maintain evidence and documentation in one place',
        'Track audit findings, actions and CAPAs',
        'Keep registers and reviews current between audits',
        'Stay surveillance-audit ready year-round',
        'A separate SaaS platform — software, not consultancy',
      ],
    },
  ];

  const featureSummary = [
    'Document control & version history',
    'Audit management & findings',
    'Risk & hazard registers',
    'CAPA & incident tracking',
    'Training matrix & records',
    'Management review workflows',
    'Asset & legal registers',
    'Supports ISO 27001, 9001, 14001, 45001 & 42001',
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-[128px]" />
          <div className="absolute bottom-0 -right-32 w-96 h-96 bg-cyan-600/10 rounded-full blur-[128px]" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-emerald-500/10 border border-emerald-500/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 text-sm font-medium">Recommended Platform</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            PICMS: The ISO Platform TAC Recommends for Ongoing Compliance
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10">
            Training Assurance Consultancy helps you implement and improve your ISO management system.
            For the ongoing work — maintaining evidence, audits, actions and documentation —
            we recommend{' '}
            <a href="https://www.picms.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
              PICMS
            </a>, a separate UK-built ISO compliance platform designed by an IRCA Registered Principal Auditor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/20"
            >
              Book an ISO consultancy call with TAC
            </Link>
            <a
              href="https://www.picms.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-slate-700 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors"
            >
              Visit PICMS.com
            </a>
            <a
              href="https://calendly.com/jasonmisters/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20"
            >
              Book a PICMS demo
            </a>
          </div>
        </div>
      </section>

      {/* The split: consultancy vs platform */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Consultancy and Platform — Two Different Things</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              TAC is an independent ISO consultancy. PICMS is a software product. They work well together,
              but they are separate.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {split.map((col) => (
              <div key={col.side} className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50">
                <div className={`inline-flex items-center px-3 py-1 mb-4 rounded-full bg-gradient-to-r ${col.colour} text-white text-sm font-bold`}>
                  {col.side}
                </div>
                <h3 className="text-xl font-bold mb-4">{col.heading}</h3>
                <ul className="space-y-3">
                  {col.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-slate-300 text-sm">
                      <svg className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature summary (high-level only) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What PICMS Covers, in Brief</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A quick summary of how PICMS keeps your management system audit-ready. For the full feature
              set, pricing and demos, head to PICMS.com.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {featureSummary.map((f) => (
              <div key={f} className="flex items-start gap-2 p-4 bg-slate-800/30 rounded-lg border border-slate-800 text-sm text-slate-300">
                <svg className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {f}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="https://www.picms.com/iso-compliance-software-uk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cyan-400 hover:underline"
            >
              See the full PICMS platform overview on PICMS.com
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Where to go for what */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Where Should You Go?</h2>
            <div className="space-y-5 text-slate-300">
              <p>
                <strong className="text-white">Need ISO consultancy, audit support or certification help?</strong>{' '}
                That is what TAC does.{' '}
                <Link href="/#contact" className="text-cyan-400 hover:underline">Book a consultation</Link>{' '}
                or explore our{' '}
                <Link href="/services" className="text-cyan-400 hover:underline">ISO consultancy services</Link>.
              </p>
              <p>
                <strong className="text-white">Want software details, pricing or a demo?</strong>{' '}
                Those live on PICMS.com.{' '}
                <a href="https://www.picms.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">Visit PICMS.com</a>{' '}
                or compare options in the{' '}
                <a href="https://www.picms.com/best-iso-compliance-software-uk" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">ISO compliance software comparison</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start with the Consultancy</h2>
          <p className="text-slate-400 text-lg mb-8">
            Get your ISO management system implemented and certification-ready with an IRCA Registered
            Principal Auditor — then keep it running with PICMS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity">
              Book an ISO consultancy call with TAC
            </Link>
            <a href="https://www.picms.com/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-slate-700 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors">
              Visit PICMS.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
