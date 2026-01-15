import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Bespoke Software Solutions | Training Assurance Consultancy',
  description: 'Custom SaaS and software solutions tailored to your business needs. Streamline operations, increase productivity, and achieve compliance with our bespoke development services.',
  keywords: ['bespoke software', 'custom SaaS', 'business software', 'productivity solutions', 'compliance software', 'workflow automation'],
};

export default function SoftwareSolutionsPage() {
  const solutions = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: 'Compliance Management Systems',
      description: 'Custom-built platforms to manage your specific compliance requirements, from document control to audit scheduling.',
      features: ['Tailored to your industry regulations', 'Automated compliance tracking', 'Custom reporting dashboards'],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: 'Workflow Automation',
      description: 'Eliminate manual processes with intelligent automation that adapts to your business workflows.',
      features: ['Process mapping & optimisation', 'Automated task routing', 'Integration with existing systems'],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Business Intelligence & Analytics',
      description: 'Transform your data into actionable insights with custom dashboards and reporting tools.',
      features: ['Real-time data visualisation', 'KPI tracking & alerts', 'Predictive analytics'],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Training & Learning Platforms',
      description: 'Custom e-learning solutions to deliver, track, and certify training across your organisation.',
      features: ['Course creation tools', 'Progress tracking & certification', 'Compliance training modules'],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'API & System Integration',
      description: 'Connect your existing tools and systems with custom integrations that streamline data flow.',
      features: ['REST API development', 'Third-party integrations', 'Data synchronisation'],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'AI-Powered Solutions',
      description: 'Leverage artificial intelligence to automate decision-making and enhance productivity.',
      features: ['Intelligent document processing', 'Automated insights & recommendations', 'Chatbots & virtual assistants'],
    },
  ];

  const successStories = [
    {
      stat: '60%',
      label: 'Productivity Increase',
      description: 'Average improvement in operational efficiency across our implementations',
    },
    {
      stat: '40%',
      label: 'Time Saved',
      description: 'Reduction in manual administrative tasks through automation',
    },
    {
      stat: '100%',
      label: 'Client Satisfaction',
      description: 'Our bespoke solutions are tailored to meet exact requirements',
    },
    {
      stat: '24/7',
      label: 'System Availability',
      description: 'Enterprise-grade reliability with continuous monitoring',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We begin by understanding your unique challenges, workflows, and objectives through in-depth consultations.',
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Our team architects a tailored solution that addresses your specific needs while planning for future scalability.',
    },
    {
      step: '03',
      title: 'Agile Development',
      description: 'We build your solution iteratively, with regular demonstrations and feedback cycles to ensure alignment.',
    },
    {
      step: '04',
      title: 'Deployment & Training',
      description: 'Smooth rollout with comprehensive training to ensure your team gets maximum value from day one.',
    },
    {
      step: '05',
      title: 'Ongoing Support',
      description: 'Continuous improvement and support to evolve your solution as your business grows.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[160px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-purple-500/10 border border-purple-500/30">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <span className="text-purple-400 text-sm font-medium">Bespoke Development</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                Software Solutions Built for Your Business
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto">
              Every business is unique. Our bespoke software solutions are designed to address your specific
              challenges, streamline your operations, and drive measurable improvements in productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-purple-500/20"
              >
                Discuss Your Project
              </Link>
              <Link
                href="/case-studies"
                className="px-8 py-4 border border-slate-700 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Proven Results for Our Clients
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our solutions have already helped businesses across the UK streamline their services
              and achieve significant improvements in efficiency.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {story.stat}
                </div>
                <div className="font-semibold text-white mb-1">{story.label}</div>
                <p className="text-sm text-slate-500">{story.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-purple-400 font-medium tracking-widest text-sm uppercase">Our Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
              Tailored Solutions for Every Need
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              From compliance management to AI-powered automation, we build software that solves
              your specific business challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-950/80 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white mb-5 shadow-lg">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-500">
                      <svg className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-purple-400 font-medium tracking-widest text-sm uppercase">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
              From Concept to Delivery
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Our proven development process ensures your solution is delivered on time,
              on budget, and exceeds expectations.
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500/50 via-cyan-500/50 to-purple-500/50 -translate-y-1/2" />

            <div className="grid lg:grid-cols-5 gap-8">
              {process.map((step, index) => (
                <div key={index} className="relative">
                  <div className="lg:text-center">
                    <div className="inline-flex lg:mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 items-center justify-center text-white font-bold text-xl mb-4 shadow-lg shadow-purple-500/20 relative z-10">
                      {step.step}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-slate-500 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PICMS Callout */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-3">Looking for Ready-Made ISO Compliance?</h3>
                <p className="text-slate-400 mb-6">
                  Our flagship PICMS platform provides comprehensive ISO compliance management
                  out of the box, designed specifically for UK SMEs.
                </p>
                <Link
                  href="/picms"
                  className="inline-flex px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                  Explore PICMS Platform
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how a bespoke software solution can address your unique challenges
            and help your business achieve its full potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
            >
              Start Your Project
            </Link>
            <Link
              href="/case-studies"
              className="px-8 py-4 border border-slate-700 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
