import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/why-wellcore")({
  head: () => ({
    meta: [
      { title: "WellCore" },
      {
        name: "description",
        content:
          "Why healthcare professionals, institutions and partners choose Wellcore Health Solutions — quality-led selection, professional service and long-term relationships.",
      },
      { property: "og:title", content: "Why Wellcore | Wellcore Health Solutions" },
      {
        property: "og:description",
        content:
          "Quality-led selection, professional service, dependable supply and continuous improvement.",
      },
    ],
  }),
  component: WhyWellcore,
});

const benefits = [
  {
    title: "Quality-led selection",
    body: "Products chosen with a focus on quality, efficacy, safety and value across all five categories.",
  },
  {
    title: "Healthcare-focused organization",
    body: "Health is at the core of everything we do — from the products we represent to how we work.",
  },
  {
    title: "Professional service",
    body: "Responsive, informed engagement with healthcare professionals, institutions and customers.",
  },
  {
    title: "Responsible business practices",
    body: "Ethical conduct and transparency in every partnership we build.",
  },
  {
    title: "Dependable supply",
    body: "An approach oriented towards consistency and reliability for those who depend on us.",
  },
  {
    title: "Continuous improvement",
    body: "We keep refining our products, processes and partnerships for a healthier tomorrow.",
  },
];

function WhyWellcore() {
  return (
    <>
      <PageHero
        eyebrow="Why Wellcore"
        title="Reasons partners choose to work with us"
        description="We work closely with healthcare professionals and business partners to understand evolving market needs and bring relevant solutions to the forefront."
      />

      <section className="section-shell py-20 sm:py-28">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="card-lift rounded-2xl border border-border bg-card p-7 shadow-soft">
              <span className="grid size-10 place-items-center rounded-full bg-accent text-accent-foreground">
                <Check className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-28">
        <div className="section-shell">
          <SectionHeading
            align="center"
            eyebrow="Our Commitment"
            title="Creating lasting value"
            description="With a committed team and a growing portfolio, Wellcore Health Solutions is focused on establishing a strong presence in the healthcare market while creating lasting value for our customers, partners, and stakeholders."
          />
        </div>
      </section>

      <CtaBand
        title="For institutions and business partners"
        body="If you represent a hospital, clinic, pharmacy, institution or distribution partner, we would be glad to discuss how Wellcore can support your requirements."
      />
    </>
  );
}
