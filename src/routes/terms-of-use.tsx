import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CONTACT } from "@/lib/site-content";

export const Route = createFileRoute("/terms-of-use")({
  head: () => ({
    meta: [
      { title: "WellCore" },
      {
        name: "description",
        content:
          "Terms of Use of the Wellcore Health Solutions website — the terms governing access to and use of this informational website.",
      },
      { property: "og:title", content: "Terms of Use — Wellcore Health Solutions" },
      {
        property: "og:description",
        content:
          "The terms governing access to and use of the Wellcore Health Solutions website.",
      },
    ],
  }),
  component: TermsOfUsePage,
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
  contact?: boolean;
  privacyLink?: boolean;
};

const SECTIONS: Section[] = [
  {
    title: "1. About the Website",
    paragraphs: [
      "This website is operated by Wellcore Health Solutions.",
      "The website is intended primarily to provide information about Wellcore Health Solutions, its healthcare product categories, business activities, capabilities, services, and means of communication.",
      "The website is designed as an informational and business communication platform.",
      "This website does not currently provide online shopping, online ordering, online payment, prescription services, or direct online purchase functionality unless expressly stated otherwise on a particular page.",
    ],
  },
  {
    title: "2. Company Information",
    contact: true,
  },
  {
    title: "3. Use of Website Information",
    paragraphs: [
      "We make reasonable efforts to ensure that information presented on this website is accurate, useful, and up to date.",
      "However, information may change from time to time, including product availability, specifications, packaging, formulations, manufacturers, regulatory information, services, and other business details.",
      "Wellcore Health Solutions reserves the right to update, modify, correct, or remove website content at any time without prior notice.",
    ],
  },
  {
    title: "4. Product Information",
    paragraphs: [
      "The products and categories presented on this website are provided for general informational purposes.",
      "Product information should not be considered a substitute for:",
    ],
    bullets: [
      "Professional medical advice",
      "Diagnosis or treatment",
      "A healthcare professional's recommendation",
      "Official product documentation",
      "Manufacturer instructions",
      "Product labels",
      "Applicable regulatory requirements",
    ],
  },
  {
    title: "5. No Medical Advice",
    paragraphs: [
      "Nothing on this website is intended to provide medical, clinical, diagnostic, therapeutic, pharmaceutical, or other professional healthcare advice.",
      "The website does not establish a doctor-patient, pharmacist-patient, or other healthcare professional relationship.",
      "If you require medical advice, diagnosis, treatment, or information concerning a medical condition or medicine, you should consult an appropriately qualified healthcare professional.",
    ],
  },
  {
    title: "6. Enquiries and Communications",
    paragraphs: [
      "The website may provide contact and enquiry functionality to allow users to communicate with Wellcore Health Solutions.",
      "Submitting an enquiry does not automatically create:",
    ],
    bullets: [
      "A purchase agreement",
      "A supply agreement",
      "A distribution agreement",
      "An agency relationship",
      "A partnership",
      "A contractual relationship",
    ],
  },
  {
    title: "7. Acceptable Use",
    paragraphs: [
      "You agree to use this website only for lawful and legitimate purposes.",
      "You must not:",
    ],
    bullets: [
      "Use the website for fraudulent or unlawful activities",
      "Attempt to gain unauthorised access to the website or its systems",
      "Interfere with website security or operation",
      "Introduce malicious software, code, or harmful material",
      "Attempt to obtain information through unauthorised means",
      "Impersonate another person or organisation",
      "Misuse the website's contact or enquiry functionality",
      "Submit false, misleading, or fraudulent information",
      "Use the website in a manner that violates applicable laws or regulations",
    ],
  },
  {
    title: "8. Intellectual Property",
    paragraphs: [
      "Unless otherwise indicated, the content displayed on this website, including text, graphics, logos, images, layouts, design elements, and other materials, is owned by or used with permission by Wellcore Health Solutions and may be protected by applicable intellectual property laws.",
      "You may view and access website content for personal or legitimate business purposes.",
      "You may not reproduce, copy, modify, distribute, publish, transmit, sell, license, or commercially exploit website content without prior written permission, except where permitted by applicable law.",
      "The Wellcore Health Solutions name, branding, logo, and related brand elements may not be used without appropriate authorisation.",
    ],
  },
  {
    title: "9. Third-Party Links",
    paragraphs: [
      "This website may contain links to third-party websites or external services.",
      "Such links may be provided for convenience, reference, or additional information and do not necessarily constitute endorsement or affiliation.",
      "Wellcore Health Solutions does not control and is not responsible for the content, availability, security, privacy practices, or policies of third-party websites.",
      "Users access third-party websites at their own discretion and risk.",
    ],
  },
  {
    title: "10. Website Availability",
    paragraphs: [
      "We aim to maintain the availability and reliability of this website. However, we do not guarantee that the website will always be:",
    ],
    bullets: [
      "Available without interruption",
      "Free from technical errors",
      "Completely accurate",
      "Free from viruses or other harmful components",
      "Current or complete in every respect",
    ],
  },
  {
    title: "11. Disclaimer",
    paragraphs: [
      "The website and its content are provided for general informational purposes.",
      "To the extent permitted by applicable law, Wellcore Health Solutions makes no representation or warranty that all information on the website will always be complete, current, accurate, or suitable for every purpose.",
      "Users should independently verify information where accuracy is important, particularly in relation to healthcare products, regulatory requirements, medical decisions, or commercial transactions.",
    ],
  },
  {
    title: "12. Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by applicable law, Wellcore Health Solutions shall not be responsible for any direct, indirect, incidental, consequential, special, or other loss or damage arising from or related to:",
    ],
    bullets: [
      "Use of or inability to use the website",
      "Reliance on information presented on the website",
      "Website interruptions or technical issues",
      "Errors or omissions in website content",
      "Changes to website information",
      "Third-party websites or services accessed through links",
    ],
  },
  {
    title: "13. Privacy",
    paragraphs: [
      "Your use of this website may involve the collection and processing of information as described in our Privacy Policy.",
      "Please review our Privacy Policy to understand how information submitted through the website may be collected, used, stored, and protected.",
    ],
    privacyLink: true,
  },
  {
    title: "14. Changes to These Terms",
    paragraphs: [
      "We may update these Terms of Use from time to time to reflect changes to our website, business practices, legal requirements, or other circumstances.",
      'The updated version will be published on this page with a revised "Last Updated" date.',
    ],
  },
  {
    title: "15. Governing Law",
    paragraphs: [
      "These Terms of Use shall be governed by and interpreted in accordance with the applicable laws of India.",
      "Subject to applicable law, disputes relating to the website or these Terms of Use shall be subject to the jurisdiction of the competent courts having jurisdiction over Wellcore Health Solutions.",
    ],
  },
  {
    title: "16. Contact Us",
    paragraphs: [
      "If you have questions regarding these Terms of Use, please contact:",
    ],
    contact: true,
  },
];

