'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavLink {
  href: string;
  label: string;
  highlight?: boolean;
}

interface NavigationProps {
  variant?: 'default' | 'home';
}

export default function Navigation({ variant = 'default' }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Same navigation items for ALL pages - consistent experience
  const navLinks: NavLink[] = [
    { href: variant === 'home' ? '#services' : '/#services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/blog', label: 'Insights' },
    { href: '/resources', label: 'Resources' },
  ];

  const ctaLink = variant === 'home' ? '#contact' : '/#contact';
  const ctaText = 'Contact';

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="Training Assurance Consultancy - Home">
          <Image
            src="/logo.png"
            alt="TAC - Training Assurance Consultancy"
            width={200}
            height={50}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={ctaLink}
            className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
          >
            {ctaText}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-slate-800/50">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-slate-400 hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={ctaLink}
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center px-5 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
            >
              {ctaText}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
