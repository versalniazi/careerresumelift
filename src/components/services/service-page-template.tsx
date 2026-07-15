import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { Container } from "@/components/container";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Icon } from "@/components/icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PricingGrid } from "@/components/sections/pricing-grid";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { JsonLd } from "@/components/seo/json-ld";
import { serviceSchema } from "@/lib/schema";
import type { Service } from "@/data/services";

export function ServicePageTemplate({ service }: { service: Service }) {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Services", path: "/services" },
          { name: service.shortName, path: `/services/${service.slug}` },
        ]}
      />

      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_10%,transparent_75%)]" />
        <Container className="relative">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <Badge>{service.eyebrow}</Badge>
              <h1 className="mt-6 text-balance font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
                {service.heroHeadline}
              </h1>
              <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted-foreground">
                {service.heroDescription}
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Book Free Resume Review
                    <ArrowRight className="size-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="#pricing">View Pricing</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-5">
              <div className="rounded-3xl border border-border bg-card p-8 shadow-xl">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <Icon name={service.icon} className="size-7" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold">Who This Is For</h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {service.whoItsFor.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-success" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-muted/40 py-24">
        <Container>
          <SectionHeading
            eyebrow="Benefits"
            title={`What You Get With ${service.shortName}`}
            className="mb-16"
          />
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.benefits.map((benefit) => (
              <RevealItem key={benefit.title}>
                <div className="flex h-full flex-col rounded-2xl bg-card p-6 shadow-sm">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                    <Icon name={benefit.icon} className="size-5" />
                  </span>
                  <h3 className="mt-4 font-heading text-base font-semibold">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <SectionHeading
            eyebrow="Our Process"
            title="How We Build Your New Resume"
            description={`A clear, collaborative process designed specifically around ${service.shortName.toLowerCase()}.`}
            className="mb-16"
          />
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.process.map((step, i) => (
              <RevealItem key={step.title}>
                <div className="relative h-full rounded-2xl border border-border bg-card p-6">
                  <span className="font-heading text-3xl font-extrabold text-secondary/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-heading text-base font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <div id="pricing">
        <PricingGrid
          items={service.pricing.map((tier) => ({
            name: tier.name,
            price: tier.price,
            turnaround: tier.turnaround,
            description: tier.description,
            features: tier.features,
            highlighted: tier.highlighted,
            cta: "Get Started",
            href: "/contact",
          }))}
          eyebrow="Pricing"
          title={`${service.shortName} Packages`}
          description="Every package includes a dedicated Certified Professional Resume Writer and revision rounds."
          columns={service.pricing.length >= 3 ? 3 : 2}
        />
      </div>

      <TestimonialsSection limit={3} className="bg-muted/40 py-24" />

      <FaqSection
        items={service.faqs}
        idPrefix={service.slug}
        title="Frequently Asked Questions"
        description={`Common questions about our ${service.shortName.toLowerCase()} service.`}
      />

      <CtaSection
        title={`Ready to Get Started With ${service.shortName}?`}
        description="Book a free, no-obligation resume review and see exactly how we'd approach your career story."
      />

      <JsonLd
        data={[
          serviceSchema({
            name: service.name,
            description: service.metaDescription,
            path: `/services/${service.slug}`,
          }),
        ]}
      />
    </>
  );
}
