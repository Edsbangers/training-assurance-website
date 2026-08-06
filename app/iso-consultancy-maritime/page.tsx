import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'ISO Consultancy for Maritime & Marine UK | ISO 9001, 14001, 45001 | TAC',
  description: 'ISO consultancy for UK maritime, marine services and commercial diving operations — covering ISO 9001, 14001, 45001 and ISO 27001, led by an IRCA Registered Principal Auditor.',
  alternates: {
    canonical: '/iso-consultancy-maritime',
  },
  keywords: ['ISO consultancy maritime', 'marine ISO 9001', 'commercial diving ISO 45001', 'ISO 14001 maritime', 'maritime ISO consultant UK', 'marine services ISO', 'ISO 45001 diving operations', 'maritime ISO certification'],
};

const standards = [
  {
    step: 'ISO 9001',
    title: 'Quality Management',
    description: 'For maritime and marine-services operators, ISO 9001 brings consistency to vessel operations, shoreside services and project delivery — giving charterers, ports and clients confidence in how you work.',
  },
  {
    step: 'ISO 14001',
    title: 'Environmental Management',
    description: 'Marine pollution is one of the sector’s most scrutinised risks. ISO 14001 helps you manage environmental aspects, discharges and waste in a way that sits comfortably alongside MARPOL obligations.',
  },
  {
    step: 'ISO 45001',
    title: 'Health & Safety',
    description: 'Marine and diving operations are inherently high-hazard. ISO 45001 gives you a structured occupational health and safety management system to control those risks and protect your people.',
  },
  {
    step: 'ISO 27001',
    title: 'Information Security',
    description: 'From crew data to vessel-tracking and operational systems, maritime businesses hold information worth protecting. ISO 27001 establishes a risk-based information security management system (ISMS).',
  },
];

const support = [
  {
    step: '01',
    title: 'Gap Analysis',
    description: 'We assess your current arrangements against the relevant standards and produce a clear, prioritised picture of what stands between you and certification.',
  },
  {
    step: '02',
    title: 'Implementation',
    description: 'We help you build the policies, processes and controls each management system needs — proportionate to your operations, vessels and shoreside teams.',
  },
  {
    step: '03',
    title: 'Audit Preparation & Internal Audits',
    description: 'We run internal audits and prepare you for external assessment, so findings are caught and resolved before your certification body ever sees them.',
  },
  {
    step: '04',
    title: 'Certification Readiness',
    description: 'A pre-certification review by an IRCA Registered Principal Auditor means you walk into Stage 1 and Stage 2 assessments with confidence.',
  },
  {
    step: '05',
    title: 'Ongoing Management',
    description: 'Certification is the start, not the finish. We help you keep each system living through surveillance audits, management reviews and continual improvement.',
  },
];

export default function MaritimePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/15 rounded-full blur-[128px]" />
          <div className="absolute bottom-0 -right-32 w-96 h-96 bg-blue-600/15 rounded-full blur-[128px]" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <span className="px-4 py-2 bg-slate-800/60 border border-slate-700/50 rounded-full text-xs font-medium text-cyan-400">
              IRCA Registered Principal Auditor
            </span>
            <span className="px-4 py-2 bg-slate-800/60 border border-slate-700/50 rounded-full text-xs font-medium text-cyan-400">
              500+ Audits Completed
            </span>
            <span className="px-4 py-2 bg-slate-800/60 border border-slate-700/50 rounded-full text-xs font-medium text-cyan-400">
              Maritime, Marine & Commercial Diving
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            ISO Consultancy for Maritime &amp; Marine Operations
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10">
            Practical, auditor-led ISO consultancy for UK maritime businesses, marine-services
            providers and commercial diving operations. From gap analysis to certification readiness
            across ISO 9001, 14001, 45001 and ISO 27001 — led by an IRCA Registered Principal Auditor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all"
            >
              Book a consultation
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-700 rounded-xl font-medium hover:bg-slate-800 transition-colors"
            >
              All ISO consultancy services
            </Link>
          </div>
        </div>
      </section>

      {/* Which standards matter most in maritime */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Which standards matter most in maritime</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Most maritime and marine operators benefit from an integrated approach across quality,
              environment, safety and information security.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {standards.map((s) => (
              <div key={s.step} className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-cyan-500/30 transition-all">
                <div className="text-2xl font-bold text-cyan-400 mb-3">{s.step}</div>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="max-w-4xl mx-auto mt-10">
            <p className="text-slate-400">
              For commercial diving operations, we structure safety management so it sits comfortably
              alongside the Diving at Work Regulations 1997 and the relevant IMCA reference areas. TAC
              is independent of IMCA — we frame our support as aligned with IMCA reference areas rather
              than claiming any IMCA membership or certification.
            </p>
          </div>
        </div>
      </section>

      {/* How we support you */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How we support you</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A clear path from where you are now to certified, maintainable management systems.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {support.map((s) => (
              <div key={s.step} className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-cyan-500/30 transition-all">
                <div className="text-2xl font-bold text-cyan-400 mb-3">{s.step}</div>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing management / PICMS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Keeping Your Evidence Audit-Ready</h2>
            <p className="text-slate-400 mb-4">
              Maritime management systems generate a constant stream of evidence — risk assessments,
              corrective actions, audit findings, dive project records, environmental aspects and
              management reviews. Keeping all of that current is where many operators slip between
              surveillance audits.
            </p>
            <p className="text-slate-400 mb-6">
              After implementation, many of our clients use{' '}
              <a href="https://www.picms.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
                PICMS
              </a>{' '}
              to maintain that evidence, track audit actions and stay continually compliant. PICMS is a
              separate UK-built ISO compliance platform, designed by an IRCA Registered Principal Auditor —
              it is the software, while TAC provides the consultancy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#contact" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold hover:opacity-90 transition-opacity">
                Book a consultation
              </Link>
              <Link href="/picms" className="px-6 py-3 border border-slate-700 rounded-xl font-medium hover:bg-slate-800 transition-colors">
                How TAC clients use PICMS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Maritime ISO Project?</h2>
          <p className="text-slate-400 text-lg mb-8">
            Speak to an IRCA Registered Principal Auditor about your maritime, marine or commercial
            diving operations, timeline and certification target. We typically respond within 24 hours.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            Book a consultation
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
