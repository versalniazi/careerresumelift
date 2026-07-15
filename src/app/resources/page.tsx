import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

import { Container } from "@/components/container";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/icon";
import { CtaSection } from "@/components/sections/cta-section";
import { constructMetadata } from "@/lib/metadata";
import { resources } from "@/data/resources";

export const metadata: Metadata = constructMetadata({
  title: "Free Career Resources",
  description:
    "Free downloadable resume checklists, ATS guides, interview preparation checklists, and career planning guides from Career Resume Lift.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Resources", path: "/resources" }]} />

      <section className="py-20 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge>Free Resources</Badge>
            <h1 className="mt-6 text-balance font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
              Free Tools to Support Your Job Search
            </h1>
            <p className="mt-6 text-balance text-lg leading-relaxed text-muted-foreground">
              Practical, no-cost guides and checklists built by our certified writers to help you
              at every stage of your job search.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <RevealItem key={resource.slug}>
                <Link
                  href={`/resources/${resource.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-secondary/40 hover:shadow-xl hover:shadow-secondary/5"
                >
                  <span className="flex size-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                    <Icon name={resource.icon} className="size-6" />
                  </span>
                  <Badge variant="muted" className="mt-4 w-fit">
                    {resource.type}
                  </Badge>
                  <h3 className="mt-3 font-heading text-lg font-semibold">{resource.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {resource.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary">
                    <Download className="size-4" />
                    Get it free
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
