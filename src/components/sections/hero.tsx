"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FileCheck2, Star, TrendingUp, BadgeCheck } from "lucide-react";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { googleRating } from "@/data/testimonials";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-16 sm:pb-28 sm:pt-24">
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_10%,transparent_75%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-secondary/10 blur-3xl dark:bg-secondary/20" />

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7"
          >
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="default">CPRW Certified</Badge>
              <Badge variant="accent">ATS Optimized</Badge>
              <Badge variant="muted" className="gap-1.5">
                <Star className="size-3.5 fill-accent text-accent" />
                {googleRating.score} Rated
              </Badge>
            </div>

            <h1 className="mt-6 text-balance font-heading text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Land More Interviews With a{" "}
              <span className="text-gradient">Resume That Gets Results</span>
            </h1>

            <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted-foreground">
              Work 1:1 with a Certified Professional Resume Writer to build an ATS-optimized,
              recruiter-approved resume built to US hiring standards — for executives,
              professionals, and career changers nationwide.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">
                  Book Free Resume Review
                  <ArrowRight className="size-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/success-stories">View Resume Samples</Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <BadgeCheck className="size-4 text-success" /> 15,000+ resumes written
              </span>
              <span className="flex items-center gap-2">
                <TrendingUp className="size-4 text-success" /> 96% interview success rate
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md">
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 rounded-3xl border border-border bg-card p-6 shadow-2xl"
              >
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div>
                    <p className="font-heading text-sm font-bold">Alexandra Chen</p>
                    <p className="text-xs text-muted-foreground">Senior Product Manager</p>
                  </div>
                  <span className="flex size-9 items-center justify-center rounded-full bg-success/10 text-success">
                    <FileCheck2 className="size-4.5" />
                  </span>
                </div>
                <div className="mt-4 space-y-2.5">
                  <div className="h-2.5 w-3/4 rounded-full bg-muted" />
                  <div className="h-2.5 w-full rounded-full bg-muted" />
                  <div className="h-2.5 w-5/6 rounded-full bg-muted" />
                </div>
                <div className="mt-5 space-y-2.5">
                  <div className="h-2.5 w-2/3 rounded-full bg-secondary/20" />
                  <div className="h-2.5 w-full rounded-full bg-muted" />
                  <div className="h-2.5 w-4/5 rounded-full bg-muted" />
                </div>
                <div className="mt-5 flex items-center justify-between rounded-xl bg-success/10 px-4 py-3">
                  <span className="text-xs font-semibold text-success">ATS Score</span>
                  <span className="font-heading text-sm font-bold text-success">98/100</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -left-10 top-8 z-20 hidden rounded-2xl border border-border bg-card p-4 shadow-xl sm:flex sm:flex-col"
              >
                <span className="text-xs text-muted-foreground">Interview Requests</span>
                <span className="font-heading text-2xl font-extrabold text-secondary">+312%</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-6 bottom-4 z-20 hidden rounded-2xl border border-border bg-card p-4 shadow-xl sm:flex sm:items-center sm:gap-2"
              >
                <div className="flex -space-x-2">
                  {["AR", "DC", "PN"].map((initials) => (
                    <span
                      key={initials}
                      className="flex size-8 items-center justify-center rounded-full border-2 border-card bg-accent/20 text-[10px] font-bold text-accent-foreground"
                    >
                      {initials}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-medium text-muted-foreground">Hired this week</span>
              </motion.div>

              <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-secondary/30 to-accent/20 blur-2xl" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
