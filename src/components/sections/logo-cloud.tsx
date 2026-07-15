import { Container } from "@/components/container";
import { clientLogos } from "@/data/stats";

export function LogoCloud() {
  const logos = [...clientLogos, ...clientLogos];

  return (
    <section className="overflow-hidden py-10">
      <Container>
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Trusted by professionals who went on to work at
        </p>
      </Container>
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-16">
          {logos.map((logo, i) => (
            <span
              key={`${logo}-${i}`}
              className="whitespace-nowrap font-heading text-xl font-bold text-muted-foreground/50"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
