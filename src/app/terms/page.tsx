import type { Metadata } from "next";

import { LegalLayout } from "@/components/legal/legal-layout";
import { constructMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = constructMetadata({
  title: "Terms of Service",
  description: `Read the Terms of Service governing your use of ${siteConfig.name}'s website and resume writing services.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      lastUpdated="July 15, 2026"
      breadcrumbLabel="Terms of Service"
      breadcrumbPath="/terms"
    >
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the{" "}
        {siteConfig.name} website and services (collectively, the &ldquo;Services&rdquo;). By
        accessing our website or purchasing our Services, you agree to be bound by these Terms.
      </p>

      <h2>1. Services Provided</h2>
      <p>
        {siteConfig.name} provides professional resume writing, LinkedIn profile optimization,
        cover letter writing, career coaching, and interview coaching services. Specific deliverables,
        turnaround times, and revision rounds vary by package as described on our Pricing page and
        individual service pages.
      </p>

      <h2>2. Client Responsibilities</h2>
      <p>
        To provide accurate, effective career documents, we rely on the information you provide.
        You agree to:
      </p>
      <ul>
        <li>Provide accurate and complete information about your work history and qualifications;</li>
        <li>Respond to writer requests and complete intake materials in a timely manner;</li>
        <li>Review draft documents and provide revision feedback within a reasonable time;</li>
        <li>Not misrepresent your qualifications, credentials, or work history.</li>
      </ul>
      <p>
        Delays in providing required information may extend project turnaround times beyond the
        estimates listed on our website.
      </p>

      <h2>3. Payment Terms</h2>
      <p>
        Full or partial payment is required before work begins, as specified at checkout. All
        prices are listed in U.S. dollars. We reserve the right to modify pricing at any time;
        changes will not affect orders already placed.
      </p>

      <h2>4. Revisions</h2>
      <p>
        Each package includes a specified number of revision rounds, detailed on the relevant
        service and pricing pages. Revisions must relate to the original scope of work; requests
        for substantially new documents or additional services may incur additional fees.
      </p>

      <h2>5. Turnaround Times</h2>
      <p>
        Estimated turnaround times begin once we receive your completed intake questionnaire and
        any required information. Turnaround times are estimates, not guarantees, and may vary
        based on project complexity and current workload.
      </p>

      <h2>6. No Guarantee of Employment Outcomes</h2>
      <p>
        While our Services are designed to strengthen your job search materials and improve your
        chances of securing interviews, {siteConfig.name} cannot guarantee specific employment
        outcomes, including interviews or job offers, as these depend on factors outside our
        control, including market conditions, employer decisions, and your individual qualifications.
      </p>

      <h2>7. Intellectual Property</h2>
      <p>
        Upon final payment, you own the final career documents created for you. {siteConfig.name}
        retains the right to use anonymized, non-identifying excerpts of client work for internal
        training and quality purposes only, unless you opt out by contacting us.
      </p>

      <h2>8. Refunds</h2>
      <p>
        Refund eligibility is governed by our{" "}
        <a href="/refund-policy">Refund Policy</a>, which forms part of these Terms.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, {siteConfig.name} shall not be liable for any
        indirect, incidental, special, or consequential damages arising from your use of our
        Services, including but not limited to loss of employment opportunities.
      </p>

      <h2>10. Confidentiality</h2>
      <p>
        We treat all client information as confidential in accordance with our{" "}
        <a href="/privacy-policy">Privacy Policy</a>.
      </p>

      <h2>11. Termination</h2>
      <p>
        Either party may terminate services at any time. Fees for work already completed are
        non-refundable, subject to our Refund Policy.
      </p>

      <h2>12. Governing Law</h2>
      <p>
        These Terms are governed by the laws of the State of Delaware, United States, without
        regard to conflict of law principles.
      </p>

      <h2>13. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. Continued use of our Services after changes
        are posted constitutes acceptance of the revised Terms.
      </p>

      <h2>14. Contact Us</h2>
      <p>
        Questions about these Terms can be directed to{" "}
        <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
      </p>
    </LegalLayout>
  );
}
