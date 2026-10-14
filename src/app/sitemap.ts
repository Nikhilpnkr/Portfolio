import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/profile";
import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/work", "/services", "/about", "/resume", ...projects.map((p) => `/work/${p.slug}`)];
  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path.startsWith("/work") ? 0.8 : 0.6,
  }));
}
