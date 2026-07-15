"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw } from "lucide-react";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[70vh] items-center py-20">
      <Container className="max-w-xl text-center">
        <span className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-destructive/10 text-destructive">
          <AlertTriangle className="size-8" />
        </span>
        <h1 className="mt-6 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
          Something Went Wrong
        </h1>
        <p className="mt-4 text-muted-foreground">
          We hit an unexpected error loading this page. Please try again, or head back to the
          homepage.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" onClick={() => reset()}>
            <RotateCcw className="size-4" />
            Try Again
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/">Back to Homepage</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
