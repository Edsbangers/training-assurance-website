import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ROICalculator from '@/components/ROICalculator';
import DashboardPreview from '@/components/DashboardPreview';

export const metadata: Metadata = {
  title: 'PICMS Platform | ISO Compliance Management for UK SMEs',
  description: 'PICMS is the leading ISO compliance management platform built for UK small and medium enterprises. Manage ISO 9001, 14001, 45001, and 27001 in one affordable solution.',
  keywords: ['ISO compliance software', 'ISO management system', 'UK SME compliance', 'ISO 9001 software', 'ISO 14001 software', 'compliance management platform'],
};

export default function PICMSPage() {
  const features = [
    {
      icon: '📊',
      title: 'Compliance Dashboard',
      description: 'Real-time visibility into your compliance status across all ISO standards with actionable insights.',
    },
    {
      icon: '📄',
      title: 'Document Control',
      description: 'Version-controlled document management with approval workflows and automatic review reminders.',
    },
    {
      icon: '📋',
      title: 'Audit Scheduler',
      description: 'Plan, execute, and track internal and external audits with integrated findings management.',
    },
    {
      icon: '✅',
      title: 'CAPA Management',
      description: 'Comprehensive corrective and preventive action tracking with root cause analysis tools.',
    },
    {
      icon: '📈',
      title: 'KPI Tracking',
      description: 'Monitor key performance indicators and generate management review reports automatically.',
    },
    {
      icon: '🔔',
      title: 'Automated Reminders',
      description: 'Never miss a deadline with intelligent notifications for reviews, audits, and actions.',
    },
  ];

  const standards = [
    { name: 'ISO 9001:2015', label: 'Quality', color: 'from-cyan-500 to-blue-600' },
    { name: 'ISO 14001:2015', label: 'Environment', color: 'from-emerald-500 to-green-600' },
    { name: 'ISO 45001:2018', label: 'Health & Safety', color: 'from-blue-600 to-slate-700' },
    { name: 'ISO 27001:2022', label: 'Information Security', color: 'from-slate-600 to-slate-800' },
  ];

  const pricing = [
    {
      name: 'Starter',
      price: 99,
      description: 'For small businesses starting their ISO journey',
      features: ['1 ISO standard', 'Up to 10 users', 'Document control', 'Basic reporting', 'Email support'],
      cta: 'Start Free Trial',
      featured: false,
    },
    {
      name: 'Professional',
      price: 299,
      description: 'For growing businesses with multiple standards',
      features: ['Up to 3 ISO standards', 'Up to 50 users', 'Full audit management', 'CAPA tracking', 'Advanced analytics', 'Priority support'],
      cta: 'Start Free Trial',
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 599,
      description: 'For organisations requiring comprehensive IMS',
      features: ['Unlimited standards', 'Unlimited users', 'Multi-site support', 'API access', 'Custom integrations', 'Dedicated account manager'],
      cta: 'Contact Sales',
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="TAC - Training Assurance Consultancy"
                width={160}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-slate-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="#features" className="hidden sm:block text-slate-400 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="/blog" className="text-slate-400 hover:text-white transition-colors">
                Insights
              </Link>
              <a
                href="https://picms.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Visit PICMS
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-slate-800 border border-slate-700">
              <span className="text-cyan-400 text-sm font-medium">ISO Compliance Made Simple</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-slate-300 to-white bg-clip-text text-transparent">
                The Complete ISO Management Platform for UK SMEs
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10">
              PICMS is the only compliance platform built specifically for UK small and medium enterprises.
              Manage multiple ISO standards, automate your compliance processes, and achieve certification faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://picms.com/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-cyan-500/20"
              >
                Start Free Trial
              </a>
              <Link
                href="/picms/demo"
                className="px-8 py-4 border border-slate-700 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors"
              >
                View Demo
              </Link>
            </div>
          </div>

          {/* Standards Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {standards.map((standard) => (
              <div
                key={standard.name}
                className={`px-5 py-3 rounded-xl bg-gradient-to-r ${standard.color} text-white font-medium`}
              >
                {standard.name} <span className="opacity-75">• {standard.label}</span>
              </div>
            ))}
          </div>

          {/* Dashboard Preview */}
          <DashboardPreview />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need for ISO Compliance
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              From document control to audit management, PICMS provides all the tools you need to maintain and improve your management system.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-colors"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See How Much You Could Save
            </h2>
            <p className="text-slate-400 text-lg">
              PICMS customers save an average of 70% on audit preparation time. Calculate your potential savings below.
            </p>
          </div>
          <ROICalculator />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-slate-400 text-lg">
              Choose the plan that fits your business. All plans include a 14-day free trial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 ${
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
                  <div className="text-4xl font-bold mb-2">
                    <span className="text-slate-400 text-lg">£</span>
                    {plan.price}
                    <span className="text-slate-500 text-lg">/mo</span>
                  </div>
                  <p className="text-slate-500 text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-slate-400">
                      <svg className="w-5 h-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://picms.com/signup"
                  target="_blank"
                  rel="noopener noreferrer"
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
            Ready to Transform Your Compliance Management?
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Join hundreds of UK businesses using PICMS to achieve and maintain ISO certification.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://picms.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
            >
              Start Your Free Trial
            </a>
            <Link
              href="/#contact"
              className="px-8 py-4 border border-slate-700 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Training Assurance Consultancy. PICMS is a TAC product.
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <Link href="/privacy-policy" className="hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <a
                href="https://picms.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
              >
                picms.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
