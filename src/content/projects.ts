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
  metric?: { value: string; label: string };
  // The product's own brand colour, used for its card accents.
  accent: string;
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
    metric: { value: "1,000+", label: "orders a month through the platform" },
    timeline: "March 2026 – present",
    liveUrl: "https://supracyn.in",
    liveLabel: "supracyn.in",
    accent: "#0e8a86",
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
    metric: { value: "Large-scale", label: "warehouse running on it every day" },
    timeline: "December 2025 – present",
    liveUrl: "https://grainflow.vercel.app",
    liveLabel: "grainflow.vercel.app",
    accent: "#1f7ae0",
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
    metric: { value: "72 acres", label: "of farm run from one app" },
    timeline: "April 2026 – present",
    liveUrl: "https://farmheaven-web.vercel.app",
    liveLabel: "farmheaven-web.vercel.app",
    accent: "#3d8a4f",
    stack: ["Next.js 15", "React 19", "Supabase", "PostgreSQL + PostGIS", "TanStack Query", "Sentry", "Vercel"],
    cover: farmheavenHome,
    coverAlt: "FarmHeaven storefront: real food from a real farm, 72 acres outside Hyderabad",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
