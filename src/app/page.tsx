import type React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { postalAddress, profile, skills, SITE_URL } from "@/content/profile";
import { projects } from "@/content/projects";
import { packages } from "@/content/packages";
import { Container, SectionHeading } from "@/components/ui";
import { ProjectCard } from "@/components/project-card";
import { ProjectShowcase } from "@/components/project-showcase";
import { StackHero } from "@/components/stack-hero";
import { Marquee } from "@/components/marquee";
import { ContactButtons, buttonStyles } from "@/components/contact-buttons";
import { ContactSection } from "@/components/contact-section";
import { TrackedLink } from "@/components/tracked-link";
import { ArrowRightIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { whatsappLink } from "@/content/profile";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const heroStats = [
  { value: "3", label: "live products", accent: "#8b6cf6" },
  { value: "1,000+", label: "pharmacy orders a month", accent: "#0e8a86" },
  { value: "Large-scale", label: "warehouse run on GrainFlow", accent: "#1f7ae0" },
  { value: "72 acres", label: "of farm on one app", accent: "#3d8a4f" },
];

const roles = [
  "Full-stack developer",
  "Product builder",
  "Operations lead",
  "Web apps",
  "Online stores",
  "Android apps",
  "Hyderabad",
];

// Newest first. Only dates and facts confirmed for the claims ledger.
const career = [
  {
    when: "Now",
    title: "Running Suprameds, building FarmHeaven",
    where: "Sole developer and operations lead",
    body: "Developing the pharmacy platform and using it every day with the team, while building FarmHeaven's next modules.",
  },
  {
    when: "Apr 2026",
    title: "Started FarmHeaven",
    where: "Sole developer",
    body: "A farm management platform and storefront for a 72-acre organic farm, with QR traceability from animal to pack.",
  },
  {
    when: "Mar 2026",
    title: "Built and launched Suprameds",
    where: "Sole developer, also lead operations",
    body: "A licensed online pharmacy on web and Android, with Indian drug regulations enforced in code. Now handling 1,000+ orders a month.",
  },
  {
    when: "Dec 2025",
    title: "Built GrainFlow",
    where: "Freelance, for Sri Lakshmi Warehouse",
    body: "A multi-tenant warehouse SaaS with automated rent billing, a farmer portal, Razorpay payments and an Android app.",
  },
];

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

export default function HomePage() {
  const hire = whatsappLink(profile.freeCall.message);

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
        <Container className="relative grid items-center gap-4 pt-12 pb-10 sm:pt-16 lg:grid-cols-[1.15fr_1fr] lg:pt-20 xl:pt-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 text-xs font-medium text-fg-muted">
              <span className="relative flex size-2" aria-hidden="true">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#22c55e] opacity-60 motion-reduce:hidden" />
                <span className="relative inline-flex size-2 rounded-full bg-[#22c55e]" />
              </span>
              {profile.availability} First call is free.
            </p>
            <p className="mt-8 text-xl font-medium text-fg-muted sm:text-2xl">Hello! I&apos;m</p>
            <h1 className="hero-name mt-1">
              <span className="block">Nikhil</span>
              <span className="block">Kumar</span>
              <span className="sr-only">, full-stack developer in Hyderabad</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-muted xl:text-xl">
              A full-stack developer who builds <strong className="font-semibold text-fg">and runs</strong> production
              web apps for Indian businesses, from a licensed online pharmacy to multi-tenant SaaS.
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
          </div>
          <StackHero />
        </Container>

        <Container>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-border py-6 sm:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label} style={{ "--card-accent": stat.accent } as React.CSSProperties}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="metric-value block text-3xl font-bold tracking-tight xl:text-4xl">{stat.value}</span>
                  <span className="mt-1 block text-sm leading-snug text-fg-muted" aria-hidden="true">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <Marquee items={roles} />

      {/* Career */}
      <section aria-labelledby="career-heading" className="py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center [&>div]:mx-auto">
            <SectionHeading id="career-heading" title="My career &" accent="experience" />
          </div>
          <ol className="timeline relative mx-auto mt-16 max-w-4xl">
            {career.map((item, i) => (
              <li key={item.when} className={`timeline-item ${i % 2 ? "timeline-right" : "timeline-left"}`}>
                <span className="timeline-node" aria-hidden="true" />
                <div className="timeline-card rounded-2xl border p-6">
                  <p className="timeline-when text-sm font-bold">{item.when}</p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-fg">{item.title}</h3>
                  <p className="mt-1 text-sm font-medium text-fg-subtle">{item.where}</p>
                  <p className="mt-3 text-sm leading-relaxed text-fg-muted">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Work */}
      <section aria-labelledby="work-heading" className="py-12">
        <ProjectShowcase
          header={
            <Container>
              <SectionHeading
                id="work-heading"
                title="My"
                accent="work"
                intro="Real products, live on the web. You can open every one of these right now."
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
      <section aria-labelledby="services-heading" className="border-y border-border bg-bg-subtle/60 py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              id="services-heading"
              title="What I can"
              accent="build for you"
              intro="Fixed packages with clear prices. Start with a free call and I'll reply with a plan."
            />
            <Link href="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline">
              All packages <ArrowRightIcon className="size-4" />
            </Link>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {packages.slice(0, 3).map((pkg) => (
              <li key={pkg.name} className="package-card rounded-2xl border border-border bg-surface/80 p-6">
                <p className="font-semibold text-fg">{pkg.name}</p>
                <p className="mt-2 text-3xl font-bold tracking-tight text-accent">{pkg.price}</p>
                {pkg.note ? <p className="mt-1 text-sm text-fg-subtle">{pkg.note}</p> : null}
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">{pkg.summary}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Tech stack */}
      <section aria-labelledby="stack-heading" className="stack-wall-section relative overflow-hidden py-24">
        <div className="stack-wall-glow" aria-hidden="true" />
        <Container className="relative">
          <h2 id="stack-heading" className="stack-wall-title text-center">
            Tech stack
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-lg text-fg-muted">
            Only tools I&apos;ve used in production on the projects above.
          </p>
          <ul className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-x-5 gap-y-2" aria-label="Groups">
            {skills.map((s) => (
              <li
                key={s.group}
                style={{ "--tone": s.tone } as React.CSSProperties}
                className="tone-heading flex items-center gap-2 text-sm font-semibold"
              >
                <span className="tone-dot size-2 rounded-full" aria-hidden="true" />
                {s.group}
              </li>
            ))}
          </ul>
          <ul className="stack-wall mx-auto mt-12 flex max-w-5xl flex-wrap justify-center gap-3" aria-label="Tools">
            {skills.flatMap((s) =>
              s.items.map((item) => (
                <li
                  key={`${s.group}-${item}`}
                  style={{ "--tone": s.tone } as React.CSSProperties}
                  className="stack-tile grid min-h-20 min-w-24 place-items-center rounded-xl border px-4 py-3 text-center text-xs font-semibold"
                  title={s.group}
                >
                  {item}
                </li>
              )),
            )}
          </ul>
          <div className="mt-14 flex flex-wrap justify-center gap-3">
            <Link href="/work" className={buttonStyles.secondary}>
              See my work <ArrowRightIcon className="size-4" />
            </Link>
            {hire ? (
              <TrackedLink
                href={hire}
                target="_blank"
                rel="noopener noreferrer"
                event="whatsapp_click"
                location="stack-hire"
                className={buttonStyles.primary}
              >
                Hire me <ArrowRightIcon className="size-4" />
              </TrackedLink>
            ) : null}
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section aria-labelledby="how-heading" className="py-20">
        <Container>
          <SectionHeading
            id="how-heading"
            title="From first message"
            accent="to live site"
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
