# Career Resume Lift

Marketing website for **Career Resume Lift**, a US-based professional resume writing agency
founded by Muhammad Shair Khan, CPRW (Certified Professional Resume Writer).

Built as a premium, conversion-focused Next.js application: ATS-optimized service pages,
a full MDX-powered blog, structured SEO data, and a component system designed to compete with
category leaders like TopResume, ResumeSpice, and Enhancv.

## Tech Stack

- **Framework:** Next.js 15 (App Router, Server Components, TypeScript)
- **Styling:** Tailwind CSS v4, `tw-animate-css`, `@tailwindcss/typography`
- **UI Primitives:** Custom shadcn-style components built on Radix UI
- **Animation:** Framer Motion (scroll reveals, counters, micro-interactions)
- **Forms:** React Hook Form + Zod validation
- **Content:** MDX blog posts via `next-mdx-remote`, `gray-matter` frontmatter parsing
- **Icons:** Lucide (dynamic, code-split icon loading)
- **SEO:** File-based metadata, JSON-LD structured data, dynamic sitemap/robots/manifest,
  dynamically generated OG images and favicons via `next/og`

## Project Structure

```
src/
  app/                     Route segments (App Router)
    services/[slug]/       Dynamic service detail pages (9 services)
    industries/[slug]/     Dynamic industry detail pages
    case-studies/[slug]/   Case study detail pages
    blog/[slug]/           MDX blog post pages
    blog/category/[category]/
    resources/[slug]/      Gated resource download pages
    sitemap.ts, robots.ts, manifest.ts
    icon.tsx, apple-icon.tsx, opengraph-image.tsx   Generated assets (next/og)
  components/
    ui/                    Base primitives (button, card, badge, accordion, ...)
    layout/                Header, footer, sticky CTA, theme toggle
    sections/              Reusable page sections (hero, pricing grid, FAQ, testimonials, ...)
    motion/                Framer Motion reveal + counter primitives
    seo/                   JSON-LD renderer
    services/              Service page template
    forms/                 Contact + lead-capture forms (RHF + Zod)
    legal/                 Legal page layout
  config/                  Site config, navigation
  data/                    Structured content (services, pricing, testimonials, FAQs, industries...)
  content/blog/            MDX blog posts
  lib/                     Metadata + JSON-LD schema builders, blog reader, utils
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description                        |
| --------------- | ----------------------------------- |
| `npm run dev`   | Start the local dev server          |
| `npm run build` | Production build                    |
| `npm run start` | Serve the production build          |
| `npm run lint`  | Run ESLint                          |

## Content Model

Most page content is data-driven from `src/data/*.ts` (services, pricing, testimonials, FAQs,
industries, case studies, resources), so copy updates rarely require touching component code.
Blog posts are MDX files with frontmatter in `src/content/blog/`.

## Deployment (Vercel)

This project is pre-configured for zero-config deployment on [Vercel](https://vercel.com):

1. Import the repository into Vercel.
2. Framework preset: **Next.js** (auto-detected via `vercel.json`).
3. No environment variables are required for the base site.
4. Update `siteConfig.url` in `src/config/site.ts` to your production domain before launch so
   canonical URLs, sitemaps, and structured data resolve correctly.

## SEO Notes

- Update `src/config/site.ts` with real business details (address, phone, social links) before
  launch — this file powers Organization/LocalBusiness JSON-LD across the site.
- `src/app/sitemap.ts` automatically includes every service, industry, case study, resource, and
  blog post.
- Replace the Calendly and Google Maps placeholders on `/contact` with live embeds when available.
