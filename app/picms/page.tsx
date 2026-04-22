import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'PICMS Platform | The UK Compliance Platform Built by an IRCA Auditor',
  description: 'The only UK compliance platform designed by an IRCA Registered Principal Auditor. 14 ISO standards, 37 modules, 3 industry packs and AI agents that think like auditors. Industry starter packs from £69/month.',
  keywords: ['ISO compliance software', 'ISO management system', 'UK SME compliance', 'ISO 9001 software', 'ISO 14001 software', 'ISO 45001 software', 'ISO 27001 software', 'ISO 42001', 'AI compliance', 'IRCA auditor', 'PICMS', 'agentic compliance', 'quantum ready compliance', 'IMCA diving compliance', 'CHAS', 'SafeContractor', 'Constructionline'],
};

export default function PICMSPage() {
  const heroStats = [
    { value: '14', label: 'ISO Standards Supported' },
    { value: '37', label: 'Compliance Modules' },
    { value: '3', label: 'UK Accreditations' },
    { value: 'AI', label: 'Agentic Compliance' },
  ];

  const v3Features = [
    { icon: '🧠', title: 'Master Agent', description: 'Autonomous orchestration across all 14 ISO standards in one conversation' },
    { icon: '✨', title: 'Smart Fill', description: 'AI auto-populates evidence, RAMS, audit findings and policy sections across every module' },
    { icon: '🛡️', title: 'Guardian AI v2', description: 'Agentic weekly digest, proactive gap escalation, learns from your corrections' },
    { icon: '🧵', title: 'Golden Thread', description: 'Cross-module auto-linking via vector search — documents to risks, audits, incidents' },
    { icon: '⚡', title: 'Neural Link', description: 'Real-time activity feed, entity history and health snapshot dashboard' },
    { icon: '🔐', title: 'Quantum Ready', description: 'Crypto-agile architecture · NIST FIPS 203/204 roadmap · HNDL-mitigated' },
  ];

  const powerfulFeatures = [
    { title: 'Document Management', description: 'Version control, approvals, RAG-indexed retrieval' },
    { title: 'Audit Management', description: 'Schedule, conduct, evidence-link findings' },
    { title: 'Incident & CAPA', description: 'Capture, investigate, corrective action tracking' },
    { title: 'Risk & Hazard Register', description: 'Identify, assess, mitigate, link to controls' },
    { title: 'Asset Register', description: 'ISO 27001 Annex A asset inventory' },
    { title: 'Training Matrix', description: 'Competency, certification, expiry tracking' },
    { title: 'Legal Register', description: 'UK legislation, auto-updated requirements' },
    { title: 'Management Review', description: 'ISO 9001 9.3 five-section workflow' },
    { title: 'Suppliers & Contractors', description: 'Evaluations, audits, risk tracking' },
    { title: 'Business Continuity', description: 'BCP planning, scenarios, recovery' },
    { title: 'Annex A Controls', description: 'ISO 27001:2022 + ISO 42001:2023 controls' },
    { title: 'UK Data Residency', description: 'AES-256 encryption, GDPR compliant' },
  ];

  const accreditations = [
    {
      name: 'CHAS',
      subtitle: 'Contractor H&S',
      features: ['Requirements tracking', 'Document mapping', 'Expiry alerts'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'SafeContractor',
      subtitle: 'H&S Compliance',
      features: ['Compliance tracking', 'Insurance management', 'Subcontractor records'],
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      name: 'Constructionline',
      subtitle: 'UK Gov Procurement',
      features: ['Tier tracking', 'Evidence management', 'PAS 91 reporting'],
      color: 'from-purple-500 to-purple-600',
    },
  ];

  const industryPacks = [
    {
      name: 'Construction',
      price: 89,
      tagline: 'CDM-ready compliance',
      features: ['CHAS, SafeContractor, Constructionline', 'CDM 2015 framework', 'Hazard Register & COSHH', 'Contractor Management'],
      color: 'from-amber-500 to-orange-600',
    },
    {
      name: 'Healthcare',
      price: 89,
      tagline: 'CQC fundamentals',
      features: ['CQC Regs 9-20A', 'NHS DSPT compliance', 'Safeguarding & DoLS', 'Medicines Management & IPC'],
      color: 'from-pink-500 to-rose-600',
    },
    {
      name: 'Security',
      price: 69,
      tagline: 'Cyber Essentials & GDPR',
      features: ['Cyber Essentials 5 Controls', 'ISO 27701 Privacy', 'GDPR ROPA, DPIA, SAR', 'Pen Test Management'],
      color: 'from-violet-500 to-purple-600',
    },
    {
      name: 'Diving',
      price: 279,
      tagline: 'IMCA & DWR 1997',
      features: ['IMCA D018, D023, D040', 'DWR 1997 / L103 / L104', 'Plant & Equipment Register', 'Dive Operations Logbook'],
      color: 'from-cyan-500 to-blue-600',
    },
  ];

  const pricing = [
    {
      name: 'Essentials',
      price: 199,
      description: 'For small teams getting started',
      features: [
        '1 ISO standard',
        '5 users',
        '100 AI queries/month',
        'Manual evidence mapping',
        'Dashboard, Documents, Risk & Asset Register',
        'Training Records & Legal Register (view)',
      ],
      addons: ['+£10/mo unlimited users', '+£20/mo AI Assistant pack'],
      cta: 'Start Free Trial',
      featured: false,
    },
    {
      name: 'Professional',
      price: 449,
      description: 'AI-powered compliance for growing teams',
      features: [
        '3 ISO standards (9001, 14001, 45001)',
        '15 users',
        '500 AI queries/month',
        'Autonomous AI Agents map evidence',
        'Golden Thread & Neural Link',
        'Gap Analysis · 1 Industry Pack included',
      ],
      addons: ['+£15/mo UK Legal Register', '+£49–£250/mo Industry Packs'],
      cta: 'Start Free Trial',
      featured: true,
    },
    {
      name: 'Certification',
      price: 699,
      description: 'For certification-ready organisations',
      features: [
        '5 ISO standards',
        '30 users',
        'Unlimited AI queries',
        'Certification Readiness module',
        'Template Library + BCP',
        '2 Industry Packs included · Priority support',
      ],
      addons: ['+£250/mo Diving Pack add-on'],
      cta: 'Start Free Trial',
      featured: false,
    },
    {
      name: 'Enterprise',
      price: 1199,
      description: 'All standards, all packs, full API',
      features: [
        'All 14 ISO standards',
        'Unlimited users',
        'Unlimited AI queries',
        'All Industry Packs included',
        'Full API access + webhooks',
        'Dedicated CSM',
      ],
      addons: ['+£350/mo White-label add-on'],
      cta: 'Contact Sales',
      featured: false,
    },
  ];

  const testimonials = [
    {
      quote: "PICMS transformed our compliance process. We achieved ISO 27001 certification 3 months ahead of schedule. The incident management module alone saved us countless hours.",
      author: "Sarah Johnson",
      role: "Compliance Manager",
      company: "TechCorp UK",
    },
    {
      quote: "The best compliance platform we've used. Intuitive interface, powerful features, and exceptional support. Our audit preparation time has been cut by 60%.",
      author: "Michael Peters",
      role: "Quality Director",
      company: "Healthcare Solutions Ltd",
    },
    {
      quote: "Outstanding platform! The intelligent insights helped us identify compliance gaps we didn't even know existed. Worth every penny for our ISO 9001 journey.",
      author: "Emma Williams",
      role: "Operations Manager",
      company: "Manufacturing Co",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30">
              <span className="text-cyan-400 text-sm font-medium">v3 Live · Agentic Compliance · April 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-slate-300 to-white bg-clip-text text-transparent">
                ISO Compliance,
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Built by an Auditor.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10">
              The only UK compliance platform designed by an IRCA Registered Principal Auditor.
              Every ISO standard, every UK regulation, every audit — managed by AI that thinks like an auditor
              because it was built by one. Industry starter packs from <span className="text-white font-semibold">£69/month</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="https://picms.com/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-cyan-500/20"
              >
                Start Free Trial
              </a>
              <a
                href="https://picms.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-slate-700 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors"
              >
                Visit PICMS.com
              </a>
            </div>

            {/* Hero Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {heroStats.map((stat) => (
                <div key={stat.label} className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
                  <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* v3 Agentic Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Agentic Compliance AI
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Six intelligent systems working together — orchestrating, mapping, auditing, learning. Your compliance team's force multiplier.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {v3Features.map((feature) => (
              <div
                key={feature.title}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-colors"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Powerful Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              37 Modules. One Platform.
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Every module you need to manage compliance — from document control to dive operations logbooks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {powerfulFeatures.map((feature) => (
              <div
                key={feature.title}
                className="flex items-start gap-3 p-4 bg-slate-800/30 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <svg className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-semibold text-white">{feature.title}</h4>
                  <p className="text-sm text-slate-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-500 text-sm mt-8">
            Plus 25 more modules — see the full list at <a href="https://picms.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">picms.com</a>
          </p>
        </div>
      </section>

      {/* Quantum Readiness */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-pink-500/10 to-rose-500/10 border border-pink-500/30">
              <span className="text-pink-400 text-sm font-medium">🔐 Post-Quantum Ready</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Crypto-Agile by Design
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              The only UK ISO compliance platform built from the ground up to be ready for the post-quantum era.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-pink-500/10 to-rose-600/10 border border-pink-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-2">The Threat</h3>
              <p className="text-slate-400 mb-6">Harvest now, decrypt later</p>
              <p className="text-slate-300 mb-4">
                By 2030, current encryption methods will be vulnerable to quantum attacks. The UK ICO and NCSC are already urging organisations to prepare.
              </p>
              <p className="text-slate-300">
                PICMS has completed a full cryptographic audit, published a CBOM, added HMAC-SHA-256 integrity to export bundles, and built a crypto-agility wrapper so we can swap in NIST ML-KEM and ML-DSA the moment they ship.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-2">Standards Aligned</h3>
              <p className="text-slate-400 mb-6">Auditor-ready evidence</p>
              <ul className="space-y-3">
                {[
                  'ISO 27001:2022 Annex A 8.24 — Use of cryptography',
                  'ISO 42001:2023 A.6.2.8 + A.8.3 — AI resource & data',
                  'NIST FIPS 203 (ML-KEM) — Roadmap tracked',
                  'NIST FIPS 204 (ML-DSA) — Roadmap tracked',
                  'UK NCSC Cyber Security & Resilience Bill — HNDL mitigated',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-300 text-sm">
                    <svg className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Starter Packs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30">
              <span className="text-amber-400 text-sm font-medium">Don't need ISO yet? Start here.</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industry Starter Packs
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Industry-specific compliance from <span className="text-white font-semibold">£69/month</span>.
              Upgrade to ISO standards when you're ready.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryPacks.map((pack) => (
              <div key={pack.name} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-colors">
                <div className={`inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-gradient-to-r ${pack.color} text-white text-sm font-bold`}>
                  {pack.name}
                </div>
                <div className="text-3xl font-bold mb-1">£{pack.price}<span className="text-slate-500 text-base font-normal">/mo</span></div>
                <p className="text-slate-400 text-sm mb-4">{pack.tagline}</p>
                <ul className="space-y-2">
                  {pack.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate-300">
                      <svg className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UK Contractor Accreditations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Manage Your Contractor Accreditations
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Track and manage your UK contractor accreditations alongside ISO standards.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {accreditations.map((accred) => (
              <div key={accred.name} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-colors">
                <div className={`inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-gradient-to-r ${accred.color} text-white text-sm font-bold`}>
                  {accred.name}
                </div>
                <p className="text-slate-400 text-sm mb-4">{accred.subtitle}</p>
                <ul className="space-y-2">
                  {accred.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                      <svg className="w-4 h-4 text-cyan-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Industry Leaders
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <svg className="w-8 h-8 text-cyan-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-slate-300 mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-slate-400">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ISO Plans
            </h2>
            <p className="text-slate-400 text-lg">
              Start with a 14-day free trial. No credit card required. Cancel anytime.
            </p>
            <p className="text-slate-500 text-sm mt-3">
              Need industry-specific compliance instead? See <a href="#industry-packs" className="text-cyan-400 hover:underline">Industry Starter Packs from £69/month</a>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricing.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-6 ${
                  plan.featured
                    ? 'bg-gradient-to-b from-cyan-500/10 to-slate-800 border-2 border-cyan-500'
                    : 'bg-slate-800/50 border border-slate-700'
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-cyan-500 text-white text-sm font-medium rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold mb-2">
                    <span className="text-slate-400 text-base">£</span>
                    {plan.price}
                    <span className="text-slate-500 text-base">/mo</span>
                  </div>
                  <p className="text-slate-500 text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-2 mb-6 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-slate-400">
                      <svg className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                {plan.addons.length > 0 && (
                  <div className="border-t border-slate-700 pt-4 mb-6">
                    <p className="text-xs text-slate-500 mb-2">Add-ons:</p>
                    {plan.addons.map((addon) => (
                      <p key={addon} className="text-xs text-slate-400">{addon}</p>
                    ))}
                  </div>
                )}
                <a
                  href={plan.cta === 'Contact Sales' ? '/#contact' : 'https://picms.com/signup'}
                  target={plan.cta === 'Contact Sales' ? '_self' : '_blank'}
                  rel={plan.cta === 'Contact Sales' ? undefined : 'noopener noreferrer'}
                  className={`block w-full py-3 text-center font-semibold rounded-lg transition-opacity ${
                    plan.featured
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-90'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 text-slate-400 text-sm">
            Running a consultancy? <a href="https://picms.com/partners" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Consultant Starter from £599/month</a> — white-label + 3 client workspaces included.
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for ISO 2026?
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Join UK businesses preparing for the future of compliance. PICMS helps you future-proof against
            emerging threats — including post-quantum cryptography, ISO 27001:2022 cryptographic controls and
            the upcoming NCSC Cyber Security &amp; Resilience Bill. Start your 14-day free trial today — no credit card required.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['UK Data Residency', 'AES-256 + HMAC Integrity', 'Crypto-Agile · FIPS 203/204', 'GDPR Compliant'].map((indicator) => (
              <div key={indicator} className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm text-slate-300">
                <svg className="w-4 h-4 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                {indicator}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://picms.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/20"
            >
              Start Free Trial
            </a>
            <Link
              href="/#contact"
              className="px-8 py-4 border border-slate-700 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
