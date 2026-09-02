import { createFileRoute } from "@tanstack/react-router";
import { Eye, Target, HeartHandshake } from "lucide-react";
import aboutImg from "@/assets/about.jpg";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaBand } from "@/components/site/CtaBand";
import { PILLARS } from "@/lib/site-content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "WellCore" },
      {
        name: "description",
        content:
          "Learn about Wellcore Health Solutions — our philosophy of Wellness at the Core, our vision, mission and commitment to quality healthcare products.",
      },
      { property: "og:title", content: "About Wellcore Health Solutions" },
      {
        property: "og:description",
        content:
          "A healthcare-focused organization built on Quality, Trust and Commitment.",
      },
    ],
  }),
  component: About,
});

const vmc = [
  {
    icon: Eye,
    label: "Vision",
    body: "To become a trusted and respected healthcare organization known for quality products, professional excellence, and meaningful contribution to better health.",
  },
  {
    icon: Target,
    label: "Mission",
    body: "To provide accessible, reliable, and value-driven healthcare solutions through quality products, ethical practices, strong partnerships, and customer-focused service.",
  },
  {
    icon: HeartHandshake,
    label: "Commitment",
    body: "At Wellcore, health is at the core of everything we do. We are committed to continuously improving our products, processes, and partnerships so that every step we take contributes to a healthier tomorrow.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Wellness at the Core"
        description="Wellcore Health Solutions is a healthcare-focused organization committed to delivering quality, reliable, and innovative healthcare products that contribute to better health and well-being."
      />

      <section className="section-shell py-20 sm:py-28">
        <div className="grid items-start gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="Building a bridge in healthcare"
              description="Built on the philosophy of “Wellness at the Core,” we aim to create a strong bridge between quality healthcare products and the healthcare professionals, institutions, and customers who rely on them."
            />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Our portfolio encompasses pharmaceutical products, nutraceuticals, cosmetics,
                surgical products, and medical consumables, carefully selected with a focus on
                quality, efficacy, safety, and value.
              </p>
              <p>
                We work closely with healthcare professionals and business partners to understand
                evolving market needs and bring relevant solutions to the forefront.
              </p>
              <p>
                Our approach goes beyond simply marketing and distributing products. We strive to
                build long-term relationships through professional service, responsible business
                practices, dependable supply, and continuous improvement.
              </p>
              <p>
                With a committed team and a growing portfolio, Wellcore Health Solutions is focused
                on establishing a strong presence in the healthcare market while creating lasting
                value for our customers, partners, and stakeholders.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] shadow-lift lg:sticky lg:top-28">
            <img
              src={aboutImg}
              alt="Healthcare professionals collaborating"
              loading="lazy"
              width={1280}
              height={960}
              className="size-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-28">
        <div className="section-shell">
          <SectionHeading
            align="center"
            eyebrow="Our Foundation"
            title="Quality, Trust and Commitment"
            description="At Wellcore, we believe that sustainable growth in healthcare is built on three fundamental pillars."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PILLARS.map((p) => (
              <div key={p.title} className="card-lift rounded-2xl border border-border bg-card p-8 shadow-soft">
                <h3 className="text-xl font-semibold text-foreground">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20 sm:py-28">
        <SectionHeading
          align="center"
          eyebrow="Vision · Mission · Commitment"
          title="What guides our work"
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {vmc.map((v) => (
            <div
              key={v.label}
              className="card-lift rounded-3xl border border-border bg-card p-8 shadow-soft"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-accent text-accent-foreground">
                <v.icon className="size-5" />
              </span>
              <h3 className="mt-6 text-xl font-semibold text-foreground">{v.label}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-14 text-center font-display text-lg font-medium text-foreground">
          Wellcore Health Solutions — Wellness at the Core.
        </p>
      </section>

      <CtaBand />
    </>
  );
}
