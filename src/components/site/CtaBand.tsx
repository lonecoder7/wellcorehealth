import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function CtaBand({
  title = "Partner with Wellcore",
  body = "For institutional, professional and business enquiries, our team is available to discuss requirements and explore how we can work together.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="section-shell py-20 sm:py-24">
      <div className="bg-hero relative overflow-hidden rounded-[2rem] px-8 py-14 text-navy-foreground shadow-lift sm:px-14 sm:py-16">
        <div className="pointer-events-none absolute -right-16 -top-24 size-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative max-w-2xl">
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-relaxed text-navy-foreground/70">{body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full px-7">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-navy-foreground/25 bg-transparent px-7 text-navy-foreground hover:bg-navy-foreground/10 hover:text-navy-foreground"
            >
              <Link to="/products">Explore Our Products</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
