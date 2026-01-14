import Link from 'next/link';
import Image from 'next/image';

interface FooterProps {
  variant?: 'default' | 'full';
}

export default function Footer({ variant = 'default' }: FooterProps) {
  const currentYear = new Date().getFullYear();

  if (variant === 'full') {
    return (
      <footer className="py-12 border-t border-slate-800/50" role="contentinfo">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="mb-4">
                <Image
                  src="/logo.png"
                  alt="TAC - Training Assurance Consultancy"
                  width={180}
                  height={45}
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-slate-500 max-w-md">
                Strategic SHEQ consultancy and AI governance solutions for forward-thinking organisations.
                IRCA Registered Principal Auditor. 100% Certification Success Rate.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-500">
                <li><Link href="/about" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
                <li><Link href="/blog" className="hover:text-cyan-400 transition-colors">Insights</Link></li>
                <li><Link href="/resources" className="hover:text-cyan-400 transition-colors">Resources</Link></li>
                <li><Link href="/#services" className="hover:text-cyan-400 transition-colors">Services</Link></li>
                <li>
                  <a href="https://www.picms.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
                    PICMS Platform
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
                <li><Link href="/#contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Standards</h4>
              <ul className="space-y-2 text-slate-500">
                <li>ISO/IEC 42001</li>
                <li>ISO 9001</li>
                <li>ISO 14001</li>
                <li>ISO 45001</li>
                <li>ISO 27001</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              &copy; {currentYear} Training Assurance Consultancy. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <Link href="/privacy-policy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
              <Link href="/#contact" className="hover:text-cyan-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} Training Assurance Consultancy. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <Link href="/privacy-policy" className="hover:text-cyan-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-cyan-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/security" className="hover:text-cyan-400 transition-colors">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
