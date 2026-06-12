import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'ISO 27001 Consultant UK | Information Security Consultancy | TAC',
  description: 'ISO 27001 consultancy for UK businesses. We support gap analysis, ISMS implementation, risk assessment, Statement of Applicability, internal audits and certification readiness — led by an IRCA Registered Principal Auditor.',
  keywords: ['ISO 27001 consultant UK', 'ISO 27001 consultancy', 'information security consultancy', 'ISMS implementation', 'ISO 27001 gap analysis', 'Statement of Applicability', 'ISO 27001 certification', 'ISO 27001 risk assessment'],
};

const journey = [
  {
    step: '01',
    title: 'ISO 27001 Gap Analysis',
    description: 'We assess your current information security posture against ISO 27001:2022 and produce a clear, prioritised picture of what stands between you and certification.',
  },
  {
    step: '02',
    title: 'ISMS Scoping & Implementation',
    description: 'We define the scope of your information security management system and help you build the policies, processes and controls it needs — proportionate to your business.',
  },
  {
    step: '03',
    title: 'Risk Assessment Support',
    description: 'We help you establish a repeatable information security risk assessment and treatment methodology that your certification body will recognise and accept.',
  },
  {
    step: '04',
    title: 'Statement of Applicability',
    description: 'We support you in justifying the inclusion or exclusion of each Annex A control and producing a defensible Statement of Applicability (SoA).',
  },
  {
    step: '05',
    title: 'Internal Audit & Certification Readiness',
    description: 'Internal audits and a pre-certification review by an IRCA Registered Principal Auditor mean you walk into Stage 1 and Stage 2 with confidence.',
  },
  {
    step: '06',
    title: 'Ongoing ISMS Maintenance',
    description: 'Certification is the start, not the finish. We help you keep the ISMS living through surveillance audits, management reviews and continual improvement.',
  },
];

export default function ISO27001Page() {
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
              ISO 27001:2022
            </span>
            <span className="px-4 py-2 bg-slate-800/60 border border-slate-700/50 rounded-full text-xs font-medium text-cyan-400">
              IRCA Registered Principal Auditor
            </span>
            <span className="px-4 py-2 bg-slate-800/60 border border-slate-700/50 rounded-full text-xs font-medium text-cyan-400">
              500+ Audits Completed
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            ISO 27001 Consultancy for UK Businesses
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10">
            Practical, auditor-led ISO 27001 consultancy to build, certify and maintain an information
            security management system (ISMS). From gap analysis to certification readiness — and
            ongoing maintenance afterwards — led by an IRCA Registered Principal Auditor.
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

      {/* Why ISO 27001 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why ISO 27001?</h2>
          <p className="text-slate-400 text-lg mb-4">
            ISO 27001 is the international standard for information security management. Increasingly,
            it is the price of entry — customers, public-sector buyers and regulated partners expect
            certified suppliers to demonstrate that information is genuinely protected.
          </p>
          <p className="text-slate-400 text-lg">
            Done well, an ISMS is far more than a certificate on the wall. It gives you a structured,
            risk-based way to protect customer data, win tenders, and respond confidently to security
            questionnaires. Done badly, it is a paperwork exercise that fails at the first incident.
            Our job is to make sure yours is the former.
          </p>
        </div>
      </section>

      {/* Journey */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your ISO 27001 Journey</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A clear path from where you are now to a certified, maintainable ISMS.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {journey.map((j) => (
              <div key={j.step} className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-cyan-500/30 transition-all">
                <div className="text-2xl font-bold text-cyan-400 mb-3">{j.step}</div>
                <h3 className="text-lg font-bold mb-2">{j.title}</h3>
                <p className="text-slate-400 text-sm">{j.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing management / PICMS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Keeping Your ISMS Audit-Ready</h2>
            <p className="text-slate-400 mb-4">
              An ISMS generates a constant stream of evidence — risk assessments, corrective actions,
              audit findings, asset registers, supplier reviews and management reviews. Keeping all of
              that current is where many organisations slip between surveillance audits.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your ISO 27001 Project?</h2>
          <p className="text-slate-400 text-lg mb-8">
            Speak to an IRCA Registered Principal Auditor about your information security goals,
            timeline and certification target. We typically respond within 24 hours.
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
