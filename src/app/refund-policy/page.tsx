import type { Metadata } from "next";

import { LegalLayout } from "@/components/legal/legal-layout";
import { constructMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = constructMetadata({
  title: "Refund Policy",
  description: `Read ${siteConfig.name}'s satisfaction guarantee and refund policy for resume writing, LinkedIn optimization, and career coaching services.`,
  path: "/refund-policy",
});

export default function RefundPolicyPage() {
  return (
    <LegalLayout
      title="Refund Policy"
      lastUpdated="July 15, 2026"
      breadcrumbLabel="Refund Policy"
      breadcrumbPath="/refund-policy"
    >
      <p>
        At {siteConfig.name}, we want every client to be satisfied with their finished career
        documents. This Refund Policy explains when refunds are available and how to request one.
      </p>

      <h2>1. Satisfaction Guarantee</h2>
      <p>
        Every package includes a set number of revision rounds (listed on each service and pricing
        page). We are committed to working with you through your included revisions until your
        resume, LinkedIn profile, or other career document meets professional standards and
        accurately reflects your career goals.
      </p>

      <h2>2. Refund Eligibility</h2>
      <ul>
        <li>
          <strong>Before Work Begins:</strong> If you cancel before your writer begins your first
          draft, you are eligible for a full refund.
        </li>
        <li>
          <strong>After First Draft Delivery:</strong> If you are not satisfied after receiving
          your first draft, we will use your included revision rounds to address your feedback
          before considering a refund request.
        </li>
        <li>
          <strong>After All Revisions Are Used:</strong> If, after all included revision rounds
          have been used in good faith, you remain unsatisfied with the core quality of the work
          delivered, you may request a partial refund, evaluated on a case-by-case basis.
        </li>
        <li>
          <strong>Non-Refundable Circumstances:</strong> Refunds are not available once final
          documents have been delivered and accepted, or in cases involving unresponsiveness from
          the client for more than 30 days, incomplete or inaccurate information provided by the
          client, or a change of mind unrelated to the quality of work delivered.
        </li>
      </ul>

      <h2>3. How to Request a Refund</h2>
      <p>
        To request a refund, contact us at{" "}
        <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a> with your
        order details and the reason for your request. We will review your request and respond
        within 3–5 business days.
      </p>

      <h2>4. Refund Processing</h2>
      <p>
        Approved refunds will be issued to your original method of payment within 7–10 business
        days of approval. Processing times may vary depending on your bank or payment provider.
      </p>

      <h2>5. Rush Delivery &amp; Add-On Services</h2>
      <p>
        Rush delivery fees and completed add-on services (such as LinkedIn optimization or cover
        letters that have already been delivered) are non-refundable once the corresponding work
        has been completed.
      </p>

      <h2>6. Career Coaching &amp; Interview Coaching Sessions</h2>
      <p>
        Individual coaching sessions may be rescheduled up to 24 hours in advance at no charge.
        Sessions cancelled with less than 24 hours&rsquo; notice, or missed entirely, are
        non-refundable. Unused sessions within a multi-session package may be refunded on a
        pro-rated basis if requested before any sessions in the package have been used.
      </p>

      <h2>7. Contact Us</h2>
      <p>
        If you have questions about this Refund Policy, please contact us at{" "}
        <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a> or{" "}
        {siteConfig.contact.phoneDisplay}.
      </p>
    </LegalLayout>
  );
}
