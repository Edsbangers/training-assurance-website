"use client";

import Link from "next/link";
import Image from "next/image";

export default function CaseStudies() {
  const caseStudies = [
    {
      id: "construction-ai-audit",
      title: "AI Audit Transforms Construction Operations",
      client: "Major UK Construction Firm",
      industry: "Construction",
      services: ["AI Audit", "Agentic Solutions", "Process Optimisation"],
      challenge:
        "A large construction firm managing a major project was struggling with outdated manual processes that significantly slowed their operations, causing delays and inefficiencies across their management system.",
      solution:
        "We conducted a comprehensive AI audit to identify bottlenecks and opportunities for automation. We then implemented agentic solutions across their management system, automating document workflows, scheduling, and compliance tracking.",
      results: [
        "Increased productivity by 60% across operations",
        "Automated key management system processes",
        "Reduced project delays through intelligent scheduling",
        "Established scalable AI-driven workflow systems",
      ],
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      id: "manufacturing-ims",
      title: "Integrated Management System for European Manufacturer",
      client: "Multinational Manufacturing Corporation",
      industry: "Manufacturing",
      services: ["ISO 9001", "ISO 14001", "ISO 45001"],
      challenge:
        "A major manufacturer with facilities across the UK, Netherlands, and Norway needed to harmonise their quality, environmental, and safety management systems across all sites.",
      solution:
        "We designed and implemented an integrated management system (IMS) that unified all three ISO standards, streamlining processes and reducing duplication while maintaining compliance at each facility.",
      results: [
        "Successfully certified across all 3 standards at 4 facilities",
        "Reduced documentation overhead by 40%",
        "Harmonised processes across European operations",
        "Achieved zero non-conformances at surveillance audits",
      ],
      gradient: "from-emerald-500 to-green-600",
    },
    {
      id: "healthcare-iso27001",
      title: "Information Security for Healthcare Provider",
      client: "Private Healthcare Group",
      industry: "Healthcare",
      services: ["ISO 27001", "Data Protection", "Risk Assessment"],
      challenge:
        "A healthcare provider handling sensitive patient data needed to strengthen their information security posture and achieve ISO 27001 certification to meet NHS Digital requirements.",
      solution:
        "We conducted a comprehensive gap analysis, implemented robust ISMS controls, and prepared the organisation for certification while ensuring alignment with NHS Data Security and Protection Toolkit.",
      results: [
        "Achieved ISO 27001 certification first time",
        "Successfully passed NHS DSPT assessment",
        "Implemented security awareness programme for 500+ staff",
        "Zero security incidents in 12 months post-certification",
      ],
      gradient: "from-purple-500 to-violet-600",
    },
    {
      id: "logistics-safety",
      title: "Safety Culture Transformation for Logistics Company",
      client: "National Logistics Provider",
      industry: "Logistics & Distribution",
      services: ["ISO 45001", "Safety Culture", "Training"],
      challenge:
        "A logistics company with high incident rates needed to transform their safety culture and achieve ISO 45001 certification to retain key contracts.",
      solution:
        "We implemented a comprehensive safety management system with emphasis on behavioural safety, leadership engagement, and front-line worker participation, supported by extensive training programmes.",
      results: [
        "Reduced incident rate by 65% over 18 months",
        "Achieved ISO 45001 certification",
        "Trained 200+ operatives in safety leadership",
        "Retained and won new contracts worth £5M annually",
      ],
      gradient: "from-orange-500 to-red-600",
    },
    {
      id: "tech-startup-picms",
      title: "PICMS Implementation for Growing Tech Company",
      client: "SaaS Technology Startup",
      industry: "Technology",
      services: ["PICMS Platform", "ISO 9001", "Process Automation"],
      challenge:
        "A fast-growing SaaS company needed to establish quality management processes that could scale with their growth while maintaining agility and minimising administrative burden.",
      solution:
        "We implemented our PICMS platform to digitise their quality management system, automating document control, audit scheduling, and corrective actions while maintaining ISO 9001 compliance.",
      results: [
        "Achieved ISO 9001 certification in 6 months",
        "Reduced QMS administration time by 70%",
        "Automated compliance monitoring and alerts",
        "Scaled from 50 to 200 employees with same QMS infrastructure",
      ],
      gradient: "from-pink-500 to-rose-600",
    },
    {
      id: "construction-environmental",
      title: "Environmental Compliance for Construction Firm",
      client: "Regional Construction Company",
      industry: "Construction",
      services: ["ISO 14001", "Environmental Impact", "Sustainability"],
      challenge:
        "A construction company needed to demonstrate environmental responsibility to win public sector contracts and meet increasingly stringent environmental requirements.",
      solution:
        "We developed and implemented a comprehensive environmental management system, including carbon footprint assessment, waste management procedures, and sustainable procurement policies.",
      results: [
        "Achieved ISO 14001 certification",
        "Reduced carbon emissions by 25% in first year",
        "Won £12M in public sector contracts",
        "Established industry-leading sustainability reporting",
      ],
      gradient: "from-teal-500 to-cyan-600",
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
                href="/about"
                className="text-slate-300 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Insights
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Real results from real clients. Explore how we&apos;ve helped organisations
            across industries achieve compliance excellence and operational
            improvement.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-cyan-400">500+</div>
              <div className="text-slate-500 mt-1">Audits Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-300">100%</div>
              <div className="text-slate-500 mt-1">Certification Success</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400">5</div>
              <div className="text-slate-500 mt-1">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400">3+</div>
              <div className="text-slate-500 mt-1">Years Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8">
            {caseStudies.map((study, index) => (
              <article
                key={study.id}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden"
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {study.services.map((service) => (
                          <span
                            key={service}
                            className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${study.gradient} text-white`}
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                      <h2 className="text-2xl font-bold text-white mb-2">
                        {study.title}
                      </h2>
                      <p className="text-slate-500">
                        {study.client} &bull; {study.industry}
                      </p>
                    </div>
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${study.gradient} flex items-center justify-center text-white font-bold text-lg`}
                    >
                      {index + 1}
                    </div>
                  </div>

                  {/* Content Grid */}
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Challenge */}
                    <div className="bg-slate-950/50 rounded-xl p-5">
                      <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                        <svg
                          className="w-5 h-5 text-amber-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                          />
                        </svg>
                        Challenge
                      </h3>
                      <p className="text-slate-400 text-sm">{study.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div className="bg-slate-950/50 rounded-xl p-5">
                      <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                        <svg
                          className="w-5 h-5 text-slate-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>
                        Solution
                      </h3>
                      <p className="text-slate-400 text-sm">{study.solution}</p>
                    </div>

                    {/* Results */}
                    <div className="bg-slate-950/50 rounded-xl p-5">
                      <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                        <svg
                          className="w-5 h-5 text-emerald-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Results
                      </h3>
                      <ul className="text-slate-400 text-sm space-y-1">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-emerald-500 mt-1">•</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/20 to-cyan-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-slate-400 mb-8">
            Let&apos;s discuss how we can help your organisation achieve similar
            results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Start Your Project
            </Link>
            <Link
              href="/#services"
              className="px-8 py-3 border border-slate-700 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors"
            >
              Explore Services
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
              <Link
                href="/privacy-policy"
                className="hover:text-cyan-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="hover:text-cyan-400 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
