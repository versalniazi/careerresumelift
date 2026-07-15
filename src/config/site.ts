export const siteConfig = {
  name: "Career Resume Lift",
  shortName: "Resume Lift",
  tagline: "Land More Interviews With a Resume That Gets Results",
  description:
    "Career Resume Lift is a US-based professional resume writing agency led by a Certified Professional Resume Writer (CPRW). ATS-optimized, recruiter-approved resumes, LinkedIn profiles, and career coaching for executives, professionals, and job seekers nationwide.",
  url: "https://www.careerresumelift.com",
  ogImage: "/og-image.png",
  founder: {
    name: "Muhammad Shair Khan",
    title: "Founder & Certified Professional Resume Writer (CPRW)",
  },
  contact: {
    email: "hello@careerresumelift.com",
    supportEmail: "support@careerresumelift.com",
    phone: "+1 (302) 555-0142",
    phoneDisplay: "(302) 555-0142",
    address: {
      street: "8 The Green, Suite A",
      city: "Dover",
      state: "DE",
      zip: "19901",
      country: "United States",
    },
    hours: [
      { days: "Monday – Friday", hours: "8:00 AM – 8:00 PM EST" },
      { days: "Saturday", hours: "10:00 AM – 4:00 PM EST" },
      { days: "Sunday", hours: "Closed" },
    ],
  },
  social: {
    linkedin: "https://www.linkedin.com/company/career-resume-lift",
    twitter: "https://twitter.com/careerresumelift",
    facebook: "https://www.facebook.com/careerresumelift",
    instagram: "https://www.instagram.com/careerresumelift",
    trustpilot: "https://www.trustpilot.com/review/careerresumelift.com",
    google: "https://g.page/r/careerresumelift",
  },
  stats: {
    resumesWritten: "15,000+",
    interviewSuccess: "96%",
    averageRating: "4.9",
    industriesServed: "20+",
    yearsExperience: "10+",
    turnaround: "3–5 Business Days",
  },
  keywords: [
    "professional resume writing service",
    "certified professional resume writer",
    "CPRW resume writer",
    "executive resume writer",
    "ATS optimized resume",
    "LinkedIn profile optimization",
    "federal resume writer",
    "career coaching services",
    "cover letter writing service",
    "resume writing agency USA",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
