import { Container } from "@/components/container";
import { Counter } from "@/components/motion/counter";
import { Reveal } from "@/components/motion/reveal";
import { heroStats } from "@/data/stats";

export function StatsSection() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid grid-cols-2 gap-8 rounded-3xl border border-border bg-card px-6 py-12 shadow-sm sm:px-12 lg:grid-cols-4">
          {heroStats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="flex flex-col items-center text-center">
              <span className="font-heading text-4xl font-extrabold text-gradient sm:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} decimals={stat.decimals ?? 0} />
              </span>
              <span className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
