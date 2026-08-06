// Single source of truth for FAQ content.
// Rendered as a visible FAQ section (components/FAQSection.tsx) AND as FAQPage
// JSON-LD (components/SchemaMarkup.tsx). Keeping both from one array guarantees
// the structured data always matches the on-page content — which is what Google
// requires and what answer engines (ChatGPT, Perplexity, AI Overviews) extract.

export interface Faq {
  question: string;
  answer: string;
}

export const FAQS: Faq[] = [
  {
    question: 'What does an ISO consultant do?',
    answer:
      'An ISO consultant helps your organisation implement, maintain and improve an ISO management system — from gap analysis and documentation through to internal audits and certification readiness. TAC is led by an IRCA Registered Principal Auditor with 500+ audits completed, providing practical consultancy for ISO 27001, ISO 9001, ISO 14001 and ISO 45001.',
  },
  {
    question: 'Do you provide ISO 27001 consultancy?',
    answer:
      'Yes. ISO 27001 information security is our lead standard. We support gap analysis, ISMS implementation, risk assessment, Statement of Applicability, internal audit preparation, certification readiness and ongoing ISMS maintenance.',
  },
  {
    question: 'How much does ISO consultancy cost?',
    answer:
      'ISO consultancy is priced to the scope of your project — the standard (e.g. ISO 27001 vs ISO 9001), the size and complexity of your organisation, and whether you need full implementation or just audit support. TAC offers a free initial consultation to understand your requirements and provide a clear, fixed quote. Book a consultation to discuss your project.',
  },
  {
    question: 'How long does ISO certification take?',
    answer:
      'For most organisations, first-time ISO certification takes around 6–12 months from gap analysis to passing the Stage 2 certification audit, depending on your size, current maturity and how quickly evidence is produced. With focused consultancy support that timeline can be shortened. We map a realistic plan to your target certification date at the outset.',
  },
  {
    question: 'What is the difference between an ISO consultant and a certification body?',
    answer:
      'A consultant (like TAC) helps you build and prepare your management system; a certification body is an independent, accredited organisation that audits and issues the certificate. The two roles must stay separate for impartiality — TAC prepares you for certification and liaises with your chosen certification body, but does not issue certificates.',
  },
  {
    question: 'Do you offer integrated management system (IMS) consultancy?',
    answer:
      'Yes. We specialise in integrated management systems that combine multiple ISO standards — such as ISO 9001, ISO 14001 and ISO 45001 — into a single, efficient system. An IMS reduces duplicated documentation and audit overhead while keeping each standard fully covered.',
  },
  {
    question: 'What is ISO/IEC 42001?',
    answer:
      'ISO/IEC 42001 is the international standard for Artificial Intelligence Management Systems (AIMS). It gives organisations a framework to govern AI-related risks and demonstrate responsible AI development and use. TAC offers ISO/IEC 42001 as a specialist service under its ISO consultancy umbrella, aligned with your wider ISO 27001 and ISO 9001 systems.',
  },
  {
    question: 'Which sectors does TAC work with?',
    answer:
      'TAC supports UK businesses across all sectors, with particular focus on construction (ISO 9001/14001/45001 and CDM), security and cyber providers (ISO 27001/9001), and maritime, marine and commercial diving operations (ISO 9001/14001/45001/27001).',
  },
  {
    question: 'Is TAC a consultancy or a software company?',
    answer:
      'TAC is primarily an ISO consultancy and audit-support business, led by an IRCA Registered Principal Auditor. It is not a general software development agency. Where clients need ongoing ISO management software after consultancy, TAC recommends PICMS — a separate UK-built platform at picms.com.',
  },
  {
    question: 'What is PICMS and how is it related to TAC?',
    answer:
      'PICMS is a separate UK-built ISO compliance software platform, designed by an IRCA Registered Principal Auditor, available at PICMS.com. TAC recommends PICMS to clients who want to maintain evidence, audits, actions and documentation after their consultancy engagement. TAC is the independent consultancy; PICMS is the software product.',
  },
];
