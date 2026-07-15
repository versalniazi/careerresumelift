import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Icon } from "@/components/icon";

const reasons = [
  {
    icon: "UserCheck",
    title: "1:1 With a CPRW",
    description:
      "You're matched with a real Certified Professional Resume Writer — not an algorithm or a template.",
  },
  {
    icon: "ScanSearch",
    title: "Built for ATS & Humans",
    description:
      "Every resume is engineered to pass Applicant Tracking Systems while impressing the recruiter who reads it next.",
  },
  {
    icon: "Building2",
    title: "20+ Industries Covered",
    description:
      "From tech and healthcare to federal and executive leadership, your writer understands your industry's language.",
  },
  {
    icon: "Zap",
    title: "Fast, Reliable Turnaround",
    description:
      "Most resumes are delivered within 3–5 business days — without sacrificing quality or attention to detail.",
  },
  {
    icon: "Lock",
    title: "100% Confidential",
    description:
      "Your career information and documents are always kept private and secure.",
  },
  {
    icon: "ShieldCheck",
    title: "Satisfaction Guaranteed",
    description:
      "Unlimited revisions within your package's window, backed by our written satisfaction guarantee.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-muted/40 py-24">
      <Container>
        <SectionHeading
          eyebrow="Why Career Resume Lift"
          title="The Difference Between a Resume and a Results-Driven Career Asset"
          description="We combine certified writing expertise with a deep understanding of what US recruiters and hiring managers actually look for."
          className="mb-16"
        />

        <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <RevealItem key={reason.title}>
              <div className="flex h-full flex-col rounded-2xl bg-card p-6 shadow-sm">
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Icon name={reason.icon} className="size-5" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-semibold">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
