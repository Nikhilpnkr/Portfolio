import type React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/content/projects";
import { profile, SITE_URL } from "@/content/profile";
import { Container, Chip, Eyebrow } from "@/components/ui";
import { ContactSection } from "@/components/contact-section";
import { TrackedLink } from "@/components/tracked-link";
import { JsonLd } from "@/components/json-ld";
import { ArrowRightIcon, ExternalIcon } from "@/components/icons";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name}: ${project.tagline}`,
    description: project.outcome,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: { type: "article", url: `/work/${project.slug}` },
  };
}

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { default: Content } = await import(`@/content/case-studies/${project.slug}.mdx`);
  const next = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: `${project.name} case study`,
          about: project.tagline,
          description: project.outcome,
          url: `${SITE_URL}/work/${project.slug}`,
          author: { "@type": "Person", name: profile.name, url: SITE_URL },
          mentions: { "@type": "WebSite", name: project.name, url: project.liveUrl },
        }}
      />
      <article style={{ "--card-accent": project.accent } as React.CSSProperties}>
        <header className="border-b border-border bg-bg-subtle/60">
          <Container className="py-14 sm:py-20">
            <nav aria-label="Breadcrumb" className="mb-4 text-sm text-fg-subtle">
              <Link href="/work" className="hover:text-accent">
                Work
              </Link>{" "}
              / <span className="text-fg-muted">{project.name}</span>
            </nav>
            <Eyebrow>{project.tagline}</Eyebrow>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-fg sm:text-5xl">{project.name}</h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-fg-muted">{project.outcome}</p>
            {project.metric ? (
              <p className="mt-6 flex items-baseline gap-3">
                <span className="metric-value text-5xl font-bold tracking-tight">{project.metric.value}</span>
                <span className="text-base text-fg-muted">{project.metric.label}</span>
              </p>
            ) : null}

            <dl className="mt-10 grid gap-6 rounded-xl border border-border bg-surface p-6 sm:grid-cols-3">
              <div>
                <dt className="text-xs font-semibold tracking-wider text-fg-subtle uppercase">Role</dt>
                <dd className="mt-1 text-sm font-medium text-fg">{project.role}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-wider text-fg-subtle uppercase">Timeline</dt>
                <dd className="mt-1 text-sm font-medium text-fg">
                  {project.timeline}
                  {project.status ? <span className="text-fg-subtle"> · {project.status}</span> : null}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-wider text-fg-subtle uppercase">Live</dt>
                <dd className="mt-1 text-sm font-medium">
                  <TrackedLink
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    event="outbound_live_site"
                    location={`case-${project.slug}`}
                    className="inline-flex items-center gap-1 text-accent hover:underline"
                  >
                    {project.liveLabel} <ExternalIcon className="size-3.5" />
                  </TrackedLink>
                </dd>
              </div>
              <div className="sm:col-span-3">
                <dt className="text-xs font-semibold tracking-wider text-fg-subtle uppercase">Stack</dt>
                <dd className="mt-2 flex flex-wrap gap-1.5">
                  {project.stack.map((s) => (
                    <Chip key={s} tone={project.accent}>{s}</Chip>
                  ))}
                </dd>
              </div>
            </dl>
          </Container>
        </header>

        <Container className="py-8">
          <div className="prose-case mx-auto max-w-3xl">
            <Content />
          </div>
        </Container>
      </article>

      {next ? (
        <Container className="pb-16">
          <Link
            href={`/work/${next.slug}`}
            className="group mx-auto flex max-w-3xl items-center justify-between rounded-xl border border-border p-6 hover:border-primary"
          >
            <span>
              <span className="block text-sm text-fg-subtle">Next case study</span>
              <span className="mt-1 block text-lg font-semibold text-fg group-hover:text-accent">{next.name}</span>
            </span>
            <ArrowRightIcon className="size-5 text-accent" />
          </Link>
        </Container>
      ) : null}

      <ContactSection
        title={`Want something like ${project.name}?`}
        message={`Hi Nikhil, I read your ${project.name} case study and would like to talk.`}
        location={`case-${project.slug}`}
      />
    </>
  );
}
