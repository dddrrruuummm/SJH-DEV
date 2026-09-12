import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/showcase", "/contact", "/privacy-policy", "/terms"];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date("2026-09-12"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7
  }));
}
