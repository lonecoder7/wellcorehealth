import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

/**
 * Text-based placeholder wordmark for Wellcore Health Solutions.
 * Swap for the official logo image when supplied by the client.
 */
export function Wordmark({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link to="/" className={cn("group inline-flex items-center gap-3", className)} aria-label="Wellcore Health Solutions — home">
      <span
        className={cn(
          "grid size-9 place-items-center rounded-xl border font-display text-sm font-bold transition-colors",
          tone === "light"
            ? "border-navy-foreground/25 bg-navy-foreground/10 text-navy-foreground"
            : "border-border bg-primary text-primary-foreground",
        )}
      >
        W
      </span>
      <span className="leading-none">
        <span
          className={cn(
            "block font-display text-lg font-semibold tracking-tight",
            tone === "light" ? "text-navy-foreground" : "text-foreground",
          )}
        >
          Well<span className="text-gradient-brand">core</span>
        </span>
        <span
          className={cn(
            "mt-1 block text-[0.62rem] font-medium uppercase tracking-[0.22em]",
            tone === "light" ? "text-navy-foreground/60" : "text-muted-foreground",
          )}
        >
          Health Solutions
        </span>
      </span>
    </Link>
  );
}
