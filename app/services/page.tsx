import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'ISO Consultancy Services UK | TAC',
  description: 'ISO consultancy services for UK businesses — ISO 27001, ISO 9001, ISO 14001 and ISO 45001 implementation, audit support, internal audits, gap analysis and ISO/IEC 42001 support. Led by an IRCA Registered Principal Auditor.',
  keywords: ['ISO consultancy services', 'ISO consultant UK', 'ISO 27001 consultancy', 'ISO 9001 consultancy', 'ISO 14001 consultancy', 'ISO 45001 consultancy', 'ISO audit support', 'ISO internal audits', 'ISO gap analysis', 'ISO/IEC 42001'],
};

const standards = [
  {
    id: 'iso-27001',
    code: 'ISO 27001',
    title: 'ISO 27001 Consultancy',
    subtitle: 'Information Security (ISMS)',
    description: 'Our lead standard. Build, certify and maintain an information security management system that satisfies your customers, regulators and certification body.',
    points: ['Gap analysis & ISMS scoping', 'Risk assessment & treatment', 'Statement of Applicability', 'Internal audit & certification readiness'],
    href: '/iso-27001-consultancy',
    lead: true,
  },
  {
    id: 'iso-9001',
    code: 'ISO 9001',
    title: 'ISO 9001 Consultancy',
    subtitle: 'Quality Management',
    description: 'Implement and maintain a quality management system that drives consistency, customer satisfaction and continuous improvement.',
    points: ['QMS documentation', 'Process mapping', 'Management review', 'Certification support'],
    href: '/#contact',
  },
  {
    id: 'iso-14001',
    code: 'ISO 14001',
    title: 'ISO 14001 Consultancy',
    subtitle: 'Environmental Management',
    description: 'Reduce environmental impact and demonstrate compliance with a robust environmental management system.',
    points: ['Aspects & impacts', 'Legal compliance register', 'Objectives & targets', 'Certification support'],
    href: '/#contact',
  },
  {
    id: 'iso-45001',
    code: 'ISO 45001',
    title: 'ISO 45001 Consultancy',
    subtitle: 'Health & Safety',
    description: 'Protect your workforce and reduce risk with an occupational health and safety management system.',
    points: ['Hazard identification', 'Risk assessment', 'Worker consultation', 'Certification support'],
    href: '/#contact',
  },
];

const supportServices = [
  {
    title: 'ISO Audit Preparation & Internal Audits',
    description: 'Internal audit programmes, pre-certification mock audits and certification body liaison — delivered by an IRCA Registered Principal Auditor who knows exactly what assessors look for.',
  },
  {
    title: 'ISO Gap Analysis',
    description: 'An independent assessment of your current position against the requirements of your target ISO standard, with a clear, prioritised roadmap to certification.',
  },
  {
    title: 'ISO Management System Implementation',
    description: 'End-to-end support to design, document and embed your management system — practical and proportionate, not a binder that gathers dust.',
  },
  {
    title: 'ISO Certification Support',
    description: 'Hands-on support through Stage 1 and Stage 2 certification audits, including non-conformity and corrective action management.',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px]" />
          <div className="absolute bottom-0 -right-32 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px]" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <span className="px-4 py-2 bg-slate-800/60 border border-slate-700/50 rounded-full text-xs font-medium text-cyan-400">
              IRCA Registered Principal Auditor
            </span>
            <span className="px-4 py-2 bg-slate-800/60 border border-slate-700/50 rounded-full text-xs font-medium text-cyan-400">
              500+ Audits Completed
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            ISO Consultancy Services for UK Businesses
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10">
            Practical ISO consultancy, audit support and certification support — led by an IRCA
            Registered Principal Auditor. We help you implement, maintain and improve ISO 27001,
            ISO 9001, ISO 14001, ISO 45001 and ISO/IEC 42001 management systems.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all"
          >
            Book a consultation
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Standards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ISO Standards We Support</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              ISO 27001 is our lead standard, but we deliver fully integrated management systems across
              the core ISO standards.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {standards.map((s) => (
              <div
                key={s.id}
                className={`p-8 rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border transition-all hover:-translate-y-1 ${
                  s.lead ? 'border-cyan-500/50' : 'border-slate-700/50 hover:border-cyan-500/30'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-400 text-sm font-bold">{s.code}</span>
                  {s.lead && <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-medium">Lead standard</span>}
                </div>
                <h3 className="text-xl font-bold mb-1">{s.title}</h3>
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">{s.subtitle}</p>
                <p className="text-slate-400 text-sm mb-4">{s.description}</p>
                <ul className="space-y-2 mb-5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-slate-300">
                      <svg className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
                <Link href={s.href} className="inline-flex items-center gap-2 text-sm text-cyan-500 hover:text-cyan-400">
                  {s.href.startsWith('/iso') ? 'Learn about ISO 27001 consultancy' : `Discuss ${s.code} consultancy`}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Audit Support & Certification Services</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Whether you are starting from scratch or maintaining an established system, we meet you
              where you are.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {supportServices.map((svc) => (
              <div key={svc.title} className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50">
                <h3 className="text-lg font-bold mb-2">{svc.title}</h3>
                <p className="text-slate-400 text-sm">{svc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialist 42001 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/30">
            <span className="text-purple-300 text-xs font-medium uppercase tracking-wider">Specialist Service</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4">ISO/IEC 42001 AI Management Systems</h2>
            <p className="text-slate-300 mb-6">
              As AI becomes embedded in day-to-day operations, ISO/IEC 42001 gives you a framework to
              govern it responsibly. We help you assess AI governance risks, prepare for ISO/IEC 42001,
              and align AI management with your wider ISO compliance — as a specialist service under our
              ISO consultancy umbrella.
            </p>
            <Link href="/#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 border border-slate-700 rounded-xl font-medium hover:border-purple-500/50 transition-all">
              Book a consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sector-Specific ISO Consultancy</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We support priority sectors with the standards that matter most to them.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { href: '/iso-consultancy-construction', emoji: '🏗️', title: 'Construction', desc: 'ISO 9001, 14001 & 45001 for CDM-led contractors.' },
              { href: '/iso-consultancy-security', emoji: '🛡️', title: 'Security', desc: 'ISO 27001 & 9001 for security and cyber providers.' },
              { href: '/iso-consultancy-maritime', emoji: '⚓', title: 'Maritime', desc: 'ISO 9001, 14001, 45001 & 27001 for marine operations.' },
            ].map((sec) => (
              <Link key={sec.href} href={sec.href} className="group p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-cyan-500/40 transition-all">
                <div className="text-3xl mb-3">{sec.emoji}</div>
                <h3 className="text-lg font-bold mb-1">{sec.title}</h3>
                <p className="text-slate-400 text-sm">{sec.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing management / PICMS bridge */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ongoing ISO Management After Consultancy</h2>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            Once your management system is implemented, many clients keep it audit-ready with{' '}
            <a href="https://www.picms.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
              PICMS
            </a>{' '}— a separate UK-built ISO compliance platform, designed by an IRCA Registered Principal Auditor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold hover:opacity-90 transition-opacity">
              Book a consultation
            </Link>
            <Link href="/picms" className="px-8 py-4 border border-slate-700 rounded-xl font-medium hover:bg-slate-800 transition-colors">
              How TAC clients use PICMS
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
