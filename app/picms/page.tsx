import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'PICMS Platform | ISO Compliance Management Reimagined',
  description: 'The complete platform for UK businesses managing ISO 9001, 14001, 45001 & 27001. AI-powered insights, real-time dashboards, and 16+ audit templates. Start your free trial.',
  keywords: ['ISO compliance software', 'ISO management system', 'UK SME compliance', 'ISO 9001 software', 'ISO 14001 software', 'compliance management platform', 'ISO 42001', 'AI compliance'],
};

export default function PICMSPage() {
  const heroStats = [
    { value: '16+', label: 'ISO Standards Supported' },
    { value: '16', label: 'Audit Form Templates' },
    { value: 'AI', label: 'Powered Insights' },
    { value: '99.9%', label: 'Uptime SLA' },
  ];

  const v2Features = [
    { icon: '⚡', title: 'Lightning Fast', description: 'Modern interface with real-time updates' },
    { icon: '🤖', title: 'AI-Powered', description: 'Intelligent compliance assistance' },
    { icon: '📊', title: 'Live Dashboards', description: 'Real-time compliance visibility' },
    { icon: '📋', title: '16 Modules', description: 'Comprehensive ISO coverage' },
    { icon: '📄', title: 'Document Control', description: 'Version management & approvals' },
    { icon: '🏗️', title: 'Construction Ready', description: 'CDM & contractor modules' },
  ];

  const powerfulFeatures = [
    { title: 'Multi-Standard Support', description: 'ISO 9001, 14001, 45001, 27001 and more' },
    { title: 'Incident Management', description: 'Capture, investigate, and resolve' },
    { title: 'Document Control', description: 'Version tracking & approvals' },
    { title: 'Audit Management', description: 'Schedule, conduct, and track' },
    { title: 'Risk Register', description: 'Identify, assess, and mitigate' },
    { title: 'Training Records', description: 'Competency & certification tracking' },
    { title: 'CAPA Management', description: 'Corrective action tracking' },
    { title: 'UK Data Residency', description: 'Secure & GDPR compliant' },
  ];

  const accreditations = [
    {
      name: 'CHAS',
      subtitle: 'Health & Safety',
      features: ['Requirements tracking', 'Document mapping', 'Expiry alerts'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'SafeContractor',
      subtitle: 'Prequalification',
      features: ['Compliance tracking', 'Insurance management', 'Subcontractor records'],
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      name: 'Constructionline',
      subtitle: 'PAS 91',
      features: ['Tier tracking', 'Evidence management', 'Statistics reporting'],
      color: 'from-purple-500 to-purple-600',
    },
  ];

  const pricing = [
    {
      name: 'Starter',
      price: 89,
      description: 'For small teams getting started',
      features: [
        '2 modules included',
        '1 user included',
        '50 AI queries/month',
        'Core compliance tools',
        '48hr email support',
      ],
      addons: ['+£39/module', '+£15/user'],
      cta: 'Start Free Trial',
      featured: false,
    },
    {
      name: 'Professional',
      price: 179,
      description: 'For growing organisations',
      features: [
        '4 modules included',
        '5 users included',
        '250 AI queries/month',
        'IRCA auditor AI training',
        '24hr priority support',
      ],
      addons: ['+£39/module', '+£12/user'],
      cta: 'Start Free Trial',
      featured: true,
    },
    {
      name: 'Certification',
      price: 299,
      description: 'For certification-ready teams',
      features: [
        '8 modules included',
        '15 users included',
        '500 AI queries/month',
        'AI gap analysis',
        '12hr priority support',
      ],
      addons: ['+£39/module'],
      cta: 'Start Free Trial',
      featured: false,
    },
    {
      name: 'Enterprise',
      price: 449,
      description: 'Complete platform access',
      features: [
        'All 16 modules',
        'Unlimited users',
        '2,000 AI queries/month',
        'Quarterly auditor calls',
        '4hr priority support',
      ],
      addons: [],
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
              <span className="text-cyan-400 text-sm font-medium">Platform v2.0 — Completely Redesigned for 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-slate-300 to-white bg-clip-text text-transparent">
                Compliance Management,
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Reimagined.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10">
              The complete platform for UK businesses managing ISO 9001, 14001, 45001 & 27001.
              Now powered by a completely modernised React-based interface with AI-powered insights,
              real-time dashboards, and blazing-fast performance.
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
                Watch Demo
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

      {/* Platform v2.0 Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What's New in v2.0
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Built from the ground up with React 18, TypeScript, and Tailwind CSS for a modern, responsive experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {v2Features.map((feature) => (
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
              Built for How You Actually Work
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Everything you need to manage compliance, from document control to audit management.
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
        </div>
      </section>

      {/* Golden Thread & Gap Analysis */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Intelligent Compliance Tools
            </h2>
            <p className="text-slate-400 text-lg">
              Advanced features for Enterprise and Principal plans
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-2xl p-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-medium">
                Enterprise Feature
              </div>
              <h3 className="text-2xl font-bold mb-2">The Golden Thread</h3>
              <p className="text-slate-400 mb-6">Intelligent Compliance Traceability</p>
              <ul className="space-y-3">
                {['End-to-end traceability', 'Automatic gap detection', 'System health monitoring', 'Audit-ready documentation'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-300">
                    <svg className="w-5 h-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-pink-600/10 border border-purple-500/30 rounded-2xl p-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-purple-500/20 text-purple-400 text-sm font-medium">
                Enterprise Feature
              </div>
              <h3 className="text-2xl font-bold mb-2">Intelligent Gap Analysis</h3>
              <p className="text-slate-400 mb-6">Pre-Audit Readiness Assessment</p>
              <ul className="space-y-3">
                {['Document compliance scoring', 'Gap identification & prioritisation', 'Actionable recommendations', 'All ISO standards supported'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-300">
                    <svg className="w-5 h-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

      {/* ISO 2026 Readiness */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-amber-500/10 border border-amber-500/30">
              <span className="text-amber-400 text-sm font-medium">Future Ready</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Ready for ISO 2026 Revisions
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Transition periods are typically 3 years. Organisations who start preparing now will have a smoother transition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">ISO 9001:2026</h3>
              <p className="text-slate-400 mb-4">Expected updates include:</p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-500">•</span>
                  Enhanced organisational knowledge
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-500">•</span>
                  Climate action requirements
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-500">•</span>
                  Digital transformation focus
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-emerald-400 mb-4">ISO 14001:2026</h3>
              <p className="text-slate-400 mb-4">Expected changes include:</p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">•</span>
                  Climate change integration
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">•</span>
                  Biodiversity requirements
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">•</span>
                  Circular economy principles
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-xl p-6 text-center">
            <p className="text-slate-300">
              <strong className="text-white">PICMS customers</strong> will receive automatic updates and migration guidance for new ISO requirements.
            </p>
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
              Choose Your Plan
            </h2>
            <p className="text-slate-400 text-lg">
              Start with a 14-day free trial. No credit card required. Cancel anytime.
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for ISO 2026?
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Join UK businesses preparing for the future of compliance. With intelligent guidance,
            mobile audits, and automatic updates for new ISO requirements—PICMS keeps you ahead.
            Start your 14-day free trial today—no credit card required.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['UK Data Residency', 'GDPR Compliant', 'AES-256 Encryption', '2026 Ready'].map((indicator) => (
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
