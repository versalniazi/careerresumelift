import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

import { Container } from "@/components/container";
import { siteConfig } from "@/config/site";
import { footerNav } from "@/config/nav";
import {
  LinkedinIcon,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
} from "@/components/icons/social-icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/50">
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 flex flex-col gap-4 sm:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-heading text-xl font-bold">
              <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <span className="text-base font-black">CR</span>
              </span>
              {siteConfig.name}
            </Link>
            <p className="max-w-sm text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-3 pt-1">
              {[
                { href: siteConfig.social.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
                { href: siteConfig.social.twitter, icon: TwitterIcon, label: "Twitter" },
                { href: siteConfig.social.facebook, icon: FacebookIcon, label: "Facebook" },
                { href: siteConfig.social.instagram, icon: InstagramIcon, label: "Instagram" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-secondary hover:text-secondary"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Services</h3>
            <ul className="flex flex-col gap-2.5">
              {footerNav.services.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Company</h3>
            <ul className="flex flex-col gap-2.5">
              {footerNav.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Resources</h3>
            <ul className="flex flex-col gap-2.5">
              {footerNav.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Contact</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-start gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="mt-0.5 size-4 shrink-0" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-start gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Phone className="mt-0.5 size-4 shrink-0" />
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                <span>
                  {siteConfig.contact.address.city}, {siteConfig.contact.address.state}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {footerNav.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
