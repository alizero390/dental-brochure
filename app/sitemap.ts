import type { MetadataRoute } from "next";
import { services } from "./lib/services";
import { site } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/services", "/new-patients", "/about", "/emergency", "/contact", "/book", "/privacy"];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.7 })),
    ...services.map((s) => ({ url: `${site.url}/services/${s.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
