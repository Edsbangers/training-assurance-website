'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  gradient: string;
  borderColor: string;
  link?: string;
  comingSoon?: boolean;
}

const services: Service[] = [
  {
    id: 'iso-27001',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'ISO 27001 Consultancy',
    subtitle: 'Information Security (ISMS)',
    description: 'Our lead standard. Practical, auditor-led support to build, certify and maintain an ISO 27001 information security management system.',
    features: [
      'ISO 27001 gap analysis',
      'ISMS implementation & risk assessment',
      'Statement of Applicability support',
      'Internal audit preparation & certification readiness',
      'Ongoing ISMS maintenance'
    ],
    gradient: 'from-cyan-500 to-blue-600',
    borderColor: 'hover:border-cyan-500/50',
    link: '/iso-27001-consultancy'
  },
  {
    id: 'iso-9001',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'ISO 9001 Consultancy',
    subtitle: 'Quality Management Systems',
    description: 'Expert guidance for implementing and maintaining ISO 9001 quality management systems. Achieve certification and drive continuous improvement.',
    features: [
      'Gap analysis & roadmap',
      'QMS documentation development',
      'Internal audit programmes',
      'Management review facilitation',
      'Certification body liaison'
    ],
    gradient: 'from-slate-700 to-blue-700',
    borderColor: 'hover:border-slate-400/50'
  },
  {
    id: 'iso-14001',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'ISO 14001 Consultancy',
    subtitle: 'Environmental Management',
    description: 'Develop robust environmental management systems that reduce your footprint, ensure compliance, and demonstrate sustainability leadership.',
    features: [
      'Environmental aspect identification',
      'Legal compliance registers',
      'Carbon footprint assessment',
      'Waste management optimisation',
      'Sustainability reporting'
    ],
    gradient: 'from-blue-600 to-slate-700',
    borderColor: 'hover:border-slate-400/50'
  },
  {
    id: 'iso-45001',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'ISO 45001 Consultancy',
    subtitle: 'Occupational Health & Safety',
    description: 'Comprehensive OH&S management system implementation with expert guidance for certification success.',
    features: [
      'Risk assessment frameworks',
      'Hazard identification systems',
      'Worker consultation processes',
      'Incident investigation protocols',
      'Behavioural safety programmes'
    ],
    gradient: 'from-emerald-500 to-cyan-500',
    borderColor: 'hover:border-emerald-500/50'
  },
  {
    id: 'audit-support',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: 'Audit Preparation & Internal Audits',
    subtitle: 'ISO Audit Support',
    description: 'Get audit-ready with an IRCA Registered Principal Auditor on your side. Internal audits, mock assessments and certification body liaison.',
    features: [
      'Internal audit programmes',
      'Pre-certification mock audits',
      'Non-conformity & CAPA support',
      'Stage 1 & Stage 2 readiness',
      'Certification body liaison'
    ],
    gradient: 'from-slate-700 to-slate-800',
    borderColor: 'hover:border-cyan-500/50'
  },
  {
    id: 'gap-analysis',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'ISO Gap Analysis & Implementation',
    subtitle: 'From Gap to Certified',
    description: 'An independent gap analysis against your target standard, then a practical roadmap to implement the management system and close every gap.',
    features: [
      'Gap analysis against the standard',
      'Prioritised implementation roadmap',
      'Documentation & process design',
      'Management system embedding',
      'Ongoing improvement support'
    ],
    gradient: 'from-blue-600 to-cyan-600',
    borderColor: 'hover:border-cyan-500/50'
  },
  {
    id: 'ai-governance',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'ISO/IEC 42001 AI Management',
    subtitle: 'Specialist Service',
    description: 'A specialist service under our ISO consultancy umbrella: assess AI governance risks and prepare for ISO/IEC 42001 alongside your wider ISO compliance.',
    features: [
      'AI governance risk assessment',
      'ISO/IEC 42001 readiness',
      'Alignment with ISO 27001 & 9001',
      'AI policy & control design',
      'Responsible AI documentation'
    ],
    gradient: 'from-purple-500 to-cyan-500',
    borderColor: 'hover:border-purple-500/50'
  }
];

export default function ServicesGrid() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => (
        <div
          key={service.id}
          className={`group relative p-6 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-950/80 border border-slate-700/50 ${service.borderColor} transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
          onClick={() => setExpandedId(expandedId === service.id ? null : service.id)}
        >
          {/* Coming Soon Badge */}
          {service.comingSoon && (
            <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              Coming Soon
            </div>
          )}

          {/* Icon */}
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-5 shadow-lg`}>
            {service.icon}
          </div>

          {/* Content */}
          <div className="mb-4">
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">{service.subtitle}</span>
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
              <h4 className="text-sm font-semibold text-slate-400 mb-3">Key Deliverables</h4>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-slate-400">
                    <svg className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Expand Indicator or Link */}
          {service.comingSoon ? (
            <div className="flex items-center gap-2 mt-4 text-sm text-amber-500">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>In Development</span>
            </div>
          ) : service.link ? (
            <Link
              href={service.link}
              className="flex items-center gap-2 mt-4 text-sm text-cyan-500 hover:text-cyan-400"
              onClick={(e) => e.stopPropagation()}
            >
              <span>View details</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          ) : (
            <div className="flex items-center gap-2 mt-4 text-sm text-cyan-500">
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
          )}

          {/* Gradient Border Effect on Hover */}
          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none`} />
        </div>
      ))}
    </div>
  );
}
