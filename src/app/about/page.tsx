import type { Metadata } from "next";
import { BadgeCheck, ScanSearch, Users } from "lucide-react";

import { Container } from "@/components/container";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { StatsSection } from "@/components/sections/stats-section";
import { CtaSection } from "@/components/sections/cta-section";
import { JsonLd } from "@/components/seo/json-ld";
import { constructMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { LinkedinIcon } from "@/components/icons/social-icons";

export const metadata: Metadata = constructMetadata({
  title: "About Us",
  description:
    "Meet Muhammad Shair Khan, Certified Professional Resume Writer (CPRW) and founder of Career Resume Lift, a US resume writing agency built on ATS expertise and career branding.",
  path: "/about",
});

const credentials = [
  {
    icon: "BadgeCheck",
    title: "Certified Professional Resume Writer (CPRW)",
    description:
      "Certified through the Professional Association of Resume Writers and Career Coaches (PARWCC), the industry's leading resume writing credential.",
  },
  {
    icon: "ScanSearch",
    title: "ATS Optimization Expert",
    description:
      "Deep, ongoing expertise in how major Applicant Tracking Systems parse, rank, and filter resumes across industries.",
  },
  {
    icon: "Sparkles",
    title: "Career Branding Specialist",
    description:
      "Focused on building a cohesive personal brand across resumes, LinkedIn, and cover letters — not just individual documents.",
  },
  {
    icon: "Share2",
    title: "LinkedIn Optimization",
    description:
      "Specialized training in LinkedIn profile strategy, recruiter search visibility, and personal brand positioning.",
  },
  {
    icon: "Crown",
    title: "Executive Resume Expert",
    description:
      "Focused experience helping Directors, VPs, and C-Suite leaders position their leadership impact for board-level and executive search review.",
  },
];

const values = [
  {
    title: "Every Client Gets a Real Writer",
    description:
      "No templates, no AI-generated filler. Every resume is written by a Certified Professional Resume Writer who takes the time to understand your career.",
  },
  {
    title: "Strategy Before Writing",
    description:
      "Before a single word is written, we research your target roles and industry to build a resume strategy — not just reformat your old one.",
  },
  {
    title: "Honest, No-Hype Guidance",
    description:
      "We tell clients what will actually help them get hired — not what sounds impressive. No inflated claims, no gimmicks.",
  },
  {
    title: "Confidentiality Always",
    description:
      "Your career information, documents, and job search are always kept strictly confidential.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "About", path: "/about" }]} />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <Badge>About Career Resume Lift</Badge>
              <h1 className="mt-6 text-balance font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
                Built by a Certified Writer Who Understands What Gets You Hired
              </h1>
              <div className="mt-6 flex flex-col gap-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Career Resume Lift was founded by <strong className="text-foreground">Muhammad Shair Khan</strong>,
                  a Certified Professional Resume Writer (CPRW) who built this agency around a simple belief: your
                  resume should work as hard as you do.
                </p>
                <p>
                  After years of watching qualified, hard-working professionals get filtered out by Applicant
                  Tracking Systems and generic resume templates, Muhammad set out to build a resume writing
                  practice grounded in two things — rigorous ATS knowledge and genuine career storytelling.
                </p>
                <p>
                  Today, Career Resume Lift works with professionals across the United States — from recent
                  graduates writing their first resume to C-Suite executives preparing for a board-level search —
                  helping each one present their career clearly, credibly, and competitively.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-5">
              <div className="rounded-3xl border border-border bg-card p-8 shadow-xl">
                <div className="flex items-center gap-4">
                  <span className="flex size-16 items-center justify-center rounded-2xl bg-primary text-2xl font-heading font-black text-primary-foreground">
                    MSK
                  </span>
                  <div>
                    <p className="font-heading text-lg font-bold">{siteConfig.founder.name}</p>
                    <p className="text-sm text-muted-foreground">{siteConfig.founder.title}</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
                  {[
                    { icon: BadgeCheck, label: "CPRW Certified" },
                    { icon: ScanSearch, label: "ATS Optimization Expert" },
                    { icon: LinkedinIcon, label: "LinkedIn Optimization Specialist" },
                    { icon: Users, label: "Executive & Career-Change Focus" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3 text-sm">
                      <item.icon className="size-4 shrink-0 text-secondary" />
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-muted/40 py-24">
        <Container>
          <SectionHeading
            eyebrow="Credentials"
            title="Certified Expertise You Can Trust"
            description="Career Resume Lift is built on formal training and hands-on expertise in resume strategy, ATS systems, and personal branding."
            className="mb-16"
          />
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {credentials.map((c) => (
              <RevealItem key={c.title}>
                <div className="h-full rounded-2xl bg-card p-6 shadow-sm">
                  <h3 className="font-heading text-base font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <SectionHeading
            eyebrow="Our Approach"
            title="What We Believe About Resume Writing"
            className="mb-16"
          />
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <RevealItem key={v.title}>
                <div className="flex gap-4 rounded-2xl border border-border bg-card p-6">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary/10 font-heading text-sm font-bold text-secondary">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-semibold">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.description}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <StatsSection />
      <CtaSection
        title="Ready to Work With a Certified Resume Writer?"
        description="Get a free resume review and see exactly how we'd approach your career story."
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Career Resume Lift",
          url: `${siteConfig.url}/about`,
          mainEntity: {
            "@type": "Person",
            name: siteConfig.founder.name,
            jobTitle: siteConfig.founder.title,
            worksFor: {
              "@type": "Organization",
              name: siteConfig.name,
            },
          },
        }}
      />
    </>
  );
}
