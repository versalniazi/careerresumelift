import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/lib/blog";

const gradients = [
  "from-secondary/25 to-accent/20",
  "from-accent/25 to-success/15",
  "from-primary/15 to-secondary/20",
];

export function BlogCard({ post, index = 0 }: { post: BlogPost; index?: number }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-secondary/5"
    >
      <div
        className={`relative flex h-40 items-center justify-center bg-gradient-to-br ${gradients[index % gradients.length]}`}
      >
        <span className="font-heading text-4xl font-black text-foreground/10">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <Badge variant="default" className="w-fit">
          {post.category}
        </Badge>
        <h3 className="mt-3 font-heading text-lg font-semibold leading-snug transition-colors group-hover:text-secondary">
          {post.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {post.description}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
          <span>{formatDate(post.date)}</span>
          <span className="flex items-center gap-1">
            <Clock className="size-3.5" />
            {post.readingTime}
          </span>
        </div>
      </div>
      <span className="sr-only">Read more</span>
      <ArrowRight className="mb-4 ml-6 size-4 text-secondary opacity-0 transition-opacity group-hover:opacity-100" />
    </Link>
  );
}
