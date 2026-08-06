import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'ISO Consultancy FAQ | Cost, Timelines & Certification | TAC',
  description: 'Answers to common questions about ISO consultancy — what an ISO consultant does, how much ISO consultancy costs, how long ISO 27001 certification takes, and how TAC supports certification. Led by an IRCA Registered Principal Auditor.',
  keywords: ['ISO consultancy FAQ', 'how much does ISO 27001 cost', 'how long does ISO certification take', 'ISO consultant vs certification body', 'ISO/IEC 42001', 'integrated management system'],
  alternates: {
    canonical: '/faq',
  },
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />

      <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            ISO Consultancy — Frequently Asked Questions
          </h1>
          <p className="text-lg text-slate-400">
            Practical answers about ISO consultancy, audit support, cost, timelines and certification —
            from an IRCA Registered Principal Auditor with 500+ audits completed.
          </p>
        </div>
      </section>

      <FAQSection heading="Your questions, answered" intro="If your question isn't covered here, book a consultation and we'll answer it directly." />

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Still have a question?</h2>
          <p className="text-slate-400 mb-8">
            Speak to an IRCA Registered Principal Auditor about your ISO goals, timeline and certification target.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold hover:opacity-90 transition-opacity">
              Book a consultation
            </Link>
            <Link href="/services" className="px-8 py-4 border border-slate-700 rounded-xl font-medium hover:bg-slate-800 transition-colors">
              View ISO consultancy services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
