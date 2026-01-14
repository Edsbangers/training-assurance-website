import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Certifications | Training Assurance Consultancy',
  description: 'View our professional certifications and accreditations. IRCA registered Principal Auditor with expertise across multiple ISO standards.',
};

export default function CertificationsPage() {
  const certifications = [
    {
      name: 'IRCA Principal Auditor',
      issuer: 'International Register of Certificated Auditors',
      description: 'Registered Lead Auditor qualified to conduct third-party certification audits for ISO management systems.',
      standards: ['ISO 9001', 'ISO 14001', 'ISO 45001'],
      icon: '🏆',
    },
    {
      name: 'ISO/IEC 42001 Lead Auditor',
      issuer: 'PECB',
      description: 'Certified to audit Artificial Intelligence Management Systems against the ISO/IEC 42001 standard.',
      standards: ['ISO/IEC 42001'],
      icon: '🤖',
    },
    {
      name: 'ISO 27001 Lead Auditor',
      issuer: 'BSI',
      description: 'Qualified to audit Information Security Management Systems in accordance with ISO/IEC 27001.',
      standards: ['ISO/IEC 27001'],
      icon: '🔒',
    },
    {
      name: 'NEBOSH National General Certificate',
      issuer: 'NEBOSH',
      description: 'National Examination Board in Occupational Safety and Health qualification in health and safety management.',
      standards: ['Health & Safety'],
      icon: '🦺',
    },
  ];

  const memberships = [
    {
      name: 'Chartered Quality Institute',
      level: 'Member (MCQI)',
      description: 'Professional membership demonstrating commitment to quality excellence.',
    },
    {
      name: 'Institute of Environmental Management & Assessment',
      level: 'Associate Member',
      description: 'Environmental management professional body membership.',
    },
    {
      name: 'Institution of Occupational Safety and Health',
      level: 'Tech IOSH',
      description: 'Health and safety professional body membership.',
    },
  ];

  const experience = [
    { label: 'Audits Completed', value: '500+' },
    { label: 'Certification Rate', value: '100%' },
    { label: 'Countries Operated', value: '5' },
    { label: 'Years Experience', value: '3+' },
  ];

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
              <Link href="/" className="text-[#B0C4DE] hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/security" className="text-[#B0C4DE] hover:text-white transition-colors">
                Security
              </Link>
              <Link
                href="/#contact"
                className="px-4 py-2 bg-gradient-to-r from-[#FF8C00] to-[#e67e00] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Certifications & Accreditations
          </h1>
          <p className="text-lg text-[#B0C4DE] max-w-2xl mx-auto">
            Our credentials demonstrate our commitment to excellence and our capability to deliver
            world-class consultancy and auditing services.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#001845]/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {experience.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold text-[#FF8C00] mb-2">{stat.value}</div>
                <div className="text-[#8ba3c7]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Professional Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="bg-[#001845]/50 border border-[#002366] rounded-2xl p-6 hover:border-[#FF8C00]/50 transition-colors"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">{cert.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold">{cert.name}</h3>
                    <p className="text-[#FF8C00] text-sm">{cert.issuer}</p>
                  </div>
                </div>
                <p className="text-[#B0C4DE] mb-4">{cert.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cert.standards.map((standard) => (
                    <span
                      key={standard}
                      className="px-3 py-1 bg-[#002366] rounded-full text-xs text-[#B0C4DE]"
                    >
                      {standard}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Memberships */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#001845]/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Professional Memberships</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {memberships.map((membership) => (
              <div
                key={membership.name}
                className="bg-[#001845]/50 border border-[#002366] rounded-xl p-6 text-center"
              >
                <h3 className="text-lg font-semibold mb-1">{membership.name}</h3>
                <p className="text-[#FF8C00] text-sm mb-3">{membership.level}</p>
                <p className="text-[#8ba3c7] text-sm">{membership.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Work with a Certified Expert</h2>
          <p className="text-[#B0C4DE] mb-8">
            Get expert guidance from a certified Lead Auditor with proven experience across multiple ISO standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="px-8 py-3 bg-gradient-to-r from-[#FF8C00] to-[#e67e00] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Book a Consultation
            </Link>
            <Link
              href="/about"
              className="px-8 py-3 border border-[#002366] text-white font-semibold rounded-lg hover:bg-[#001845] transition-colors"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#001845] border-t border-[#002366] py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#6b8db4] text-sm">
              &copy; {new Date().getFullYear()} Training Assurance Consultancy. All rights reserved.
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
