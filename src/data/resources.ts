export type Resource = {
  title: string;
  slug: string;
  description: string;
  icon: string;
  type: string;
};

export const resources: Resource[] = [
  {
    title: "Free Resume Checklist",
    slug: "free-resume-checklist",
    description:
      "A 25-point checklist to audit your resume for formatting, ATS compatibility, and content gaps before you apply.",
    icon: "CheckSquare",
    type: "Checklist",
  },
  {
    title: "The Complete ATS Resume Guide",
    slug: "ats-resume-guide",
    description:
      "Understand exactly how Applicant Tracking Systems scan and rank resumes, and how to format yours to pass.",
    icon: "ScanSearch",
    type: "Guide",
  },
  {
    title: "Interview Preparation Checklist",
    slug: "interview-checklist",
    description:
      "A step-by-step checklist covering research, STAR-method answers, and follow-up etiquette for every interview.",
    icon: "ClipboardList",
    type: "Checklist",
  },
  {
    title: "Career Planning Guide",
    slug: "career-planning-guide",
    description:
      "A structured workbook for clarifying your career goals, skills, and next-step target roles.",
    icon: "Map",
    type: "Guide",
  },
  {
    title: "Resume Templates Library",
    slug: "resume-templates",
    description:
      "ATS-friendly resume templates for entry-level, professional, and executive career stages.",
    icon: "LayoutTemplate",
    type: "Templates",
  },
  {
    title: "Salary Negotiation Guide",
    slug: "salary-negotiation-guide",
    description:
      "Scripts, research strategies, and timing guidance to negotiate your next offer with confidence.",
    icon: "HandCoins",
    type: "Guide",
  },
];
