import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";

import { Container } from "@/components/container";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { CtaSection } from "@/components/sections/cta-section";
import { constructMetadata } from "@/lib/metadata";
import { caseStudies } from "@/data/case-studies";

export const metadata: Metadata = constructMetadata({
  title: "Case Studies",
  description:
    "In-depth case studies showing how Career Resume Lift helped professionals across industries land more interviews and job offers.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Case Studies", path: "/case-studies" }]} />

      <section className="py-20 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge>Case Studies</Badge>
            <h1 className="mt-6 text-balance font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
              How We Helped Real Clients Land Their Next Role
            </h1>
            <p className="mt-6 text-balance text-lg leading-relaxed text-muted-foreground">
              A closer look at the strategy behind a few of our clients&rsquo; career transformations.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <RevealGroup className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {caseStudies.map((study) => (
              <RevealItem key={study.slug}>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-secondary/5"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="muted">{study.industry}</Badge>
                    <Badge variant="outline">{study.service}</Badge>
                  </div>
                  <h2 className="mt-4 font-heading text-xl font-bold">{study.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {study.challenge}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4 border-t border-border pt-4">
                    {study.metrics.slice(0, 2).map((m) => (
                      <div key={m.label} className="flex items-center gap-2">
                        <TrendingUp className="size-4 text-success" />
                        <div>
                          <p className="text-sm font-bold">{m.value}</p>
                          <p className="text-xs text-muted-foreground">{m.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary">
                    Read the full story
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
