'use client';

import { useState, lazy, Suspense } from 'react';
import Image from 'next/image';

// Lazy load components that aren't immediately visible
const ServicesGrid = lazy(() => import('@/components/ServicesGrid'));

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: 'ai-audit',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          interest: 'ai-audit',
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

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center" aria-label="Training Assurance Consultancy - Home">
            <Image
              src="/logo.png"
              alt="TAC - Training Assurance Consultancy"
              width={200}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </a>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors">Services</a>
            <a href="#ai-audit" className="text-slate-400 hover:text-cyan-400 transition-colors">AI Governance</a>
            <a href="#picms" className="text-slate-400 hover:text-emerald-400 transition-colors">PICMS</a>
            <a href="#global" className="text-slate-400 hover:text-cyan-400 transition-colors">Global Reach</a>
            <a href="/about" className="text-slate-400 hover:text-cyan-400 transition-colors">About</a>
            <a href="/blog" className="text-slate-400 hover:text-cyan-400 transition-colors">Insights</a>
            <a href="/resources" className="text-slate-400 hover:text-cyan-400 transition-colors">Resources</a>
            <a href="#contact" className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
              Book Consultation
            </a>
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
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-slate-400 hover:text-cyan-400 transition-colors py-2">Services</a>
              <a href="#ai-audit" onClick={() => setMobileMenuOpen(false)} className="block text-slate-400 hover:text-cyan-400 transition-colors py-2">AI Governance</a>
              <a href="#picms" onClick={() => setMobileMenuOpen(false)} className="block text-slate-400 hover:text-emerald-400 transition-colors py-2">PICMS</a>
              <a href="#global" onClick={() => setMobileMenuOpen(false)} className="block text-slate-400 hover:text-cyan-400 transition-colors py-2">Global Reach</a>
              <a href="/about" onClick={() => setMobileMenuOpen(false)} className="block text-slate-400 hover:text-cyan-400 transition-colors py-2">About</a>
              <a href="/blog" onClick={() => setMobileMenuOpen(false)} className="block text-slate-400 hover:text-cyan-400 transition-colors py-2">Insights</a>
              <a href="/resources" onClick={() => setMobileMenuOpen(false)} className="block text-slate-400 hover:text-cyan-400 transition-colors py-2">Resources</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block w-full text-center px-5 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
                Book Consultation
              </a>
            </div>
          </div>
        )}
      </nav>

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
              500+ Successful Audits
            </span>
            <span className="px-4 py-2 bg-slate-800/60 border border-slate-700/50 rounded-full text-xs font-medium text-cyan-400 backdrop-blur-sm">
              ISO/IEC 42001 Specialist
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
              Human Intelligence
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400">
              Meets AI Governance
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Strategic SHEQ consultancy evolved. We combine decades of ISO expertise with
            cutting-edge AI auditing and proprietary SaaS solutions to future-proof your
            compliance and streamline your operations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 flex items-center gap-3"
            >
              Book an AI Audit
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#picms"
              className="px-8 py-4 bg-slate-800/60 border border-slate-700 rounded-xl font-semibold text-lg hover:bg-slate-800 hover:border-emerald-500/50 transition-all duration-300 flex items-center gap-2"
            >
              <span>Explore PICMS</span>
              <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded text-xs font-medium">NEW</span>
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
            <span className="text-cyan-400 font-medium tracking-widest text-sm uppercase">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              End-to-End Compliance &amp; Innovation
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              From traditional ISO certifications to cutting-edge AI governance,
              we provide the expertise and tools your business needs to thrive.
            </p>
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
              <span className="text-cyan-400 font-medium tracking-widest text-sm uppercase">AI Governance</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                De-risking AI Implementation
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                As AI systems become integral to business operations, ensuring their safety,
                fairness, and compliance is paramount. Our AI auditing services help you
                navigate this complex landscape with confidence.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">ISO/IEC 42001 Compliance</h3>
                    <p className="text-slate-500">Achieve certification for your AI management systems with expert guidance aligned to international standards.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Algorithmic Transparency</h3>
                    <p className="text-slate-500">Ensure your AI decisions are explainable, fair, and free from harmful bias with comprehensive auditing.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Risk &amp; Ethics Assessment</h3>
                    <p className="text-slate-500">Identify and mitigate potential risks before they impact your business or stakeholders.</p>
                  </div>
                </div>
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
              <span className="text-emerald-400 font-medium text-sm">Our Flagship Platform</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400">
                PICMS
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              The game-changing ISO compliance management platform built specifically for UK SMEs.
              Enterprise-grade compliance made affordable and accessible.
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
              <span className="text-emerald-400 font-medium tracking-widest text-sm uppercase">Introducing PICMS</span>
              <h3 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                ISO Compliance, Simplified for SMEs
              </h3>
              <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                We built <strong className="text-white">PICMS</strong> because we saw UK small and medium enterprises
                struggling with expensive, overcomplicated compliance software designed for enterprises.
                PICMS changes everything.
              </p>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Our platform delivers enterprise-grade ISO management at a fraction of the cost –
                helping UK businesses achieve and maintain certification without the consultancy fees
                or the complexity.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  'Purpose-built for UK SMEs – affordable monthly pricing',
                  'Manage ISO 9001, 14001, 45001 & 27001 in one place',
                  'Automated audit scheduling & compliance reminders',
                  'Document control with version history & approvals',
                  'Gap analysis tools to identify non-conformances fast',
                  'Certification-ready reports at the click of a button',
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
                  href="https://www.picms.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all"
                >
                  Visit PICMS.com
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 border border-slate-700 rounded-xl font-medium hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all"
                >
                  Request a Demo
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* PICMS Benefits Grid */}
          <div className="mt-24 grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-slate-700/50">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 flex items-center justify-center">
                <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3">70% Cost Reduction</h4>
              <p className="text-slate-400">
                Compared to traditional consultancy-led compliance management.
                SME-friendly pricing that scales with your business.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-slate-700/50">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center">
                <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3">50% Time Saved</h4>
              <p className="text-slate-400">
                Automated workflows, smart reminders, and one-click reporting
                cut your admin time in half.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-slate-700/50">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/30 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3">100% Audit Ready</h4>
              <p className="text-slate-400">
                Always be certification-ready with real-time compliance tracking
                and instant gap identification.
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
          <div className="text-center mb-12">
            <span className="text-cyan-400 font-medium tracking-widest text-sm uppercase">Get Started</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Ready to Transform Your Compliance?
            </h2>
            <p className="text-slate-400 text-lg">
              Book an AI audit, request a SaaS demo, or discuss your ISO certification needs.
              We typically respond within 24 hours.
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
                  <option value="ai-audit">AI Audit &amp; Governance</option>
                  <option value="saas-demo">SaaS Platform Demo</option>
                  <option value="iso-consultancy">ISO Consultancy</option>
                  <option value="combined">Combined Services</option>
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
                Thank you! We'll be in touch within 24 hours.
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

      {/* Footer */}
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
                <li><a href="/about" className="hover:text-cyan-400 transition-colors">About Us</a></li>
                <li><a href="/blog" className="hover:text-cyan-400 transition-colors">Insights</a></li>
                <li><a href="/resources" className="hover:text-cyan-400 transition-colors">Resources</a></li>
                <li><a href="#services" className="hover:text-cyan-400 transition-colors">Services</a></li>
                <li><a href="https://www.picms.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-1">PICMS Platform <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a></li>
                <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
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
              © {new Date().getFullYear()} Training Assurance Consultancy. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <a href="/privacy-policy" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="/terms-of-service" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
