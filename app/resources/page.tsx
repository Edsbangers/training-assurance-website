"use client";

import Link from "next/link";
import Image from "next/image";

export default function Resources() {
  const articles = [
    {
      id: "understanding-iso-42001",
      title: "Understanding ISO/IEC 42001: The New Standard for AI Management Systems",
      excerpt:
        "A comprehensive guide to the world's first international standard for AI management systems, and what it means for your organisation.",
      category: "AI Governance",
      date: "January 2026",
      readTime: "8 min read",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      id: "ai-risk-assessment-framework",
      title: "Building an Effective AI Risk Assessment Framework",
      excerpt:
        "Learn how to identify, evaluate, and mitigate risks associated with AI systems in your organisation.",
      category: "AI Governance",
      date: "December 2025",
      readTime: "6 min read",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      id: "iso-9001-2025-updates",
      title: "ISO 9001: Key Considerations for 2025 and Beyond",
      excerpt:
        "Stay ahead of the curve with our analysis of emerging trends and best practices in quality management systems.",
      category: "Quality Management",
      date: "November 2025",
      readTime: "5 min read",
      gradient: "from-emerald-500 to-green-600",
    },
    {
      id: "integrating-management-systems",
      title: "The Benefits of Integrated Management Systems",
      excerpt:
        "Discover how combining ISO 9001, 14001, and 45001 into a single IMS can streamline operations and reduce costs.",
      category: "ISO Standards",
      date: "October 2025",
      readTime: "7 min read",
      gradient: "from-purple-500 to-violet-600",
    },
    {
      id: "sheq-digital-transformation",
      title: "Digital Transformation in SHEQ: Moving Beyond Spreadsheets",
      excerpt:
        "How modern SaaS platforms like PICMS are revolutionising compliance management for SMEs.",
      category: "Digital Compliance",
      date: "September 2025",
      readTime: "6 min read",
      gradient: "from-pink-500 to-rose-600",
    },
    {
      id: "preparing-for-certification-audit",
      title: "Preparing for Your ISO Certification Audit: A Complete Checklist",
      excerpt:
        "Everything you need to know to ensure a successful certification audit, from documentation to staff preparation.",
      category: "Certification",
      date: "August 2025",
      readTime: "10 min read",
      gradient: "from-orange-500 to-red-600",
    },
  ];

  const guides = [
    {
      title: "AI Governance Starter Kit",
      description:
        "Essential templates and checklists for organisations beginning their AI governance journey.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "ISO Implementation Roadmap",
      description:
        "Step-by-step guide to implementing ISO management systems in your organisation.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
          />
        </svg>
      ),
    },
    {
      title: "Audit Preparation Toolkit",
      description:
        "Comprehensive resources to help you prepare for internal and external audits.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      ),
    },
  ];

  const categories = [
    "All",
    "AI Governance",
    "Quality Management",
    "ISO Standards",
    "Digital Compliance",
    "Certification",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800"
        aria-label="Main navigation"
      >
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Resources & Insights
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Expert guidance on AI governance, ISO compliance, and SHEQ best
            practices. Stay informed with our latest articles, guides, and
            industry insights.
          </p>
        </div>
      </section>

      {/* Downloadable Guides Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Free Downloadable Guides
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {guides.map((guide, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-colors group"
              >
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                  {guide.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{guide.title}</h3>
                <p className="text-slate-400 text-sm mb-4">
                  {guide.description}
                </p>
                <Link
                  href="/#contact"
                  className="text-cyan-400 text-sm font-medium hover:text-cyan-300 transition-colors inline-flex items-center gap-1"
                >
                  Request Access
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center" role="tablist" aria-label="Filter articles by category">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All"
                    ? "bg-cyan-500 text-white"
                    : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
                }`}
                role="tab"
                aria-selected={category === "All"}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition-colors group"
              >
                {/* Gradient Header */}
                <div
                  className={`h-2 bg-gradient-to-r ${article.gradient}`}
                  aria-hidden="true"
                />

                <div className="p-6">
                  {/* Category & Date */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${article.gradient} text-white`}
                    >
                      {article.category}
                    </span>
                    <span className="text-xs text-slate-500">
                      {article.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">
                      {article.readTime}
                    </span>
                    <span className="text-cyan-400 text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Read More
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-emerald-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-slate-400 mb-8">
            Get the latest insights on AI governance and ISO compliance delivered
            to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-slate-500"
              aria-label="Email address for newsletter"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-slate-500 mt-4">
            No spam. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8" role="contentinfo">
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
