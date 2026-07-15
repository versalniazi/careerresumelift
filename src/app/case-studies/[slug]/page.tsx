import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TrendingUp, Quote } from "lucide-react";

import { Container } from "@/components/container";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { CtaSection } from "@/components/sections/cta-section";
import { constructMetadata } from "@/lib/metadata";
import { caseStudies, getCaseStudyBySlug } from "@/data/case-studies";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};

  return constructMetadata({
    title: study.title,
    description: study.challenge,
    path: `/case-studies/${study.slug}`,
  });
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) notFound();

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Case Studies", path: "/case-studies" },
          { name: study.title, path: `/case-studies/${study.slug}` },
        ]}
      />

      <article className="py-20 sm:py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="muted">{study.industry}</Badge>
              <Badge variant="outline">{study.service}</Badge>
            </div>
            <h1 className="mt-6 text-balance font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
              {study.title}
            </h1>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {study.metrics.map((m) => (
                <div key={m.label} className="rounded-2xl border border-border bg-card p-4">
                  <TrendingUp className="size-4 text-success" />
                  <p className="mt-2 font-heading text-xl font-bold">{m.value}</p>
                  <p className="text-xs text-muted-foreground">{m.label}</p>
                </div>
              ))}
            </div>

            <div className="prose prose-neutral mt-10 max-w-none dark:prose-invert">
              <h2 className="font-heading text-xl font-bold">The Challenge</h2>
              <p className="text-muted-foreground">{study.challenge}</p>

              <h2 className="mt-8 font-heading text-xl font-bold">Our Approach</h2>
              <p className="text-muted-foreground">{study.approach}</p>

              <h2 className="mt-8 font-heading text-xl font-bold">The Result</h2>
              <p className="text-muted-foreground">{study.result}</p>
            </div>

            <blockquote className="mt-10 flex gap-4 rounded-2xl bg-muted/50 p-6">
              <Quote className="size-6 shrink-0 text-secondary" />
              <div>
                <p className="italic text-foreground/90">&ldquo;{study.quote}&rdquo;</p>
                <p className="mt-3 text-sm font-semibold">{study.name}</p>
              </div>
            </blockquote>
          </Reveal>
        </Container>
      </article>

      <CtaSection />
    </>
  );
}
