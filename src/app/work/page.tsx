import type React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/content/projects";
import { Container, Chip, Eyebrow } from "@/components/ui";
import { ContactSection } from "@/components/contact-section";
import { Tilt } from "@/components/tilt";
import { TrackedLink } from "@/components/tracked-link";
import { ArrowRightIcon, ExternalIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies: Suprameds, a licensed online pharmacy; GrainFlow, a multi-tenant warehouse SaaS; and FarmHeaven, a farm management platform.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <Container className="py-16 sm:py-20">
        <Eyebrow>Work</Eyebrow>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-fg sm:text-5xl">Case studies</h1>
        <p className="mt-4 max-w-2xl text-lg text-fg-muted">
          Real products, each with what the problem was, what I built and owned, and the hard parts.
        </p>

        <ul className="mt-14 space-y-16 sm:space-y-24">
          {projects.map((p, i) => (
            <li
              key={p.slug}
              style={{ "--card-accent": p.accent } as React.CSSProperties}
              className="grid items-center gap-8 md:grid-cols-2 md:gap-12"
            >
              <Tilt className={`!h-auto [&>*]:!h-auto ${i % 2 ? "md:order-2" : ""}`}>
                <Link
                  href={`/work/${p.slug}`}
                  className="block overflow-hidden rounded-2xl border border-border bg-bg-subtle shadow-xl shadow-black/5"
                  aria-label={`${p.name} case study`}
                >
                  <Image
                    src={p.cover}
                    alt={p.coverAlt}
                    placeholder="blur"
                    priority={i === 0}
                    sizes="(min-width: 768px) 480px, 100vw"
                    className="aspect-[16/10] w-full object-cover object-left-top"
                  />
                </Link>
              </Tilt>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <p className="card-accent-text text-sm font-medium">{p.tagline}</p>
                  {p.status ? (
                    <span className="rounded-full bg-primary-soft px-2 py-0.5 text-xs font-medium text-accent">
                      {p.status}
                    </span>
                  ) : null}
                </div>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-fg">
                  <Link href={`/work/${p.slug}`} className="hover:text-accent">
                    {p.name}
                  </Link>
                </h2>
                <p className="mt-1 text-sm text-fg-subtle">
                  {p.role}, {p.timeline}
                </p>
                {p.metric ? (
                  <p className="mt-5 flex items-baseline gap-2">
                    <span className="metric-value text-4xl font-bold tracking-tight">{p.metric.value}</span>
                    <span className="text-sm text-fg-muted">{p.metric.label}</span>
                  </p>
                ) : null}
                <p className="mt-4 leading-relaxed text-fg-muted">{p.outcome}</p>
                <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tech stack">
                  {p.stack.map((s) => (
                    <li key={s}>
                      <Chip>{s}</Chip>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold">
                  <Link href={`/work/${p.slug}`} className="inline-flex items-center gap-1.5 text-accent hover:underline">
                    Read case study <ArrowRightIcon className="size-4" />
                  </Link>
                  <TrackedLink
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    event="outbound_live_site"
                    location={`work-${p.slug}`}
                    className="inline-flex items-center gap-1.5 text-fg-muted hover:text-fg"
                  >
                    {p.liveLabel} <ExternalIcon className="size-3.5" />
                  </TrackedLink>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
      <ContactSection />
    </>
  );
}
