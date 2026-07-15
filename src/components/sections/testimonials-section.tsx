import { Star } from "lucide-react";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { testimonials, googleRating, trustpilotRating } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export function TestimonialsSection({
  limit,
  className,
}: {
  limit?: number;
  className?: string;
}) {
  const items = limit ? testimonials.slice(0, limit) : testimonials;

  return (
    <section className={cn("py-24", className)}>
      <Container>
        <SectionHeading
          eyebrow="Client Success"
          title="Real Results From Real Job Seekers"
          description="Thousands of professionals have trusted us to represent their careers on paper. Here's what a few of them have to say."
          className="mb-12"
        />

        <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
          <Badge variant="outline" className="gap-2 px-4 py-2 text-sm">
            <Star className="size-4 fill-accent text-accent" />
            {googleRating.score} on {googleRating.platform} ({googleRating.count})
          </Badge>
          <Badge variant="outline" className="gap-2 px-4 py-2 text-sm">
            <Star className="size-4 fill-accent text-accent" />
            {trustpilotRating.score} on {trustpilotRating.platform} ({trustpilotRating.count})
          </Badge>
        </div>

        <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((t) => (
            <RevealItem key={t.name}>
              <Card className="h-full transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-secondary/5">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="mb-3 flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="size-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="flex-1 text-sm leading-relaxed text-foreground/90">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  {t.result ? (
                    <Badge variant="success" className="mt-4 w-fit">
                      {t.result}
                    </Badge>
                  ) : null}
                  <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-semibold text-secondary">
                      {t.initials}
                    </span>
                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {t.role} · {t.industry}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
