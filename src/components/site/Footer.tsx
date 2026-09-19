import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Mail } from "lucide-react";
import { Wordmark } from "./Wordmark";
import coin from "@/assets/raknatech-banner.png";


const CONTACT = {
  phone: "+91 8807224365",
  email: "wellcorehealthsolutionscbe@gmail.com",
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

              <a
                href={`mailto:${CONTACT.email}`}
                className="transition-colors hover:text-navy-foreground"
              >
                {CONTACT.email}
              </a>
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
        <div className="section-shell py-6">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
            {/* Copyright */}
            <p className="text-xs text-navy-foreground/50">
              © {new Date().getFullYear()} Wellcore Health Solutions — Wellness
              at the Core.
            </p>

            {/* Legal */}
            <div className="flex items-center gap-4 text-xs text-navy-foreground/50">
              <Link
                to="/privacy-policy"
                className="transition-colors hover:text-navy-foreground"
              >
                Privacy Policy
              </Link>
              <span className="h-4 w-px bg-navy-foreground/20" />
              <Link
                to="/terms-of-use"
                className="transition-colors hover:text-navy-foreground"
              >
                Terms of Use
              </Link>
            </div>

            {/* RaknaTech Credit */}
            <div className="flex items-center gap-4">
              <span className="hidden h-8 w-px bg-navy-foreground/15 md:block" />
              <a
                href="https://lonecoder7.github.io/RAKNATECH/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3"
              >
                <img
                  src={coin.url}
                  alt="RaknaTech"
                  className="size-10 shrink-0 object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <span className="text-left leading-tight">
                  <span className="block text-xs text-navy-foreground/55">
                    Designed &amp; Handcrafted by
                  </span>
                  <span className="mt-0.5 block text-sm font-semibold tracking-wide text-navy-foreground/85 transition-colors group-hover:text-primary">
                    RaknaTech
                    <span className="ml-1 inline-block transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
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
