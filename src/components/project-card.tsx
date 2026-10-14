import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";
import { Chip } from "./ui";
import { ArrowRightIcon, ExternalIcon } from "./icons";
import { TrackedLink } from "./tracked-link";

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-shadow hover:shadow-lg hover:shadow-black/5">
      <Link href={`/work/${project.slug}`} className="block overflow-hidden border-b border-border bg-bg-subtle" tabIndex={-1} aria-hidden="true">
        <Image
          src={project.cover}
          alt=""
          placeholder="blur"
          priority={priority}
          sizes="(min-width: 1024px) 330px, (min-width: 768px) 50vw, 100vw"
          className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-sm font-medium text-accent">{project.tagline}</p>
          {project.status ? (
            <span className="rounded-full bg-primary-soft px-2 py-0.5 text-xs font-medium text-accent">{project.status}</span>
          ) : null}
        </div>
        <h3 className="mt-1 text-xl font-semibold tracking-tight text-fg">
          <Link href={`/work/${project.slug}`} className="hover:text-accent">
            {project.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-fg-subtle">{project.role}</p>
        <p className="mt-3 text-sm leading-relaxed text-fg-muted">{project.outcome}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tech stack">
          {project.stack.slice(0, 5).map((s) => (
            <li key={s}>
              <Chip>{s}</Chip>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6 text-sm font-semibold">
          <Link href={`/work/${project.slug}`} className="inline-flex items-center gap-1.5 text-accent hover:underline">
            Read case study <ArrowRightIcon className="size-4" />
          </Link>
          <TrackedLink
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            event="outbound_live_site"
            location={`card-${project.slug}`}
            className="inline-flex items-center gap-1.5 text-fg-muted hover:text-fg"
          >
            {project.liveLabel} <ExternalIcon className="size-3.5" />
          </TrackedLink>
        </div>
      </div>
    </article>
  );
}
