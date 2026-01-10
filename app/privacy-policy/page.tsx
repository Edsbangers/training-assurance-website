"use client";

import Link from "next/link";
import Image from "next/image";

export default function PrivacyPolicy() {
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
            <Link
              href="/"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-slate-400 mb-8">Last updated: January 2026</p>

          <div className="space-y-8 text-slate-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                1. Introduction
              </h2>
              <p>
                Training Assurance Consultancy (&quot;TAC&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is
                committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your
                information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                2. Information We Collect
              </h2>
              <h3 className="text-xl font-medium text-white mb-2">
                Personal Information
              </h3>
              <p className="mb-4">
                We may collect personal information that you voluntarily provide
                to us when you:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fill out our contact form</li>
                <li>Request a consultation or demo</li>
                <li>Subscribe to our newsletter</li>
                <li>Engage with our services</li>
              </ul>
              <p className="mt-4">
                This information may include your name, email address, company
                name, phone number, and any other information you choose to
                provide.
              </p>

              <h3 className="text-xl font-medium text-white mb-2 mt-6">
                Automatically Collected Information
              </h3>
              <p>
                When you visit our website, we may automatically collect certain
                information about your device, including your IP address,
                browser type, operating system, access times, and the pages you
                have viewed directly before and after accessing our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                3. How We Use Your Information
              </h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Respond to your enquiries and provide customer support</li>
                <li>Send you information about our services</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
                <li>
                  Protect against fraudulent, unauthorised, or illegal activity
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                4. Data Sharing and Disclosure
              </h2>
              <p className="mb-4">
                We do not sell, trade, or rent your personal information to
                third parties. We may share your information with:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Service providers who assist us in operating our website and
                  conducting our business (e.g., Formspree for form processing)
                </li>
                <li>
                  Professional advisers such as lawyers, accountants, and
                  auditors
                </li>
                <li>
                  Government bodies when required by law or to protect our
                  rights
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                5. Data Security
              </h2>
              <p>
                We implement appropriate technical and organisational measures
                to protect your personal information against unauthorised
                access, alteration, disclosure, or destruction. However, no
                method of transmission over the Internet or electronic storage
                is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                6. Your Rights Under GDPR
              </h2>
              <p className="mb-4">
                If you are a resident of the European Economic Area (EEA) or the
                United Kingdom, you have the following data protection rights:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Right of access:</strong> You can request copies of
                  your personal data
                </li>
                <li>
                  <strong>Right to rectification:</strong> You can request
                  correction of inaccurate data
                </li>
                <li>
                  <strong>Right to erasure:</strong> You can request deletion of
                  your personal data
                </li>
                <li>
                  <strong>Right to restrict processing:</strong> You can request
                  limitation of processing
                </li>
                <li>
                  <strong>Right to data portability:</strong> You can request
                  transfer of your data
                </li>
                <li>
                  <strong>Right to object:</strong> You can object to our
                  processing of your data
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                7. Cookies
              </h2>
              <p>
                Our website may use cookies and similar tracking technologies to
                enhance your experience. You can instruct your browser to refuse
                all cookies or to indicate when a cookie is being sent. However,
                if you do not accept cookies, you may not be able to use some
                portions of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                8. Data Retention
              </h2>
              <p>
                We retain your personal information only for as long as
                necessary to fulfil the purposes for which it was collected,
                including to satisfy any legal, accounting, or reporting
                requirements. When we no longer need your information, we will
                securely delete or anonymise it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                9. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the &quot;Last updated&quot; date. You are advised
                to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                10. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy or our data
                practices, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-slate-900 rounded-lg">
                <p className="font-medium text-white">
                  Training Assurance Consultancy
                </p>
                <p>Email: privacy@trainingassurance.com</p>
                <p>United Kingdom</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} Training Assurance Consultancy.
            All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
