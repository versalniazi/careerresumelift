import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";

import { Container } from "@/components/container";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icon";
import { ServicesOverview } from "@/components/sections/services-overview";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaSection } from "@/components/sections/cta-section";
import { constructMetadata } from "@/lib/metadata";
import { industries } from "@/data/industries";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return {};

  return constructMetadata({
    title: `${industry.name} Resume Writing Services`,
    description: `${industry.description} Work with a Certified Professional Resume Writer who understands the ${industry.name.toLowerCase()} industry.`,
    path: `/industries/${industry.slug}`,
  });
}

const focusPoints = [
  "Industry-specific keyword and terminology research",
  "Achievement framing aligned to what hiring managers in your field prioritize",
  "Formatting standards appropriate to your industry's application process",
  "Certifications, licenses, and credentials positioned prominently",
];

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) notFound();

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Industries", path: "/industries" },
          { name: industry.name, path: `/industries/${industry.slug}` },
        ]}
      />

      <section className="py-20 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <Icon name={industry.icon} className="size-8" />
            </span>
            <Badge>Industry Focus</Badge>
            <h1 className="mt-6 text-balance font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
              {industry.name} Resume Writing
            </h1>
            <p className="mt-6 text-balance text-lg leading-relaxed text-muted-foreground">
              {industry.description}
            </p>
            <div className="mt-8 flex justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Book Free Resume Review
                  <ArrowRight className="size-5" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-muted/40 py-20">
        <Container className="max-w-3xl">
          <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">
            How We Approach {industry.name} Resumes
          </h2>
          <ul className="mt-8 flex flex-col gap-4">
            {focusPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 rounded-xl bg-card p-4 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-success" />
                {point}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ServicesOverview />
      <TestimonialsSection limit={3} />
      <CtaSection
        title={`Ready for a Resume Built for ${industry.name}?`}
        description="Get a free, no-obligation resume review from a Certified Professional Resume Writer."
      />
    </>
  );
}
