import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CONTACT } from "@/lib/site-content";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "WellCore" },
      {
        name: "description",
        content:
          "Privacy Policy of Wellcore Health Solutions — how we collect, use, store, and protect information shared through our website.",
      },
      { property: "og:title", content: "Privacy Policy — Wellcore Health Solutions" },
      {
        property: "og:description",
        content:
          "How Wellcore Health Solutions collects, uses, stores, and protects information shared through this website.",
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

const addressLines = [
  "5/227, A4, Srinivasa Gardens",
  "Teachers Colony, 3rd Street",
  "Somayampalam, Kanuvai",
  "Coimbatore - 641 108",
  "India",
];

type Section = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  address?: boolean;
  contact?: boolean;
};

const SECTIONS: Section[] = [
  {
    title: "1. About This Privacy Policy",
    paragraphs: [
      "This Privacy Policy applies to the website operated by Wellcore Health Solutions, located at:",
    ],
    address: true,
  },
  {
    title: "2. Information We Collect",
    paragraphs: [
      "When you voluntarily contact us or submit an enquiry through our website, we may collect information such as:",
    ],
    bullets: [
      "Name",
      "Email address",
      "Telephone or mobile number",
      "Company or organisation name",
      "Subject of your enquiry",
      "Message or other information you choose to provide",
    ],
  },
  {
    title: "3. How We Use Your Information",
    paragraphs: [
      "Information you provide may be used for legitimate business and communication purposes, including:",
    ],
    bullets: [
      "Responding to enquiries and requests",
      "Communicating with customers, healthcare professionals, institutions, and business partners",
      "Understanding product and service enquiries",
      "Providing information requested by you",
      "Maintaining appropriate business and communication records",
      "Improving our website and user experience",
      "Improving our products, services, and business processes",
      "Maintaining website security",
      "Preventing misuse or unauthorised activity",
      "Complying with applicable legal and regulatory requirements",
    ],
  },
  {
    title: "4. Contact and Enquiry Forms",
    paragraphs: [
      "When you submit information through our contact or enquiry form, the information may be securely stored in our business systems so that we can review, manage, and respond to your request.",
      "Please do not submit sensitive personal information, medical records, passwords, financial information, or other highly confidential information through a general website enquiry form unless we specifically request such information through an appropriate and secure channel.",
      "Submitting an enquiry does not guarantee that Wellcore Health Solutions will enter into a business, supply, distribution, or other commercial relationship with you.",
    ],
  },
  {
    title: "5. Sharing of Information",
    paragraphs: [
      "We do not sell your personal information.",
      "We may share information where reasonably necessary with trusted service providers, technology providers, professional advisers, or other parties who assist us in operating our website, managing enquiries, maintaining systems, providing business services, protecting security, or complying with applicable laws and regulations.",
      "Where appropriate, we seek to ensure that such parties handle information in accordance with applicable obligations and reasonable security practices.",
      "We may also disclose information where required by law, regulation, court order, governmental authority, or to protect our legal rights, property, safety, or the security of our website and users.",
    ],
  },
  {
    title: "6. Data Security",
    paragraphs: [
      "We take reasonable technical and organisational measures to protect information against unauthorised access, alteration, disclosure, loss, misuse, or destruction.",
      "However, no method of electronic transmission or storage over the internet can be guaranteed to be completely secure. Therefore, while we take reasonable steps to protect information, we cannot guarantee absolute security.",
    ],
  },
  {
    title: "7. Data Retention",
    paragraphs: [
      "We retain personal information only for as long as reasonably necessary for the purposes for which it was collected, including:",
    ],
    bullets: [
      "Responding to enquiries",
      "Maintaining legitimate business records",
      "Resolving disputes",
      "Protecting our legal interests",
      "Complying with legal or regulatory obligations",
    ],
  },
  {
    title: "8. Cookies and Similar Technologies",
    paragraphs: [
      "Our website may use cookies or similar technologies where necessary for website functionality, security, performance, or analytics.",
      "You may be able to control or disable cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of some parts of the website.",
    ],
  },
  {
    title: "9. Third-Party Websites and Services",
    paragraphs: [
      "Our website may contain links to third-party websites, platforms, maps, services, or other external resources.",
      "Third-party websites operate independently and may have their own privacy policies and practices. Wellcore Health Solutions is not responsible for the privacy practices, content, security, or policies of third-party websites.",
      "We recommend reviewing the privacy policies of third-party websites before providing them with personal information.",
    ],
  },
  {
    title: "10. Your Rights and Choices",
    paragraphs: [
      "Subject to applicable law, you may have rights relating to your personal information, including the ability to request access to, correction of, updating of, or deletion of certain information, or to raise concerns regarding its processing.",
      "Requests may be made using the contact details provided below.",
      "We may need to verify your identity before processing certain requests. Some information may need to be retained where required or permitted by applicable law.",
    ],
  },
  {
    title: "11. Children's Privacy",
    paragraphs: [
      "This website is intended for a general audience and is not specifically directed towards children.",
      "We do not knowingly seek to collect personal information from children through this website.",
    ],
  },
  {
    title: "12. Changes to This Privacy Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time to reflect changes in our business practices, website functionality, technology, legal requirements, or other circumstances.",
      'Any revised Privacy Policy will be published on this page with an updated "Last Updated" date.',
    ],
  },
  {
    title: "13. Contact Us",
    paragraphs: [
      "If you have questions, concerns, or requests relating to this Privacy Policy or the handling of your information, please contact:",
    ],
    contact: true,
  },
];

