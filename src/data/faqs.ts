export type FaqCategory = {
  category: string;
  items: { question: string; answer: string }[];
};

export const faqCategories: FaqCategory[] = [
  {
    category: "Getting Started",
    items: [
      {
        question: "How does the resume writing process work?",
        answer:
          "After you choose a package and complete checkout, you'll fill out a detailed intake questionnaire about your work history and goals. Your assigned Certified Professional Resume Writer researches your target role, drafts your resume, and delivers it within your package's turnaround window. You then review the draft and request revisions before final delivery.",
      },
      {
        question: "How long does it take to get my resume?",
        answer:
          "Standard turnaround is 3–7 business days depending on your package, starting from when you submit your completed intake questionnaire. Rush delivery is available for select packages — contact us for details.",
      },
      {
        question: "Do I need to prepare anything before I start?",
        answer:
          "It helps to have your current resume (if you have one), a list of target job titles, and any job descriptions you're interested in. Don't worry if your current resume is outdated — that's exactly what we're here to fix.",
      },
    ],
  },
  {
    category: "Pricing & Packages",
    items: [
      {
        question: "Which package is right for me?",
        answer:
          "Our Professional Resume package suits most mid-level professionals. Executives and senior leaders should consider our Executive Resume package. Federal job seekers need our Federal Resume package. Visit our Pricing page or contact us and we'll recommend the right fit.",
      },
      {
        question: "Do you offer payment plans?",
        answer:
          "Yes, payment plans are available on select packages. Contact our team to discuss options that work for your budget.",
      },
      {
        question: "Is there a money-back guarantee?",
        answer:
          "Yes. If you're not satisfied after your revision rounds, we offer a satisfaction guarantee outlined in our Refund Policy. We work with you until your resume meets professional standards.",
      },
    ],
  },
  {
    category: "ATS & Formatting",
    items: [
      {
        question: "What is an ATS and why does it matter?",
        answer:
          "An Applicant Tracking System (ATS) is software used by employers to scan, filter, and rank resumes before a human ever sees them. Most mid-size and large companies use one. Our resumes are formatted and keyword-optimized to parse correctly through major ATS platforms.",
      },
      {
        question: "Will my resume still look good to a human reader?",
        answer:
          "Yes. We balance ATS compatibility with clean, professional visual design so your resume performs well with software and makes a strong impression on recruiters and hiring managers.",
      },
      {
        question: "What file formats will I receive?",
        answer:
          "You'll receive your final resume as an editable Microsoft Word (.docx) file and a print-ready PDF, so you can apply directly or make quick edits yourself.",
      },
    ],
  },
  {
    category: "Working With Your Writer",
    items: [
      {
        question: "Will I work with the same writer throughout the process?",
        answer:
          "Yes, you're matched with one Certified Professional Resume Writer who manages your project from intake through final delivery and all revisions.",
      },
      {
        question: "How many revisions do I get?",
        answer:
          "Revision rounds vary by package, typically 2–3 rounds, with some packages including unlimited revisions within a set time window. Full details are listed on each service and pricing page.",
      },
      {
        question: "Is my information kept confidential?",
        answer:
          "Absolutely. All client information is kept strictly confidential and is never shared with third parties. See our Privacy Policy for full details.",
      },
    ],
  },
];

export const generalFaqs = faqCategories.flatMap((c) => c.items);
