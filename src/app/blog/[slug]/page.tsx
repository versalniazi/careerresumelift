import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Clock, ArrowLeft } from "lucide-react";

import { Container } from "@/components/container";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { BlogCard } from "@/components/blog/blog-card";
import { CtaSection } from "@/components/sections/cta-section";
import { JsonLd } from "@/components/seo/json-ld";
import { articleSchema } from "@/lib/schema";
import { constructMetadata } from "@/lib/metadata";
import { getAllBlogSlugs, getBlogPostBySlug, getAllBlogPosts } from "@/lib/blog";
import { categoryToSlug } from "@/data/blog";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return constructMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  const related = getAllBlogPosts()
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />

      <article className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <Reveal>
            <Link
              href={`/blog/category/${categoryToSlug(post.category)}`}
              className="w-fit"
            >
              <Badge>{post.category}</Badge>
            </Link>
            <h1 className="mt-5 text-balance font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
              {post.title}
            </h1>
            <div className="mt-5 flex items-center gap-4 text-sm text-muted-foreground">
              <span>{post.author}</span>
              <span>·</span>
              <span>{formatDate(post.date)}</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="size-3.5" />
                {post.readingTime}
              </span>
            </div>

            <div className="prose prose-neutral mt-10 max-w-none prose-headings:font-heading prose-headings:font-bold prose-a:text-secondary prose-a:no-underline hover:prose-a:underline dark:prose-invert">
              <MDXRemote source={post.content} />
            </div>
          </Reveal>
        </Container>
      </article>

      {related.length > 0 ? (
        <section className="border-t border-border bg-muted/30 py-20">
          <Container>
            <h2 className="mb-10 text-center font-heading text-2xl font-bold">
              More on {post.category}
            </h2>
            <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {related.map((p, i) => (
                <RevealItem key={p.slug}>
                  <BlogCard post={p} index={i} />
                </RevealItem>
              ))}
            </RevealGroup>
          </Container>
        </section>
      ) : (
        <Container className="max-w-3xl pb-4">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary">
            <ArrowLeft className="size-4" />
            Back to all articles
          </Link>
        </Container>
      )}

      <CtaSection />

      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.description,
          path: `/blog/${post.slug}`,
          datePublished: post.date,
          author: post.author,
        })}
      />
    </>
  );
}
