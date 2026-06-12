import { FAQS } from '@/lib/faqs';

interface SchemaMarkupProps {
  type: 'organization' | 'professionalService' | 'softwareApplication' | 'person' | 'faqPage' | 'website' | 'breadcrumb' | 'webpage' | 'localBusiness' | 'serviceList' | 'service';
  data?: Record<string, unknown>;
}

export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  const baseUrl = 'https://www.trainingassuranceconsultancy.com';

  const schemas: Record<string, object> = {
    website: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Training Assurance Consultancy',
      url: baseUrl,
      description: 'ISO consultancy and audit support for UK businesses, led by an IRCA Registered Principal Auditor. Support for ISO 27001, 9001, 14001, 45001 and ISO/IEC 42001.',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${baseUrl}/blog?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
      ...data,
    },

    breadcrumb: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: ((data?.items as Array<{ name: string; url: string }>) ?? []).map(
        (item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url,
        })
      ),
    },

    webpage: (() => {
      // Destructure known custom fields so they don't leak into the schema output
      const { pageType, speakable, name, description, url, ...rest } = data ?? {};
      return {
        '@context': 'https://schema.org',
        '@type': pageType ?? 'WebPage',
        name,
        description,
        url,
        isPartOf: { '@type': 'WebSite', url: baseUrl },
        ...(speakable
          ? {
              speakable: {
                '@type': 'SpeakableSpecification',
                cssSelector: Array.isArray(speakable) ? speakable : [speakable],
              },
            }
          : {}),
        ...rest,
      };
    })(),

    organization: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Training Assurance Consultancy',
      alternateName: 'TAC',
      url: baseUrl,
      logo: `${baseUrl}/logo.png`,
      description: 'ISO consultancy, ISO audit support and ISO certification support for UK businesses, led by an IRCA Registered Principal Auditor. Specialists in ISO 27001, ISO 9001, ISO 14001, ISO 45001 and ISO/IEC 42001.',
      knowsAbout: [
        'ISO 27001',
        'ISO 9001',
        'ISO 14001',
        'ISO 45001',
        'ISO/IEC 42001',
        'ISO audit support',
        'ISO internal audits',
        'ISO gap analysis',
        'Management systems implementation',
      ],
      foundingDate: '2022',
      founders: [
        {
          '@type': 'Person',
          name: 'Principal Consultant',
          jobTitle: 'Principal Consultant & IRCA Registered Principal Auditor',
          hasCredential: [
            {
              '@type': 'EducationalOccupationalCredential',
              credentialCategory: 'IRCA Registered Principal Auditor',
              name: 'IRCA Registered Principal Auditor',
            },
            {
              '@type': 'EducationalOccupationalCredential',
              credentialCategory: 'Professional Certification',
              name: 'ISO/IEC 42001 Lead Auditor',
            },
          ],
          sameAs: ['https://www.linkedin.com/company/110750107'],
        },
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: '13 Chitty Road',
        addressLocality: 'Southsea',
        addressRegion: 'Hampshire',
        postalCode: 'PO4 9NX',
        addressCountry: 'GB',
      },
      telephone: '+44-7956-139772',
      areaServed: [
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'Ireland' },
        { '@type': 'Country', name: 'Netherlands' },
        { '@type': 'Country', name: 'Norway' },
        { '@type': 'Country', name: 'Italy' },
      ],
      sameAs: [
        'https://www.linkedin.com/company/110750107',
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
      description: 'ISO consultancy and audit support for UK businesses, led by an IRCA Registered Principal Auditor. ISO 27001, ISO 9001, ISO 14001, ISO 45001 and specialist ISO/IEC 42001 support.',
      priceRange: '££',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '13 Chitty Road',
        addressLocality: 'Southsea',
        addressRegion: 'Hampshire',
        postalCode: 'PO4 9NX',
        addressCountry: 'GB',
      },
      telephone: '+44-7956-139772',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '50.7887',
        longitude: '-1.0685',
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
        name: 'ISO Consultancy Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'ISO 27001 Consultancy',
              description: 'Information Security Management System (ISMS) implementation, risk assessment, Statement of Applicability and certification readiness',
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
              name: 'ISO Audit Support & Internal Audits',
              description: 'Audit preparation, internal audit programmes and certification body liaison',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'ISO Gap Analysis',
              description: 'Independent gap analysis against the requirements of your target ISO standard',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'ISO/IEC 42001 AI Management Systems',
              description: 'Specialist support for AI governance risk assessment and ISO/IEC 42001 readiness',
            },
          },
        ],
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
      description: 'The only UK compliance platform designed by an IRCA Registered Principal Auditor. 14 ISO standards, 37 modules, 3 industry packs, agentic AI (Master Agent, Smart Fill, Guardian AI v2, Golden Thread, Neural Link). Quantum-ready with NIST FIPS 203/204 alignment. Industry starter packs from £69/month.',
      offers: {
        '@type': 'AggregateOffer',
        lowPrice: '69',
        highPrice: '1199',
        priceCurrency: 'GBP',
        offerCount: '8',
      },
      featureList: [
        'Master Agent — autonomous multi-standard orchestration',
        'Smart Fill — AI auto-populates evidence across modules',
        'Guardian AI v2 — agentic compliance digest',
        'Golden Thread — cross-module auto-linking via vector search',
        'Neural Link — real-time activity & health snapshot',
        'RAG document retrieval with pgvector',
        'Compliance Dashboard',
        'Document Control with version history',
        'Audit Management & Findings',
        'CAPA Management',
        'Risk & Hazard Register',
        'Asset Register (ISO 27001 Annex A)',
        'Annex A Controls (ISO 27001:2022 + ISO 42001:2023)',
        'UK Legal Register',
        'Training Matrix & Records',
        'Management Review (ISO 9001 9.3)',
        'Business Continuity Planning',
        'Industry Packs: Construction, Healthcare, Security, Diving',
        'CHAS, SafeContractor, Constructionline accreditation tracking',
        'IMCA D018/D023/D040 + DWR 1997 (commercial diving)',
        'Quantum-ready cryptography (NIST FIPS 203/204 roadmap)',
        'HMAC-SHA-256 export integrity',
      ],
      ...data,
    },

    person: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'TAC Principal Consultant',
      jobTitle: 'IRCA Registered Principal Auditor & Principal ISO Consultant',
      worksFor: {
        '@type': 'Organization',
        name: 'Training Assurance Consultancy',
      },
      knowsAbout: [
        'ISO 27001',
        'ISO 9001',
        'ISO 14001',
        'ISO 45001',
        'ISO/IEC 42001',
        'Information Security Management',
        'ISO audit support',
        'Management Systems Auditing',
      ],
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'IRCA Registered Principal Auditor',
          name: 'IRCA Registered Principal Auditor',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'Professional Certification',
          name: 'ISO/IEC 42001 Lead Auditor',
        },
      ],
      sameAs: [
        'https://www.linkedin.com/company/110750107',
        'https://www.linkedin.com/company/110750107',
      ],
      ...data,
    },

    localBusiness: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${baseUrl}/#localbusiness`,
      name: 'Training Assurance Consultancy',
      alternateName: 'TAC',
      url: baseUrl,
      logo: `${baseUrl}/logo.png`,
      image: `${baseUrl}/logo.png`,
      description: 'ISO consultancy and audit support for UK businesses, led by an IRCA Registered Principal Auditor. ISO 27001, ISO 9001, ISO 14001, ISO 45001 and specialist ISO/IEC 42001 support.',
      priceRange: '££',
      telephone: '+44-7956-139772',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '13 Chitty Road',
        addressLocality: 'Southsea',
        addressRegion: 'Hampshire',
        postalCode: 'PO4 9NX',
        addressCountry: 'GB',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '50.7887',
        longitude: '-1.0685',
      },
      areaServed: [
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'Ireland' },
        { '@type': 'Country', name: 'Netherlands' },
        { '@type': 'Country', name: 'Norway' },
        { '@type': 'Country', name: 'Italy' },
      ],
      sameAs: [
        'https://www.linkedin.com/company/110750107',
        'https://www.facebook.com/trainingassuranceconsultancy',
        'https://www.instagram.com/trainingassuranceconsultancy',
      ],
      ...data,
    },

    faqPage: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      // Built from lib/faqs.ts — the same array rendered as the visible FAQ
      // section, so the structured data always matches the on-page content.
      mainEntity: FAQS.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
      ...data,
    },

    serviceList: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'ISO Consultancy Services',
      itemListElement: [
        { standard: 'ISO 27001 Consultancy', desc: 'Information security management system (ISMS) consultancy and certification support', url: `${baseUrl}/iso-27001-consultancy` },
        { standard: 'ISO 9001 Consultancy', desc: 'Quality management system consultancy and certification support', url: `${baseUrl}/services` },
        { standard: 'ISO 14001 Consultancy', desc: 'Environmental management system consultancy', url: `${baseUrl}/services` },
        { standard: 'ISO 45001 Consultancy', desc: 'Occupational health & safety management system consultancy', url: `${baseUrl}/services` },
        { standard: 'ISO Audit Preparation & Internal Audits', desc: 'Audit support, internal audit programmes and certification body liaison', url: `${baseUrl}/services` },
        { standard: 'ISO Gap Analysis', desc: 'Independent gap analysis against ISO standard requirements', url: `${baseUrl}/services` },
        { standard: 'ISO/IEC 42001 AI Management Systems', desc: 'Specialist AI governance and ISO/IEC 42001 readiness support', url: `${baseUrl}/services` },
      ].map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Service',
          name: s.standard,
          description: s.desc,
          url: s.url,
          serviceType: 'ISO consultancy',
          provider: { '@type': 'Organization', name: 'Training Assurance Consultancy', url: baseUrl },
          areaServed: { '@type': 'Country', name: 'United Kingdom' },
        },
      })),
      ...data,
    },

    service: (() => {
      const { name, description, url, serviceType, ...rest } = data ?? {};
      return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name,
        description,
        url,
        serviceType: serviceType ?? 'ISO consultancy',
        provider: {
          '@type': 'Organization',
          name: 'Training Assurance Consultancy',
          url: baseUrl,
        },
        areaServed: { '@type': 'Country', name: 'United Kingdom' },
        ...rest,
      };
    })(),
  };

  const selectedSchema = schemas[type];

  if (!selectedSchema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(selectedSchema),
      }}
    />
  );
}
