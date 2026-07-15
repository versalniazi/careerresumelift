import { Check, X } from "lucide-react";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { pricingComparisonFeatures } from "@/data/pricing";

export function ComparisonTable() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Compare Packages"
          title="Professional vs. Executive vs. Federal"
          description="A quick side-by-side look at what's included in our three most popular packages."
          className="mb-14"
        />
        <Reveal className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="bg-muted/60">
                <th className="p-4 text-left font-heading font-semibold">Feature</th>
                <th className="p-4 text-left font-heading font-semibold">Professional</th>
                <th className="p-4 text-left font-heading font-semibold">Executive</th>
                <th className="p-4 text-left font-heading font-semibold">Federal</th>
              </tr>
            </thead>
            <tbody>
              {pricingComparisonFeatures.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                  <td className="p-4 font-medium text-foreground/90">{row.feature}</td>
                  {[row.professional, row.executive, row.federal].map((value, idx) => (
                    <td key={idx} className="p-4">
                      {typeof value === "boolean" ? (
                        value ? (
                          <Check className="size-4 text-success" />
                        ) : (
                          <X className="size-4 text-muted-foreground/40" />
                        )
                      ) : (
                        <span className="text-muted-foreground">{value}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </Container>
    </section>
  );
}
