'use client';

import { useState } from 'react';

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  gradient: string;
  borderColor: string;
}

const services: Service[] = [
  {
    id: 'ai-governance',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'AI Audits & Governance',
    subtitle: 'ISO/IEC 42001 Compliance',
    description: 'Comprehensive auditing of AI systems for compliance, ethics, safety, and algorithmic transparency. Ensure your AI implementations meet international standards.',
    features: [
      'ISO/IEC 42001 certification readiness',
      'Algorithmic bias assessment',
      'AI risk management frameworks',
      'Ethical AI implementation reviews',
      'Regulatory compliance mapping'
    ],
    gradient: 'from-cyan-500 to-blue-600',
    borderColor: 'hover:border-cyan-500/50'
  },
  {
    id: 'saas-solutions',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: 'PICMS Platform',
    subtitle: 'ISO Compliance for UK SMEs',
    description: 'Our flagship SaaS platform at picms.com – built specifically for UK small and medium enterprises to manage ISO compliance affordably and efficiently.',
    features: [
      'Purpose-built for UK SMEs',
      'Multi-standard management (9001, 14001, 45001, 27001)',
      'Automated audit scheduling & reminders',
      'Document control with version history',
      'Real-time compliance dashboards'
    ],
    gradient: 'from-emerald-500 to-cyan-600',
    borderColor: 'hover:border-emerald-500/50'
  },
  {
    id: 'iso-9001',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'ISO 9001',
    subtitle: 'Quality Management Systems',
    description: 'Expert guidance for implementing and maintaining ISO 9001 quality management systems. Achieve certification and drive continuous improvement.',
    features: [
      'Gap analysis & roadmap',
      'QMS documentation development',
      'Internal audit programmes',
      'Management review facilitation',
      'Certification body liaison'
    ],
    gradient: 'from-emerald-500 to-teal-600',
    borderColor: 'hover:border-emerald-500/50'
  },
  {
    id: 'iso-45001',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'ISO 45001',
    subtitle: 'Occupational Health & Safety',
    description: 'Comprehensive OH&S management system implementation led by an NVQ Level 7 Strategic Health & Safety professional.',
    features: [
      'Risk assessment frameworks',
      'Hazard identification systems',
      'Worker consultation processes',
      'Incident investigation protocols',
      'Behavioural safety programmes'
    ],
    gradient: 'from-orange-500 to-amber-600',
    borderColor: 'hover:border-orange-500/50'
  },
  {
    id: 'iso-14001',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'ISO 14001',
    subtitle: 'Environmental Management',
    description: 'Develop robust environmental management systems that reduce your footprint, ensure compliance, and demonstrate sustainability leadership.',
    features: [
      'Environmental aspect identification',
      'Legal compliance registers',
      'Carbon footprint assessment',
      'Waste management optimisation',
      'Sustainability reporting'
    ],
    gradient: 'from-green-500 to-emerald-600',
    borderColor: 'hover:border-green-500/50'
  },
  {
    id: 'iso-27001',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'ISO 27001',
    subtitle: 'Information Security',
    description: 'Protect your information assets with a comprehensive ISMS. Critical for organisations handling sensitive data and pursuing digital transformation.',
    features: [
      'Information asset inventory',
      'Risk assessment & treatment',
      'Security controls implementation',
      'Business continuity planning',
      'Third-party security assessments'
    ],
    gradient: 'from-violet-500 to-purple-600',
    borderColor: 'hover:border-violet-500/50'
  }
];

export default function ServicesGrid() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => (
        <div
          key={service.id}
          className={`group relative p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 ${service.borderColor} transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
          onClick={() => setExpandedId(expandedId === service.id ? null : service.id)}
        >
          {/* Icon */}
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-5 shadow-lg`}>
            {service.icon}
          </div>

          {/* Content */}
          <div className="mb-4">
            <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">{service.subtitle}</span>
            <h3 className="text-xl font-bold mt-1 mb-3">{service.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
          </div>

          {/* Expandable Features */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              expandedId === service.id ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="pt-4 border-t border-slate-700/50">
              <h4 className="text-sm font-semibold text-slate-300 mb-3">Key Deliverables</h4>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-slate-400">
                    <svg className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Expand Indicator */}
          <div className="flex items-center gap-2 mt-4 text-sm text-cyan-400">
            <span>{expandedId === service.id ? 'Show less' : 'Learn more'}</span>
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${expandedId === service.id ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* Gradient Border Effect on Hover */}
          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none`} />
        </div>
      ))}
    </div>
  );
}
