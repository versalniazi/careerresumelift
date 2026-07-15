import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { Container } from "@/components/container";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { BlogCard } from "@/components/blog/blog-card";
import { CtaSection } from "@/components/sections/cta-section";
import { constructMetadata } from "@/lib/metadata";
import { getBlogPostsByCategory } from "@/lib/blog";
import { blogCategories, categoryToSlug, slugToCategory } from "@/data/blog";

export function generateStaticParams() {
  return blogCategories.map((category) => ({ category: categoryToSlug(category) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = slugToCategory(categorySlug);
  if (!category) return {};

  return constructMetadata({
    title: `${category} Articles`,
    description: `Browse all Career Resume Lift articles on ${category.toLowerCase()} — practical, expert-backed career advice.`,
    path: `/blog/category/${categorySlug}`,
  });
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const category = slugToCategory(categorySlug);

  if (!category) notFound();

  const posts = getBlogPostsByCategory(category);

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Blog", path: "/blog" },
          { name: category, path: `/blog/category/${categorySlug}` },
        ]}
      />

      <section className="py-20 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge>{category}</Badge>
            <h1 className="mt-6 text-balance font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
              {category} Articles
            </h1>
            <p className="mt-6 text-balance text-lg leading-relaxed text-muted-foreground">
              All our expert advice on {category.toLowerCase()}, in one place.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          {posts.length > 0 ? (
            <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, i) => (
                <RevealItem key={post.slug}>
                  <BlogCard post={post} index={i} />
                </RevealItem>
              ))}
            </RevealGroup>
          ) : (
            <div className="rounded-2xl border border-dashed border-border py-16 text-center text-muted-foreground">
              <p>No articles in this category yet — check back soon.</p>
              <Link
                href="/blog"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary"
              >
                <ArrowLeft className="size-4" />
                Back to all articles
              </Link>
            </div>
          )}
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
