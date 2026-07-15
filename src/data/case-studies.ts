export type CaseStudy = {
  slug: string;
  name: string;
  title: string;
  industry: string;
  service: string;
  challenge: string;
  approach: string;
  result: string;
  metrics: { label: string; value: string }[];
  quote: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "marketing-director-career-pivot",
    name: "Amanda R.",
    title: "From Overlooked Applications to a Senior Director Offer",
    industry: "Marketing",
    service: "Executive Resume + LinkedIn Optimization",
    challenge:
      "After 12 years in marketing, Amanda's resume read as a list of duties rather than achievements, and her applications to director-level roles were going unanswered.",
    approach:
      "Her writer restructured the resume around campaign performance and revenue impact, added a strategic executive summary, and rebuilt her LinkedIn profile to match her new positioning.",
    result:
      "Amanda began receiving recruiter messages within a week of updating her LinkedIn profile and secured a Senior Marketing Director offer within six weeks.",
    metrics: [
      { label: "Time to First Interview", value: "9 days" },
      { label: "Interviews Secured", value: "5" },
      { label: "Time to Offer", value: "6 weeks" },
    ],
    quote:
      "The resume my writer delivered didn't just look better — it told a story recruiters actually responded to.",
  },
  {
    slug: "vp-operations-executive-search",
    name: "David C.",
    title: "Positioning for a VP Role With an Executive-Level Resume",
    industry: "Manufacturing",
    service: "Executive Resume",
    challenge:
      "David was consistently a strong internal performer but struggled to translate his operational leadership into language that resonated with external search firms.",
    approach:
      "Working closely with an executive resume strategist, David's resume was rebuilt around P&L ownership, plant transformation, and team scale, formatted for executive search review.",
    result:
      "David's updated resume was well received by a retained search firm, leading to a VP of Operations offer within six weeks of launching his search.",
    metrics: [
      { label: "Time to Offer", value: "6 weeks" },
      { label: "Search Firm Interviews", value: "3" },
    ],
    quote:
      "The executive positioning was exactly what I was missing.",
  },
  {
    slug: "military-transition-operations-manager",
    name: "Robert H.",
    title: "Translating 12 Years of Army Leadership Into a Civilian Career",
    industry: "Military Transition",
    service: "Military Resume + Career Coaching",
    challenge:
      "After retiring as a Sergeant First Class, Robert had strong leadership experience but no civilian resume and limited familiarity with private-sector job searching.",
    approach:
      "His writer translated his military occupational specialty and leadership roles into civilian job titles and measurable outcomes, paired with a career coaching session to map target industries.",
    result:
      "Robert landed an Operations Manager role in logistics within two months of beginning his transition.",
    metrics: [
      { label: "Time to Offer", value: "8 weeks" },
      { label: "Target Roles Identified", value: "3" },
    ],
    quote:
      "My writer translated 12 years of leadership into a resume hiring managers immediately understood.",
  },
  {
    slug: "federal-hr-specialist-referral",
    name: "Linda M.",
    title: "Getting Referred on a Competitive Federal Announcement",
    industry: "Federal / Government",
    service: "Federal Resume",
    challenge:
      "Linda had applied to multiple USAJOBS announcements without success, unaware that her private-sector-style resume didn't meet federal formatting and KSA requirements.",
    approach:
      "Her writer rebuilt her resume in USAJOBS-compliant format, addressing each required qualification and specialized experience statement from the vacancy announcement.",
    result:
      "Linda was referred to the selecting official on her very next application after switching to her new federal resume.",
    metrics: [
      { label: "Applications Before", value: "6 (no referral)" },
      { label: "Applications After", value: "1 (referred)" },
    ],
    quote:
      "My federal resume was referred on my very next application.",
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
