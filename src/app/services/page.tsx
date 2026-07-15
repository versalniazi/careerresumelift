import type { Metadata } from "next";

import { Container } from "@/components/container";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { ServicesOverview } from "@/components/sections/services-overview";
import { StatsSection } from "@/components/sections/stats-section";
import { CtaSection } from "@/components/sections/cta-section";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Our Services",
  description:
    "Explore Career Resume Lift's full range of professional resume writing services — from entry-level to executive, federal, military, LinkedIn, cover letters, and career coaching.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Services", path: "/services" }]} />

      <section className="py-20 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge>Our Services</Badge>
            <h1 className="mt-6 text-balance font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
              Every Career Document You Need, Written by Certified Professionals
            </h1>
            <p className="mt-6 text-balance text-lg leading-relaxed text-muted-foreground">
              From your first resume to a board-ready executive package, our CPRW-certified writers
              build career documents tailored to your industry, level, and goals.
            </p>
          </Reveal>
        </Container>
      </section>

      <ServicesOverview />
      <StatsSection />
      <CtaSection />
    </>
  );
}
