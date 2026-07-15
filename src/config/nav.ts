export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export const serviceLinks: NavLink[] = [
  {
    label: "Resume Writing",
    href: "/services/resume-writing",
    description: "ATS-optimized resumes for every career stage",
  },
  {
    label: "Executive Resume",
    href: "/services/executive-resume",
    description: "C-Suite, VP & Director-level resume branding",
  },
  {
    label: "Federal Resume",
    href: "/services/federal-resume",
    description: "USAJOBS-compliant federal resume writing",
  },
  {
    label: "Military Resume",
    href: "/services/military-resume",
    description: "Military-to-civilian career transition resumes",
  },
  {
    label: "Graduate Resume",
    href: "/services/graduate-resume",
    description: "Entry-level resumes for new graduates",
  },
  {
    label: "LinkedIn Optimization",
    href: "/services/linkedin-optimization",
    description: "Recruiter-ready LinkedIn profile makeovers",
  },
  {
    label: "Cover Letter Writing",
    href: "/services/cover-letter",
    description: "Persuasive, tailored cover letters",
  },
  {
    label: "Career Coaching",
    href: "/services/career-coaching",
    description: "1:1 coaching to plan your next career move",
  },
  {
    label: "Interview Coaching",
    href: "/services/interview-coaching",
    description: "Mock interviews & offer negotiation prep",
  },
];

export const companyLinks: NavLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Industries We Serve", href: "/industries" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export const resourceLinks: NavLink[] = [
  { label: "Blog", href: "/blog" },
  { label: "Free Resources", href: "/resources" },
  { label: "FAQ", href: "/faq" },
];

export const mainNav = [
  { label: "Services", href: "/services", children: serviceLinks },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Resources", href: "/resources", children: resourceLinks },
  { label: "About", href: "/about" },
];

export const footerNav = {
  services: serviceLinks,
  company: companyLinks,
  resources: resourceLinks,
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Refund Policy", href: "/refund-policy" },
  ],
};
