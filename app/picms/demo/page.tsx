import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'PICMS Demo | Interactive Platform Preview',
  description: 'Experience the PICMS v2.0 platform with our interactive demo. See how PICMS can transform your ISO compliance management.',
};

export default function PICMSDemoPage() {
  const dashboardFeatures = [
    {
      title: 'Compliance Dashboard',
      description: 'Real-time visibility into your compliance status across all ISO standards with AI-powered insights and actionable recommendations.',
      highlights: ['Compliance scores per standard', 'Trend analysis and reporting', 'Action item prioritisation', 'AI gap detection'],
    },
    {
      title: 'Document Control',
      description: 'Manage all your QMS documentation with automatic version control, approval workflows, and intelligent reminders.',
      highlights: ['QMS numbering system', 'Version history tracking', 'Approval workflows', 'Expiry alerts'],
    },
    {
      title: 'Audit Management',
      description: 'Plan, schedule, and execute audits with 16 pre-built templates. Track findings, assign actions, and monitor closure.',
      highlights: ['16 audit form templates', 'Mobile audit capability', 'Photo and signature capture', 'Real-time submission'],
    },
    {
      title: 'Risk Management',
      description: 'Comprehensive risk register with ISO clause linking, severity tracking, and mitigation monitoring.',
      highlights: ['Risk assessment matrix', 'ISO clause linking', 'Mitigation tracking', 'Automatic escalation'],
    },
  ];

  const v2Highlights = [
    { icon: '⚡', label: 'Lightning Fast', description: 'React 18 with optimised rendering' },
    { icon: '🤖', label: 'AI-Powered', description: 'Gap analysis and policy generation' },
    { icon: '📱', label: 'Mobile Ready', description: 'Field audits on any device' },
    { icon: '🔒', label: 'Enterprise Security', description: 'AES-256 encryption, UK data residency' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
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
              <Link href="/picms" className="text-slate-400 hover:text-white transition-colors">
                Back to PICMS
              </Link>
              <a
                href="https://picms.com/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30">
              <span className="text-cyan-400 text-sm font-medium">Platform v2.0 Demo</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white via-slate-300 to-white bg-clip-text text-transparent">
                Experience PICMS in Action
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Explore the key features of our completely redesigned compliance management platform.
              See how PICMS v2.0 can transform your ISO journey.
            </p>
          </div>

          {/* v2 Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {v2Highlights.map((item) => (
              <div key={item.label} className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="font-semibold text-white mb-1">{item.label}</div>
                <div className="text-xs text-slate-400">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Image */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 p-2 shadow-2xl">
            <div className="bg-slate-900 rounded-xl overflow-hidden">
              {/* Mock Browser Bar */}
              <div className="bg-slate-800 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="flex-1 ml-4">
                  <div className="bg-slate-700 rounded-md px-4 py-1.5 text-sm text-slate-400 max-w-md">
                    app.picms.com/dashboard
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6">
                <div className="grid grid-cols-4 gap-4 mb-6">
                  {[
                    { label: 'Overall Compliance', value: '87%', color: 'text-cyan-400' },
                    { label: 'Documents Due', value: '12', color: 'text-amber-400' },
                    { label: 'Open Actions', value: '8', color: 'text-purple-400' },
                    { label: 'Audits This Month', value: '3', color: 'text-emerald-400' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-slate-800/50 rounded-lg p-4">
                      <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                      <div className="text-xs text-slate-400">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {/* Compliance Chart Placeholder */}
                  <div className="col-span-2 bg-slate-800/50 rounded-lg p-4 h-48">
                    <div className="text-sm font-semibold text-white mb-4">Compliance Trend</div>
                    <div className="flex items-end gap-2 h-32">
                      {[65, 72, 68, 78, 82, 85, 87].map((val, i) => (
                        <div key={i} className="flex-1 bg-gradient-to-t from-cyan-500 to-blue-600 rounded-t" style={{ height: `${val}%` }}></div>
                      ))}
                    </div>
                  </div>

                  {/* Standards List */}
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <div className="text-sm font-semibold text-white mb-4">Standards</div>
                    <div className="space-y-3">
                      {[
                        { name: 'ISO 9001', score: 92 },
                        { name: 'ISO 14001', score: 85 },
                        { name: 'ISO 45001', score: 88 },
                        { name: 'ISO 27001', score: 79 },
                      ].map((std) => (
                        <div key={std.name} className="flex items-center gap-3">
                          <div className="text-xs text-slate-400 w-16">{std.name}</div>
                          <div className="flex-1 bg-slate-700 rounded-full h-2">
                            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full h-2" style={{ width: `${std.score}%` }}></div>
                          </div>
                          <div className="text-xs text-cyan-400 w-8">{std.score}%</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Deep Dives */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Powerful Features, Built for You
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Every feature is designed to save you time and ensure compliance confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {dashboardFeatures.map((feature) => (
              <div key={feature.title} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-cyan-500/30 transition-colors">
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-slate-400 mb-4">{feature.description}</p>
                <ul className="grid grid-cols-2 gap-2">
                  {feature.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2 text-sm text-slate-300">
                      <svg className="w-4 h-4 text-cyan-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-slate-400 mb-8">
            Try PICMS free for 14 days. No credit card required.
          </p>
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
              href="/picms#pricing"
              className="px-8 py-4 border border-slate-700 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors"
            >
              View Pricing
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
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
