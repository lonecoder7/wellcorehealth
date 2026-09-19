import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import Logo from "@/assets/wellcore-logo.png";

/**
 * Official Wellcore Health Solutions logo lockup.
 */
export function Wordmark({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link
      to="/"
      className={cn("group inline-flex items-center", className)}
      aria-label="Wellcore Health Solutions — home"
    >
      <span
        className={cn(
          "inline-flex items-center rounded-xl transition-colors",
          tone === "light" && "bg-navy-foreground px-3 py-2",
        )}
      >
        <img
          src={logo.url}
          alt="Wellcore Health Solutions — The Core of Better Health"
          className={cn("w-auto object-contain", tone === "light" ? "h-11" : "h-12 sm:h-13")}
          loading="eager"
          decoding="async"
        />
      </span>
    </Link>
  );
}
