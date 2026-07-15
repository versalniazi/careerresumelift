import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { processSteps } from "@/data/stats";

export function ProcessSection({
  eyebrow = "How It Works",
  title = "From Outdated Resume to Interview-Ready in Four Steps",
  description = "A guided, collaborative process designed to make writing your resume simple and stress-free.",
  steps = processSteps,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  steps?: { step: string; title: string; description: string }[];
}) {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} className="mb-16" />
        <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <RevealItem key={step.step}>
              <div className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-secondary/5">
                <span className="font-heading text-4xl font-extrabold text-secondary/20 transition-colors group-hover:text-secondary/40">
                  {step.step}
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
