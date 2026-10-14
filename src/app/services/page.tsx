import type { Metadata } from "next";
import { packages, paymentTerms } from "@/content/packages";
import { profile, SITE_URL, whatsappLink, mailtoLink } from "@/content/profile";
import { Container, Eyebrow } from "@/components/ui";
import { buttonStyles } from "@/components/contact-buttons";
import { TrackedLink } from "@/components/tracked-link";
import { ContactSection } from "@/components/contact-section";
import { JsonLd } from "@/components/json-ld";
import { ArrowRightIcon, WhatsAppIcon, MailIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Services and pricing",
  description:
    "Websites, online stores and Android apps for Indian businesses, from ₹6,999. 50% upfront by UPI, 50% on delivery.",
  alternates: { canonical: "/services" },
};

function priceValue(price: string) {
  return price.replace(/[^\d]/g, "");
}

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: `${profile.name}, web development`,
          url: `${SITE_URL}/services`,
          areaServed: [
            { "@type": "City", name: "Hyderabad" },
            { "@type": "Country", name: "India" },
          ],
          provider: { "@type": "Person", name: profile.name, url: SITE_URL },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Packages",
            itemListElement: packages.map((pkg) => ({
              "@type": "Offer",
              name: pkg.name,
              description: pkg.summary,
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "INR",
                ...(pkg.price.startsWith("from")
                  ? { minPrice: priceValue(pkg.price) }
                  : { price: priceValue(pkg.price) }),
              },
            })),
          },
        }}
      />

      <Container className="py-16 sm:py-20">
        <Eyebrow>Services</Eyebrow>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-fg sm:text-4xl">Packages and pricing</h1>
        <p className="mt-4 max-w-2xl text-lg text-fg-muted">
          Fixed starting prices, so you know where you stand before we talk. The final quote depends on what you need,
          and I&apos;ll confirm it in writing before any work starts.
        </p>

        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => {
            const wa = whatsappLink(`Hi Nikhil, I'm interested in the ${pkg.name} package.`);
            return (
              <li key={pkg.name} className="flex flex-col rounded-2xl border border-border bg-surface p-6">
                <h2 className="text-lg font-semibold text-fg">{pkg.name}</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-accent">{pkg.price}</p>
                {pkg.note ? <p className="mt-1 text-sm font-medium text-fg-subtle">{pkg.note}</p> : null}
                <p className="mt-4 flex-1 text-sm leading-relaxed text-fg-muted">{pkg.summary}</p>
                <div className="mt-6">
                  {wa ? (
                    <TrackedLink
                      href={wa}
                      target="_blank"
                      rel="noopener noreferrer"
                      event="whatsapp_click"
                      location={`services-${pkg.name}`}
                      className={`${buttonStyles.primary} w-full`}
                    >
                      <WhatsAppIcon className="size-4" /> Ask about this
                    </TrackedLink>
                  ) : (
                    <TrackedLink
                      href={mailtoLink(`${pkg.name} package enquiry`)}
                      event="email_click"
                      location={`services-${pkg.name}`}
                      className={`${buttonStyles.primary} w-full`}
                    >
                      <MailIcon className="size-4" /> Ask about this
                    </TrackedLink>
                  )}
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-bg-subtle p-6">
          <p className="text-sm text-fg-muted">
            <span className="font-semibold text-fg">Payment terms:</span> {paymentTerms}
          </p>
          {profile.freelanceUrl ? (
            <a href={profile.freelanceUrl} className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline">
              See full package details <ArrowRightIcon className="size-4" />
            </a>
          ) : null}
        </div>
      </Container>

      <ContactSection
        title="Not sure which package fits?"
        body="Tell me about your business and what you want customers to do. I'll suggest the simplest option that works."
        message="Hi Nikhil, I'm not sure which package fits my business. Can we talk?"
        location="services-cta"
      />
    </>
  );
}
