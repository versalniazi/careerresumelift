import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { LogoCloud } from "@/components/sections/logo-cloud";
import { StatsSection } from "@/components/sections/stats-section";
import { ServicesOverview } from "@/components/sections/services-overview";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { ProcessSection } from "@/components/sections/process-section";
import { BeforeAfterSection } from "@/components/sections/before-after";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { PricingGrid } from "@/components/sections/pricing-grid";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { localBusinessSchema } from "@/lib/schema";
import { constructMetadata } from "@/lib/metadata";
import { pricingPackages } from "@/data/pricing";
import { generalFaqs } from "@/data/faqs";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = constructMetadata({
  title: `${siteConfig.name} | Professional Resume Writing Services`,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  const featuredPricing = pricingPackages.slice(0, 3);
  const homeFaqs = generalFaqs.slice(0, 6);

  return (
    <>
      <Hero />
      <TrustBar />
      <LogoCloud />
      <StatsSection />
      <ServicesOverview />
      <WhyChooseUs />
      <ProcessSection />
      <BeforeAfterSection />
      <TestimonialsSection limit={6} />

      <PricingGrid
        items={featuredPricing}
        title="Simple, Transparent Pricing"
        description="Every package includes a dedicated Certified Professional Resume Writer, ATS optimization, and revision rounds."
      />
      <Container className="-mt-12 mb-24 flex justify-center">
        <Button asChild variant="outline">
          <Link href="/pricing">
            See All Packages & Compare
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </Container>

      <FaqSection
        items={homeFaqs}
        idPrefix="home-faq"
        description="Everything you need to know about working with Career Resume Lift."
      />
      <CtaSection />

      <JsonLd data={localBusinessSchema()} />
    </>
  );
}
