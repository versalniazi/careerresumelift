import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { JsonLd } from "@/components/seo/json-ld";
import { faqSchema } from "@/lib/schema";
import { cn } from "@/lib/utils";

export function FaqSection({
  items,
  eyebrow = "FAQ",
  title = "Frequently Asked Questions",
  description,
  className,
  idPrefix = "faq",
}: {
  items: { question: string; answer: string }[];
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
  idPrefix?: string;
}) {
  return (
    <section className={cn("py-24", className)}>
      <Container className="max-w-3xl">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} className="mb-10" />
        <Reveal>
          <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card px-6">
            {items.map((item, i) => (
              <AccordionItem key={`${idPrefix}-${i}`} value={`${idPrefix}-${i}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Container>
      <JsonLd data={faqSchema(items)} />
    </section>
  );
}
