import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Security | Training Assurance Consultancy',
  description: 'Our commitment to information security and data protection. Learn about our security practices aligned with ISO 27001 standards.',
};

export default function SecurityPage() {
  const sections = [
    {
      title: 'Information Security Management',
      icon: '🔒',
      content: [
        'Our information security management system (ISMS) is designed and operated in alignment with ISO/IEC 27001:2022 requirements.',
        'We maintain comprehensive security policies covering all aspects of information handling, from data classification to incident response.',
        'Regular security assessments and penetration testing ensure our controls remain effective against evolving threats.',
      ],
    },
    {
      title: 'Data Protection & GDPR Compliance',
      icon: '📋',
      content: [
        'As a UK-based consultancy, we fully comply with the UK GDPR and Data Protection Act 2018.',
        'We process personal data lawfully, fairly, and transparently, collecting only what is necessary for our legitimate business purposes.',
        'Data subjects have full rights over their personal data, including access, rectification, erasure, and portability.',
        'We maintain detailed records of processing activities and conduct regular data protection impact assessments.',
      ],
    },
    {
      title: 'ISO 27001 Alignment',
      icon: '✅',
      content: [
        'Our security controls are aligned with Annex A of ISO/IEC 27001:2022, covering all 93 controls across organisational, people, physical, and technological domains.',
        'We maintain a comprehensive Statement of Applicability documenting our control implementation status.',
        'Internal audits are conducted annually to verify ongoing compliance and identify improvement opportunities.',
      ],
    },
    {
      title: 'Third-Party Security',
      icon: '🤝',
      content: [
        'All suppliers and partners undergo security assessment before engagement.',
        'We maintain vendor risk management processes to monitor ongoing supplier security posture.',
        'Contractual arrangements include appropriate security requirements and data processing agreements.',
      ],
    },
    {
      title: 'Incident Response',
      icon: '🚨',
      content: [
        'We maintain a documented incident response plan with clear escalation procedures.',
        'Security incidents are reported, investigated, and resolved in accordance with regulatory timeframes.',
        'Post-incident reviews drive continuous improvement of our security controls.',
      ],
    },
    {
      title: 'Business Continuity',
      icon: '🔄',
      content: [
        'Business continuity and disaster recovery plans ensure service availability.',
        'Critical systems and data are regularly backed up with tested restoration procedures.',
        'Our cloud infrastructure provides resilience through geographic redundancy.',
      ],
    },
  ];

  const keyMeasures = [
    'End-to-end encryption for data in transit (TLS 1.3)',
    'Encryption at rest for all stored data (AES-256)',
    'Multi-factor authentication for all administrative access',
    'Regular vulnerability scanning and penetration testing',
    'Employee security awareness training',
    'Access control based on least privilege principle',
    'Continuous monitoring and logging of security events',
    'Annual third-party security audits',
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
              <Link href="/blog" className="text-slate-400 hover:text-white transition-colors">
                Insights
              </Link>
              <Link href="/security/certifications" className="text-slate-400 hover:text-white transition-colors">
                Certifications
              </Link>
              <Link
                href="/#contact"
                className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-slate-800 border border-slate-700">
            <span className="text-cyan-400 text-sm font-medium">ISO 27001 Aligned</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Security Whitepaper
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Our commitment to protecting your information. This document outlines our security practices,
            controls, and compliance measures.
          </p>
        </div>
      </section>

      {/* Key Security Measures */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Key Security Measures</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {keyMeasures.map((measure, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-slate-800/50 border border-slate-700 rounded-xl p-4"
              >
                <svg className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-slate-400 text-sm">{measure}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl">{section.icon}</span>
                <h2 className="text-2xl font-bold">{section.title}</h2>
              </div>
              <div className="space-y-4">
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-slate-400 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Security Questions?</h2>
          <p className="text-slate-400 mb-8">
            For security-related inquiries or to request our full security documentation, please contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Contact Security Team
            </Link>
            <Link
              href="/security/certifications"
              className="px-8 py-3 border border-slate-700 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors"
            >
              View Certifications
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Training Assurance Consultancy. All rights reserved.
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
