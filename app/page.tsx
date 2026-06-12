'use client';

import { useState, lazy, Suspense } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Lazy load components that aren't immediately visible
const ServicesGrid = lazy(() => import('@/components/ServicesGrid'));

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: 'iso-consultancy',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || 'xykkgnrk';
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          interest: formData.interest,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          interest: 'iso-consultancy',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>

      <Navigation variant="home" />

      {/* Hero Section */}
      <section id="main-content" className="relative min-h-screen flex items-center justify-center pt-20" aria-label="Hero">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDI5M2EiIGZpbGwtb3BhY2l0eT0iMC40Ij48Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <span className="px-4 py-2 bg-slate-800/60 border border-slate-700/50 rounded-full text-xs font-medium text-cyan-400 backdrop-blur-sm">
              IRCA Registered Principal Auditor
            </span>
            <span className="px-4 py-2 bg-slate-800/60 border border-slate-700/50 rounded-full text-xs font-medium text-cyan-400 backdrop-blur-sm">
              ISO 27001, 9001, 14001 &amp; 45001 support
            </span>
            <span className="px-4 py-2 bg-slate-800/60 border border-slate-700/50 rounded-full text-xs font-medium text-cyan-400 backdrop-blur-sm">
              500+ Audits Completed
            </span>
            <span className="px-4 py-2 bg-slate-800/60 border border-slate-700/50 rounded-full text-xs font-medium text-cyan-400 backdrop-blur-sm">
              UK ISO Consultancy
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
              ISO Consultancy Led by an
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400">
              IRCA Registered Principal Auditor
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Training Assurance Consultancy helps UK businesses implement, maintain and improve ISO
            management systems. Led by an IRCA Registered Principal Auditor, we provide practical
            support for ISO 27001, ISO 9001, ISO 14001, ISO 45001 and ISO/IEC 42001.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 flex items-center gap-3"
            >
              Book a consultation
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#picms"
              className="px-8 py-4 bg-slate-800/60 border border-slate-700 rounded-xl font-semibold text-lg hover:bg-slate-800 hover:border-emerald-500/50 transition-all duration-300 flex items-center gap-2"
            >
              <span>Explore PICMS for ongoing ISO management</span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-slate-800/50">
            <div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">20+</div>
              <div className="text-slate-500 mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">500+</div>
              <div className="text-slate-500 mt-1">Audits Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">5</div>
              <div className="text-slate-500 mt-1">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">100%</div>
              <div className="text-slate-500 mt-1">Certification Success</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-medium tracking-widest text-sm uppercase">ISO Consultancy Services</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              ISO Consultancy, Audit Support &amp; Certification Support
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Practical, auditor-led support to implement, maintain and improve your ISO management
              systems — from ISO 27001 information security to ISO 9001, 14001 and 45001.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800/60 border border-slate-700 rounded-xl text-sm font-medium hover:border-cyan-500/50 transition-all"
              >
                View all ISO consultancy services
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/iso-27001-consultancy"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800/60 border border-slate-700 rounded-xl text-sm font-medium hover:border-cyan-500/50 transition-all"
              >
                ISO 27001 consultancy
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          <Suspense fallback={
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 animate-pulse">
                  <div className="w-14 h-14 rounded-xl bg-slate-700 mb-5" />
                  <div className="h-4 bg-slate-700 rounded w-1/3 mb-2" />
                  <div className="h-6 bg-slate-700 rounded w-2/3 mb-3" />
                  <div className="h-16 bg-slate-700 rounded" />
                </div>
              ))}
            </div>
          }>
            <ServicesGrid />
          </Suspense>

          {/* Additional Standards Section */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">We Also Support These Standards</h3>
              <p className="text-slate-400">Comprehensive expertise across the full ISO ecosystem</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { code: 'ISO 50001', name: 'Energy Management', icon: '⚡', certifiable: true },
                { code: 'ISO 42001', name: 'AI Management', icon: '🤖', certifiable: true },
                { code: 'ISO 22000', name: 'Food Safety', icon: '🍽️', certifiable: true },
                { code: 'ISO 13485', name: 'Medical Devices', icon: '🏥', certifiable: true },
                { code: 'ISO 22301', name: 'Business Continuity', icon: '🔄', certifiable: true },
                { code: 'ISO 14064', name: 'Carbon Footprint', icon: '🌍', certifiable: true },
                { code: 'ISO 26000', name: 'Social Responsibility', icon: '🤝', certifiable: false },
                { code: 'ISO 31000', name: 'Risk Management', icon: '⚖️', certifiable: false },
                { code: 'ISO 20400', name: 'Sustainable Procurement', icon: '♻️', certifiable: false },
              ].map((standard) => (
                <div
                  key={standard.code}
                  className="group p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/30 transition-all text-center"
                >
                  <div className="text-3xl mb-2">{standard.icon}</div>
                  <div className="font-semibold text-sm text-white">{standard.code}</div>
                  <div className="text-xs text-slate-400 mt-1">{standard.name}</div>
                  <div className={`text-xs mt-2 px-2 py-0.5 rounded-full inline-block ${
                    standard.certifiable
                      ? 'bg-emerald-500/20 text-emerald-400'
                      : 'bg-slate-600/50 text-slate-400'
                  }`}>
                    {standard.certifiable ? 'Certifiable' : 'Guidance'}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-sm font-medium hover:bg-slate-700 hover:border-cyan-500/50 transition-all"
              >
                <span>Need help with a specific standard?</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section id="sectors" className="py-32 relative bg-gradient-to-b from-slate-950 to-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-medium tracking-widest text-sm uppercase">Sector Experience</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              ISO Consultancy for Your Industry
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Practical, sector-aware support for the standards that matter most in your industry —
              from certification through to ongoing management.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                href: '/iso-consultancy-construction',
                emoji: '🏗️',
                title: 'Construction',
                standards: 'ISO 9001 · ISO 14001 · ISO 45001',
                description: 'CDM-aware health, safety, quality and environmental management for contractors and principal designers.',
              },
              {
                href: '/iso-consultancy-security',
                emoji: '🛡️',
                title: 'Security',
                standards: 'ISO 27001 · ISO 9001 · ISO 14001',
                description: 'Information security and quality management for manned guarding, cyber and physical security providers.',
              },
              {
                href: '/iso-consultancy-maritime',
                emoji: '⚓',
                title: 'Maritime',
                standards: 'ISO 9001 · ISO 14001 · ISO 45001 · ISO 27001',
                description: 'Quality, environmental and safety management for maritime, marine services and commercial diving operations.',
              },
            ].map((sector) => (
              <Link
                key={sector.href}
                href={sector.href}
                className="group p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-cyan-500/40 hover:-translate-y-1 transition-all"
              >
                <div className="text-4xl mb-4">{sector.emoji}</div>
                <h3 className="text-xl font-bold mb-2">{sector.title}</h3>
                <p className="text-xs text-cyan-400 font-medium mb-3">{sector.standards}</p>
                <p className="text-slate-400 text-sm mb-4">{sector.description}</p>
                <span className="inline-flex items-center gap-2 text-sm text-cyan-500 group-hover:text-cyan-400">
                  ISO consultancy for {sector.title.toLowerCase()}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI Audit Deep Dive Section */}
      <section id="ai-audit" className="py-32 relative bg-gradient-to-b from-slate-900/50 to-slate-950">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[160px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-cyan-400 font-medium tracking-widest text-sm uppercase">Specialist Service</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                Specialist ISO/IEC 42001 AI Management System Support
              </h2>
              <p className="text-slate-400 text-lg mb-4 leading-relaxed">
                As a specialist service under our ISO consultancy umbrella, we help organisations assess
                AI governance risks, prepare for ISO/IEC 42001, and align AI management systems with their
                broader ISO compliance.
              </p>
              <p className="text-slate-500 text-base mb-8 leading-relaxed">
                Led by an IRCA Registered Principal Auditor and aligned with ISO/IEC 42001, our support
                ensures your AI systems are governed responsibly and sit consistently alongside your
                existing ISO 27001, 9001, 14001 and 45001 management systems.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Protect Your Reputation</h3>
                    <p className="text-slate-500">Avoid PR crises from biased algorithms or unexplainable AI decisions that damage customer trust.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Reduce Regulatory Risk</h3>
                    <p className="text-slate-500">Stay ahead of evolving AI regulations with proactive compliance aligned to UK and EU frameworks.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Board-Ready Assurance</h3>
                    <p className="text-slate-500">Provide stakeholders and investors with documented evidence that your AI is responsibly governed.</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                >
                  Book a consultation
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* AI Visual */}
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 p-8 backdrop-blur-sm">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 flex items-center justify-center relative overflow-hidden">
                  {/* Animated Grid */}
                  <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-px opacity-30">
                    {[...Array(36)].map((_, i) => (
                      <div
                        key={i}
                        className="bg-cyan-400/20 animate-pulse"
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>

                  {/* Center Icon */}
                  <div className="relative z-10 w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-2xl shadow-cyan-500/30">
                    <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>

                  {/* Orbiting Elements */}
                  <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                    <div className="absolute top-8 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400" />
                  </div>
                  <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                    <div className="absolute bottom-12 right-12 w-3 h-3 rounded-full bg-blue-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Experience Section */}
      <section id="global" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <span className="text-cyan-400 font-medium tracking-widest text-sm uppercase">Global Reach</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Proven Track Record Across Europe
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Delivering excellence in compliance and governance across diverse industries
              and regulatory environments throughout the UK, Europe, and Nordics.
            </p>
          </div>
        </div>
      </section>

      {/* PICMS SaaS Platform Section */}
      <section id="picms" className="py-32 relative bg-gradient-to-b from-slate-900/50 to-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          {/* PICMS Hero */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 font-medium text-sm">Recommended Platform</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400">
                Ongoing ISO Management with PICMS
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              For organisations that need ongoing ISO control after consultancy, TAC recommends{' '}
              <a href="https://www.picms.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
                PICMS
              </a>{' '}
              — a UK-built ISO compliance platform designed by an IRCA Registered Principal Auditor.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* SaaS Visual */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                {/* Dashboard Preview */}
                <div className="rounded-2xl bg-slate-800/80 border border-slate-700/50 overflow-hidden shadow-2xl">
                  {/* Window Header */}
                  <div className="px-4 py-3 bg-slate-900/50 border-b border-slate-700/50 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="ml-4 text-slate-500 text-xs">www.picms.com</span>
                  </div>

                  {/* Dashboard Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center font-bold text-sm text-white">
                          P
                        </div>
                        <h4 className="font-semibold">PICMS Dashboard</h4>
                      </div>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">All Systems Go</span>
                    </div>

                    {/* Progress Bars */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">ISO 9001</span>
                        <span className="text-slate-300">95%</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full" style={{ width: '95%' }} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">ISO 45001</span>
                        <span className="text-slate-300">88%</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full" style={{ width: '88%' }} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">ISO 14001</span>
                        <span className="text-slate-300">72%</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full" style={{ width: '72%' }} />
                      </div>
                    </div>

                    {/* Mini Cards */}
                    <div className="grid grid-cols-3 gap-3 pt-4">
                      <div className="p-3 rounded-lg bg-slate-900/50">
                        <div className="text-2xl font-bold text-cyan-400">24</div>
                        <div className="text-xs text-slate-500">Active Audits</div>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-900/50">
                        <div className="text-2xl font-bold text-emerald-400">98%</div>
                        <div className="text-xs text-slate-500">Compliant</div>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-900/50">
                        <div className="text-2xl font-bold text-blue-400">£47k</div>
                        <div className="text-xs text-slate-500">Saved/Year</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 px-4 py-2 bg-slate-800 border border-emerald-500/30 rounded-lg shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs text-slate-300">Real-time sync</span>
                  </div>
                </div>

                {/* SME Badge */}
                <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-lg shadow-xl backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇬🇧</span>
                    <span className="text-xs text-slate-300 font-medium">Built for UK SMEs</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-emerald-400 font-medium tracking-widest text-sm uppercase">From Consultancy to Ongoing Control</span>
              <h3 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                Maintain Your Management System After Certification
              </h3>
              <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                Our consultancy gets your ISO management system implemented and certification-ready. To keep
                it living and audit-ready afterwards, TAC clients often move to the{' '}
                <a href="https://www.picms.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
                  PICMS ISO compliance platform
                </a>{' '}
                — software built by an IRCA Registered Principal Auditor.
              </p>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                PICMS is a separate SaaS product at PICMS.com. It helps you maintain evidence, audit actions,
                documentation and ongoing compliance once the consultancy work is done. For the full feature
                set, pricing and demos, head to{' '}
                <a href="https://www.picms.com/iso-compliance-software-uk" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
                  PICMS platform overview
                </a>.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  'TAC implements and improves your ISO management system',
                  'PICMS maintains evidence, audits, actions and documentation afterwards',
                  'Designed by an IRCA Registered Principal Auditor',
                  'Supports ISO 27001, 9001, 14001, 45001 and ISO/IEC 42001',
                  'A separate SaaS platform — software details and pricing live on PICMS.com',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                >
                  Book a consultation
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <Link
                  href="/picms"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 border border-slate-700 rounded-xl font-medium hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all"
                >
                  How TAC clients use PICMS
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* PICMS Benefits Grid */}
          <div className="mt-24 grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-slate-700/50">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 flex items-center justify-center">
                <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3">Keep Evidence Audit-Ready</h4>
              <p className="text-slate-400">
                PICMS holds your documents, audit findings, CAPAs and registers in one place — so the
                management system we build with you stays alive between audits.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-slate-700/50">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center">
                <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3">Built by an Auditor</h4>
              <p className="text-slate-400">
                PICMS is designed by an IRCA Registered Principal Auditor, so the platform mirrors how
                certification bodies actually assess your management system.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-slate-700/50">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/30 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3">Compare the Options</h4>
              <p className="text-slate-400">
                Weighing up tools? See the independent{' '}
                <a href="https://www.picms.com/best-iso-compliance-software-uk" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                  ISO compliance software comparison
                </a>{' '}
                on PICMS.com before you decide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Lead Gen Section */}
      <section id="contact" className="py-32 relative" aria-label="Contact form">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          {/* Free Resource Banner */}
          <div className="mb-12 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-2xl">
                  📋
                </div>
                <div>
                  <h3 className="font-semibold text-white">Free: ISO Gap Analysis Checklist</h3>
                  <p className="text-sm text-slate-400">Where does your management system stand? Get our ISO readiness checklist.</p>
                </div>
              </div>
              <a
                href="#contact"
                onClick={() => setFormData({...formData, interest: 'free-checklist'})}
                className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Get Free Checklist
              </a>
            </div>
          </div>

          <div className="text-center mb-12">
            <span className="text-cyan-400 font-medium tracking-widest text-sm uppercase">Get Started</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Book a Consultation
            </h2>
            <p className="text-slate-400 text-lg">
              Discuss your ISO certification, audit support or gap analysis needs with an IRCA
              Registered Principal Auditor. We typically respond within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm" aria-label="Contact form">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  aria-required="true"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-colors text-white placeholder-slate-500"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  aria-required="true"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-colors text-white placeholder-slate-500"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="contact-company" className="block text-sm font-medium text-slate-300 mb-2">Company</label>
                <input
                  id="contact-company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-colors text-white placeholder-slate-500"
                  placeholder="Company Ltd"
                />
              </div>
              <div>
                <label htmlFor="contact-interest" className="block text-sm font-medium text-slate-300 mb-2">I&apos;m Interested In</label>
                <select
                  id="contact-interest"
                  value={formData.interest}
                  onChange={(e) => setFormData({...formData, interest: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-colors text-white"
                >
                  <option value="iso-consultancy">ISO Consultancy</option>
                  <option value="iso-27001">ISO 27001 Consultancy</option>
                  <option value="audit-support">Audit Support &amp; Internal Audits</option>
                  <option value="gap-analysis">ISO Gap Analysis</option>
                  <option value="ai-governance">ISO/IEC 42001 AI Governance</option>
                  <option value="free-checklist">Free ISO Gap Analysis Checklist</option>
                  <option value="picms">PICMS (Ongoing ISO Management)</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="contact-message" className="block text-sm font-medium text-slate-300 mb-2">Message (Optional)</label>
              <textarea
                id="contact-message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-colors text-white placeholder-slate-500 resize-none"
                placeholder="Tell us about your requirements..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              {isSubmitting ? 'Sending...' : 'Send Enquiry'}
            </button>

            {submitStatus === 'success' && (
              <div role="alert" className="mt-4 p-4 bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-emerald-400 text-center">
                Thank you! We&apos;ll be in touch within 24 hours.
              </div>
            )}

            {submitStatus === 'error' && (
              <div role="alert" className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400 text-center">
                Something went wrong. Please try again or email us directly.
              </div>
            )}
          </form>
        </div>
      </section>

      <Footer variant="full" />
    </main>
  );
}
