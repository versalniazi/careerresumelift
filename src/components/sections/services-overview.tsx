import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Icon } from "@/components/icon";
import { services } from "@/data/services";

export function ServicesOverview() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          title="Every Career Document You Need to Get Hired"
          description="From entry-level to the C-Suite, federal to military transition — our CPRW-certified writers cover every career stage and industry."
          className="mb-16"
        />

        <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <RevealItem key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-secondary/40 hover:shadow-xl hover:shadow-secondary/5"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                  <Icon name={service.icon} className="size-6" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-semibold">{service.shortName}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.heroDescription}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary">
                  Learn more
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
