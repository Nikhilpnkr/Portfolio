import type React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { postalAddress, profile, skills, SITE_URL } from "@/content/profile";
import { projects } from "@/content/projects";
import { packages } from "@/content/packages";
import { Container, SectionHeading, Chip } from "@/components/ui";
import { ProjectCard } from "@/components/project-card";
import { ProjectShowcase } from "@/components/project-showcase";
import { StackHero } from "@/components/stack-hero";
import { ContactButtons, buttonStyles } from "@/components/contact-buttons";
import { ContactSection } from "@/components/contact-section";
import { ArrowRightIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const steps = [
  {
    title: "Free 20-minute call",
    body: "Tell me about your business and what you want customers to do. I'll suggest the simplest thing that works.",
    get: "A clear recommendation, even if it isn't me",
  },
  {
    title: "Plan and fixed quote",
    body: "A written scope with a fixed price and timeline, so there are no surprises later.",
    get: "Quote in writing. 50% upfront by UPI",
  },
  {
    title: "Build with weekly previews",
    body: "You get a live preview link early and see real progress every week.",
    get: "A link you can open on your phone",
  },
  {
    title: "Launch and care",
    body: "I put it live, hand over everything, and can keep it updated on the monthly care plan.",
    get: "Your site live. 50% on delivery",
  },
];

const heroStats = [
  { value: "3", label: "live products", accent: "#0f4c5c" },
  { value: "1,000+", label: "pharmacy orders a month", accent: "#0e8a86" },
  { value: "Large-scale", label: "warehouse run on GrainFlow", accent: "#1f7ae0" },
  { value: "72 acres", label: "of farm on one app", accent: "#3d8a4f" },
];

const now = [
  {
    label: "Now",
    title: "Running operations at Suprameds",
    body: "Developing the platform and using it every day with the pharmacy team.",
    href: "/work/suprameds",
    accent: "#0e8a86",
  },
  {
    label: "Building",
    title: "FarmHeaven's next modules",
    body: "Flocks and crops for the farmer console, after the livestock registry.",
    href: "/work/farmheaven",
    accent: "#3d8a4f",
  },
  {
    label: "Open to",
    title: "Freelance projects and full-stack roles",
    body: "Websites, online stores and apps for businesses, or a full-stack team to join.",
    href: "/services",
    accent: "#d97706",
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
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1 text-xs font-medium text-fg-muted">
            <span className="relative flex size-2" aria-hidden="true">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#1fa855] opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-[#1fa855]" />
            </span>
            {profile.availability} First call is free.
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl leading-[1.05] font-bold tracking-[-0.035em] text-fg sm:text-5xl xl:text-7xl">
            I build and run production web apps for Indian businesses.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted xl:text-xl">
            {profile.proof} Based in Hyderabad.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ContactButtons
              location="hero"
              message={profile.freeCall.message}
              whatsappLabel={profile.freeCall.label}
            />
            <Link href="/work" className={buttonStyles.secondary}>
              See my work
            </Link>
          </div>
          <dl className="mt-10 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-5 border-t border-border pt-6 sm:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label} style={{ "--card-accent": stat.accent } as React.CSSProperties}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="metric-value block text-2xl font-bold tracking-tight xl:text-3xl">{stat.value}</span>
                  <span className="mt-1 block text-xs leading-snug text-fg-muted" aria-hidden="true">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
          </div>
          <StackHero />
        </Container>
      </section>

      {/* Now */}
      <section aria-label="What I'm doing now" className="pb-8">
        <Container>
          <ul className="grid gap-3 md:grid-cols-3">
            {now.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  style={{ "--tone": item.accent } as React.CSSProperties}
                  className="now-card group flex h-full flex-col rounded-2xl border p-5 transition-colors"
                >
                  <span className="tone-heading flex items-center gap-2 text-xs font-bold">
                    <span className="tone-dot size-1.5 rounded-full" aria-hidden="true" />
                    {item.label}
                  </span>
                  <span className="mt-2 font-semibold text-fg">{item.title}</span>
                  <span className="mt-1 text-sm leading-relaxed text-fg-muted">{item.body}</span>
                  <ArrowRightIcon className="mt-3 size-4 text-fg-subtle transition-transform group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Work */}
      <section aria-labelledby="work-heading" className="py-12">
        <ProjectShowcase
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
          items={projects.map((p, i) => ({
            key: p.slug,
            label: p.name,
            accent: p.accent,
            content: <ProjectCard project={p} wide priority={i === 0} />,
          }))}
        />
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
          <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((s) => (
              <div
                key={s.group}
                style={{ "--tone": s.tone } as React.CSSProperties}
                className="tone-panel rounded-2xl border p-5"
              >
                <dt className="tone-heading flex items-center gap-2 text-sm font-bold">
                  <span className="tone-dot size-2 rounded-full" aria-hidden="true" />
                  {s.group}
                </dt>
                <dd className="mt-3 flex flex-wrap gap-1.5">
                  {s.items.map((item) => (
                    <Chip key={item} tone={s.tone}>
                      {item}
                    </Chip>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* How it works */}
      <section aria-labelledby="how-heading" className="pb-20">
        <Container>
          <SectionHeading
            id="how-heading"
            eyebrow="How it works"
            title="From first message to live site"
            intro="Four steps, and you always know what happens next."
          />
          <ol className="process mt-12 grid gap-8 md:grid-cols-4 md:gap-6">
            {steps.map((step, i) => (
              <li key={step.title} className="process-step relative">
                <span className="process-num grid size-10 place-items-center rounded-full text-sm font-bold">{i + 1}</span>
                <p className="mt-4 text-lg font-semibold text-fg">{step.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{step.body}</p>
                <p className="mt-3 text-sm font-medium text-accent">{step.get}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-fg-subtle">
            I use AI-assisted development to deliver faster, and I review, test and take responsibility for every line
            that ships.
          </p>
        </Container>
      </section>

      <ContactSection />
    </>
  );
}
