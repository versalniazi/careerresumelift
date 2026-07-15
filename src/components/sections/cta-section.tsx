import Link from "next/link";
import { ArrowRight, ShieldCheck, BadgeCheck, Lock } from "lucide-react";

import { Container } from "@/components/container";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

export function CtaSection({
  title = "Ready to Land More Interviews?",
  description = "Get a free, no-obligation resume review from a Certified Professional Resume Writer within 24 hours.",
  primaryLabel = "Book Free Resume Review",
  primaryHref = "/contact",
  secondaryLabel = "View Pricing",
  secondaryHref = "/pricing",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="py-24">
      <Container>
        <Reveal className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center text-primary-foreground sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-10" />
          <div className="pointer-events-none absolute -top-24 right-0 size-72 rounded-full bg-secondary/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-0 size-72 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-balance font-heading text-3xl font-bold sm:text-4xl">{title}</h2>
            <p className="mt-4 text-balance text-primary-foreground/70">{description}</p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild variant="white" size="lg">
                <Link href={primaryHref}>
                  {primaryLabel}
                  <ArrowRight className="size-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-primary-foreground hover:bg-white/10">
                <Link href={secondaryHref}>{secondaryLabel}</Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-primary-foreground/60">
              <span className="flex items-center gap-1.5">
                <BadgeCheck className="size-4" /> CPRW Certified
              </span>
              <span className="flex items-center gap-1.5">
                <Lock className="size-4" /> 100% Confidential
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="size-4" /> Money-Back Guarantee
              </span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
