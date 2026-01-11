"use client";

import Link from "next/link";
import Image from "next/image";

export default function About() {
  const credentials = [
    {
      title: "IRCA Registered Principal Auditor",
      description: "International Register of Certificated Auditors",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "SHEQ Excellence",
      description: "Strategic health, safety, environment & quality expertise",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: "ISO/IEC 42001 Specialist",
      description: "AI Management Systems auditor and implementer",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "500+ Audits",
      description: "Successful audits with 100% certification rate",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const values = [
    {
      title: "Integrity",
      description:
        "We maintain the highest ethical standards in all our auditing and consultancy work, providing honest assessments and unbiased recommendations.",
    },
    {
      title: "Excellence",
      description:
        "We strive for excellence in every engagement, combining deep technical expertise with practical, actionable guidance.",
    },
    {
      title: "Innovation",
      description:
        "We stay at the forefront of emerging standards like AI governance while helping organisations adopt forward-thinking compliance strategies.",
    },
    {
      title: "Partnership",
      description:
        "We work as an extension of your team, understanding your unique challenges and tailoring solutions to your specific needs.",
    },
  ];

  const timeline = [
    {
      year: "2022",
      title: "Founded",
      description: "TAC established with focus on health & safety consultancy in the UK",
    },
    {
      year: "2023",
      title: "ISO Expansion",
      description: "Expanded services to include full ISO management system consultancy",
    },
    {
      year: "2023",
      title: "European Growth",
      description: "Extended operations to Ireland, Netherlands, Norway, and Italy",
    },
    {
      year: "2024",
      title: "AI Governance",
      description: "Pioneered AI auditing services with ISO/IEC 42001 specialisation",
    },
    {
      year: "2025",
      title: "Digital Transformation",
      description: "Launched PICMS platform to digitise compliance management",
    },
    {
      year: "2025",
      title: "500+ Audits",
      description: "Reached milestone of 500+ successful audits with 100% certification rate",
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
              <Link
                href="/"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/#services"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Services
              </Link>
              <Link
                href="/#contact"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Training Assurance Consultancy
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Bridging traditional SHEQ excellence with cutting-edge AI governance,
            we help organisations navigate the evolving landscape of compliance
            and risk management.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-slate-300 mb-4">
                To empower organisations with the knowledge, systems, and
                confidence to achieve and maintain world-class compliance
                standards, whether in traditional SHEQ disciplines or emerging
                AI governance frameworks.
              </p>
              <p className="text-slate-300">
                We believe that robust compliance isn&apos;t just about meeting
                requirements—it&apos;s about building resilient, ethical, and
                sustainable business practices that create lasting value.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {credentials.map((credential, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-center"
                >
                  <div className="text-cyan-400 flex justify-center mb-3">
                    {credential.icon}
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{credential.title}</h3>
                  <p className="text-xs text-slate-400">{credential.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-emerald-500 to-purple-500" />

            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-cyan-400 rounded-full transform -translate-x-1/2 ring-4 ring-slate-950" />

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
                    <span className="text-cyan-400 font-bold text-lg">
                      {item.year}
                    </span>
                    <h3 className="font-semibold text-white mt-1">{item.title}</h3>
                    <p className="text-slate-400 text-sm mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Governance</h3>
              <p className="text-slate-400 text-sm">
                Pioneering ISO/IEC 42001 implementation and AI risk assessment
                for responsible AI deployment.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">ISO Standards</h3>
              <p className="text-slate-400 text-sm">
                Comprehensive consultancy across ISO 9001, 14001, 45001, and
                27001 management systems.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">SHEQ Excellence</h3>
              <p className="text-slate-400 text-sm">
                Strategic health, safety, environment, and quality management
                with proven expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-emerald-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-slate-400 mb-8">
            Let&apos;s discuss how we can help your organisation achieve compliance
            excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </Link>
            <Link
              href="/#services"
              className="px-8 py-3 border border-slate-600 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Training Assurance Consultancy.
              All rights reserved.
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
