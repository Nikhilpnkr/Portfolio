import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/profile";

export default function robots(): MetadataRoute.Robots {
  // Preview deployments are kept out of search results.
  if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production") {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