function ContactCard() {
  return (
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
  );
}

function TermsOfUsePage() {
  return (
    <div>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        description="The terms governing access to and use of the Wellcore Health Solutions website. Last Updated: September 3, 2026."
      />

      <section className="section-shell max-w-3xl py-16 sm:py-20">
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>Welcome to the website of Wellcore Health Solutions.</p>
          <p>
            These Terms of Use govern your access to and use of this website.
            By accessing or using the website, you agree to comply with these
            Terms of Use and applicable laws and regulations.
          </p>
          <p>If you do not agree with these terms, please do not use the website.</p>
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

              {section.title === "4. Product Information" ? (
                <>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    Product specifications, availability, packaging,
                    formulations, and other details may change.
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    Where specific product information is required, users should
                    verify the relevant information through appropriate official
                    documentation or directly with Wellcore Health Solutions or
                    the relevant manufacturer.
                  </p>
                </>
              ) : null}

              {section.title === "6. Enquiries and Communications" ? (
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Any commercial relationship with Wellcore Health Solutions
                  will be subject to separate terms, agreements, purchase
                  orders, or other applicable documentation agreed between the
                  relevant parties.
                </p>
              ) : null}

              {section.title === "10. Website Availability" ? (
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  We may temporarily suspend or modify the website for
                  maintenance, security, technical, operational, or other
                  legitimate reasons.
                </p>
              ) : null}

              {section.title === "12. Limitation of Liability" ? (
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Nothing in these Terms of Use excludes or limits any liability
                  that cannot lawfully be excluded or limited under applicable
                  law.
                </p>
              ) : null}

              {section.privacyLink ? (
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  <Link
                    to="/privacy-policy"
                    className="font-medium text-primary hover:underline"
                  >
                    Read our Privacy Policy
                  </Link>
                </p>
              ) : null}

              {section.contact ? <ContactCard /> : null}
            </section>
          ))}
        </div>

        <p className="mt-12 border-t border-border pt-8 text-sm text-muted-foreground">
          See also our{" "}
          <Link
            to="/privacy-policy"
            className="font-medium text-primary hover:underline"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
