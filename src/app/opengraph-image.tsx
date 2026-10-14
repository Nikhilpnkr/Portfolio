import { profile } from "@/content/profile";
import { ogSize, renderOgCard } from "@/lib/og";

export const alt = `${profile.name}, full-stack developer in Hyderabad`;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgCard({
    eyebrow: "Full-stack developer · Hyderabad",
    title: "I build and run production web apps for Indian businesses.",
    footer: `${profile.name} · Suprameds · GrainFlow`,
  });
}
