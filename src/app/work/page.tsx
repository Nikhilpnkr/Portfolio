import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { Container, Eyebrow } from "@/components/ui";
import { ProjectCard } from "@/components/project-card";
import { ContactSection } from "@/components/contact-section";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies: Suprameds, a licensed online pharmacy, and GrainFlow, a multi-tenant warehouse SaaS.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <Container className="py-16 sm:py-20">
        <Eyebrow>Work</Eyebrow>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-fg sm:text-4xl">Case studies</h1>
        <p className="mt-4 max-w-2xl text-lg text-fg-muted">
          Two products in production: what the problem was, what I built and owned, and the hard parts.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} priority={i === 0} />
          ))}
        </div>
      </Container>
      <ContactSection />
    </>
  );
}
