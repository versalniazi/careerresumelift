import { X, Check } from "lucide-react";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";

const before = [
  "Generic, duty-based bullet points with no measurable impact",
  "Dense paragraphs that recruiters skim past in seconds",
  "Outdated formatting that fails Applicant Tracking Systems",
  "No clear career narrative or target role",
];

const after = [
  "Achievement-driven bullets with quantified results",
  "Clean, scannable formatting recruiters can read in seconds",
  "ATS-optimized structure that passes automated screening",
  "A clear, strategic personal brand aligned to your target role",
];

export function BeforeAfterSection() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="The Difference"
          title="See the Transformation"
          description="A professionally written resume isn't just prettier — it's strategically built to get results."
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-destructive/20 bg-destructive/5 p-8">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-destructive/10 px-3 py-1 text-xs font-semibold text-destructive">
                <X className="size-3.5" /> Before
              </span>
              <h3 className="font-heading text-xl font-bold">The DIY Resume</h3>
              <ul className="mt-6 flex flex-col gap-4">
                {before.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <X className="mt-0.5 size-4 shrink-0 text-destructive/70" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-success/30 bg-success/5 p-8">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">
                <Check className="size-3.5" /> After Career Resume Lift
              </span>
              <h3 className="font-heading text-xl font-bold">The Professional Resume</h3>
              <ul className="mt-6 flex flex-col gap-4">
                {after.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground/90">
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
  );
}
