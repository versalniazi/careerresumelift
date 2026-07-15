import type { Metadata } from "next";

import { Container } from "@/components/container";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { CtaSection } from "@/components/sections/cta-section";
import { JsonLd } from "@/components/seo/json-ld";
import { faqSchema } from "@/lib/schema";
import { constructMetadata } from "@/lib/metadata";
import { faqCategories, generalFaqs } from "@/data/faqs";

export const metadata: Metadata = constructMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Career Resume Lift's resume writing process, pricing, turnaround times, ATS optimization, and revisions.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "FAQ", path: "/faq" }]} />

      <section className="py-20 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge>FAQ</Badge>
            <h1 className="mt-6 text-balance font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-balance text-lg leading-relaxed text-muted-foreground">
              Everything you need to know about working with Career Resume Lift.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-24">
        <Container className="max-w-3xl">
          <div className="flex flex-col gap-12">
            {faqCategories.map((category) => (
              <Reveal key={category.category}>
                <h2 className="mb-4 font-heading text-xl font-bold">{category.category}</h2>
                <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card px-6">
                  {category.items.map((item, i) => (
                    <AccordionItem key={item.question} value={`${category.category}-${i}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent>{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        title="Still Have Questions?"
        description="Reach out and our team will get back to you within one business day."
        primaryLabel="Contact Us"
        primaryHref="/contact"
      />

      <JsonLd data={faqSchema(generalFaqs)} />
    </>
  );
}
