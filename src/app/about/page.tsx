import type { Metadata } from "next";
import Link from "next/link";
import { profile, SITE_URL } from "@/content/profile";
import { Container, Eyebrow } from "@/components/ui";
import { ContactSection } from "@/components/contact-section";
import { JsonLd } from "@/components/json-ld";
import { buttonStyles } from "@/components/contact-buttons";

export const metadata: Metadata = {
  title: "About",
  description: `${profile.name} is a full-stack developer in Hyderabad who builds and runs production web apps.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          url: `${SITE_URL}/about`,
          mainEntity: {
            "@type": "Person",
            name: profile.name,
            jobTitle: profile.role,
            address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressCountry: "IN" },
            sameAs: [profile.github],
          },
        }}
      />
      <Container className="py-16 sm:py-20">
        <div className="max-w-2xl">
          <Eyebrow>About</Eyebrow>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-fg sm:text-4xl">
            I&apos;m {profile.name}. I build software and then I run it.
          </h1>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-fg-muted">
            <p>
              I&apos;m a full-stack developer based in {profile.location}. I&apos;m the sole developer of{" "}
              <Link href="/work/suprameds" className="font-medium text-accent hover:underline">
                Suprameds
              </Link>
              , a licensed online pharmacy, where I also lead operations. That means I use the dashboards, workflows and
              reports I build every day, and I find out quickly when something doesn&apos;t work for the people using it.
            </p>
            <p>
              As a freelancer I built{" "}
              <Link href="/work/grainflow" className="font-medium text-accent hover:underline">
                GrainFlow
              </Link>{" "}
              for Sri Lakshmi Warehouse: a multi-tenant SaaS that replaces paper ledgers for agricultural warehouses,
              with automated rent billing, a farmer portal and an Android app.
            </p>
            <p>
              I&apos;m also building{" "}
              <Link href="/work/farmheaven" className="font-medium text-accent hover:underline">
                FarmHeaven
              </Link>
              , a farm management platform and storefront for a 72-acre organic farm near Hyderabad, where every pack of
              food links back to the animal or plot it came from.
            </p>
            <p>
              I work with AI-assisted development. It lets me move fast as one person, but I still review, test and take
              responsibility for everything that ships. Everything I build runs on typed code, automated tests and CI.
            </p>
            <p>
              Right now I&apos;m {profile.availability.charAt(0).toLowerCase() + profile.availability.slice(1)} If you run a
              business that needs a website, store or app, or you&apos;re hiring for a full-stack role, I&apos;d like to hear
              from you.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/resume" className={buttonStyles.primary}>
              View resume
            </Link>
            <Link href="/work" className={buttonStyles.secondary}>
              See my work
            </Link>
          </div>
        </div>
      </Container>
      <ContactSection />
    </>
  );
}
