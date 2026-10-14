import type { Metadata } from "next";
import Link from "next/link";
import { profile, skills, SITE_URL } from "@/content/profile";
import { projects } from "@/content/projects";
import { packages } from "@/content/packages";
import { Container, SectionHeading, Chip } from "@/components/ui";
import { ProjectCard } from "@/components/project-card";
import { ContactButtons, buttonStyles } from "@/components/contact-buttons";
import { ContactSection } from "@/components/contact-section";
import { ArrowRightIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const howIWork = [
  {
    title: "AI-assisted development",
    body: "I use modern AI tooling to move faster, and I review, test and own every line that ships.",
  },
  {
    title: "Short iterations",
    body: "You get a working preview link early and see progress every week, not just at the end.",
  },
  {
    title: "Built to run",
    body: "Type-checked, tested and deployed with CI. I run a production pharmacy myself, so I build for the day after launch.",
  },
  {
    title: "Simple terms",
    body: "Clear fixed packages, 50% upfront by UPI and 50% on delivery.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          url: SITE_URL,
          jobTitle: profile.role,
          email: `mailto:${profile.email}`,
          address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressCountry: "IN" },
          sameAs: [profile.github],
          knowsAbout: skills.flatMap((s) => s.items).slice(0, 12),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_30rem_at_80%_-10%,var(--primary-soft),transparent)]"
        />
        <Container className="relative py-20 sm:py-28">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-fg-muted">
            <span className="size-1.5 rounded-full bg-[#1fa855]" aria-hidden="true" />
            {profile.availability}
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl leading-[1.1] font-bold tracking-tight text-fg sm:text-5xl md:text-6xl">
            I build and run production web apps for Indian businesses.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted">
            {profile.proof} Based in Hyderabad.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ContactButtons location="hero" />
            <Link href="/work" className={buttonStyles.secondary}>
              See my work
            </Link>
          </div>
        </Container>
      </section>

      {/* Work */}
      <section aria-labelledby="work-heading" className="py-20">
        <Container>
          <SectionHeading
            id="work-heading"
            eyebrow="Selected work"
            title="Two real products, both live"
            intro="No mock-ups. Both are in production and you can open them right now."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} priority={i === 0} />
            ))}
          </div>
        </Container>
      </section>

      {/* Services teaser */}
      <section aria-labelledby="services-heading" className="border-y border-border bg-bg-subtle py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              id="services-heading"
              eyebrow="For businesses"
              title="What I can build for you"
              intro="Fixed packages with clear prices. Tell me what you need on WhatsApp and I'll reply with a plan."
            />
            <Link href="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline">
              All packages <ArrowRightIcon className="size-4" />
            </Link>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {packages.slice(0, 3).map((pkg) => (
              <li key={pkg.name} className="rounded-xl border border-border bg-surface p-5">
                <p className="font-semibold text-fg">{pkg.name}</p>
                <p className="mt-1 text-2xl font-bold tracking-tight text-accent">{pkg.price}</p>
                {pkg.note ? <p className="mt-1 text-sm text-fg-subtle">{pkg.note}</p> : null}
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">{pkg.summary}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Skills */}
      <section aria-labelledby="skills-heading" className="py-20">
        <Container>
          <SectionHeading
            id="skills-heading"
            eyebrow="Skills"
            title="What I work with"
            intro="Only tools I've used in production on the projects above."
          />
          <dl className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((s) => (
              <div key={s.group}>
                <dt className="text-sm font-semibold text-fg">{s.group}</dt>
                <dd className="mt-2 flex flex-wrap gap-1.5">
                  {s.items.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* How I work */}
      <section aria-labelledby="how-heading" className="pb-20">
        <Container>
          <SectionHeading id="how-heading" eyebrow="Process" title="How I work" />
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {howIWork.map((step, i) => (
              <li key={step.title} className="rounded-xl border border-border p-5">
                <span className="text-sm font-semibold text-accent">0{i + 1}</span>
                <p className="mt-2 font-semibold text-fg">{step.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <ContactSection />
    </>
  );
}
