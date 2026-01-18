import Script from 'next/script';

interface SchemaMarkupProps {
  type: 'organization' | 'professionalService' | 'softwareApplication' | 'person' | 'faqPage';
  data?: Record<string, unknown>;
}

export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  const baseUrl = 'https://www.trainingassuranceconsultancy.com';

  const schemas: Record<string, object> = {
    organization: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Training Assurance Consultancy',
      alternateName: 'TAC',
      url: baseUrl,
      logo: `${baseUrl}/logo.png`,
      description: 'Strategic SHEQ Lead Auditor Authority. Expert consultancy in AI Governance, Quality, Environmental, Health & Safety, and Information Security management systems.',
      foundingDate: '2022',
      founders: [
        {
          '@type': 'Person',
          name: 'Lead Auditor',
          jobTitle: 'Principal Consultant & Lead Auditor',
        },
      ],
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'GB',
      },
      areaServed: [
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'Ireland' },
        { '@type': 'Country', name: 'Netherlands' },
        { '@type': 'Country', name: 'Norway' },
        { '@type': 'Country', name: 'Italy' },
      ],
      sameAs: [
        'https://linkedin.com/company/training-assurance-consultancy',
        'https://facebook.com/trainingassuranceconsultancy',
        'https://instagram.com/trainingassuranceconsultancy',
      ],
      ...data,
    },

    professionalService: {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'Training Assurance Consultancy',
      url: baseUrl,
      logo: `${baseUrl}/logo.png`,
      image: `${baseUrl}/logo.png`,
      description: 'Strategic SHEQ Lead Auditor Authority providing expert consultancy in AI Governance (ISO/IEC 42001), ISO 9001, 14001, 45001, and 27001 management systems.',
      priceRange: '££',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'GB',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '51.5074',
        longitude: '-0.1278',
      },
      areaServed: [
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'Ireland' },
        { '@type': 'Country', name: 'Netherlands' },
        { '@type': 'Country', name: 'Norway' },
        { '@type': 'Country', name: 'Italy' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Consultancy Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'AI Governance Audits',
              description: 'ISO/IEC 42001 compliance auditing and implementation',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'ISO 9001 Consultancy',
              description: 'Quality Management System implementation and certification support',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'ISO 14001 Consultancy',
              description: 'Environmental Management System implementation',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'ISO 45001 Consultancy',
              description: 'Occupational Health & Safety Management System implementation',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'ISO 27001 Consultancy',
              description: 'Information Security Management System implementation',
            },
          },
        ],
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        ratingCount: '50',
        bestRating: '5',
      },
      ...data,
    },

    softwareApplication: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'PICMS',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: 'https://picms.com',
      description: 'ISO Compliance Management Platform for UK SMEs. Manage ISO 9001, 14001, 45001, and 27001 in one affordable solution.',
      offers: {
        '@type': 'AggregateOffer',
        lowPrice: '99',
        highPrice: '599',
        priceCurrency: 'GBP',
        offerCount: '3',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        ratingCount: '120',
      },
      featureList: [
        'Compliance Dashboard',
        'Document Control',
        'Audit Scheduler',
        'CAPA Management',
        'KPI Tracking',
        'Automated Reminders',
      ],
      ...data,
    },

    person: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'TAC Lead Auditor',
      jobTitle: 'Strategic SHEQ Lead Auditor',
      worksFor: {
        '@type': 'Organization',
        name: 'Training Assurance Consultancy',
      },
      knowsAbout: [
        'ISO/IEC 42001',
        'AI Governance',
        'ISO 9001',
        'ISO 14001',
        'ISO 45001',
        'ISO 27001',
        'SHEQ Management',
        'Management Systems Auditing',
      ],
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'Professional Certification',
          name: 'IRCA Principal Auditor',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'Professional Certification',
          name: 'ISO/IEC 42001 Lead Auditor',
        },
      ],
      ...data,
    },

    faqPage: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is ISO/IEC 42001?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ISO/IEC 42001 is the international standard for Artificial Intelligence Management Systems (AIMS). It provides a framework for organisations to manage AI-related risks and ensure responsible AI development and deployment.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does ISO certification take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The timeline varies based on your organisation\'s size and readiness. Typically, first-time certification takes 6-12 months with proper support. Our clients often achieve certification faster with PICMS and our expert guidance.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you offer integrated management system consultancy?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we specialise in integrated management systems (IMS) that combine multiple ISO standards such as 9001, 14001, and 45001 into a single, efficient system. This reduces documentation and audit overhead.',
          },
        },
        {
          '@type': 'Question',
          name: 'What countries do you operate in?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We provide consultancy services across the UK, Ireland, Netherlands, Norway, and Italy. Our team can support organisations throughout Europe with both on-site and remote engagements.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is PICMS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'PICMS (Proactive Intelligent Compliance Management System) is our ISO compliance management platform built specifically for UK SMEs. It helps businesses manage ISO 9001, 14001, 45001, and 27001 certifications with AI-powered insights, real-time dashboards, and automated audit scheduling.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does ISO consultancy cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our consultancy services are tailored to your specific needs, so costs vary based on scope, complexity, and the standards you\'re pursuing. We offer free initial consultations to understand your requirements and provide a detailed quote. Contact us to discuss your project.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is an AI audit?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'An AI audit is a comprehensive assessment of your artificial intelligence systems to ensure they meet ethical, legal, and operational standards. Our AI audits cover algorithmic transparency, bias detection, risk management, and ISO/IEC 42001 compliance.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you provide bespoke software solutions?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we develop custom software solutions tailored to your business challenges. Our bespoke systems include AI-powered agentic tools, compliance management platforms, training systems, and workflow automation. Our solutions have helped clients achieve 60% productivity improvements.',
          },
        },
      ],
      ...data,
    },
  };

  const selectedSchema = schemas[type];

  if (!selectedSchema) return null;

  return (
    <Script
      id={`schema-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(selectedSchema),
      }}
    />
  );
}
