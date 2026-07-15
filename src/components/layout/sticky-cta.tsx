"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Sparkles, X } from "lucide-react";

import { Button } from "@/components/ui/button";

export function StickyCta() {
  const [visible, setVisible] = React.useState(false);
  const [dismissed, setDismissed] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 900);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && !dismissed ? (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 28 }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-xl shadow-[0_-8px_30px_rgba(0,0,0,0.08)] sm:bottom-6 sm:inset-x-auto sm:right-6 sm:max-w-sm sm:rounded-2xl sm:border"
        >
          <div className="flex items-center gap-4 px-5 py-4">
            <span className="hidden shrink-0 items-center justify-center rounded-full bg-secondary/10 p-2.5 text-secondary sm:flex">
              <Sparkles className="size-5" />
            </span>
            <div className="flex-1">
              <p className="text-sm font-semibold">Free Resume Review</p>
              <p className="text-xs text-muted-foreground">
                Get expert feedback in 24 hours — no cost, no obligation.
              </p>
            </div>
            <Button asChild size="sm" className="shrink-0">
              <Link href="/contact">
                Start
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <button
              type="button"
              aria-label="Dismiss"
              onClick={() => setDismissed(true)}
              className="shrink-0 text-muted-foreground hover:text-foreground"
            >
              <X className="size-4" />
            </button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
