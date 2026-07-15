import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, Calendar } from "lucide-react";

import { Container } from "@/components/container";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/forms/contact-form";
import { FaqSection } from "@/components/sections/faq-section";
import { constructMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { faqCategories } from "@/data/faqs";
import { LinkedinIcon } from "@/components/icons/social-icons";

export const metadata: Metadata = constructMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Career Resume Lift for a free resume review, questions about our services, or to book a strategy call with a Certified Professional Resume Writer.",
  path: "/contact",
});

const gettingStartedFaqs =
  faqCategories.find((c) => c.category === "Getting Started")?.items ?? [];

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />

      <section className="py-20 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge>Contact Us</Badge>
            <h1 className="mt-6 text-balance font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
              Let&rsquo;s Talk About Your Career Goals
            </h1>
            <p className="mt-6 text-balance text-lg leading-relaxed text-muted-foreground">
              Book a free resume review or send us a message — a real Certified Professional
              Resume Writer will respond within one business day.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
            <Reveal className="lg:col-span-3">
              <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-10">
                <h2 className="font-heading text-xl font-bold">Send Us a Message</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Fill out the form and we&rsquo;ll get back to you within one business day.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="flex flex-col gap-6 lg:col-span-2">
              <div className="rounded-3xl border border-border bg-card p-6">
                <h3 className="flex items-center gap-2 font-heading text-base font-bold">
                  <Calendar className="size-5 text-secondary" />
                  Book a Free Strategy Call
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Prefer to talk it through? Grab a time that works for you.
                </p>
                <div className="mt-4 flex h-48 flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-border bg-muted/40 text-center text-sm text-muted-foreground">
                  <Calendar className="size-8 text-muted-foreground/60" />
                  Calendly scheduler embed
                  <span className="text-xs">(connect your Calendly link here)</span>
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-card p-6">
                <h3 className="font-heading text-base font-bold">Contact Details</h3>
                <ul className="mt-4 flex flex-col gap-4 text-sm">
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 size-4 shrink-0 text-secondary" />
                    <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-secondary">
                      {siteConfig.contact.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 size-4 shrink-0 text-secondary" />
                    <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-secondary">
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-secondary" />
                    <span>
                      {siteConfig.contact.address.street}
                      <br />
                      {siteConfig.contact.address.city}, {siteConfig.contact.address.state}{" "}
                      {siteConfig.contact.address.zip}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <LinkedinIcon className="mt-0.5 size-4 shrink-0 text-secondary" />
                    <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-secondary">
                      Career Resume Lift on LinkedIn
                    </a>
                  </li>
                </ul>

                <div className="mt-6 border-t border-border pt-6">
                  <h4 className="flex items-center gap-2 text-sm font-semibold">
                    <Clock className="size-4 text-secondary" />
                    Business Hours
                  </h4>
                  <ul className="mt-3 flex flex-col gap-1.5 text-sm text-muted-foreground">
                    {siteConfig.contact.hours.map((h) => (
                      <li key={h.days} className="flex justify-between gap-4">
                        <span>{h.days}</span>
                        <span>{h.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex h-56 flex-col items-center justify-center gap-2 rounded-3xl border-2 border-dashed border-border bg-muted/40 text-center text-sm text-muted-foreground">
                <MapPin className="size-8 text-muted-foreground/60" />
                Google Map embed
                <span className="text-xs">
                  {siteConfig.contact.address.city}, {siteConfig.contact.address.state}
                </span>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <FaqSection
        items={gettingStartedFaqs}
        idPrefix="contact-faq"
        eyebrow="Before You Reach Out"
        title="Quick Answers"
      />
    </>
  );
}
