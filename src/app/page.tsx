import type { Metadata } from "next";
import Link from "next/link";
import { postalAddress, profile, skills, SITE_URL } from "@/content/profile";
import { projects } from "@/content/projects";
import { packages } from "@/content/packages";
import { Container, SectionHeading, Chip } from "@/components/ui";
import { ProjectCard } from "@/components/project-card";
import { ProjectCarousel } from "@/components/project-carousel";
import { StackHero } from "@/components/stack-hero";
import { Tilt } from "@/components/tilt";
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
          address: postalAddress,
          sameAs: [profile.github],
          knowsAbout: skills.flatMap((s) => s.items).slice(0, 12),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <Container className="relative grid items-center gap-4 py-14 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:py-24 xl:py-28">
          <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-fg-muted">
            <span className="size-1.5 rounded-full bg-[#1fa855]" aria-hidden="true" />
            {profile.availability}
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl leading-[1.05] font-bold tracking-[-0.035em] text-fg sm:text-5xl xl:text-7xl">
            I build and run production web apps for Indian businesses.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted xl:text-xl">
            {profile.proof} Based in Hyderabad.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ContactButtons location="hero" />
            <Link href="/work" className={buttonStyles.secondary}>
              See my work
            </Link>
          </div>
          </div>
          <StackHero />
        </Container>
      </section>

      {/* Work */}
      <section aria-labelledby="work-heading" className="py-12">
        <ProjectCarousel
          label="Projects"
          header={
            <Container>
              <SectionHeading
                id="work-heading"
                eyebrow="Selected work"
                title="Real products, live on the web"
                intro="No mock-ups. You can open every one of these right now."
              />
            </Container>
          }
        >
          {projects.map((p) => (
            <li key={p.slug} className="w-[min(86vw,420px)] shrink-0 sm:w-[clamp(560px,64vw,1000px)]">
              <Tilt>
                <ProjectCard project={p} wide />
              </Tilt>
            </li>
          ))}
        </ProjectCarousel>
      </section>

      {/* Services teaser */}
      <section aria-labelledby="services-heading" className="border-y border-border bg-bg-subtle/70 py-20">
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
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {howIWork.map((step) => (
              <li key={step.title} className="rounded-xl border border-border bg-surface/70 p-5">
                <p className="font-semibold text-fg">{step.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{step.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ContactSection />
    </>
  );
}
