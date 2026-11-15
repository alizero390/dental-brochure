import { catalog, type Service } from "./catalog";
import { site } from "./site";

export type { Service, IconName } from "./catalog";

/** Treatments offered by the active clinic, in its chosen order. */
export const services: Service[] = site.services.map((slug) => {
  const s = catalog.find((c) => c.slug === slug);
  if (!s) throw new Error(`Clinic "${site.id}" lists unknown service "${slug}"`);
  return s;
});

export const getService = (slug: string) => services.find((s) => s.slug === slug);
