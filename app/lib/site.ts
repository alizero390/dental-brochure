/**
 * Single source of truth for practice details.
 *
 * IMPORTANT: Everything marked `VERIFY` came from public directory listings
 * (Healthdirect, Birdeye, Top4) and must be confirmed with the practice
 * before going live. Values set to `null` are deliberately not shown on the
 * site until the practice supplies them — never guess clinical or contact info.
 */

export type OpeningHours = { days: string; hours: string }[];

export const site = {
  name: "Acorn Dental Centre",
  shortName: "Acorn Dental",
  tagline: "Gentle, unhurried dental care in Armadale",
  description:
    "Acorn Dental Centre is a general and cosmetic dental practice in Armadale, WA. Check-ups, fillings, root canal treatment, orthodontics, dentures, whitening and wisdom teeth care — with a gentle approach for nervous patients.",

  // Canonical production URL — used for sitemap, canonical tags and schema.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.acorndentalcentre.com.au",

  // VERIFY: most listings use 9497 4777; one Healthdirect entry shows 9399 7007.
  phone: "08 9497 4777",
  phoneHref: "tel:+61894974777",

  // Set once the practice confirms its public inbox. Hidden when null.
  email: null as string | null,

  address: {
    street: "10/47 William Street", // VERIFY unit number
    suburb: "Armadale",
    state: "WA",
    postcode: "6112",
    country: "AU",
  },

  // Supply real hours from the practice. When null the site says "call us".
  hours: null as OpeningHours | null,

  // Paste the practice's online booking link (HotDoc, Centaur, Dental4Web…).
  // When null, "Book" buttons go to the on-site booking request form.
  bookingUrl: null as string | null,

  // Public review profile (e.g. Google Business Profile link). Hidden when null.
  reviewsUrl: null as string | null,

  social: {
    facebook: null as string | null,
    instagram: null as string | null,
  },

  serviceAreas: ["Armadale", "Kelmscott", "Byford", "Mount Nasura", "Brookdale", "Seville Grove", "Haynes", "Bedfordale"],
} as const;

export const fullAddress = `${site.address.street}, ${site.address.suburb} ${site.address.state} ${site.address.postcode}`;

export const mapsQuery = encodeURIComponent(`${site.name}, ${fullAddress}`);
export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
export const mapsEmbed = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;

export const bookHref = site.bookingUrl ?? "/book";
export const bookIsExternal = Boolean(site.bookingUrl);

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/new-patients", label: "New Patients" },
  { href: "/about", label: "About" },
  { href: "/emergency", label: "Emergencies" },
  { href: "/contact", label: "Contact" },
];
