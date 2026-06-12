import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'ISO Consultancy for Construction UK | ISO 9001, 14001 & 45001 | TAC',
  description: 'ISO consultancy for UK construction firms covering ISO 9001 (quality), ISO 14001 (environmental) and ISO 45001 (health & safety) — aligned with CDM 2015 duties, tenders and PQQs, led by an IRCA Registered Principal Auditor.',
  keywords: ['ISO consultancy construction', 'ISO 45001 construction', 'ISO 9001 construction', 'ISO 14001 construction', 'CDM 2015 consultancy', 'contractor ISO certification', 'construction health and safety consultancy', 'CHAS SafeContractor Constructionline ISO'],
};

const standards = [
  {
    code: 'ISO 45001',
    title: 'Occupational Health & Safety',
    description: 'The most prominent standard for construction. ISO 45001 gives you a structured, risk-based way to manage health and safety across sites, demonstrate worker consultation, and evidence the safe systems of work that clients and principal contractors increasingly demand.',
  },
  {
    code: 'ISO 9001',
    title: 'Quality Management',
    description: 'ISO 9001 underpins consistent delivery — controlling design, procurement, subcontractors and snagging. For construction firms it is often the baseline tenders ask for, and the framework that keeps quality defects and rework under control.',
  },
  {
    code: 'ISO 14001',
    title: 'Environmental Management',
    description: 'ISO 14001 helps you manage waste, emissions, spill control and site environmental aspects, and respond to the environmental clauses that show up in modern construction tenders and client sustainability requirements.',
  },
];

const journey = [
  {
    step: '01',
    title: 'Gap Analysis',
    description: 'We assess your current management system against ISO 9001, 14001 and 45001 and produce a clear, prioritised picture of what stands between your construction business and certification.',
  },
  {
    step: '02',
    title: 'Implementation',
    description: 'We help you build the policies, processes and site controls your system needs — proportionate to the way your projects, sites and subcontractors actually work, not generic templates.',
  },
  {
    step: '03',
    title: 'Audit Preparation & Internal Audits',
    description: 'We carry out internal audits and prepare your teams and site documentation so there are no surprises when your certification body arrives on site or in the office.',
  },
  {
    step: '04',
    title: 'Certification Readiness',
    description: 'A pre-certification review by an IRCA Registered Principal Auditor means you walk into Stage 1 and Stage 2 assessments with confidence across all three standards.',
  },
  {
    step: '05',
    title: 'Ongoing Management',
    description: 'Certification is the start, not the finish. We help you keep the system living through surveillance audits, management reviews, CDM record-keeping and continual improvement.',
  },
];

export default function ISOConstructionPage() {
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
              ISO 9001 · 14001 · 45001
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            ISO Consultancy for the Construction Industry
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10">
            Practical, auditor-led ISO consultancy for UK construction firms. We help you build,
            certify and maintain quality, environmental and health &amp; safety management systems
            (ISO 9001, 14001 and 45001) — aligned with your CDM 2015 duties and the tenders and PQQs
            you need to win, led by an IRCA Registered Principal Auditor.
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

      {/* Which standards matter most in construction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Which Standards Matter Most in Construction
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto">
              Most construction firms work towards a combination of three standards. Health &amp; safety
              is usually the priority, with quality and environmental close behind — and all three
              support the same commercial goal of winning and keeping work.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {standards.map((s) => (
              <div key={s.code} className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-cyan-500/30 transition-all">
                <div className="text-2xl font-bold text-cyan-400 mb-2">{s.code}</div>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-slate-400 text-lg mb-4">
              These standards do not sit in isolation. A well-built management system supports your
              duties under the Construction (Design and Management) Regulations 2015 (CDM 2015) —
              giving you the documented procedures, risk controls and records that demonstrate
              competence as a duty holder.
            </p>
            <p className="text-slate-400 text-lg">
              They also map closely onto the pre-qualification questionnaires (PQQs) and accreditations
              that clients ask for. We help you align your management system with the requirements behind
              schemes such as CHAS, SafeContractor and Constructionline, so the evidence is already in
              place when you complete an assessment. TAC does not issue these accreditations — we help you
              prepare for them.
            </p>
          </div>
        </div>
      </section>

      {/* How we support you */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Support You</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A clear path from where you are now to a certified, maintainable management system.
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Keeping Your System Audit-Ready</h2>
            <p className="text-slate-400 mb-4">
              A construction management system generates a constant stream of evidence — risk
              assessments and method statements, site inspections, corrective actions, audit findings,
              plant and competence records, and management reviews. Keeping all of that current across
              multiple sites is where many contractors slip between surveillance audits.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your ISO Project?</h2>
          <p className="text-slate-400 text-lg mb-8">
            Speak to an IRCA Registered Principal Auditor about your construction business, your
            certification targets and the tenders you want to win. We typically respond within 24 hours.
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
