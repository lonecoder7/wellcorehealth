import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, HeartPulse, Boxes, Handshake } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import { Button } from "@/components/ui/button";
import { SectionHeading, Eyebrow } from "@/components/site/SectionHeading";
import { CATEGORIES, CategoryCard } from "@/components/site/ProductCategories";
import { CtaBand } from "@/components/site/CtaBand";
import { PILLARS } from "@/lib/site-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WellCore" },
      {
        name: "description",
        content:
          "Wellcore Health Solutions is a healthcare-focused organization delivering quality, reliable and innovative healthcare products built on Wellness at the Core.",
      },
      { property: "og:title", content: "Wellcore Health Solutions — The Core of Better Health" },
      {
        property: "og:description",
        content:
          "Quality healthcare products across pharmaceuticals, nutraceuticals, cosmetics, surgical products and medical consumables.",
      },
    ],
  }),
  component: Home,
});

const trust = [
  { icon: ShieldCheck, title: "Quality First", body: "Every product is selected with attention to quality, efficacy, safety and value." },
  { icon: HeartPulse, title: "Health at the Core", body: "A philosophy of Wellness at the Core guides how we build our portfolio." },
  { icon: Boxes, title: "Five Categories", body: "Pharmaceuticals, nutraceuticals, cosmetics, surgical products and medical consumables." },
  { icon: Handshake, title: "Long-Term Relationships", body: "Professional service, responsible practices and dependable supply." },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy-deep">
        <img
          src={heroImg}
          alt="Modern healthcare laboratory environment"
          width={1920}
          height={1088}
          className="absolute inset-0 size-full object-cover opacity-45"
        />
        <div className="bg-hero absolute inset-0 opacity-80" />
        <div className="absolute inset-0 bg-navy-deep/40" />

        <div className="section-shell relative py-28 sm:py-36 lg:py-44">
          <div className="fade-up max-w-3xl">
            <Eyebrow tone="light">Wellcore Health Solutions</Eyebrow>
            <h1 className="mt-7 text-4xl font-semibold leading-[1.08] text-navy-foreground sm:text-6xl lg:text-7xl">
              The Core of <span className="text-gradient-brand">Better Health</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-foreground/70">
              Quality healthcare products and trusted solutions for the professionals, institutions
              and customers who depend on them every day.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-7">
                <Link to="/products">
                  Explore Our Products <ArrowRight className="ml-1 size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-navy-foreground/25 bg-transparent px-7 text-navy-foreground hover:bg-navy-foreground/10 hover:text-navy-foreground"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
            <p className="mt-10 text-xs font-medium uppercase tracking-[0.28em] text-navy-foreground/45">
              Wellness at the Core
            </p>
          </div>
        </div>
      </section>

      {/* Trust intro */}
      <section className="section-shell py-20 sm:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map((t) => (
            <div key={t.title} className="card-lift rounded-2xl border border-border bg-card p-7 shadow-soft">
              <span className="grid size-11 place-items-center rounded-xl bg-accent text-accent-foreground">
                <t.icon className="size-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold text-foreground">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About preview */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="section-shell grid items-center gap-14 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] shadow-lift">
            <img
              src={aboutImg}
              alt="Healthcare professionals in discussion"
              loading="lazy"
              width={1280}
              height={960}
              className="size-full object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="About Wellcore"
              title="A bridge between quality products and the people who rely on them"
              description="Wellcore Health Solutions is a healthcare-focused organization committed to delivering quality, reliable, and innovative healthcare products that contribute to better health and well-being."
            />
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Built on the philosophy of “Wellness at the Core,” we aim to create a strong bridge
              between quality healthcare products and the healthcare professionals, institutions,
              and customers who rely on them.
            </p>
            <Button asChild variant="outline" className="mt-8 rounded-full px-6">
              <Link to="/about">
                Learn more about us <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section-shell py-20 sm:py-28">
        <SectionHeading
          align="center"
          eyebrow="Our Portfolio"
          title="Five categories, one standard of quality"
          description="Our portfolio encompasses pharmaceutical products, nutraceuticals, cosmetics, surgical products, and medical consumables — carefully selected with a focus on quality, efficacy, safety, and value."
        />
        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c) => (
            <CategoryCard key={c.slug} category={c} />
          ))}
          <div className="flex flex-col justify-center rounded-3xl border border-dashed border-border bg-secondary/60 p-8 text-center">
            <p className="text-sm font-medium text-foreground">Product listings coming soon</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Placeholder product cards are ready to be replaced with client-provided names and images.
            </p>
            <Button asChild variant="outline" className="mt-6 rounded-full">
              <Link to="/products">View all categories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-navy py-20 text-navy-foreground sm:py-28">
        <div className="section-shell">
          <SectionHeading
            tone="light"
            align="center"
            eyebrow="Quality · Trust · Commitment"
            title="Sustainable growth built on three fundamental pillars"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PILLARS.map((p, i) => (
              <div
                key={p.title}
                className="rounded-2xl border border-navy-foreground/12 bg-navy-foreground/5 p-8 backdrop-blur-sm"
              >
                <span className="font-display text-sm font-semibold text-primary">
                  0{i + 1}
                </span>
                <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-foreground/65">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
