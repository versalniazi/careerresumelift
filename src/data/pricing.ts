export type PricingPackage = {
  name: string;
  slug: string;
  price: string;
  priceNote?: string;
  turnaround: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
  href: string;
};

export const pricingPackages: PricingPackage[] = [
  {
    name: "Professional Resume",
    slug: "professional-resume",
    price: "$249",
    turnaround: "3–5 business days",
    description: "For mid-level professionals and individual contributors.",
    features: [
      "1:1 Certified Professional Resume Writer",
      "ATS-optimized resume (Word + PDF)",
      "Keyword & industry research",
      "2 rounds of revisions",
      "60-minute strategy call",
    ],
    cta: "Get Started",
    href: "/services/resume-writing",
  },
  {
    name: "Executive Resume",
    slug: "executive-resume",
    price: "$549",
    turnaround: "5–7 business days",
    description: "For Directors, VPs, and C-Suite leaders.",
    features: [
      "1:1 Executive resume strategist",
      "Executive summary & core competencies",
      "Board-ready formatting",
      "3 rounds of revisions",
      "90-minute strategy session",
    ],
    cta: "Get Started",
    href: "/services/executive-resume",
  },
  {
    name: "Federal Resume",
    slug: "federal-resume",
    price: "$399",
    turnaround: "5–7 business days",
    description: "USAJOBS-compliant resume for a single announcement.",
    features: [
      "USAJOBS-compliant multi-page format",
      "1 job announcement alignment",
      "KSA & specialized experience statements",
      "2 rounds of revisions",
    ],
    cta: "Get Started",
    href: "/services/federal-resume",
  },
  {
    name: "Resume + Cover Letter",
    slug: "resume-cover-letter",
    price: "$329",
    turnaround: "3–5 business days",
    description: "Our most popular package for active job seekers.",
    highlighted: true,
    features: [
      "1:1 Certified Professional Resume Writer",
      "ATS-optimized resume",
      "Custom cover letter",
      "LinkedIn headline & summary rewrite",
      "3 rounds of revisions",
    ],
    cta: "Get Started",
    href: "/services/resume-writing",
  },
  {
    name: "Resume + LinkedIn",
    slug: "resume-linkedin",
    price: "$399",
    turnaround: "5–7 business days",
    description: "Consistent personal branding across resume and LinkedIn.",
    features: [
      "Full resume rewrite",
      "Complete LinkedIn optimization",
      "Consistent personal brand messaging",
      "3 rounds of revisions",
    ],
    cta: "Get Started",
    href: "/services/linkedin-optimization",
  },
  {
    name: "Complete Career Package",
    slug: "complete-career-package",
    price: "$449",
    turnaround: "5–7 business days",
    description: "Full personal brand package for a competitive search.",
    features: [
      "Resume + cover letter + LinkedIn",
      "Thank-you note template",
      "30-day post-delivery support",
      "Unlimited revisions (14 days)",
    ],
    cta: "Get Started",
    href: "/services/resume-writing",
  },
  {
    name: "Enterprise Services",
    slug: "enterprise",
    price: "Custom",
    turnaround: "By consultation",
    description: "Outplacement, HR partnerships & bulk employee packages.",
    features: [
      "Volume pricing for teams & outplacement",
      "Dedicated account strategist",
      "Custom branded delivery",
      "Priority turnaround SLAs",
    ],
    cta: "Contact Sales",
    href: "/contact",
  },
];

export const pricingComparisonFeatures = [
  {
    feature: "1:1 Certified Professional Resume Writer",
    professional: true,
    executive: true,
    federal: true,
  },
  {
    feature: "ATS Optimization",
    professional: true,
    executive: true,
    federal: true,
  },
  {
    feature: "Keyword & Industry Research",
    professional: true,
    executive: true,
    federal: true,
  },
  {
    feature: "Executive Summary & Core Competencies",
    professional: false,
    executive: true,
    federal: false,
  },
  {
    feature: "KSA & Specialized Experience Statements",
    professional: false,
    executive: false,
    federal: true,
  },
  {
    feature: "Board-Ready Formatting",
    professional: false,
    executive: true,
    federal: false,
  },
  {
    feature: "Revision Rounds",
    professional: "2",
    executive: "3",
    federal: "2",
  },
  {
    feature: "Turnaround Time",
    professional: "3–5 days",
    executive: "5–7 days",
    federal: "5–7 days",
  },
];
