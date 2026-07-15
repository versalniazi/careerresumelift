import Link from "next/link";
import { Check } from "lucide-react";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type PricingItem = {
  name: string;
  price: string;
  turnaround?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta?: string;
  href?: string;
};

export function PricingGrid({
  items,
  eyebrow = "Pricing",
  title = "Transparent Packages for Every Career Stage",
  description = "No hidden fees. Choose the package that fits your goals — every option includes a Certified Professional Resume Writer.",
  showHeading = true,
  columns = 3,
}: {
  items: PricingItem[];
  eyebrow?: string;
  title?: string;
  description?: string;
  showHeading?: boolean;
  columns?: 2 | 3;
}) {
  return (
    <section className="py-24">
      <Container>
        {showHeading ? (
          <SectionHeading eyebrow={eyebrow} title={title} description={description} className="mb-16" />
        ) : null}
        <RevealGroup
          className={cn(
            "grid grid-cols-1 gap-6",
            columns === 3 ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2"
          )}
        >
          {items.map((item) => (
            <RevealItem key={item.name}>
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-3xl border p-8 transition-all hover:-translate-y-1",
                  item.highlighted
                    ? "border-secondary bg-primary text-primary-foreground shadow-2xl shadow-secondary/20"
                    : "border-border bg-card hover:shadow-xl hover:shadow-secondary/5"
                )}
              >
                {item.highlighted ? (
                  <Badge variant="accent" className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground border-accent">
                    Most Popular
                  </Badge>
                ) : null}
                <h3 className="font-heading text-xl font-bold">{item.name}</h3>
                <p
                  className={cn(
                    "mt-2 text-sm",
                    item.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"
                  )}
                >
                  {item.description}
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-heading text-4xl font-extrabold">{item.price}</span>
                </div>
                {item.turnaround ? (
                  <p
                    className={cn(
                      "mt-1 text-xs font-medium",
                      item.highlighted ? "text-accent" : "text-secondary"
                    )}
                  >
                    {item.turnaround}
                  </p>
                ) : null}

                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <Check
                        className={cn(
                          "mt-0.5 size-4 shrink-0",
                          item.highlighted ? "text-accent" : "text-success"
                        )}
                      />
                      <span className={item.highlighted ? "text-primary-foreground/90" : ""}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant={item.highlighted ? "accent" : "default"}
                  className="mt-8 w-full"
                >
                  <Link href={item.href ?? "/contact"}>{item.cta ?? "Get Started"}</Link>
                </Button>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
