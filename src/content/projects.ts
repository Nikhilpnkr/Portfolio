import type { StaticImageData } from "next/image";
import supramedsHome from "../../public/work/suprameds-home.png";
import grainflowHome from "../../public/work/grainflow-home.png";
import farmheavenHome from "../../public/work/farmheaven-home.png";

export type Project = {
  slug: "suprameds" | "grainflow" | "farmheaven";
  name: string;
  tagline: string;
  outcome: string;
  role: string;
  status?: string;
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
    role: "Freelance build for Sri Lakshmi Warehouse",
    timeline: "December 2025 – present",
    liveUrl: "https://grainflow.vercel.app",
    liveLabel: "grainflow.vercel.app",
    stack: ["Next.js 16", "TypeScript", "Supabase", "PostgreSQL RLS", "Razorpay", "Capacitor", "Vercel"],
    cover: grainflowHome,
    coverAlt: "GrainFlow landing page: smart inventory for modern agriculture",
  },
  {
    slug: "farmheaven",
    name: "FarmHeaven",
    tagline: "Farm management platform and organic food storefront",
    outcome:
      "One app for a 72-acre organic farm near Hyderabad: a phone-first console for livestock and crops, and a storefront where every pack has a QR code back to its source.",
    role: "Sole developer",
    status: "In development",
    timeline: "April 2026 – present",
    liveUrl: "https://farmheaven-web.vercel.app",
    liveLabel: "farmheaven-web.vercel.app",
    stack: ["Next.js 15", "React 19", "Supabase", "PostgreSQL + PostGIS", "TanStack Query", "Sentry", "Vercel"],
    cover: farmheavenHome,
    coverAlt: "FarmHeaven storefront: real food from a real farm, 72 acres outside Hyderabad",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
