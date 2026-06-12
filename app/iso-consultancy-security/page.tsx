import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'ISO Consultancy for Security Companies UK | ISO 27001 & 9001 | TAC',
  description: 'ISO consultancy for UK security companies — covering ISO 27001 (information security), ISO 9001 (quality) and ISO 14001 (environmental), led by an IRCA Registered Principal Auditor.',
  alternates: {
    canonical: '/iso-consultancy-security',
  },
  keywords: ['ISO consultancy security', 'ISO 27001 security companies', 'ISO 9001 security', 'ISO consultancy manned guarding', 'ISO 14001 security', 'ACS SIA management system', 'BS 7499', 'BS 7858', 'cyber security ISO consultancy', 'security company ISO certification'],
};

const journey = [
  {
    step: '01',
    title: 'Gap Analysis',
    description: 'We assess your current management system against the relevant standards and produce a clear, prioritised picture of where you stand and what is needed to close the gaps.',
  },
  {
    step: '02',
    title: 'Implementation',
    description: 'We help you build the policies, processes and controls your management system needs — proportionate to the way a security business actually operates across guarding, monitoring and mobile operations.',
  },
  {
    step: '03',
    title: 'Audit Preparation & Internal Audits',
    description: 'We run internal audits and prepare you for external assessment, so issues are found and fixed before a certification body or ACS assessor ever sees them.',
  },
  {
    step: '04',
    title: 'Certification Readiness',
    description: 'A pre-certification review by an IRCA Registered Principal Auditor means you walk into Stage 1 and Stage 2 assessments knowing your evidence will stand up to scrutiny.',
  },
  {
    step: '05',
    title: 'Ongoing Management',
    description: 'Certification is the start, not the finish. We help you keep the system living through surveillance audits, management reviews and continual improvement.',
  },
];

export default function ISOConsultancySecurityPage() {
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
              Security Sector Experience
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            ISO Consultancy for Security Companies
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10">
            Practical, auditor-led ISO consultancy for UK security providers — manned guarding,
            cyber security and physical and electronic security firms. From information security to
            quality and environmental management, we help you build, certify and maintain systems
            that win contracts and stand up to scrutiny — led by an IRCA Registered Principal Auditor.
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

      {/* Which standards matter most */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Which Standards Matter Most in Security</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Security providers handle sensitive client data, site access and personnel vetting.
              These are the standards that buyers and assessors look for most.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-cyan-500/30 transition-all md:col-span-3">
              <h3 className="text-xl font-bold mb-2">ISO 27001 — Information Security</h3>
              <p className="text-slate-400 mb-3">
                For security companies, information security is front and centre. You hold client site
                plans, access codes, CCTV footage, alarm response data and personnel records — exactly
                the kind of information that a breach would expose. ISO 27001 is increasingly the price
                of entry for tenders, framework agreements and regulated clients who expect proof that
                this information is genuinely protected.
              </p>
              <p className="text-slate-400">
                Our{' '}
                <Link href="/iso-27001-consultancy" className="text-cyan-400 hover:underline">
                  ISO 27001 consultancy
                </Link>{' '}
                helps security firms build an information security management system (ISMS) that is
                proportionate, defensible and certifiable.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-cyan-500/30 transition-all">
              <h3 className="text-lg font-bold mb-2">ISO 9001 — Quality</h3>
              <p className="text-slate-400 text-sm">
                Consistent, repeatable service delivery is what keeps guarding contracts and monitoring
                SLAs intact. ISO 9001 gives you the quality framework behind that consistency. We help
                align your management system with ISO 9001 and with the service-delivery expectations
                of SIA ACS and standards such as BS 7499 (static guarding) and BS 7858 (screening).
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-cyan-500/30 transition-all">
              <h3 className="text-lg font-bold mb-2">ISO 14001 — Environmental</h3>
              <p className="text-slate-400 text-sm">
                Mobile patrols, vehicle fleets and multi-site operations all carry an environmental
                footprint that larger clients increasingly ask about in their procurement. ISO 14001
                gives you a structured way to manage and reduce that impact and to answer environmental
                questions in tenders with evidence rather than assertion.
              </p>
            </div>
          </div>
          <p className="text-slate-500 text-sm max-w-3xl mx-auto text-center mt-8">
            TAC is a consultancy. We help you align your management system with these standards and the
            relevant SIA ACS and British Standard expectations — we do not issue SIA, ACS or
            certification-body accreditation.
          </p>
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

      {/* PICMS bridge */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Keeping Your System Audit-Ready</h2>
            <p className="text-slate-400 mb-4">
              A live management system generates a constant stream of evidence — risk assessments,
              corrective actions, audit findings, vetting records, supplier reviews and management
              reviews. For a multi-site security operation, keeping all of that current is where many
              organisations slip between surveillance audits.
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
            Speak to an IRCA Registered Principal Auditor about your security operation, the standards
            you are targeting and your certification timeline. We typically respond within 24 hours.
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
