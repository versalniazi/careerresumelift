import type { Metadata } from "next";

import { Container } from "@/components/container";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { PricingGrid } from "@/components/sections/pricing-grid";
import { ComparisonTable } from "@/components/sections/comparison-table";
import { TrustBar } from "@/components/sections/trust-bar";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";
import { constructMetadata } from "@/lib/metadata";
import { pricingPackages } from "@/data/pricing";
import { faqCategories } from "@/data/faqs";

export const metadata: Metadata = constructMetadata({
  title: "Pricing",
  description:
    "Transparent, flat-rate pricing for professional resume writing, executive resumes, federal resumes, LinkedIn optimization, and career coaching. No hidden fees.",
  path: "/pricing",
});

const pricingFaqs =
  faqCategories.find((c) => c.category === "Pricing & Packages")?.items ?? [];

export default function PricingPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Pricing", path: "/pricing" }]} />

      <section className="py-20 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge>Pricing</Badge>
            <h1 className="mt-6 text-balance font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
              Transparent Pricing. No Hidden Fees.
            </h1>
            <p className="mt-6 text-balance text-lg leading-relaxed text-muted-foreground">
              Every package includes a dedicated Certified Professional Resume Writer, ATS
              optimization, and revision rounds. Choose the package that matches your career stage.
            </p>
          </Reveal>
        </Container>
      </section>

      <TrustBar />

      <PricingGrid items={pricingPackages} showHeading={false} columns={3} />

      <ComparisonTable />

      <FaqSection
        items={pricingFaqs}
        idPrefix="pricing-faq"
        eyebrow="Pricing FAQ"
        title="Pricing Questions, Answered"
      />

      <CtaSection
        title="Not Sure Which Package Is Right for You?"
        description="Book a free resume review and we'll recommend the best package for your career goals."
      />
    </>
  );
}
