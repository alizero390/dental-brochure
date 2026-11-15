import type { Clinic } from "./types";

/**
 * Acorn Dental Centre, Armadale WA.
 * Phone, email, address, hours and payment options are confirmed from the
 * practice's own website. Values set to `null` are hidden until supplied.
 */
export const acorn: Clinic = {
  id: "acorn",
  name: "Acorn Dental Centre",
  wordmark: ["Acorn Dental", "CENTRE · ARMADALE"],
  logo: "acorn",
  tagline: "Gentle, unhurried dental care in Armadale",
  description:
    "Acorn Dental Centre is a general and cosmetic dental practice in Armadale, WA. Check-ups, fillings, root canal treatment, orthodontics, dentures, whitening and wisdom teeth care — with a gentle approach for nervous patients.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.acorndentalcentre.com.au",
  phone: "08 9497 4777",
  phoneHref: "tel:+61894974777",
  email: "info@acorndentalcentre.com.au",
  address: { street: "10/47 William Street", suburb: "Armadale", state: "WA", postcode: "6112", country: "AU" },
  hours: [
    { days: "Mon – Tue", hours: "8:00am – 7:00pm" },
    { days: "Wed – Fri", hours: "8:00am – 5:30pm" },
    { days: "Saturday", hours: "8:00am – 1:00pm" },
    { days: "Sunday", hours: "Closed" },
  ],
  bookingUrl: null,
  reviewsUrl: null,
  social: { facebook: null, instagram: null },
  serviceAreas: ["Armadale", "Kelmscott", "Byford", "Mount Nasura", "Brookdale", "Seville Grove", "Haynes", "Bedfordale"],
  payments: ["HICAPS · Visa · Mastercard", "Payment plans for orthodontics through DentiCare"],
  services: ["check-ups-and-cleans", "fillings", "root-canal-treatment", "wisdom-teeth", "dentures", "orthodontics", "teeth-whitening"],
  theme: {
    primary: { "50": "#eef6f1", "100": "#d6eadd", "200": "#acd4bb", "500": "#2f7a55", "600": "#256446", "700": "#1d4f38", "800": "#173f2d", "900": "#102d20" },
    accent: { "100": "#f5e9da", "300": "#ddb98a", "500": "#a8702f", "600": "#8a5a24", "700": "#6e461c" },
    surface: "#fbf8f3",
  },
  // Add names, AHPRA titles and short bios once the practice supplies them.
  team: [],
  copy: {
    heroBadge: "William Street, Armadale WA",
    heroTitle: "Gentle dental care that helps your smile grow strong.",
    heroIntro:
      "From check-ups and fillings to root canal treatment, orthodontics, dentures and whitening — Acorn Dental Centre looks after patients from Armadale and surrounding suburbs with calm, unhurried care.",
    heroChips: ["Check-ups", "Fillings", "Root canal", "Orthodontics", "Dentures", "Whitening"],
    reasons: [
      { icon: "heart", title: "Nervous? You're in good hands", body: "We take things at your pace, explain every step and stop whenever you need a break." },
      { icon: "card", title: "Clear costs, no surprises", body: "You'll get a treatment plan and fee estimate before we start. HICAPS on-the-spot health fund claims." },
      { icon: "clock", title: "Short-notice appointments", body: "Toothache can't wait. Call us and we'll do our best to see you quickly." },
      { icon: "shield", title: "Prevention first", body: "Regular check-ups catch small problems early — usually the simplest and most affordable care." },
    ],
    aboutTitle: "Small acorns, strong smiles",
    aboutIntro:
      "Acorn Dental Centre is a general and cosmetic dental practice in the heart of Armadale. Like an acorn growing into an oak, we believe good dental health is built with steady care over time.",
    aboutValues: [
      { title: "Gentle by default", body: "Many people feel uneasy about the dentist. We listen, explain, and work at a pace that suits you." },
      { title: "Honest advice", body: "We recommend treatment only when there's a clinical reason, and we'll always discuss alternatives and costs first." },
      { title: "Prevention focused", body: "Healthy habits and regular check-ups mean simpler, more affordable care over a lifetime." },
      { title: "Part of the community", body: "A local practice caring for patients from Armadale and the surrounding hills and suburbs." },
    ],
    newPatientsTitle: "Welcome to Acorn Dental",
    nervousBody:
      "Dental anxiety is really common. Let us know when you book and we'll allow extra time, explain each step before we do it, and agree on a signal so you can pause whenever you need. You're always in control.",
    feeFaqs: [
      { q: "Do you accept health funds?", a: "Yes. We have HICAPS, so you can claim on the spot with your health fund card and only pay the gap. How much you get back depends on your fund and level of extras cover." },
      { q: "How much will my visit cost?", a: "Fees depend on the treatment you need. We'll give you a written estimate before starting any treatment beyond your initial examination, so there are no surprises." },
      { q: "What payment methods do you accept?", a: "We accept Visa and Mastercard, and health fund claims via HICAPS." },
      { q: "Do you offer payment plans?", a: "Payment plans for orthodontic treatment are available through DentiCare. Ask our team about options for other treatment." },
      { q: "Can I bring my child?", a: "Please call us to discuss appointments for children, including whether the Child Dental Benefits Schedule may apply." },
    ],
  },
};
