import type { StaticImageData } from "next/image";
import supramedsHome from "../../public/work/suprameds-home.png";
import grainflowHome from "../../public/work/grainflow-home.png";

export type Project = {
  slug: "suprameds" | "grainflow";
  name: string;
  tagline: string;
  outcome: string;
  role: string;
  timeline: string;
  liveUrl: string;
  liveLabel: string;
  stack: string[];
  cover: StaticImageData;
  coverAlt: string;
};

export const projects: Project[] = [
  {
    slug: "suprameds",
    name: "Suprameds",
    tagline: "Licensed online pharmacy for India",
    outcome:
      "A live pharmacy on web and Android, with Indian drug regulations enforced in code, from prescription review to dispatch.",
    role: "Sole developer, and also lead operations",
    timeline: "March 2026 – present",
    liveUrl: "https://supracyn.in",
    liveLabel: "supracyn.in",
    stack: ["Medusa.js v2", "TanStack Start", "React 19", "PostgreSQL", "Redis", "Capacitor", "Railway"],
    cover: supramedsHome,
    coverAlt: "Suprameds homepage: generic medicines at 50–80% off, with search and prescription upload",
  },
  {
    slug: "grainflow",
    name: "GrainFlow",
    tagline: "Multi-tenant warehouse SaaS for agriculture",
    outcome:
      "Replaces paper ledgers for agricultural warehouses with live stock tracking, automated rent billing and a self-service farmer portal.",
    role: "Freelance build for a client",
    timeline: "December 2025 – present",
    liveUrl: "https://grainflow.vercel.app",
    liveLabel: "grainflow.vercel.app",
    stack: ["Next.js 16", "TypeScript", "Supabase", "PostgreSQL RLS", "Razorpay", "Capacitor", "Vercel"],
    cover: grainflowHome,
    coverAlt: "GrainFlow landing page: smart inventory for modern agriculture",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
