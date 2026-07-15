export type ServiceProcessStep = {
  title: string;
  description: string;
};

export type ServiceBenefit = {
  icon: string;
  title: string;
  description: string;
};

export type ServicePricingTier = {
  name: string;
  price: string;
  turnaround: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  eyebrow: string;
  heroHeadline: string;
  heroDescription: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  whoItsFor: string[];
  benefits: ServiceBenefit[];
  process: ServiceProcessStep[];
  pricing: ServicePricingTier[];
  faqs: ServiceFaq[];
};

export const services: Service[] = [
  {
    slug: "resume-writing",
    name: "Professional Resume Writing",
    shortName: "Resume Writing",
    icon: "FileText",
    eyebrow: "Core Service",
    heroHeadline: "A Professionally Written Resume That Passes ATS and Impresses Recruiters",
    heroDescription:
      "Work one-on-one with a Certified Professional Resume Writer to build a keyword-optimized, achievement-driven resume tailored to your target role and industry.",
    metaTitle: "Professional Resume Writing Services | Career Resume Lift",
    metaDescription:
      "CPRW-certified professional resume writing service. ATS-optimized, achievement-driven resumes for mid-level and senior professionals across every US industry.",
    keywords: [
      "professional resume writing service",
      "resume writer near me",
      "ATS resume writing service",
      "CPRW resume writer",
    ],
    whoItsFor: [
      "Mid-level & senior professionals",
      "Career changers switching industries",
      "Professionals re-entering the workforce",
      "Job seekers with outdated resumes",
    ],
    benefits: [
      {
        icon: "Target",
        title: "ATS-Optimized Formatting",
        description:
          "Every resume is built to pass Applicant Tracking Systems used by 98% of Fortune 500 companies while remaining visually compelling to human recruiters.",
      },
      {
        icon: "Sparkles",
        title: "Achievement-Driven Content",
        description:
          "We translate your job duties into quantifiable achievements that show measurable impact, not just responsibilities.",
      },
      {
        icon: "UserCheck",
        title: "1:1 With a CPRW",
        description:
          "You work directly with a Certified Professional Resume Writer who takes the time to understand your career story.",
      },
      {
        icon: "RefreshCw",
        title: "Unlimited Revisions",
        description:
          "We revise your resume until you are fully satisfied, within your package's revision window.",
      },
    ],
    process: [
      {
        title: "Discovery Questionnaire & Intake Call",
        description:
          "Share your work history, career goals, and target roles through a detailed intake questionnaire and optional strategy call.",
      },
      {
        title: "Research & Keyword Analysis",
        description:
          "Your writer researches your target industry and job postings to identify the keywords and competencies recruiters are searching for.",
      },
      {
        title: "First Draft Delivery",
        description:
          "Receive your first draft within your package's turnaround window, formatted for both ATS parsing and visual clarity.",
      },
      {
        title: "Revisions & Finalization",
        description:
          "Review your draft and request revisions. We refine wording, formatting, and structure until the resume is ready to send.",
      },
      {
        title: "Final Files Delivered",
        description:
          "Receive your final resume in editable Word and print-ready PDF formats, plus formatting guidance for online applications.",
      },
    ],
    pricing: [
      {
        name: "Professional Resume",
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
      },
      {
        name: "Resume + Cover Letter",
        price: "$329",
        turnaround: "3–5 business days",
        description: "Our most popular package for active job seekers.",
        highlighted: true,
        features: [
          "Everything in Professional Resume",
          "Custom cover letter template",
          "LinkedIn headline & summary rewrite",
          "3 rounds of revisions",
          "Priority email support",
        ],
      },
      {
        name: "Complete Career Package",
        price: "$449",
        turnaround: "5–7 business days",
        description: "Full personal brand package for a competitive search.",
        features: [
          "Everything in Resume + Cover Letter",
          "Full LinkedIn profile optimization",
          "Thank-you note template",
          "30-day post-delivery support",
          "Unlimited revisions (14 days)",
        ],
      },
    ],
    faqs: [
      {
        question: "How long does the resume writing process take?",
        answer:
          "Most clients receive their first draft within 3–5 business days of completing the intake questionnaire. Rush delivery is available for select packages.",
      },
      {
        question: "Will my resume pass Applicant Tracking Systems (ATS)?",
        answer:
          "Yes. Every resume is formatted and keyword-optimized specifically to parse correctly in major ATS platforms including Workday, Taleo, iCIMS, and Greenhouse.",
      },
      {
        question: "What information do you need from me?",
        answer:
          "You'll complete a detailed intake questionnaire covering your work history, achievements, target roles, and career goals. Your writer may also schedule a short strategy call.",
      },
      {
        question: "Can I request changes after the first draft?",
        answer:
          "Absolutely. Every package includes multiple rounds of revisions so the final resume accurately reflects your voice and career goals.",
      },
    ],
  },
  {
    slug: "executive-resume",
    name: "Executive Resume Writing",
    shortName: "Executive Resume",
    icon: "Crown",
    eyebrow: "Leadership Branding",
    heroHeadline: "Executive Resumes That Command the Boardroom",
    heroDescription:
      "A powerful leadership narrative for VPs, Directors, and C-Suite executives — positioning your strategic impact, not just your job history.",
    metaTitle: "Executive Resume Writing Service | C-Suite & VP Resumes",
    metaDescription:
      "Executive resume writing for C-Suite, VP, and Director-level leaders. Strategic personal branding, board-ready formatting, and leadership positioning.",
    keywords: [
      "executive resume writer",
      "C-suite resume writing service",
      "VP resume writer",
      "leadership resume writing",
    ],
    whoItsFor: [
      "C-Suite executives (CEO, CFO, COO, CTO, CMO)",
      "Vice Presidents & Senior Directors",
      "Board members & advisors",
      "Executives pursuing board appointments",
    ],
    benefits: [
      {
        icon: "Trophy",
        title: "Executive Positioning",
        description:
          "We craft a leadership narrative around P&L impact, transformation, and strategic vision — the language boards and search firms expect.",
      },
      {
        icon: "LineChart",
        title: "Quantified Business Impact",
        description:
          "Revenue growth, cost savings, M&A activity, and team scale are framed as measurable business outcomes.",
      },
      {
        icon: "Building2",
        title: "Executive Search Ready",
        description:
          "Formatted to meet the standards of retained executive search firms and board recruiters.",
      },
      {
        icon: "Award",
        title: "Personal Brand Consistency",
        description:
          "Your resume, LinkedIn, and executive bio are aligned into one cohesive leadership brand.",
      },
    ],
    process: [
      {
        title: "Executive Strategy Session",
        description:
          "A dedicated 1:1 consultation to uncover your leadership philosophy, career highlights, and target opportunities.",
      },
      {
        title: "Career Narrative Architecture",
        description:
          "Your writer builds a strategic outline mapping your leadership journey to your next-level target roles.",
      },
      {
        title: "First Draft Delivery",
        description:
          "Receive a fully designed executive resume draft with an executive summary, core competencies, and career highlights.",
      },
      {
        title: "Collaborative Refinement",
        description:
          "Work directly with your writer through multiple revision rounds to perfect tone, positioning, and formatting.",
      },
      {
        title: "Final Executive Package",
        description:
          "Receive your polished resume, executive bio, and LinkedIn content in print-ready and digital formats.",
      },
    ],
    pricing: [
      {
        name: "Executive Resume",
        price: "$549",
        turnaround: "5–7 business days",
        description: "For Directors and Senior Managers moving toward VP.",
        features: [
          "1:1 Executive resume strategist",
          "Executive summary & core competencies",
          "ATS + human-reader optimized design",
          "3 rounds of revisions",
          "90-minute strategy session",
        ],
      },
      {
        name: "C-Suite Package",
        price: "$799",
        turnaround: "5–7 business days",
        description: "For VPs and C-Suite leaders targeting top-tier roles.",
        highlighted: true,
        features: [
          "Everything in Executive Resume",
          "Executive LinkedIn profile rewrite",
          "Leadership bio (1-page)",
          "Board-ready formatting",
          "45-day post-delivery support",
        ],
      },
      {
        name: "Enterprise Leadership",
        price: "Custom",
        turnaround: "By consultation",
        description: "For board searches and multi-executive engagements.",
        features: [
          "Everything in C-Suite Package",
          "Board bio & value proposition deck",
          "Executive interview coaching",
          "Dedicated account strategist",
          "Priority turnaround",
        ],
      },
    ],
    faqs: [
      {
        question: "How is an executive resume different from a standard resume?",
        answer:
          "Executive resumes emphasize strategic leadership, P&L ownership, and organizational transformation rather than day-to-day duties, and are written to appeal to boards, search firms, and C-Suite hiring committees.",
      },
      {
        question: "Do you work with retained executive search firms?",
        answer:
          "Our executive resumes are formatted to meet the standards typically expected by retained search consultants and board recruiters.",
      },
      {
        question: "Is LinkedIn optimization included?",
        answer:
          "LinkedIn optimization is included in the C-Suite Package and Enterprise Leadership tier, and is available as an add-on for the base Executive Resume package.",
      },
    ],
  },
  {
    slug: "federal-resume",
    name: "Federal Resume Writing",
    shortName: "Federal Resume",
    icon: "Landmark",
    eyebrow: "Government Careers",
    heroHeadline: "USAJOBS-Compliant Federal Resumes Built to Get Referred",
    heroDescription:
      "Federal resumes require a completely different format than private-sector resumes. We build detailed, compliant federal resumes aligned to specific job announcements.",
    metaTitle: "Federal Resume Writing Service | USAJOBS Resume Writer",
    metaDescription:
      "Professional federal resume writing service for USAJOBS applications. KSA-aligned, compliant formatting for GS-level and federal government positions.",
    keywords: [
      "federal resume writer",
      "USAJOBS resume writing service",
      "federal resume format",
      "government resume writer",
    ],
    whoItsFor: [
      "Federal job applicants (GS-5 through SES)",
      "Military members transitioning to federal service",
      "Current federal employees seeking promotion",
      "Veterans applying under veterans' preference",
    ],
    benefits: [
      {
        icon: "ClipboardCheck",
        title: "USAJOBS Format Compliance",
        description:
          "Federal resumes are written to the detailed multi-page format federal HR specialists require — not a private-sector resume.",
      },
      {
        icon: "ListChecks",
        title: "KSA & Duty Alignment",
        description:
          "We align your experience to the specific knowledge, skills, and abilities (KSAs) listed in the job announcement.",
      },
      {
        icon: "ShieldCheck",
        title: "Veterans' Preference Guidance",
        description:
          "Guidance on correctly documenting veterans' preference and military experience for federal HR review.",
      },
      {
        icon: "FileSearch",
        title: "Announcement-Specific Tailoring",
        description:
          "Each federal resume is tailored to the specific vacancy announcement to maximize referral potential.",
      },
    ],
    process: [
      {
        title: "Job Announcement Review",
        description:
          "Send us the USAJOBS vacancy announcement(s) you're targeting so we can align your resume to the required qualifications.",
      },
      {
        title: "Detailed Federal Intake",
        description:
          "Complete an in-depth questionnaire covering duties, hours worked, supervisor contacts, and specialized experience.",
      },
      {
        title: "First Draft Delivery",
        description:
          "Receive a compliant federal resume draft addressing every required qualification and specialized experience statement.",
      },
      {
        title: "Revisions & Compliance Check",
        description:
          "We revise the draft and run a final compliance check against USAJOBS formatting requirements.",
      },
      {
        title: "Final Federal Resume Delivered",
        description:
          "Receive your finished federal resume ready to upload to USAJOBS or agency application portals.",
      },
    ],
    pricing: [
      {
        name: "Federal Resume",
        price: "$399",
        turnaround: "5–7 business days",
        description: "For a single federal job announcement (GS-5 to GS-12).",
        features: [
          "USAJOBS-compliant multi-page format",
          "1 job announcement alignment",
          "KSA & specialized experience statements",
          "2 rounds of revisions",
          "Federal formatting compliance check",
        ],
      },
      {
        name: "Federal Resume + Cover Letter",
        price: "$479",
        turnaround: "5–7 business days",
        description: "For GS-13 and above or competitive announcements.",
        highlighted: true,
        features: [
          "Everything in Federal Resume",
          "Federal-style cover letter",
          "Veterans' preference documentation guidance",
          "3 rounds of revisions",
          "Priority email support",
        ],
      },
      {
        name: "SES / Senior Federal",
        price: "Custom",
        turnaround: "By consultation",
        description: "For Senior Executive Service and senior GS applicants.",
        features: [
          "Everything in Federal Resume + Cover Letter",
          "ECQ narrative support",
          "Multiple announcement alignment",
          "Dedicated federal resume strategist",
          "Extended revision window",
        ],
      },
    ],
    faqs: [
      {
        question: "How is a federal resume different from a private-sector resume?",
        answer:
          "Federal resumes are typically 3–6 pages and include detailed duty descriptions, hours worked per week, salary, and supervisor information — far more detail than a standard private-sector resume.",
      },
      {
        question: "Do you write to a specific job announcement?",
        answer:
          "Yes. We align your federal resume to the qualifications, specialized experience, and KSAs listed in the specific USAJOBS vacancy announcement you provide.",
      },
      {
        question: "Can you help with veterans' preference documentation?",
        answer:
          "We provide guidance on how to properly document veterans' preference and military experience within your federal resume.",
      },
    ],
  },
  {
    slug: "military-resume",
    name: "Military Resume Writing",
    shortName: "Military Resume",
    icon: "ShieldHalf",
    eyebrow: "Military Transition",
    heroHeadline: "Translate Your Military Experience Into a Civilian Career Asset",
    heroDescription:
      "We convert military occupational specialties, rank, and leadership experience into the language civilian recruiters and hiring managers understand.",
    metaTitle: "Military Resume Writing Service | Military-to-Civilian Transition",
    metaDescription:
      "Military resume writing service for veterans and transitioning service members. MOS translation, civilian resume formatting, and career transition support.",
    keywords: [
      "military resume writer",
      "military to civilian resume",
      "veteran resume writing service",
      "MOS translation resume",
    ],
    whoItsFor: [
      "Transitioning active-duty service members",
      "National Guard & Reserve members",
      "Veterans re-entering the civilian workforce",
      "Military spouses relaunching careers",
    ],
    benefits: [
      {
        icon: "Languages",
        title: "Military-to-Civilian Translation",
        description:
          "Your MOS, rank, and military jargon are translated into civilian job titles and industry-recognized terminology.",
      },
      {
        icon: "Medal",
        title: "Leadership Highlighted",
        description:
          "Military leadership, discipline, and mission-critical achievements are positioned as high-value transferable skills.",
      },
      {
        icon: "Compass",
        title: "Civilian Career Mapping",
        description:
          "We help identify civilian job titles and industries best aligned to your military background.",
      },
      {
        icon: "HeartHandshake",
        title: "Veteran-Focused Support",
        description:
          "Your writer understands military culture and the unique challenges of the military-to-civilian transition.",
      },
    ],
    process: [
      {
        title: "Military Background Intake",
        description:
          "Share your DD-214, MOS/AFSC/rating, awards, and duty stations through our military-specific intake questionnaire.",
      },
      {
        title: "Civilian Career Targeting",
        description:
          "We identify the civilian roles and industries your military experience translates to most effectively.",
      },
      {
        title: "First Draft Delivery",
        description:
          "Receive a civilian-formatted resume with military terminology translated into private-sector language.",
      },
      {
        title: "Revisions & Refinement",
        description:
          "Review your draft and request revisions to ensure your civilian resume accurately reflects your goals.",
      },
      {
        title: "Final Resume & Transition Tips",
        description:
          "Receive your final resume along with guidance for civilian job applications and interviews.",
      },
    ],
    pricing: [
      {
        name: "Military Transition Resume",
        price: "$279",
        turnaround: "3–5 business days",
        description: "For junior enlisted through mid-grade NCOs/officers.",
        features: [
          "MOS/AFSC/rating civilian translation",
          "ATS-optimized civilian resume",
          "2 rounds of revisions",
          "60-minute transition strategy call",
        ],
      },
      {
        name: "Military + LinkedIn",
        price: "$369",
        turnaround: "3–5 business days",
        description: "Our most popular package for transitioning service members.",
        highlighted: true,
        features: [
          "Everything in Military Transition Resume",
          "LinkedIn profile optimization",
          "Cover letter template",
          "3 rounds of revisions",
        ],
      },
      {
        name: "Complete Transition Package",
        price: "$479",
        turnaround: "5–7 business days",
        description: "For senior NCOs and officers pursuing leadership roles.",
        features: [
          "Everything in Military + LinkedIn",
          "Civilian career mapping session",
          "Interview coaching session",
          "30-day post-delivery support",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need to provide my DD-214?",
        answer:
          "It's not required, but sharing your DD-214 and military records helps your writer accurately translate your rank, awards, and specialty into civilian terms.",
      },
      {
        question: "Can you help me figure out what civilian jobs fit my background?",
        answer:
          "Yes, our military packages include guidance on civilian job titles and industries that align with your military occupational specialty and leadership experience.",
      },
      {
        question: "Do you offer discounts for veterans?",
        answer:
          "We periodically offer veteran appreciation pricing. Contact us directly to ask about current veteran offers.",
      },
    ],
  },
  {
    slug: "graduate-resume",
    name: "Graduate & Entry-Level Resume Writing",
    shortName: "Graduate Resume",
    icon: "GraduationCap",
    eyebrow: "Early Career",
    heroHeadline: "Launch Your Career With a Resume That Doesn't Look Entry-Level",
    heroDescription:
      "No work history yet? We build a compelling resume around your education, internships, projects, and transferable skills to help you land your first role.",
    metaTitle: "Entry-Level & Graduate Resume Writing Service",
    metaDescription:
      "Professional resume writing for recent graduates and entry-level job seekers. Highlight education, internships, and skills to land your first role.",
    keywords: [
      "entry level resume writer",
      "graduate resume writing service",
      "college graduate resume",
      "first job resume writer",
    ],
    whoItsFor: [
      "Recent college & graduate school grads",
      "First-time job seekers",
      "Interns transitioning to full-time roles",
      "Career changers with limited direct experience",
    ],
    benefits: [
      {
        icon: "BookOpen",
        title: "Education & Coursework Highlighted",
        description:
          "We position relevant coursework, honors, and academic projects to demonstrate job-readiness.",
      },
      {
        icon: "Users",
        title: "Transferable Skills Focus",
        description:
          "Leadership from clubs, part-time jobs, and volunteer work is reframed as professional, job-relevant experience.",
      },
      {
        icon: "Rocket",
        title: "Internship Impact Amplified",
        description:
          "Internship and co-op experience is written with the same achievement-driven approach as a full career resume.",
      },
      {
        icon: "TrendingUp",
        title: "Built to Scale With You",
        description:
          "A resume foundation designed to grow with your career, from your first role to your next promotion.",
      },
    ],
    process: [
      {
        title: "Career Interest Intake",
        description:
          "Tell us about your degree, target roles, internships, and any relevant campus or volunteer leadership.",
      },
      {
        title: "Skills & Experience Mapping",
        description:
          "Your writer maps your academic and extracurricular experience to the skills employers in your target field require.",
      },
      {
        title: "First Draft Delivery",
        description:
          "Receive a polished, ATS-optimized entry-level resume within your package's turnaround window.",
      },
      {
        title: "Revisions",
        description:
          "Review and request changes until your resume feels like an authentic, confident representation of you.",
      },
      {
        title: "Final Resume Delivered",
        description:
          "Receive your final resume plus tips for applying to entry-level roles and campus recruiting programs.",
      },
    ],
    pricing: [
      {
        name: "Entry-Level Resume",
        price: "$179",
        turnaround: "3–5 business days",
        description: "For recent graduates and first-time job seekers.",
        features: [
          "ATS-optimized entry-level resume",
          "Education & internship focus",
          "2 rounds of revisions",
          "45-minute strategy call",
        ],
      },
      {
        name: "Graduate + LinkedIn",
        price: "$249",
        turnaround: "3–5 business days",
        description: "Our most popular package for new graduates.",
        highlighted: true,
        features: [
          "Everything in Entry-Level Resume",
          "LinkedIn profile setup & optimization",
          "Cover letter template",
          "3 rounds of revisions",
        ],
      },
      {
        name: "Career Launch Package",
        price: "$349",
        turnaround: "5–7 business days",
        description: "Complete early-career job search toolkit.",
        features: [
          "Everything in Graduate + LinkedIn",
          "Interview coaching session",
          "Job search strategy guide",
          "30-day post-delivery support",
        ],
      },
    ],
    faqs: [
      {
        question: "I don't have much work experience — can you still help?",
        answer:
          "Yes. We build entry-level resumes around education, internships, class projects, campus leadership, and volunteer experience to present a compelling, job-ready profile.",
      },
      {
        question: "Do you help with resumes for internship applications?",
        answer:
          "Yes, we work with students and recent graduates applying to both internships and full-time entry-level roles.",
      },
      {
        question: "Will this resume work for campus recruiting and online applications?",
        answer:
          "Your resume is formatted to work for both ATS-based online applications and printed campus career fair use.",
      },
    ],
  },
  {
    slug: "linkedin-optimization",
    name: "LinkedIn Profile Optimization",
    shortName: "LinkedIn Optimization",
    icon: "Share2",
    eyebrow: "Personal Branding",
    heroHeadline: "A LinkedIn Profile That Gets You Found by Recruiters",
    heroDescription:
      "We rewrite your headline, About section, experience, and skills to align with your resume and rank higher in recruiter searches.",
    metaTitle: "LinkedIn Profile Optimization Service | Career Resume Lift",
    metaDescription:
      "Professional LinkedIn profile optimization service. Recruiter-ready headlines, About sections, and keyword strategy to increase visibility and inbound opportunities.",
    keywords: [
      "LinkedIn profile writer",
      "LinkedIn optimization service",
      "LinkedIn profile makeover",
      "LinkedIn resume writer",
    ],
    whoItsFor: [
      "Professionals seeking recruiter visibility",
      "Executives building a personal brand",
      "Passive job seekers exploring the market",
      "Consultants & freelancers attracting clients",
    ],
    benefits: [
      {
        icon: "Search",
        title: "Recruiter Search Optimization",
        description:
          "Strategic keyword placement increases your visibility in LinkedIn Recruiter and hiring manager searches.",
      },
      {
        icon: "PenLine",
        title: "Compelling Headline & About",
        description:
          "A magnetic headline and first-person About section that tells your career story and invites connection.",
      },
      {
        icon: "Briefcase",
        title: "Experience Section Alignment",
        description:
          "Your LinkedIn experience is aligned with your resume for a consistent, credible professional brand.",
      },
      {
        icon: "Star",
        title: "Skills & Endorsement Strategy",
        description:
          "Guidance on which skills to feature to maximize relevance to your target roles.",
      },
    ],
    process: [
      {
        title: "Profile Audit",
        description:
          "We review your current LinkedIn profile and identify gaps in keywords, positioning, and completeness.",
      },
      {
        title: "Brand Strategy",
        description:
          "Your writer develops a personal branding strategy aligned with your resume and career goals.",
      },
      {
        title: "Content Delivery",
        description:
          "Receive new headline, About, experience, and skills copy ready to paste into your LinkedIn profile.",
      },
      {
        title: "Revisions",
        description:
          "Request adjustments to tone, emphasis, or keyword targeting until the copy feels authentically you.",
      },
      {
        title: "Optimization Checklist",
        description:
          "Receive a checklist covering profile photo, banner, and settings best practices to complete your profile.",
      },
    ],
    pricing: [
      {
        name: "LinkedIn Makeover",
        price: "$179",
        turnaround: "3–4 business days",
        description: "Headline, About section, and top 3 experience entries.",
        features: [
          "Headline & About rewrite",
          "Top 3 experience entries optimized",
          "Keyword strategy",
          "1 round of revisions",
        ],
      },
      {
        name: "Complete LinkedIn Profile",
        price: "$249",
        turnaround: "3–5 business days",
        description: "Full profile rewrite, our most popular LinkedIn package.",
        highlighted: true,
        features: [
          "Everything in LinkedIn Makeover",
          "All experience entries optimized",
          "Skills & endorsement strategy",
          "2 rounds of revisions",
        ],
      },
      {
        name: "Resume + LinkedIn Bundle",
        price: "$399",
        turnaround: "5–7 business days",
        description: "Combined resume and LinkedIn package for consistent branding.",
        features: [
          "Full resume rewrite",
          "Complete LinkedIn optimization",
          "Consistent personal brand messaging",
          "3 rounds of revisions",
        ],
      },
    ],
    faqs: [
      {
        question: "Will you update my LinkedIn profile directly?",
        answer:
          "We deliver ready-to-paste content for each section of your profile along with clear instructions. This lets you review and control exactly what goes live.",
      },
      {
        question: "How is this different from just updating LinkedIn myself?",
        answer:
          "Our writers use keyword research and recruiter-search best practices to strategically position your profile — going beyond a simple copy update.",
      },
      {
        question: "Can this be bundled with resume writing?",
        answer:
          "Yes, the Resume + LinkedIn Bundle and several of our service packages include LinkedIn optimization alongside your resume.",
      },
    ],
  },
  {
    slug: "cover-letter",
    name: "Cover Letter Writing",
    shortName: "Cover Letter",
    icon: "Mail",
    eyebrow: "Application Materials",
    heroHeadline: "A Cover Letter That Makes Your Case Before the Interview",
    heroDescription:
      "A tailored, persuasive cover letter that connects your experience directly to the role — without repeating your resume.",
    metaTitle: "Professional Cover Letter Writing Service",
    metaDescription:
      "Custom cover letter writing service by certified writers. Persuasive, tailored cover letters that complement your resume and target role.",
    keywords: [
      "cover letter writing service",
      "professional cover letter writer",
      "custom cover letter",
      "cover letter template",
    ],
    whoItsFor: [
      "Job seekers applying to specific roles",
      "Career changers explaining a transition",
      "Executives writing an approach letter",
      "Anyone needing a reusable cover letter template",
    ],
    benefits: [
      {
        icon: "MessageSquareText",
        title: "Persuasive Narrative",
        description:
          "Your cover letter builds a case for why you're the right fit — motivation, fit, and value in a concise, compelling format.",
      },
      {
        icon: "Layers",
        title: "Complements Your Resume",
        description:
          "Written to add context and personality your resume can't, rather than repeating the same content.",
      },
      {
        icon: "Wand2",
        title: "Reusable Template",
        description:
          "Delivered as an editable template you can quickly customize for each application.",
      },
      {
        icon: "Clock",
        title: "Fast Turnaround",
        description:
          "Cover letters are typically delivered within 2–3 business days as a standalone service.",
      },
    ],
    process: [
      {
        title: "Role & Motivation Intake",
        description:
          "Tell us about the target role, company, and why you're interested so we can personalize your letter.",
      },
      {
        title: "Draft Writing",
        description:
          "Your writer crafts a concise, persuasive cover letter aligned to your resume and target position.",
      },
      {
        title: "Revisions",
        description:
          "Request adjustments to tone or emphasis until the letter feels authentic and compelling.",
      },
      {
        title: "Final Delivery",
        description:
          "Receive your final cover letter as an editable Word document and PDF, ready to customize per application.",
      },
    ],
    pricing: [
      {
        name: "Standalone Cover Letter",
        price: "$99",
        turnaround: "2–3 business days",
        description: "A single custom cover letter matched to your resume.",
        features: [
          "Custom-written cover letter",
          "Editable template format",
          "1 round of revisions",
        ],
      },
      {
        name: "Cover Letter + Follow-Up Note",
        price: "$149",
        turnaround: "2–3 business days",
        description: "Cover letter plus a professional follow-up/thank-you template.",
        highlighted: true,
        features: [
          "Everything in Standalone Cover Letter",
          "Post-interview thank-you note template",
          "2 rounds of revisions",
        ],
      },
      {
        name: "Bundled With Resume",
        price: "Included",
        turnaround: "With resume package",
        description: "Add a cover letter to any resume writing package.",
        features: [
          "Bundled pricing with resume packages",
          "Consistent voice across documents",
          "See Pricing page for bundle details",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need a cover letter if I'm applying online?",
        answer:
          "Many applications still accept or require a cover letter, and a strong one can differentiate you even when optional. We recommend including one whenever possible.",
      },
      {
        question: "Can I reuse the cover letter for multiple applications?",
        answer:
          "Yes, we deliver an editable template designed to be quickly customized for each specific role and company.",
      },
      {
        question: "Can I add a cover letter to my resume package later?",
        answer:
          "Yes, contact us and we can add cover letter writing to your existing order.",
      },
    ],
  },
  {
    slug: "career-coaching",
    name: "Career Coaching",
    shortName: "Career Coaching",
    icon: "Compass",
    eyebrow: "1:1 Coaching",
    heroHeadline: "Personalized Career Coaching to Plan Your Next Move With Confidence",
    heroDescription:
      "One-on-one coaching sessions to clarify your goals, build a job search strategy, and navigate career transitions with a clear plan.",
    metaTitle: "Career Coaching Services | 1:1 Career Strategy Coaching",
    metaDescription:
      "Professional career coaching services for career changers, job seekers, and professionals planning their next move. Personalized 1:1 coaching sessions.",
    keywords: [
      "career coaching services",
      "career coach near me",
      "job search coaching",
      "career transition coach",
    ],
    whoItsFor: [
      "Professionals planning a career change",
      "Job seekers needing search strategy",
      "Professionals feeling stuck or unfulfilled",
      "Individuals preparing for a return to work",
    ],
    benefits: [
      {
        icon: "Compass",
        title: "Clarify Your Direction",
        description:
          "Identify your strengths, values, and target roles through structured career discovery exercises.",
      },
      {
        icon: "Map",
        title: "Personalized Job Search Plan",
        description:
          "Leave every session with a clear action plan tailored to your goals and timeline.",
      },
      {
        icon: "Users2",
        title: "Networking Strategy",
        description:
          "Learn how to build and leverage your professional network to access the hidden job market.",
      },
      {
        icon: "MessagesSquare",
        title: "Ongoing Accountability",
        description:
          "Regular check-ins keep your job search or transition plan on track and adaptable.",
      },
    ],
    process: [
      {
        title: "Initial Coaching Consultation",
        description:
          "We discuss your current situation, career goals, and the challenges you're facing.",
      },
      {
        title: "Career Assessment",
        description:
          "Structured exercises to clarify your strengths, values, and target career direction.",
      },
      {
        title: "Strategy Sessions",
        description:
          "Ongoing 1:1 sessions focused on job search strategy, networking, and decision-making.",
      },
      {
        title: "Action Plan & Follow-Up",
        description:
          "Receive a written action plan and follow-up support between sessions.",
      },
    ],
    pricing: [
      {
        name: "Single Coaching Session",
        price: "$149",
        turnaround: "60-minute session",
        description: "A focused session on a specific career question or decision.",
        features: [
          "60-minute 1:1 video session",
          "Session summary & action items",
          "Email follow-up support (7 days)",
        ],
      },
      {
        name: "3-Session Coaching Package",
        price: "$399",
        turnaround: "3 x 60-minute sessions",
        description: "Our most popular coaching package for job search strategy.",
        highlighted: true,
        features: [
          "3 x 60-minute 1:1 sessions",
          "Personalized job search plan",
          "Networking & LinkedIn strategy",
          "Email support between sessions",
        ],
      },
      {
        name: "6-Session Career Transition",
        price: "$699",
        turnaround: "6 x 60-minute sessions",
        description: "In-depth coaching for a full career pivot.",
        features: [
          "6 x 60-minute 1:1 sessions",
          "Career assessment & goal mapping",
          "Job search & networking strategy",
          "Priority email support",
        ],
      },
    ],
    faqs: [
      {
        question: "How are coaching sessions conducted?",
        answer:
          "Sessions are conducted via video call at a time that works for your schedule, with flexible booking through our scheduling system.",
      },
      {
        question: "Is career coaching different from resume writing?",
        answer:
          "Yes. Career coaching focuses on strategy, decision-making, and job search execution, while resume writing focuses on your application documents. Many clients combine both.",
      },
      {
        question: "What if I don't know what career I want next?",
        answer:
          "That's a common starting point. Our coaching process includes structured self-assessment exercises specifically designed to help you clarify direction.",
      },
    ],
  },
  {
    slug: "interview-coaching",
    name: "Interview Coaching",
    shortName: "Interview Coaching",
    icon: "Presentation",
    eyebrow: "Interview Preparation",
    heroHeadline: "Walk Into Every Interview Prepared, Confident, and Ready to Negotiate",
    heroDescription:
      "Mock interviews, behavioral question prep, and offer negotiation coaching tailored to your target role and industry.",
    metaTitle: "Interview Coaching Services | Mock Interview Preparation",
    metaDescription:
      "Professional interview coaching with mock interviews, behavioral question prep, and salary negotiation coaching for job seekers across all industries.",
    keywords: [
      "interview coaching service",
      "mock interview practice",
      "interview preparation coach",
      "salary negotiation coaching",
    ],
    whoItsFor: [
      "Candidates with upcoming interviews",
      "Professionals weak on behavioral questions",
      "Executives preparing for panel interviews",
      "Candidates negotiating a job offer",
    ],
    benefits: [
      {
        icon: "Video",
        title: "Realistic Mock Interviews",
        description:
          "Practice with role-specific and behavioral questions in a realistic, recorded mock interview format.",
      },
      {
        icon: "MessageCircle",
        title: "STAR Method Coaching",
        description:
          "Learn to structure compelling behavioral answers using the STAR method with real examples from your career.",
      },
      {
        icon: "ClipboardList",
        title: "Personalized Feedback",
        description:
          "Receive specific, actionable feedback on content, delivery, and body language after every mock session.",
      },
      {
        icon: "HandCoins",
        title: "Offer Negotiation Coaching",
        description:
          "Prepare a data-backed negotiation strategy to confidently discuss salary and benefits.",
      },
    ],
    process: [
      {
        title: "Interview Readiness Assessment",
        description:
          "We review the role, company, and interview format to identify what to prepare for.",
      },
      {
        title: "Mock Interview Session",
        description:
          "A realistic mock interview covering behavioral, situational, and role-specific questions.",
      },
      {
        title: "Feedback & Coaching",
        description:
          "Detailed feedback on your answers, structure, and delivery, with specific improvement strategies.",
      },
      {
        title: "Final Prep & Negotiation Strategy",
        description:
          "A final readiness check and, if needed, offer negotiation coaching before your interview or decision deadline.",
      },
    ],
    pricing: [
      {
        name: "Single Mock Interview",
        price: "$149",
        turnaround: "60-minute session",
        description: "One mock interview session with detailed feedback.",
        features: [
          "60-minute mock interview",
          "Recorded session (optional)",
          "Written feedback summary",
        ],
      },
      {
        name: "Interview Prep Package",
        price: "$349",
        turnaround: "3 x 60-minute sessions",
        description: "Our most popular interview coaching package.",
        highlighted: true,
        features: [
          "3 x 60-minute coaching sessions",
          "Behavioral question preparation (STAR method)",
          "Company & role-specific research",
          "Written feedback after each session",
        ],
      },
      {
        name: "Executive Interview & Negotiation",
        price: "$549",
        turnaround: "By consultation",
        description: "For senior and executive-level interview processes.",
        features: [
          "Multi-round panel interview prep",
          "Executive presence coaching",
          "Salary & offer negotiation strategy",
          "Priority scheduling",
        ],
      },
    ],
    faqs: [
      {
        question: "How many mock interview sessions do I need?",
        answer:
          "It depends on your comfort level and interview timeline. Most clients benefit from at least 2–3 sessions to build confidence and refine their answers.",
      },
      {
        question: "Do you help with virtual and panel interviews?",
        answer:
          "Yes, we coach for phone, video, in-person, and panel interview formats, including executive-level multi-round processes.",
      },
      {
        question: "Can you help me negotiate a job offer?",
        answer:
          "Yes, offer negotiation coaching is included in our Executive Interview & Negotiation package and available as an add-on to other packages.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
