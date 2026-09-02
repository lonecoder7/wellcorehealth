import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Mail } from "lucide-react";
import { Wordmark } from "./Wordmark";
import { CONTACT } from "@/lib/site-content";
import raknatechBanner from "@/assets/raknatech-banner.png.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/why-wellcore", label: "Why Wellcore" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="bg-navy-deep text-navy-foreground">
      <div className="section-shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Wordmark tone="light" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-foreground/65">
            The Core of Better Health. A healthcare-focused organization built on the philosophy of
            “Wellness at the Core”.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-foreground/50">
            Navigation
          </h3>
          <ul className="mt-5 space-y-3">
            {nav.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-navy-foreground/70 transition-colors hover:text-navy-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-foreground/50">
            Contact
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-navy-foreground/70">
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
              <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="hover:text-navy-foreground">
                {CONTACT.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>Email: [Client Email]</span>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span className="leading-relaxed">{CONTACT.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-foreground/10">
        <div className="section-shell flex flex-col items-center gap-5 py-8">
          <a
            href="https://lonecoder7.github.io/RAKNATECH/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img
              src={raknatechBanner.url}
              alt="Designed & Handcrafted by RaknaTech"
              width={240}
              height={52}
              className="h-11 w-auto object-contain opacity-90 transition-opacity hover:opacity-100"
            />
          </a>
          <div className="flex w-full flex-col items-center gap-3 text-xs text-navy-foreground/50 sm:flex-row sm:justify-between">
            <p>© {new Date().getFullYear()} Wellcore Health Solutions — Wellness at the Core.</p>
            <p className="flex gap-5">
              <span>Privacy Policy [Placeholder]</span>
              <span>Terms of Use [Placeholder]</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
