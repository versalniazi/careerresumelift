import { Icon } from "@/components/icon";
import { Container } from "@/components/container";
import { trustBadges } from "@/data/stats";
import { cn } from "@/lib/utils";

export function TrustBar({ className }: { className?: string }) {
  return (
    <section className={cn("border-y border-border bg-muted/40 py-6", className)}>
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {trustBadges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Icon name={badge.icon} className="size-4 text-secondary" />
              {badge.label}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
