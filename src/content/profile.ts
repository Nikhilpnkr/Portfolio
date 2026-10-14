// Single source of truth for personal details. Pages, metadata, JSON-LD and
// resumes all read from here. Every claim must also appear in content/claims.md.

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://devdenlabs.vercel.app";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919573299175";

export const brand = {
  name: "DevDen Labs",
  mark: "DL",
  tagline: "Websites, stores and apps for Indian businesses",
} as const;

export const profile = {
  name: "Nikhil Kumar",
  shortName: "Nikhil",
  location: "Hyderabad, India",
  role: "Full-stack developer",
  pitch:
    "I build and run production web apps for Indian businesses, from a licensed online pharmacy to multi-tenant SaaS.",
  proof:
    "DevDen Labs is the studio of Nikhil Kumar: sole developer of Suprameds, a live online pharmacy, and builder of GrainFlow, a multi-tenant warehouse SaaS, and FarmHeaven, a farm-to-table platform.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "nikhilpnkr@gmail.com",
  // Digits only, with country code. Overridable with NEXT_PUBLIC_WHATSAPP_NUMBER.
  whatsapp: whatsappNumber.replace(/\D/g, ""),
  github: "https://github.com/Nikhilpnkr",
  availability: "Open to freelance projects and full-stack roles.",
  freelanceUrl: process.env.NEXT_PUBLIC_FREELANCE_URL ?? "",
  address: {
    lines: [
      "6th Floor, 241/C (242/C), ESI Hospital Back Side",
      "BK Guda Park, SR Nagar, Vengalrao Nagar",
      "Hyderabad 500038, Telangana, India",
    ],
    street: "6th Floor, 241/C (242/C), ESI Hospital Back Side, BK Guda Park, SR Nagar, Vengalrao Nagar",
    locality: "Hyderabad",
    region: "Telangana",
    postalCode: "500038",
    country: "IN",
  },
} as const;

export const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: profile.address.street,
  addressLocality: profile.address.locality,
  addressRegion: profile.address.region,
  postalCode: profile.address.postalCode,
  addressCountry: profile.address.country,
};

// Each group has its own hue so readers can scan by area.
export const skills: { group: string; tone: string; items: string[] }[] = [
  {
    group: "Frontend",
    tone: "#2563eb",
    items: ["TypeScript", "React 19", "Next.js", "TanStack Start", "Tailwind CSS"],
  },
  {
    group: "Backend",
    tone: "#7c3aed",
    items: ["Node.js", "Medusa.js v2", "Server actions", "REST APIs", "Webhooks"],
  },
  {
    group: "Data",
    tone: "#0e8a86",
    items: ["PostgreSQL", "PostGIS", "Supabase (Auth, RLS, Storage)", "Redis", "Zod"],
  },
  {
    group: "Mobile",
    tone: "#16a34a",
    items: ["Capacitor (Android)", "PWA", "SMS OTP login"],
  },
  {
    group: "Payments & messaging",
    tone: "#d97706",
    items: ["Razorpay", "Paytm", "Cash on delivery", "SMS / email notifications"],
  },
  {
    group: "Quality & ops",
    tone: "#db2777",
    items: ["Vitest", "Jest", "Playwright", "GitHub Actions", "Docker", "Sentry", "Vercel", "Railway"],
  },
];

export function whatsappLink(message: string) {
  if (!profile.whatsapp) return "";
  return `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function mailtoLink(subject: string) {
  return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}`;
}
