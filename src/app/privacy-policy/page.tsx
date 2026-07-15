import type { Metadata } from "next";

import { LegalLayout } from "@/components/legal/legal-layout";
import { constructMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy",
  description: `Read the Privacy Policy for ${siteConfig.name}, explaining how we collect, use, and protect your personal information.`,
  path: "/privacy-policy",
  noIndex: false,
});

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated="July 15, 2026"
      breadcrumbLabel="Privacy Policy"
      breadcrumbPath="/privacy-policy"
    >
      <p>
        {siteConfig.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your
        privacy and is committed to protecting the personal information you share with us. This
        Privacy Policy explains how we collect, use, disclose, and safeguard your information when
        you visit our website at {siteConfig.url} or use our resume writing and career services
        (collectively, the &ldquo;Services&rdquo;).
      </p>

      <h2>1. Information We Collect</h2>
      <p>We may collect the following categories of information:</p>
      <ul>
        <li>
          <strong>Contact Information:</strong> name, email address, phone number, and mailing
          address.
        </li>
        <li>
          <strong>Career Information:</strong> resume content, work history, education,
          certifications, job preferences, and related career details you provide to your writer.
        </li>
        <li>
          <strong>Payment Information:</strong> billing details processed securely through
          third-party payment processors. We do not store full payment card numbers on our servers.
        </li>
        <li>
          <strong>Usage Data:</strong> information about how you interact with our website,
          including IP address, browser type, pages visited, and referring URLs, collected via
          cookies and similar technologies.
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Provide, personalize, and deliver our resume writing and career services;</li>
        <li>Communicate with you about your order, project status, and support requests;</li>
        <li>Process payments and manage billing;</li>
        <li>Send marketing communications, which you may opt out of at any time;</li>
        <li>Improve our website, services, and customer experience;</li>
        <li>Comply with legal obligations and protect against fraudulent or unauthorized activity.</li>
      </ul>

      <h2>3. Confidentiality of Career Documents</h2>
      <p>
        We understand that resumes and career documents contain sensitive personal and
        professional information. All client documents and information shared with your writer are
        treated as strictly confidential and are used solely for the purpose of providing your
        requested services.
      </p>

      <h2>4. How We Share Your Information</h2>
      <p>
        We do not sell your personal information. We may share information with trusted third-party
        service providers who help us operate our business (such as payment processors, email
        service providers, and scheduling tools), each of whom is contractually obligated to
        protect your information. We may also disclose information if required by law or to protect
        our rights, property, or safety.
      </p>

      <h2>5. Cookies &amp; Tracking Technologies</h2>
      <p>
        Our website uses cookies and similar technologies to improve functionality, analyze site
        traffic, and personalize content. You can control cookie preferences through your browser
        settings.
      </p>

      <h2>6. Data Security</h2>
      <p>
        We implement reasonable administrative, technical, and physical safeguards designed to
        protect your personal information from unauthorized access, disclosure, alteration, or
        destruction. However, no method of transmission over the internet is 100% secure.
      </p>

      <h2>7. Data Retention</h2>
      <p>
        We retain personal information for as long as necessary to provide our Services, comply
        with legal obligations, resolve disputes, and enforce our agreements. You may request
        deletion of your information at any time, subject to applicable legal requirements.
      </p>

      <h2>8. Your Rights</h2>
      <p>
        Depending on your location, you may have the right to access, correct, delete, or restrict
        the use of your personal information. To exercise these rights, contact us using the
        information below.
      </p>

      <h2>9. Children&rsquo;s Privacy</h2>
      <p>
        Our Services are not directed to individuals under the age of 16, and we do not knowingly
        collect personal information from children.
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be posted on this
        page with an updated &ldquo;Last updated&rdquo; date.
      </p>

      <h2>11. Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy or how we handle your information, please
        contact us at{" "}
        <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a> or{" "}
        {siteConfig.contact.phoneDisplay}.
      </p>
    </LegalLayout>
  );
}
