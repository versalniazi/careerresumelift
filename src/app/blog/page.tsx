import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

import { Container } from "@/components/container";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { BlogCard } from "@/components/blog/blog-card";
import { CtaSection } from "@/components/sections/cta-section";
import { constructMetadata } from "@/lib/metadata";
import { getAllBlogPosts } from "@/lib/blog";
import { blogCategories, categoryToSlug } from "@/data/blog";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = constructMetadata({
  title: "Career & Resume Blog",
  description:
    "Expert advice on resume writing, interview preparation, LinkedIn optimization, salary negotiation, and career growth from Career Resume Lift's certified writers.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <Breadcrumbs items={[{ name: "Blog", path: "/blog" }]} />

      <section className="py-20 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge>Career Blog</Badge>
            <h1 className="mt-6 text-balance font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
              Insights to Help You Land Your Next Role
            </h1>
            <p className="mt-6 text-balance text-lg leading-relaxed text-muted-foreground">
              Practical, expert-backed advice on resumes, interviews, LinkedIn, and career growth.
            </p>
          </Reveal>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {blogCategories.map((category) => (
              <Link
                key={category}
                href={`/blog/category/${categoryToSlug(category)}`}
                className="rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-secondary/50 hover:text-secondary"
              >
                {category}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {featured ? (
        <section className="pb-16">
          <Container>
            <Reveal>
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid grid-cols-1 gap-8 overflow-hidden rounded-3xl border border-border bg-card p-8 transition-shadow hover:shadow-xl hover:shadow-secondary/5 lg:grid-cols-2 lg:items-center"
              >
                <div className="flex h-48 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary/25 to-accent/20 lg:h-64">
                  <span className="font-heading text-5xl font-black text-foreground/10">
                    Featured
                  </span>
                </div>
                <div>
                  <Badge variant="accent">Featured · {featured.category}</Badge>
                  <h2 className="mt-4 font-heading text-2xl font-bold leading-snug transition-colors group-hover:text-secondary sm:text-3xl">
                    {featured.title}
                  </h2>
                  <p className="mt-3 text-muted-foreground">{featured.description}</p>
                  <div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{formatDate(featured.date)}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="size-3.5" />
                      {featured.readingTime}
                    </span>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary">
                    Read the article
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          </Container>
        </section>
      ) : null}

      <section className="pb-24">
        <Container>
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <RevealItem key={post.slug}>
                <BlogCard post={post} index={i} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
