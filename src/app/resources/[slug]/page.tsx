import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/container";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/icon";
import { ResourceDownloadForm } from "@/components/forms/resource-download-form";
import { constructMetadata } from "@/lib/metadata";
import { resources } from "@/data/resources";

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = resources.find((r) => r.slug === slug);
  if (!resource) return {};

  return constructMetadata({
    title: resource.title,
    description: resource.description,
    path: `/resources/${resource.slug}`,
  });
}

export default async function ResourceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = resources.find((r) => r.slug === slug);

  if (!resource) notFound();

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Resources", path: "/resources" },
          { name: resource.title, path: `/resources/${resource.slug}` },
        ]}
      />

      <section className="py-20 sm:py-24">
        <Container className="max-w-4xl">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-5">
            <Reveal className="lg:col-span-3">
              <span className="flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <Icon name={resource.icon} className="size-7" />
              </span>
              <Badge variant="muted" className="mt-6">
                {resource.type}
              </Badge>
              <h1 className="mt-4 text-balance font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
                {resource.title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                {resource.description}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Enter your email and we&rsquo;ll send this resource straight to your inbox —
                completely free, no strings attached.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-2">
              <div className="rounded-3xl border border-border bg-card p-6 shadow-lg sm:p-8">
                <ResourceDownloadForm resourceTitle={resource.title} />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
