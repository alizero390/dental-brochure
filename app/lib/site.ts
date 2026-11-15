/**
 * Selects which clinic this build renders. Set NEXT_PUBLIC_CLINIC to a key of
 * `clinics` (e.g. "armadale") per deployment; defaults to "acorn".
 * Add a new clinic by creating app/lib/clinics/<id>.ts and registering it here.
 */
import { acorn } from "./clinics/acorn";
import { armadale } from "./clinics/armadale";
import type { Clinic } from "./clinics/types";

const clinics: Record<string, Clinic> = { acorn, armadale };

const id = process.env.NEXT_PUBLIC_CLINIC ?? "acorn";
if (!clinics[id]) throw new Error(`Unknown NEXT_PUBLIC_CLINIC "${id}". Expected one of: ${Object.keys(clinics).join(", ")}`);

export const site: Clinic = clinics[id];
export type { OpeningHours } from "./clinics/types";

export const fullAddress = `${site.address.street}, ${site.address.suburb} ${site.address.state} ${site.address.postcode}`;

export const mapsQuery = encodeURIComponent(`${site.name}, ${fullAddress}`);
export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
export const mapsEmbed = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;

export const bookHref = site.bookingUrl ?? "/book";
export const bookIsExternal = Boolean(site.bookingUrl);

/** CSS that maps the clinic's palette onto the Tailwind colour tokens. */
export const themeCss = `:root:root{${[
  ...Object.entries(site.theme.primary).map(([k, v]) => `--color-forest-${k}:${v}`),
  ...Object.entries(site.theme.accent).map(([k, v]) => `--color-acorn-${k}:${v}`),
  `--color-cream:${site.theme.surface}`,
].join(";")}}`;

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/new-patients", label: "New Patients" },
  { href: "/about", label: "About" },
  { href: "/emergency", label: "Emergencies" },
  { href: "/contact", label: "Contact" },
];
