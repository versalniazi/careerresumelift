import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

import { Container } from "@/components/container";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  const allItems = [{ name: "Home", path: "/" }, ...items];

  return (
    <div className="border-b border-border/60 bg-muted/30">
      <Container className="flex items-center gap-1.5 py-3 text-xs text-muted-foreground overflow-x-auto">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          return (
            <span key={item.path} className="flex items-center gap-1.5 whitespace-nowrap">
              {index === 0 ? (
                <Link href={item.path} className="flex items-center gap-1 hover:text-foreground">
                  <Home className="size-3.5" />
                </Link>
              ) : isLast ? (
                <span className="font-medium text-foreground">{item.name}</span>
              ) : (
                <Link href={item.path} className="hover:text-foreground">
                  {item.name}
                </Link>
              )}
              {!isLast ? <ChevronRight className="size-3.5" /> : null}
            </span>
          );
        })}
      </Container>
      <JsonLd data={breadcrumbSchema(allItems)} />
    </div>
  );
}
