import { getProject, projects } from "@/content/projects";
import { brand } from "@/content/profile";
import { ogSize, renderOgCard } from "@/lib/og";

export const alt = "Case study";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  return renderOgCard({
    eyebrow: "Case study",
    title: project ? `${project.name}: ${project.tagline}` : "Case study",
    footer: `${brand.name} · ${project?.role ?? ""}`,
  });
}
