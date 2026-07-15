import Link from "next/link";
import { ArrowRight, FileQuestion } from "lucide-react";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center py-20">
      <Container className="max-w-2xl text-center">
        <span className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
          <FileQuestion className="size-8" />
        </span>
        <h1 className="mt-6 font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
          404 — Page Not Found
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved. Let&rsquo;s get
          you back on track.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/">
              Back to Homepage
              <ArrowRight className="size-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        <div className="mt-14 border-t border-border pt-8">
          <p className="text-sm font-semibold text-muted-foreground">Popular Pages</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {services.slice(0, 5).map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-secondary/50 hover:text-secondary"
              >
                {s.shortName}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
