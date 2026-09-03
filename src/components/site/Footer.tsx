import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Mail } from "lucide-react";
import { Wordmark } from "./Wordmark";

const CONTACT = {
  phone: "+91 8807224365",
  address:
    "5/227, A4, Srinivasa Gardens, Teachers Colony, 3rd Street, Somayampalam, Kanuvai, Coimbatore - 641 108",
};

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
      {/* Main Footer */}
      <div className="section-shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-2">
          <Wordmark tone="light" />

          <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-foreground/65">
            The Core of Better Health. A healthcare-focused organization built
            on the philosophy of “Wellness at the Core”.
          </p>
        </div>

        {/* Navigation */}
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

        {/* Contact */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-foreground/50">
            Contact
          </h3>

          <ul className="mt-5 space-y-4 text-sm text-navy-foreground/70">
            {/* Phone */}
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" />

              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                className="transition-colors hover:text-navy-foreground"
              >
                {CONTACT.phone}
              </a>
            </li>

            {/* Email */}
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" />

              <span>Email: [Client Email]</span>
            </li>

            {/* Address */}
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />

              <span className="leading-relaxed">
                {CONTACT.address}
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-navy-foreground/10">
        <div className="section-shell py-8">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">

            {/* Copyright */}
            <p className="text-xs text-navy-foreground/50">
              © {new Date().getFullYear()} Wellcore Health Solutions — Wellness
              at the Core.
            </p>

            {/* Right Side */}
            <div className="flex flex-col items-start gap-5 sm:items-end">

              {/* Privacy / Terms */}
              <p className="flex flex-wrap gap-5 text-xs text-navy-foreground/50">
                <span>Privacy Policy [Placeholder]</span>
                <span>Terms of Use [Placeholder]</span>
              </p>

              {/* RaknaTech Credit */}
              <a
                href="https://lonecoder7.github.io/RAKNATECH/"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-left sm:text-right"
              >
                <span className="block text-[10px] uppercase tracking-[0.18em] text-navy-foreground/40">
                  Designed &amp; Handcrafted by
                </span>

                <span className="mt-1 block text-sm font-semibold tracking-wide text-navy-foreground/80 transition-colors group-hover:text-primary">
                  RaknaTech
                  <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </a>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
