import { Container } from "@/components/container";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";

export function LegalLayout({
  title,
  lastUpdated,
  breadcrumbLabel,
  breadcrumbPath,
  children,
}: {
  title: string;
  lastUpdated: string;
  breadcrumbLabel: string;
  breadcrumbPath: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Breadcrumbs items={[{ name: breadcrumbLabel, path: breadcrumbPath }]} />

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <Reveal>
            <Badge variant="muted">Legal</Badge>
            <h1 className="mt-5 text-balance font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
              {title}
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>

            <div className="prose prose-neutral mt-10 max-w-none prose-headings:font-heading prose-headings:font-bold prose-a:text-secondary dark:prose-invert">
              {children}
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
