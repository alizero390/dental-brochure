import type { IconName } from "../catalog";

export type OpeningHours = { days: string; hours: string }[];

/** Brand palette. Keys map onto the Tailwind tokens in globals.css
 *  (`primary` → forest-*, `accent` → acorn-*, `surface` → cream). */
export type Theme = {
  primary: Record<"50" | "100" | "200" | "500" | "600" | "700" | "800" | "900", string>;
  accent: Record<"100" | "300" | "500" | "600" | "700", string>;
  surface: string;
};

export type TeamMember = { name: string; role: string; quals?: string; bio: string };

export type Clinic = {
  id: string;
  name: string;
  /** Two-line wordmark shown in the header. */
  wordmark: [string, string];
  logo: "acorn" | "tooth";
  tagline: string;
  description: string;
  url: string;
  phone: string;
  phoneHref: string;
  email: string | null;
  address: { street: string; suburb: string; state: string; postcode: string; country: string };
  hours: OpeningHours | null;
  /** External online-booking link. When null, "Book" goes to the on-site request form. */
  bookingUrl: string | null;
  reviewsUrl: string | null;
  social: { facebook: string | null; instagram: string | null };
  serviceAreas: string[];
  /** Short lines shown in the footer under the card icon. */
  payments: string[];
  /** Treatment slugs from app/lib/catalog.ts, in display order. */
  services: string[];
  theme: Theme;
  team: TeamMember[];
  copy: {
    heroBadge: string;
    heroTitle: string;
    heroIntro: string;
    heroChips: string[];
    reasons: { icon: IconName | "heart" | "card" | "clock" | "pin"; title: string; body: string }[];
    aboutTitle: string;
    aboutIntro: string;
    aboutValues: { title: string; body: string }[];
    newPatientsTitle: string;
    nervousBody: string;
    feeFaqs: { q: string; a: string }[];
  };
};
