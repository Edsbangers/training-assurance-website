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
                ISO consultancy and audit support for UK businesses, led by an IRCA Registered Principal
                Auditor. ISO 27001, 9001, 14001, 45001 and specialist ISO/IEC 42001 support.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Consultancy</h4>
              <ul className="space-y-2 text-slate-500">
                <li><Link href="/services" className="hover:text-cyan-400 transition-colors">ISO Consultancy Services</Link></li>
                <li><Link href="/iso-27001-consultancy" className="hover:text-cyan-400 transition-colors">ISO 27001 Consultancy</Link></li>
                <li><Link href="/about" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
                <li><Link href="/blog" className="hover:text-cyan-400 transition-colors">Insights</Link></li>
                <li><Link href="/faq" className="hover:text-cyan-400 transition-colors">FAQ</Link></li>
                <li><Link href="/resources" className="hover:text-cyan-400 transition-colors">Resources</Link></li>
                <li><Link href="/#contact" className="hover:text-cyan-400 transition-colors">Book a consultation</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Sectors &amp; Platform</h4>
              <ul className="space-y-2 text-slate-500">
                <li><Link href="/iso-consultancy-construction" className="hover:text-cyan-400 transition-colors">Construction</Link></li>
                <li><Link href="/iso-consultancy-security" className="hover:text-cyan-400 transition-colors">Security</Link></li>
                <li><Link href="/iso-consultancy-maritime" className="hover:text-cyan-400 transition-colors">Maritime</Link></li>
                <li><Link href="/picms" className="hover:text-emerald-400 transition-colors">PICMS (ongoing management)</Link></li>
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
