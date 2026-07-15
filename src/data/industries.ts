export type Industry = {
  name: string;
  slug: string;
  icon: string;
  description: string;
};

export const industries: Industry[] = [
  {
    name: "Technology & IT",
    slug: "technology",
    icon: "Cpu",
    description:
      "Resumes for software engineers, product managers, data scientists, and IT leaders that speak to technical depth and business impact.",
  },
  {
    name: "Healthcare & Nursing",
    slug: "healthcare",
    icon: "Stethoscope",
    description:
      "Clinical and administrative healthcare resumes for nurses, physicians, and healthcare administrators built around patient outcomes and credentials.",
  },
  {
    name: "Finance & Accounting",
    slug: "finance",
    icon: "LineChart",
    description:
      "Resumes for financial analysts, accountants, and finance leaders that highlight quantifiable financial impact and compliance expertise.",
  },
  {
    name: "Marketing & Communications",
    slug: "marketing",
    icon: "Megaphone",
    description:
      "Brand, digital, and growth marketing resumes that showcase campaign results, revenue impact, and creative leadership.",
  },
  {
    name: "Executive & C-Suite",
    slug: "executive-leadership",
    icon: "Crown",
    description:
      "Board-ready executive resumes for CEOs, CFOs, COOs, and senior leaders positioning strategic vision and enterprise impact.",
  },
  {
    name: "Federal & Government",
    slug: "federal-government",
    icon: "Landmark",
    description:
      "USAJOBS-compliant federal resumes aligned to specific vacancy announcements, KSAs, and specialized experience requirements.",
  },
  {
    name: "Engineering",
    slug: "engineering",
    icon: "Wrench",
    description:
      "Resumes for mechanical, electrical, civil, and industrial engineers that translate technical projects into measurable outcomes.",
  },
  {
    name: "Human Resources",
    slug: "human-resources",
    icon: "Users",
    description:
      "HR and talent acquisition resumes that highlight organizational impact, change management, and people leadership.",
  },
  {
    name: "Legal",
    slug: "legal",
    icon: "Scale",
    description:
      "Resumes for attorneys, paralegals, and legal operations professionals built around case outcomes and legal expertise.",
  },
  {
    name: "Sales & Business Development",
    slug: "sales",
    icon: "Handshake",
    description:
      "Revenue-focused resumes for sales professionals and business development leaders emphasizing quota attainment and pipeline growth.",
  },
  {
    name: "Education & Academia",
    slug: "education",
    icon: "GraduationCap",
    description:
      "Resumes and CVs for educators, administrators, and academic professionals highlighting instructional and institutional impact.",
  },
  {
    name: "Nonprofit & Public Sector",
    slug: "nonprofit",
    icon: "HeartHandshake",
    description:
      "Mission-driven resumes for nonprofit leaders and program managers that translate impact into measurable outcomes.",
  },
];
