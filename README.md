# Acorn Dental Centre — website

Marketing site for Acorn Dental Centre, Armadale WA. Next.js 16 (App Router), React 19, Tailwind CSS 4, TypeScript. No runtime dependencies beyond Next/React.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Where things live

| What | File |
| --- | --- |
| Practice details (phone, address, hours, booking link, socials) | `app/lib/site.ts` |
| Treatments & their copy / FAQs | `app/lib/services.ts` |
| Brand colours & fonts | `app/globals.css` (`@theme`) |
| Logo | `app/components/Icons.tsx` (`AcornMark`), favicon `app/icon.svg` |
| Enquiry / booking API | `app/api/contact/route.ts` |

Pages: Home, Services (+ one page per treatment), New Patients, About, Emergencies, Contact, Book, Privacy. SEO: per-page metadata and canonicals, `Dentist` + `FAQPage` JSON-LD, `sitemap.xml`, `robots.txt`.

## Before launch — get these from the practice

Details were taken from public directories (Healthdirect, Birdeye, Top4) because the live site could not be audited. **Confirm every item:**

- [ ] **Phone number** — listings show both 08 9497 4777 (used) and 08 9399 7007.
- [ ] **Address** — unit number "10/47 William Street".
- [ ] **Opening hours** → `site.hours` (site says "call us" until set).
- [ ] **Email** → `site.email`.
- [ ] **Online booking link** (HotDoc / Centaur / Dental4Web etc.) → `site.bookingUrl`. Until set, "Book" goes to the on-site request form.
- [ ] **Treatment list** — implants, crowns/bridges and children's dentistry/CDBS are *not* listed until confirmed.
- [ ] **Health funds / HICAPS / payment plans** — copy is deliberately generic.
- [ ] **Team** names, AHPRA titles, bios and photos (About page has a marked slot).
- [ ] **Real photos** of the practice and team.
- [ ] **Dentist sign-off** on all clinical copy (AHPRA advertising guidelines — no testimonials, no guarantees).
- [ ] **Privacy policy** reviewed against the practice's own policy.
- [ ] Google Business Profile / social links → `site.reviewsUrl`, `site.social`.

## Environment variables

| Name | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL (defaults to `https://www.acorndentalcentre.com.au`). |
| `CONTACT_WEBHOOK_URL` | **Required in production.** Each enquiry is POSTed here as JSON (e.g. a Zapier/Make hook that emails reception). Without it, enquiries are only logged. |

The contact API validates input, has a honeypot field and a basic per-IP rate limit (in-memory — use a shared store if running multiple instances).

## Deploy

Works on Vercel or any Node host (`npm run build && npm start`). Set the env vars above.
