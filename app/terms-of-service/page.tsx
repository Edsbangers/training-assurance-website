"use client";

import Link from "next/link";
import Image from "next/image";

export default function TermsOfService() {
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
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <p className="text-slate-400 mb-8">Last updated: January 2026</p>

          <div className="space-y-8 text-slate-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                1. Agreement to Terms
              </h2>
              <p>
                By accessing or using the Training Assurance Consultancy
                (&quot;TAC&quot;) website and services, you agree to be bound by these
                Terms of Service. If you do not agree to these terms, please do
                not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                2. Description of Services
              </h2>
              <p className="mb-4">
                TAC provides consultancy services in the following areas:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>AI governance and auditing (ISO/IEC 42001)</li>
                <li>
                  ISO management system certification consultancy (ISO 9001,
                  14001, 45001, 27001)
                </li>
                <li>SHEQ (Safety, Health, Environment, Quality) compliance</li>
                <li>
                  Access to the PICMS (Policy and ISO Compliance Management
                  System) SaaS platform
                </li>
                <li>Training and professional development</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                3. Use of Website
              </h2>
              <p className="mb-4">You agree to use our website only for lawful purposes and in a way that does not:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Infringe the rights of others</li>
                <li>Restrict or inhibit anyone else&apos;s use of the website</li>
                <li>Breach any applicable laws or regulations</li>
                <li>Transmit any harmful, offensive, or illegal content</li>
                <li>Attempt to gain unauthorised access to our systems</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                4. Intellectual Property
              </h2>
              <p>
                All content on this website, including but not limited to text,
                graphics, logos, images, and software, is the property of TAC or
                its content suppliers and is protected by United Kingdom and
                international copyright laws. You may not reproduce, distribute,
                modify, or create derivative works from any content without our
                express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                5. Consultancy Services
              </h2>
              <h3 className="text-xl font-medium text-white mb-2">
                5.1 Engagement
              </h3>
              <p className="mb-4">
                Consultancy services are provided subject to a separate
                engagement agreement that will outline the specific scope, fees,
                timeline, and deliverables for each project.
              </p>

              <h3 className="text-xl font-medium text-white mb-2">
                5.2 Professional Standards
              </h3>
              <p className="mb-4">
                Our consultants are qualified professionals who adhere to
                relevant industry standards and codes of conduct. However, our
                advice is provided for guidance purposes and should not be
                construed as legal advice.
              </p>

              <h3 className="text-xl font-medium text-white mb-2">
                5.3 No Guarantee of Certification
              </h3>
              <p>
                While we provide expert guidance to help organisations achieve
                ISO certification, we cannot guarantee certification outcomes as
                final decisions rest with independent certification bodies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                6. PICMS Platform
              </h2>
              <p>
                Access to and use of the PICMS platform is governed by separate
                terms and conditions provided upon subscription. The platform is
                provided &quot;as is&quot; and TAC makes no warranties regarding
                uninterrupted or error-free operation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                7. Limitation of Liability
              </h2>
              <p className="mb-4">
                To the fullest extent permitted by law, TAC shall not be liable
                for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Any indirect, incidental, special, consequential, or punitive
                  damages
                </li>
                <li>
                  Loss of profits, revenue, data, or business opportunities
                </li>
                <li>
                  Any damages arising from your use or inability to use our
                  website or services
                </li>
                <li>
                  Any third-party content or services linked from our website
                </li>
              </ul>
              <p className="mt-4">
                Our total liability for any claims arising from these terms or
                your use of our services shall not exceed the fees paid by you
                for the specific service giving rise to the claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                8. Indemnification
              </h2>
              <p>
                You agree to indemnify and hold harmless TAC, its directors,
                employees, and agents from any claims, damages, losses, or
                expenses (including legal fees) arising from your breach of
                these terms or your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                9. Confidentiality
              </h2>
              <p>
                We treat all client information as confidential and will not
                disclose it to third parties without your consent, except as
                required by law. Similarly, any proprietary methodologies,
                tools, or materials we share with you during our engagement
                remain our confidential property.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                10. Third-Party Links
              </h2>
              <p>
                Our website may contain links to third-party websites. These
                links are provided for your convenience only. We have no control
                over the content of linked sites and accept no responsibility
                for them or for any loss or damage that may arise from your use
                of them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                11. Modifications to Terms
              </h2>
              <p>
                We reserve the right to modify these Terms of Service at any
                time. Changes will be effective immediately upon posting to the
                website. Your continued use of our website or services after any
                changes constitutes your acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                12. Governing Law
              </h2>
              <p>
                These Terms of Service shall be governed by and construed in
                accordance with the laws of England and Wales. Any disputes
                arising from these terms shall be subject to the exclusive
                jurisdiction of the courts of England and Wales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                13. Severability
              </h2>
              <p>
                If any provision of these terms is found to be unenforceable or
                invalid, that provision shall be limited or eliminated to the
                minimum extent necessary, and the remaining provisions shall
                remain in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                14. Contact Information
              </h2>
              <p>
                If you have any questions about these Terms of Service, please
                contact us at:
              </p>
              <div className="mt-4 p-4 bg-slate-900 rounded-lg">
                <p className="font-medium text-white">
                  Training Assurance Consultancy
                </p>
                <p>Email: legal@trainingassurance.com</p>
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
