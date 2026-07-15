"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Icon } from "@/components/icon";
import { Container } from "@/components/container";
import { mainNav } from "@/config/nav";
import { services } from "@/data/services";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = React.useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl shadow-sm"
          : "border-b border-transparent bg-background/40 backdrop-blur-sm"
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-heading text-xl font-bold">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <span className="text-base font-black">CR</span>
          </span>
          <span className="hidden sm:inline">{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" onMouseLeave={() => setOpenMenu(null)}>
          {mainNav.map((item) => (
            <div key={item.label} className="relative" onMouseEnter={() => item.children && setOpenMenu(item.label)}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground",
                  pathname === item.href && "text-secondary"
                )}
              >
                {item.label}
                {item.children ? (
                  <ChevronDown
                    className={cn(
                      "size-3.5 transition-transform",
                      openMenu === item.label && "rotate-180"
                    )}
                  />
                ) : null}
              </Link>

              <AnimatePresence>
                {item.children && openMenu === item.label ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-1/2 top-full z-50 mt-2 w-[560px] -translate-x-1/2 rounded-2xl border border-border bg-popover p-4 shadow-2xl"
                  >
                    {item.label === "Services" ? (
                      <div className="grid grid-cols-2 gap-1">
                        {services.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-muted"
                          >
                            <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                              <Icon name={service.icon} className="size-4.5" />
                            </span>
                            <span>
                              <span className="block text-sm font-semibold">
                                {service.shortName}
                              </span>
                              <span className="block text-xs text-muted-foreground line-clamp-1">
                                {service.eyebrow}
                              </span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 gap-1">
                        {item.children.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="flex flex-col rounded-xl p-3 transition-colors hover:bg-muted"
                          >
                            <span className="text-sm font-semibold">{link.label}</span>
                            {link.description ? (
                              <span className="text-xs text-muted-foreground">
                                {link.description}
                              </span>
                            ) : null}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Button asChild variant="outline" size="sm">
            <Link href="/pricing">View Pricing</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/contact">
              Book Free Review
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </Container>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {mainNav.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block rounded-lg px-3 py-2.5 text-base font-semibold"
                  >
                    {item.label}
                  </Link>
                  {item.children ? (
                    <div className="ml-3 flex flex-col border-l border-border pl-3">
                      {item.children.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
              <div className="mt-3 flex flex-col gap-2">
                <Button asChild variant="outline">
                  <Link href="/pricing">View Pricing</Link>
                </Button>
                <Button asChild>
                  <Link href="/contact">Book Free Resume Review</Link>
                </Button>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
