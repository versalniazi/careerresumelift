export type Testimonial = {
  name: string;
  role: string;
  industry: string;
  quote: string;
  rating: number;
  result?: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Amanda R.",
    role: "Senior Marketing Director",
    industry: "Marketing",
    quote:
      "The resume my writer delivered didn't just look better — it told a story recruiters actually responded to. I had three interview requests within the first two weeks.",
    rating: 5,
    result: "3 interviews in 2 weeks",
    initials: "AR",
  },
  {
    name: "David C.",
    role: "VP of Operations",
    industry: "Manufacturing",
    quote:
      "As a VP, I needed a resume that spoke to boards and search firms, not just HR screeners. The executive positioning was exactly what I was missing.",
    rating: 5,
    result: "Landed VP role in 6 weeks",
    initials: "DC",
  },
  {
    name: "Priya N.",
    role: "Registered Nurse, ICU",
    industry: "Healthcare",
    quote:
      "I hadn't updated my resume in eight years. My writer helped me translate years of clinical experience into a document that actually reflected my expertise.",
    rating: 5,
    initials: "PN",
  },
  {
    name: "Marcus T.",
    role: "Software Engineer",
    industry: "Technology",
    quote:
      "The ATS optimization made a real difference. I went from almost no callbacks to getting recruiter messages on LinkedIn within days of the profile update.",
    rating: 5,
    result: "Recruiter inbound within days",
    initials: "MT",
  },
  {
    name: "Sergeant First Class Robert H. (Ret.)",
    role: "Operations Manager",
    industry: "Military Transition",
    quote:
      "I struggled to explain my Army experience in civilian terms. My writer translated 12 years of leadership into a resume hiring managers immediately understood.",
    rating: 5,
    initials: "RH",
  },
  {
    name: "Sarah K.",
    role: "Financial Analyst",
    industry: "Finance",
    quote:
      "Professional, responsive, and genuinely invested in getting the details right. The final resume was polished and precisely tailored to the roles I wanted.",
    rating: 5,
    initials: "SK",
  },
  {
    name: "James O.",
    role: "Recent MBA Graduate",
    industry: "Early Career",
    quote:
      "I had almost no full-time work experience, but my writer built a resume around my internships and coursework that made me feel genuinely competitive.",
    rating: 5,
    initials: "JO",
  },
  {
    name: "Linda M.",
    role: "HR Business Partner",
    industry: "Federal / Government",
    quote:
      "The federal resume process is intimidating, but the team knew exactly what USAJOBS required. My resume was referred on my very next application.",
    rating: 5,
    result: "Referred on next application",
    initials: "LM",
  },
];

export const googleRating = {
  score: "4.9",
  count: "1,240+",
  platform: "Google Reviews",
};

export const trustpilotRating = {
  score: "4.8",
  count: "980+",
  platform: "Trustpilot",
};
