import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/container";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/icon";
import { StatsSection } from "@/components/sections/stats-section";
import { CtaSection } from "@/components/sections/cta-section";
import { constructMetadata } from "@/lib/metadata";
import { industries } from "@/data/industries";

export const metadata: Metadata = constructMetadata({
  title: "Industries We Serve",
  description:
    "Career Resume Lift writes industry-specific resumes for technology, healthcare, finance, marketing, federal, executive, engineering, legal, and more.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Industries", path: "/industries" }]} />

      <section className="py-20 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge>Industries We Serve</Badge>
            <h1 className="mt-6 text-balance font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
              Resume Expertise Across 20+ Industries
            </h1>
            <p className="mt-6 text-balance text-lg leading-relaxed text-muted-foreground">
              Every industry speaks a different language. Our writers understand the terminology,
              hiring standards, and priorities specific to your field.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <RevealItem key={industry.slug}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-secondary/40 hover:shadow-xl hover:shadow-secondary/5"
                >
                  <span className="flex size-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                    <Icon name={industry.icon} className="size-6" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-semibold">{industry.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {industry.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary">
                    Learn more
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <StatsSection />
      <CtaSection />
    </>
  );
}
