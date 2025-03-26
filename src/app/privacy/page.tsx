"use client";

import { Section } from "@/components/ui/Section";

export default function PrivacyPolicy() {
  return (
    <main className="relative min-h-screen bg-atlas-black" role="main">
      <div className="absolute inset-0 bg-dark-gradient" />
      <Section className="relative py-16 sm:py-24">
        <div className="prose prose-invert mx-auto max-w-3xl px-6 sm:px-0">
          <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8">
            Privacy Policy
          </h1>

          <p className="text-atlas-gray-400">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>

          <h2 className="font-display text-2xl font-bold text-white mt-12">
            1. Information We Collect
          </h2>
          <p className="text-atlas-gray-400">
            We collect information that you provide directly to us, including:
          </p>
          <ul className="text-atlas-gray-400 list-disc pl-6">
            <li>
              Email addresses when you sign up for our beta program or
              newsletter
            </li>
            <li>
              Usage data and analytics when you interact with our platform
            </li>
            <li>
              Technical information about your device and internet connection
            </li>
          </ul>

          <h2 className="font-display text-2xl font-bold text-white mt-12">
            2. How We Use Your Information
          </h2>
          <p className="text-atlas-gray-400">
            We use the information we collect to:
          </p>
          <ul className="text-atlas-gray-400 list-disc pl-6">
            <li>Provide and improve our blockchain explorer services</li>
            <li>Send you updates about our beta program and features</li>
            <li>Ensure the security and functionality of our platform</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="font-display text-2xl font-bold text-white mt-12">
            3. Data Protection
          </h2>
          <p className="text-atlas-gray-400">
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized access,
            alteration, disclosure, or destruction.
          </p>

          <h2 className="font-display text-2xl font-bold text-white mt-12">
            4. Your Rights
          </h2>
          <p className="text-atlas-gray-400">You have the right to:</p>
          <ul className="text-atlas-gray-400 list-disc pl-6">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to data processing</li>
            <li>Data portability</li>
          </ul>

          <h2 className="font-display text-2xl font-bold text-white mt-12">
            5. Cookies
          </h2>
          <p className="text-atlas-gray-400">
            We use cookies and similar tracking technologies to track activity
            on our platform and hold certain information. You can instruct your
            browser to refuse all cookies or to indicate when a cookie is being
            sent.
          </p>

          <h2 className="font-display text-2xl font-bold text-white mt-12">
            6. Third-Party Services
          </h2>
          <p className="text-atlas-gray-400">
            Our service may contain links to third-party websites or services.
            We are not responsible for their privacy practices. We encourage you
            to read their privacy policies.
          </p>

          <h2 className="font-display text-2xl font-bold text-white mt-12">
            7. Updates to This Policy
          </h2>
          <p className="text-atlas-gray-400">
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the "Last updated" date.
          </p>

          <h2 className="font-display text-2xl font-bold text-white mt-12">
            8. Contact Us
          </h2>
          <p className="text-atlas-gray-400">
            If you have any questions about this Privacy Policy, please contact
            us at:{" "}
            <a
              href="mailto:contact@atlasexplorer.com"
              className="text-atlas-teal hover:text-atlas-teal/80"
            >
              contact@atlasexplorer.com
            </a>
          </p>

          <div className="mt-16 pt-8 border-t border-atlas-gray-800">
            <p className="text-sm text-atlas-gray-400">
              © {new Date().getFullYear()} Atlas Explorer Inc. All rights
              reserved.
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}
