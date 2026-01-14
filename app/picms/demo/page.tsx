import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import DashboardPreview from '@/components/DashboardPreview';

export const metadata: Metadata = {
  title: 'PICMS Demo | Interactive Dashboard Preview',
  description: 'Experience the PICMS platform with our interactive demo. See how PICMS can transform your ISO compliance management.',
};

export default function PICMSDemoPage() {
  return (
    <div className="min-h-screen bg-[#001233] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#001845]/80 backdrop-blur-md border-b border-[#002366]">
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
              <Link href="/picms" className="text-[#B0C4DE] hover:text-white transition-colors">
                Back to PICMS
              </Link>
              <a
                href="https://picms.com/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-[#FF8C00] to-[#e67e00] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Demo Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-[#001845] border border-[#002366]">
              <span className="text-[#FF8C00] text-sm font-medium">Interactive Demo</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Experience PICMS in Action
            </h1>
            <p className="text-lg text-[#B0C4DE] max-w-2xl mx-auto">
              Explore the key features of PICMS with our interactive preview. Click through the tabs to see how each module works.
            </p>
          </div>

          {/* Main Demo Area */}
          <div className="mb-12">
            <DashboardPreview />
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-[#001845]/50 border border-[#002366] rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <span className="text-2xl">📊</span>
                Real-Time Compliance Tracking
              </h3>
              <p className="text-[#8ba3c7] mb-4">
                The dashboard provides instant visibility into your compliance status across all ISO standards.
                See at a glance which areas need attention and track your progress over time.
              </p>
              <ul className="space-y-2 text-[#B0C4DE]">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#FF8C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Compliance scores per standard
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#FF8C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Trend analysis and reporting
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#FF8C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Action item prioritisation
                </li>
              </ul>
            </div>

            <div className="bg-[#001845]/50 border border-[#002366] rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <span className="text-2xl">📄</span>
                Intelligent Document Control
              </h3>
              <p className="text-[#8ba3c7] mb-4">
                Manage all your QMS documentation in one place with automatic version control,
                approval workflows, and intelligent reminders for document reviews.
              </p>
              <ul className="space-y-2 text-[#B0C4DE]">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#FF8C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Automatic version tracking
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#FF8C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Approval workflows
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#FF8C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Review reminders
                </li>
              </ul>
            </div>

            <div className="bg-[#001845]/50 border border-[#002366] rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <span className="text-2xl">📋</span>
                Comprehensive Audit Management
              </h3>
              <p className="text-[#8ba3c7] mb-4">
                Plan, schedule, and execute audits with ease. Track findings, assign actions,
                and monitor closure all in one integrated system.
              </p>
              <ul className="space-y-2 text-[#B0C4DE]">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#FF8C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Audit calendar and scheduling
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#FF8C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Findings tracking
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#FF8C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Auditor assignment
                </li>
              </ul>
            </div>

            <div className="bg-[#001845]/50 border border-[#002366] rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <span className="text-2xl">✅</span>
                Streamlined CAPA Process
              </h3>
              <p className="text-[#8ba3c7] mb-4">
                Manage corrective and preventive actions from identification through verification.
                Built-in root cause analysis tools help drive effective improvements.
              </p>
              <ul className="space-y-2 text-[#B0C4DE]">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#FF8C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Root cause analysis tools
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#FF8C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Action assignment and tracking
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#FF8C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Effectiveness verification
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-[#B0C4DE] mb-8">
              Try PICMS free for 14 days. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://picms.com/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-[#FF8C00] to-[#e67e00] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
              >
                Start Free Trial
              </a>
              <Link
                href="/picms#pricing"
                className="px-8 py-4 border border-[#002366] text-white font-semibold rounded-xl hover:bg-[#001845] transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#001845] border-t border-[#002366] py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#6b8db4] text-sm">
              &copy; {new Date().getFullYear()} Training Assurance Consultancy. PICMS is a TAC product.
            </p>
            <div className="flex items-center gap-6 text-sm text-[#6b8db4]">
              <Link href="/privacy-policy" className="hover:text-[#FF8C00] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-[#FF8C00] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
