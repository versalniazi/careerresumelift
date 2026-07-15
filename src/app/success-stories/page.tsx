import type { Metadata } from "next";

import { Container } from "@/components/container";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { BeforeAfterSection } from "@/components/sections/before-after";
import { StatsSection } from "@/components/sections/stats-section";
import { TrustBar } from "@/components/sections/trust-bar";
import { CtaSection } from "@/components/sections/cta-section";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Success Stories",
  description:
    "Real success stories from professionals who worked with Career Resume Lift to land more interviews and job offers across every industry.",
  path: "/success-stories",
});

export default function SuccessStoriesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Success Stories", path: "/success-stories" }]} />

      <section className="py-20 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge>Success Stories</Badge>
            <h1 className="mt-6 text-balance font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
              Real Professionals. Real Results.
            </h1>
            <p className="mt-6 text-balance text-lg leading-relaxed text-muted-foreground">
              From career changers to C-Suite executives, thousands of professionals have trusted
              Career Resume Lift to represent their careers on paper.
            </p>
          </Reveal>
        </Container>
      </section>

      <TrustBar />
      <StatsSection />
      <TestimonialsSection />
      <BeforeAfterSection />
      <CtaSection />
    </>
  );
}