function PrivacyPolicyPage() {
  return (
    <div>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How Wellcore Health Solutions collects, uses, stores, and protects information shared through this website. Last Updated: September 3, 2026."
      />

      <section className="section-shell max-w-3xl py-16 sm:py-20">
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            At Wellcore Health Solutions, we respect your privacy and are
            committed to protecting the information you share with us. This
            Privacy Policy explains how we collect, use, store, and protect
            information when you visit or interact with the Wellcore Health
            Solutions website.
          </p>
          <p>
            By using this website or voluntarily providing information through
            our contact or enquiry forms, you acknowledge the practices
            described in this Privacy Policy.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {SECTIONS.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-semibold text-foreground">
                {section.title}
              </h2>

              {section.paragraphs?.map((p) => (
                <p
                  key={p.slice(0, 40)}
                  className="mt-3 text-base leading-relaxed text-muted-foreground"
                >
                  {p}
                </p>
              ))}

              {section.address ? (
                <address className="mt-4 rounded-xl border border-border bg-surface p-5 not-italic">
                  <p className="text-sm font-medium leading-relaxed text-foreground">
                    {addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </address>
              ) : null}

              {section.bullets ? (
                <ul className="mt-4 space-y-2">
                  {section.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-3 text-base leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              {section.title === "2. Information We Collect" ? (
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  We may also collect limited technical information
                  automatically when you access our website, such as browser
                  type, device information, IP address, pages visited, and
                  general website usage information, where applicable.
                </p>
              ) : null}

              {section.title === "3. How We Use Your Information" ? (
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  We do not use information submitted through this website for
                  unrelated purposes except where permitted or required by
                  applicable law.
                </p>
              ) : null}

              {section.title === "7. Data Retention" ? (
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  When information is no longer required, it may be deleted,
                  anonymised, or securely disposed of, subject to applicable
                  legal requirements.
                </p>
              ) : null}

              {section.contact ? (
                <address className="mt-4 rounded-xl border border-border bg-surface p-5 not-italic">
                  <p className="text-sm font-semibold text-foreground">
                    Wellcore Health Solutions
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Phone:{" "}
                    <a
                      href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                      className="font-medium text-primary hover:underline"
                    >
                      {CONTACT.phone}
                    </a>
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Email: {CONTACT.emailPlaceholder}
                  </p>
                </address>
              ) : null}
            </section>
          ))}
        </div>

        <p className="mt-12 border-t border-border pt-8 text-sm text-muted-foreground">
          See also our{" "}
          <Link
            to="/terms-of-use"
            className="font-medium text-primary hover:underline"
          >
            Terms of Use
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
