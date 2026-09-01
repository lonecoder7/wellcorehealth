import { createFileRoute } from "@tanstack/react-router";
import { Package, Users, Truck, ClipboardCheck, MessageSquare, Repeat } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Capabilities | Wellcore Health Solutions" },
      {
        name: "description",
        content:
          "An overview of how Wellcore Health Solutions works with healthcare professionals and business partners through professional service and responsible business practices.",
      },
      { property: "og:title", content: "Services & Capabilities | Wellcore Health Solutions" },
      {
        property: "og:description",
        content:
          "Professional service, dependable supply and continuous improvement across our healthcare portfolio.",
      },
    ],
  }),
  component: Services,
});

const capabilities = [
  {
    icon: Package,
    title: "Product Portfolio Focus",
    body: "Maintaining a growing portfolio across five healthcare categories, selected with attention to quality, efficacy, safety and value.",
  },
  {
    icon: Users,
    title: "Professional Engagement",
    body: "Working closely with healthcare professionals and business partners to understand evolving market needs.",
  },
  {
    icon: Truck,
    title: "Dependable Supply",
    body: "An approach oriented towards reliability and consistency in how products reach those who rely on them.",
  },
  {
    icon: ClipboardCheck,
    title: "Responsible Practices",
    body: "Ethical, professional business conduct applied across every relationship we build.",
  },
  {
    icon: MessageSquare,
    title: "Customer-Focused Service",
    body: "Attentive communication and support oriented around the needs of customers and partners.",
  },
  {
    icon: Repeat,
    title: "Continuous Improvement",
    body: "Ongoing refinement of our products, processes and partnerships over time.",
  },
];

const steps = [
  { title: "Connect", body: "An initial conversation to understand your requirements and context." },
  { title: "Understand", body: "We review evolving needs together with healthcare professionals and partners." },
  { title: "Align", body: "Relevant portfolio areas and working arrangements are discussed and agreed." },
  { title: "Support", body: "An ongoing relationship built on professional service and continuous improvement." },
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="How we work"
        description="Our approach goes beyond simply marketing and distributing products. We strive to build long-term relationships through professional service, responsible business practices, dependable supply, and continuous improvement."
      />

      <section className="section-shell py-14">
        <div className="rounded-2xl border border-dashed border-border bg-secondary/60 px-6 py-5 text-sm text-muted-foreground">
          <strong className="font-semibold text-foreground">Placeholder notice:</strong> this section
          describes our general approach. The exact list of services will be finalised and inserted
          once confirmed by the client.
        </div>
      </section>

      <section className="section-shell pb-20 sm:pb-28">
        <SectionHeading
          align="center"
          eyebrow="Capabilities"
          title="General areas of focus"
          description="An informational overview of the areas in which Wellcore operates."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <div key={c.title} className="card-lift rounded-2xl border border-border bg-card p-7 shadow-soft">
              <span className="grid size-11 place-items-center rounded-xl bg-accent text-accent-foreground">
                <c.icon className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </div>
          ))}
          <div className="flex flex-col justify-center rounded-2xl border border-dashed border-border bg-secondary/60 p-7">
            <p className="text-sm font-medium text-foreground">[Additional Service — Placeholder]</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Reserved for client-provided service descriptions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 text-navy-foreground sm:py-28">
        <div className="section-shell">
          <SectionHeading
            tone="light"
            align="center"
            eyebrow="Our Process"
            title="A simple, four-step relationship"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className="relative rounded-2xl border border-navy-foreground/12 bg-navy-foreground/5 p-7"
              >
                <span className="font-display text-3xl font-semibold text-primary">0{i + 1}</span>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-foreground/65">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
