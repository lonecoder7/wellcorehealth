import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CATEGORIES } from "@/components/site/ProductCategories";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Product Portfolio | Wellcore Health Solutions" },
      {
        name: "description",
        content:
          "Explore the Wellcore portfolio: pharmaceuticals, nutraceuticals, cosmetics, surgical products and medical consumables, selected for quality, efficacy, safety and value.",
      },
      { property: "og:title", content: "Product Portfolio | Wellcore Health Solutions" },
      {
        property: "og:description",
        content:
          "Five healthcare categories selected with a focus on quality, efficacy, safety and value.",
      },
    ],
  }),
  component: Products,
});

function Products() {
  return (
    <>
      <PageHero
        eyebrow="Our Products"
        title="A portfolio built around quality"
        description="Our portfolio encompasses pharmaceutical products, nutraceuticals, cosmetics, surgical products, and medical consumables, carefully selected with a focus on quality, efficacy, safety, and value."
      />

      <section className="section-shell py-14">
        <div className="rounded-2xl border border-dashed border-border bg-secondary/60 px-6 py-5 text-sm text-muted-foreground">
          <strong className="font-semibold text-foreground">Placeholder notice:</strong> the product
          cards below are placeholders for layout purposes. Real product names, images and details
          will replace them once provided by the client.
        </div>
      </section>

      {CATEGORIES.map((cat, index) => (
        <section
          key={cat.slug}
          id={cat.slug}
          className={index % 2 === 1 ? "bg-surface py-20 sm:py-24" : "py-20 sm:py-24"}
        >
          <div className="section-shell">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.15fr]">
              <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
                <div className="overflow-hidden rounded-[2rem] shadow-lift">
                  <img
                    src={cat.image}
                    alt={`${cat.name} products`}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="size-full object-cover"
                  />
                </div>
              </div>
              <div>
                <SectionHeading eyebrow={`Category 0${index + 1}`} title={cat.name} description={cat.summary} />
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {cat.placeholders.map((p, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-dashed border-border bg-card p-5 shadow-soft"
                    >
                      <div className="mb-4 h-20 rounded-xl bg-secondary" />
                      <p className="text-sm font-medium text-foreground">{p}</p>
                      <p className="mt-1 text-xs text-muted-foreground">Details to be provided</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <CtaBand
        title="Looking for product details?"
        body="Reach out for information about our portfolio and availability. Our team will respond with the relevant details."
      />
    </>
  );
}
