import { brand, profile } from "@/content/profile";
import { ogSize, renderOgCard } from "@/lib/og";

export const alt = `${brand.name}, the studio of ${profile.name}`;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgCard({
    eyebrow: `${brand.name} · Hyderabad`,
    title: "I build and run production web apps for Indian businesses.",
    footer: `By ${profile.name} · Suprameds · GrainFlow · FarmHeaven`,
  });
}
