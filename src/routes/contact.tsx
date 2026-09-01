import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Mail, Info } from "lucide-react";
import { toast } from "sonner";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CONTACT } from "@/lib/site-content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Wellcore Health Solutions | Coimbatore" },
      {
        name: "description",
        content:
          "Get in touch with Wellcore Health Solutions in Coimbatore for enquiries about our healthcare product portfolio and partnerships.",
      },
      { property: "og:title", content: "Contact Wellcore Health Solutions" },
      {
        property: "og:description",
        content: "Phone +91 8807224365 — Somayampalam, Kanuvai, Coimbatore - 641 108.",
      },
    ],
  }),
  component: Contact,
});

/**
 * PLACEHOLDER GOOGLE FORM INTEGRATION.
 * Replace GOOGLE_FORM_URL with the client's real Google Form action URL (or embed
 * URL) and wire the field names to the form's entry.<id> keys to go live.
 */
const GOOGLE_FORM_URL = "" as string;

const enquiryTypes = [
  "General Enquiry",
  "Product Information",
  "Business / Institutional Partnership",
  "Other",
];

function Contact() {
  const [enquiry, setEnquiry] = useState("");

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about better health"
        description="For enquiries about our portfolio, partnerships or general information, our team is available to help."
      />

      <section className="section-shell py-20 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* Details */}
          <div>
            <SectionHeading eyebrow="Reach Us" title="Contact details" />
            <ul className="mt-8 space-y-5">
              <li className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft">
                <Phone className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Phone</p>
                  <a
                    href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                    className="mt-1 block text-sm text-muted-foreground hover:text-foreground"
                  >
                    {CONTACT.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft">
                <Mail className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Email</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Email: {CONTACT.emailPlaceholder}
                  </p>
                </div>
              </li>
              <li className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Office Address</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {CONTACT.address}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-border bg-card p-8 shadow-lift sm:p-10">
            <h2 className="text-2xl font-semibold text-foreground">Send an enquiry</h2>
            <div className="mt-4 flex gap-3 rounded-xl border border-dashed border-border bg-secondary/60 p-4 text-xs leading-relaxed text-muted-foreground">
              <Info className="mt-0.5 size-4 shrink-0" />
              <p>
                <strong className="font-semibold text-foreground">
                  Placeholder Google Form integration.
                </strong>{" "}
                This form is a prototype UI only — submissions are not connected or stored yet. The
                client's Google Form URL can be swapped in later.
              </p>
            </div>

            <form
              className="mt-7 space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                if (!GOOGLE_FORM_URL) {
                  toast("Demo form — not connected", {
                    description:
                      "This is a placeholder. Connect the client's Google Form to receive submissions.",
                  });
                }
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your full name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="you@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+91" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company / Organization</Label>
                  <Input id="company" name="company" placeholder="Organization name" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject / Enquiry Type</Label>
                <Select value={enquiry} onValueChange={setEnquiry}>
                  <SelectTrigger id="subject" className="w-full">
                    <SelectValue placeholder="Select an enquiry type" />
                  </SelectTrigger>
                  <SelectContent>
                    {enquiryTypes.map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" rows={5} placeholder="How can we help?" />
              </div>

              <Button type="submit" size="lg" className="w-full rounded-full">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>

      <section className="section-shell pb-24">
        <div className="overflow-hidden rounded-[2rem] border border-border shadow-lift">
          <iframe
            title="Wellcore Health Solutions office location"
            src={CONTACT.mapEmbedSrc}
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="h-[420px] w-full"
          />
        </div>
      </section>
    </>
  );
}
