import { Eyebrow } from "./SectionHeading";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <section className="bg-hero relative overflow-hidden text-navy-foreground">
      <div className="pointer-events-none absolute -left-24 top-0 size-96 rounded-full bg-primary/15 blur-3xl" />
      <div className="section-shell relative py-20 sm:py-28">
        <div className="fade-up max-w-3xl">
          <Eyebrow tone="light">{eyebrow}</Eyebrow>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.1] sm:text-5xl">{title}</h1>
          {description ? (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-navy-foreground/70 sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
