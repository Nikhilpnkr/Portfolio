import type { Metadata } from "next";
import Link from "next/link";
import { profile, skills, SITE_URL } from "@/content/profile";
import { projects } from "@/content/projects";
import { Container } from "@/components/ui";
import { PrintButton } from "./print-button";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${profile.name}, full-stack developer in Hyderabad.`,
  alternates: { canonical: "/resume" },
};

const highlights: Record<string, string[]> = {
  suprameds: [
    "Sole developer of a licensed online pharmacy, live on web and Android, handling 1,000+ orders a month. Also lead operations.",
    "Extended Medusa.js v2 with 18 custom domain modules: prescriptions, dispensing, batch inventory, RBAC, compliance and more.",
    "Enforced Indian pharmacy regulations in backend workflow hooks: Schedule X block, pharmacist sign-off for Schedule H/H1, MRP ceilings, DPDP consent and audit logs.",
    "Built batch inventory with FEFO allocation, expiry tracking and recalls, and RBAC with 25 roles and around 65 permissions.",
    "Server-rendered TanStack Start storefront, packaged as an Android app with Capacitor. CI with type-checks, tests, builds and a Docker build on every push.",
  ],
  grainflow: [
    "Built a multi-tenant warehouse management SaaS for Sri Lakshmi Warehouse as a freelance project, on Next.js 16 and Supabase. It runs their large-scale warehouse.",
    "Isolated tenants with PostgreSQL row-level security driven by a single access function, including gated access to materialized views.",
    "Wrote a duration-based rent billing engine, atomic bulk payment allocation, and trigger-based stock reconciliation.",
    "Shipped a farmer portal with OTP login, Razorpay payment links over SMS with verified webhooks, and an Android app.",
    "More than 350 automated tests (Vitest), Playwright end-to-end specs, and Sentry monitoring.",
  ],
  farmheaven: [
    "Building a farm management platform and direct-to-consumer storefront for a 72-acre organic farm, as one Next.js app with farmer, admin and storefront route groups.",
    "Designed a Supabase/PostgreSQL schema of around 60 tables with PostGIS and more than 100 row-level security policies across 7 roles.",
    "Enforced food safety in the database: an automatic quarantine trigger keeps milk from animals under medicine withdrawal out of dispatch.",
    "Shipped phone-OTP onboarding, a livestock registry, and QR traceability pages that link each pack to its animal or plot.",
  ],
};

export default function ResumePage() {
  return (
    <Container className="py-12 sm:py-16 print:max-w-none print:px-0 print:py-0">
      <div data-print-hide className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-bg-subtle p-4">
        <p className="text-sm text-fg-muted">This page prints as a clean one-page resume.</p>
        <PrintButton />
      </div>

      <article className="mx-auto max-w-3xl text-fg print:text-black">
        <header className="border-b border-border pb-6">
          <h1 className="text-3xl font-bold tracking-tight">{profile.name}</h1>
          <p className="mt-1 text-lg text-fg-muted print:text-black">
            {profile.role} · {profile.location}
          </p>
          <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-fg-muted print:text-black">
            <a href={`mailto:${profile.email}`} className="hover:text-accent">
              {profile.email}
            </a>
            <a href={SITE_URL} className="hover:text-accent">
              {SITE_URL.replace(/^https?:\/\//, "")}
            </a>
            <a href={profile.github} className="hover:text-accent">
              {profile.github.replace(/^https?:\/\//, "")}
            </a>
          </p>
        </header>

        <section className="mt-6">
          <h2 className="text-xs font-semibold tracking-[0.14em] text-accent uppercase print:text-black">Summary</h2>
          <p className="mt-2 leading-relaxed text-fg-muted print:text-black">
            Full-stack developer who builds and runs production web apps. Sole developer of a live online pharmacy that
            enforces Indian drug regulations in code, and builder of a multi-tenant warehouse SaaS delivered as a freelance
            project, and builder of a farm-to-table platform. Works in TypeScript across React, Node.js and PostgreSQL, with AI-assisted development, automated
            tests and CI.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xs font-semibold tracking-[0.14em] text-accent uppercase print:text-black">Projects</h2>
          {projects.map((p) => (
            <div key={p.slug} className="mt-5 break-inside-avoid">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-semibold">
                  <Link href={`/work/${p.slug}`} className="hover:text-accent">
                    {p.name}
                  </Link>{" "}
                  <span className="font-normal text-fg-muted print:text-black">· {p.tagline}</span>
                </h3>
                <span className="text-sm text-fg-subtle print:text-black">{p.timeline}</span>
              </div>
              <p className="text-sm text-fg-subtle print:text-black">
                {p.role} · {p.liveLabel}
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-fg-muted print:text-black">
                {highlights[p.slug].map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mt-8 break-inside-avoid">
          <h2 className="text-xs font-semibold tracking-[0.14em] text-accent uppercase print:text-black">Skills</h2>
          <dl className="mt-2 space-y-1.5 text-sm">
            {skills.map((s) => (
              <div key={s.group} className="flex flex-wrap gap-x-2">
                <dt className="font-semibold">{s.group}:</dt>
                <dd className="text-fg-muted print:text-black">{s.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>
      </article>
    </Container>
  );
}
