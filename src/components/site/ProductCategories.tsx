import pharma from "@/assets/cat-pharma.jpg";
import nutra from "@/assets/cat-nutra.jpg";
import cosmetics from "@/assets/cat-cosmetics.jpg";
import surgical from "@/assets/cat-surgical.jpg";
import consumables from "@/assets/cat-consumables.jpg";

export type Category = {
  slug: string;
  name: string;
  image: string;
  summary: string;
  placeholders: string[];
};

export const CATEGORIES: Category[] = [
  {
    slug: "pharmaceuticals",
    name: "Pharmaceuticals",
    image: pharma,
    summary:
      "A growing range of pharmaceutical products selected for quality, efficacy, safety and value.",
    placeholders: ["Product Name — Placeholder", "Product Name — Placeholder", "Product Name — Placeholder"],
  },
  {
    slug: "nutraceuticals",
    name: "Nutraceuticals",
    image: nutra,
    summary:
      "Nutritional and supplementary offerings supporting everyday wellness and recovery needs.",
    placeholders: ["Product Name — Placeholder", "Product Name — Placeholder", "Product Name — Placeholder"],
  },
  {
    slug: "cosmetics",
    name: "Cosmetics",
    image: cosmetics,
    summary:
      "Personal care and cosmetic products presented with the same quality-first approach.",
    placeholders: ["Product Name — Placeholder", "Product Name — Placeholder", "Product Name — Placeholder"],
  },
  {
    slug: "surgical-products",
    name: "Surgical Products",
    image: surgical,
    summary:
      "Surgical items intended for professional and institutional healthcare environments.",
    placeholders: ["Product Name — Placeholder", "Product Name — Placeholder", "Product Name — Placeholder"],
  },
  {
    slug: "medical-consumables",
    name: "Medical Consumables",
    image: consumables,
    summary:
      "Everyday medical consumables that support dependable, uninterrupted clinical routines.",
    placeholders: ["Product Name — Placeholder", "Product Name — Placeholder", "Product Name — Placeholder"],
  },
];

export function CategoryCard({ category }: { category: Category }) {
  return (
    <article className="card-lift group overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <img
          src={category.image}
          alt={`${category.name} category`}
          loading="lazy"
          width={1024}
          height={768}
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-7">
        <h3 className="text-xl font-semibold text-foreground">{category.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{category.summary}</p>
      </div>
    </article>
  );
}
