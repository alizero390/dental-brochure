import type { Clinic } from "./types";

/**
 * Armadale Dental Centre, 24 Fourth Road, Armadale WA — DEMO / PITCH SITE.
 *
 * All details are taken from the practice's current website
 * (armadaledentalcentre.com.au, checked Nov 2026). Before launch, confirm:
 * - Dr Babitha Nugala's MDS discipline (their site lists both
 *   "Periodontist" and "Oral Surgeon"). Only titles matching AHPRA
 *   registration may be used — both are registered as general dentists.
 * - Sunday hours (their site lists Mon–Sat only).
 * - The Centaur booking link below opens their correct location.
 */
export const armadale: Clinic = {
  id: "armadale",
  name: "Armadale Dental Centre",
  wordmark: ["Armadale Dental", "CENTRE · ARMADALE"],
  logo: "tooth",
  tagline: "Trusted family dentistry in Armadale for over 30 years",
  description:
    "Armadale Dental Centre on Fourth Road has cared for local families for over 30 years. Check-ups, children's dental (CDBS bulk billed), same-day digital crowns, dental implants and All-on-4, veneers and whitening. All health funds accepted.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.armadaledentalcentre.com.au",
  phone: "(08) 9497 9700",
  phoneHref: "tel:+61894979700",
  email: "reception@armadaledentalcentre.com.au",
  address: { street: "24 Fourth Road", suburb: "Armadale", state: "WA", postcode: "6112", country: "AU" },
  hours: [
    { days: "Mon – Fri", hours: "8:30am – 5:30pm" },
    { days: "Saturday", hours: "8:00am – 3:00pm" },
    { days: "Sunday", hours: "Closed" },
  ],
  bookingUrl: "https://www.centaurportal.com/d4w/org-683/extended_search?location=811&shortVer=false",
  reviewsUrl: null,
  social: { facebook: null, instagram: null },
  serviceAreas: [
    "Armadale", "Kelmscott", "Mount Nasura", "Mount Richon", "Seville Grove", "Haynes", "Hilbert", "Bedfordale",
    "Brookdale", "Camillo", "Champion Lakes", "Forrestdale", "Harrisdale", "Piara Waters", "Roleystone", "Karragullen", "Wungong",
  ],
  payments: ["HICAPS · All health funds accepted", "Afterpay · humm (National Dental Plan)"],
  services: [
    "check-ups-and-cleans", "childrens-dentistry", "crowns-and-bridges", "dental-implants", "fillings",
    "root-canal-treatment", "veneers", "teeth-whitening", "oral-sedation",
  ],
  theme: {
    primary: { "50": "#eef5fc", "100": "#d7e8f7", "200": "#a9cdef", "500": "#1f78c4", "600": "#1664a8", "700": "#0f4f8a", "800": "#0b3e6d", "900": "#082c4f" },
    accent: { "100": "#fdf3dc", "300": "#f3c96f", "500": "#c98a1a", "600": "#a36d0f", "700": "#7d530b" },
    surface: "#f7fafd",
  },
  team: [
    {
      name: "Dr Mohana Krishna Patchava",
      role: "Principal Dentist",
      quals: "BDS, MDS (Periodontics), ADC",
      bio: "Dr Krishna has nearly 20 years of clinical experience and a special interest in complex care — dental wear, smile makeovers and implant-supported dentures. He keeps up with the latest technology and treatment protocols through ongoing professional education. Outside the practice he enjoys travelling with his family.",
    },
    {
      name: "Dr Babitha Nugala",
      role: "Dentist",
      quals: "BDS, MDS, ADC",
      bio: "Dr Babitha brings a strong background in gum health and implant care, including over 12 years teaching in a university dental school. She has spent the last seven years in Australian private general dentistry, including two years serving rural communities, and is known for her compassionate approach.",
    },
  ],
  copy: {
    heroBadge: "24 Fourth Road, Armadale WA",
    heroTitle: "Trusted family dentistry in Armadale for over 30 years.",
    heroIntro:
      "From children's check-ups to same-day digital crowns and All-on-4 implant dentures — Armadale Dental Centre looks after families from Armadale, Kelmscott, Roleystone and the surrounding hills.",
    heroChips: ["Check-ups", "Children's dental", "Same-day crowns", "Implants", "Veneers", "Whitening"],
    reasons: [
      { icon: "crown", title: "Same-day crowns", body: "Digital scanning and in-practice milling mean many crowns are fitted in a single visit." },
      { icon: "card", title: "All health funds accepted", body: "Claim on the spot with HICAPS. HBF participating provider and HCF More for Teeth practice." },
      { icon: "child", title: "Kids' dental bulk billed", body: "Eligible children are bulk billed under the Child Dental Benefits Schedule." },
      { icon: "pin", title: "Easy to get to", body: "On Fourth Road in central Armadale, with plenty of parking." },
    ],
    aboutTitle: "Caring for Armadale smiles for over 30 years",
    aboutIntro:
      "Armadale Dental Centre has served the local community for more than three decades. Our two purpose-built surgeries are equipped with modern digital technology, and we keep updating our facilities and techniques so you get comfortable, lasting results.",
    aboutValues: [
      { title: "Experienced team", body: "Our dentists bring decades of combined experience, including advanced training in gum health and implants." },
      { title: "Modern technology", body: "Digital scanning and same-day crowns mean fewer visits and no messy impressions." },
      { title: "Care for the whole family", body: "From toddlers' first check-ups to implant dentures for grandparents." },
      { title: "Clear, honest advice", body: "We explain your options and costs before any treatment, and recommend only what you need." },
    ],
    newPatientsTitle: "Welcome to Armadale Dental Centre",
    nervousBody:
      "Dental anxiety is really common. Tell us when you book and we'll allow extra time, explain each step, and go at your pace. For more anxious patients, we can also discuss whether oral sedation is suitable for you.",
    feeFaqs: [
      { q: "Which health funds do you accept?", a: "All private health funds. Our HICAPS terminal processes your claim on the spot, so you only pay the gap. We're an HBF Participating Provider and take part in HCF's More for Teeth program, which offers no-gap preventative and diagnostic benefits to eligible members." },
      { q: "Is children's dental bulk billed?", a: "Yes, for eligible children under the Child Dental Benefits Schedule (CDBS). Ask our team or check with Services Australia whether your child is eligible." },
      { q: "Can I pay off my treatment?", a: "Yes. We offer Afterpay (four fortnightly payments) and humm through the National Dental Plan for larger treatment. Fees, terms and eligibility apply — ask our team for details." },
      { q: "How much will my visit cost?", a: "Fees depend on the treatment you need. We'll give you a written estimate before starting any treatment beyond your initial examination." },
    ],
  },
};
