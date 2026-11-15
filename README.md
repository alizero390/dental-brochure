# Dental practice website template

Marketing site template for dental practices, currently configured for **Acorn Dental Centre** (default) and **Armadale Dental Centre** (pitch demo), both in Armadale WA. Next.js 16 (App Router), React 19, Tailwind CSS 4, TypeScript. No runtime dependencies beyond Next/React.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Multiple clinics

One codebase builds a site for any configured clinic. Pick the clinic per deployment with `NEXT_PUBLIC_CLINIC`:

| `NEXT_PUBLIC_CLINIC` | Clinic | Config |
| --- | --- | --- |
| `acorn` (default) | Acorn Dental Centre | `app/lib/clinics/acorn.ts` |
| `armadale` | Armadale Dental Centre | `app/lib/clinics/armadale.ts` |

```bash
NEXT_PUBLIC_CLINIC=armadale npm run dev
```

A clinic config holds contact details, hours, booking link, payments, the list of treatment pages (slugs from `app/lib/catalog.ts`), brand colours, logo mark, team and page copy. To add a clinic: copy a config file, edit it, and register it in `app/lib/site.ts`.

**Deploying a second clinic on Vercel:** import this same repository as a new Vercel project (e.g. `armadale-dental-demo`), add the environment variable `NEXT_PUBLIC_CLINIC=armadale`, and deploy. Each project gets its own `*.vercel.app` address.

### Armadale Dental Centre — confirm before launch
- Dr Babitha Nugala's MDS discipline (their current site lists both Periodontist and Oral Surgeon); only AHPRA-registered titles may be used.
- Sunday hours (their site lists Mon–Sat only; shown as closed).
- The Centaur booking link opens the right location.
- Real team photos; dentist sign-off on all treatment copy.

## Where things live

| What | File |
| --- | --- |
| Practice details, copy, colours, team | `app/lib/clinics/<clinic>.ts` |
| Clinic selection & helpers | `app/lib/site.ts` |
| Treatment page library | `app/lib/catalog.ts` |
| Brand colours & fonts | `app/globals.css` (`@theme`) |
| Logo marks | `app/components/Icons.tsx` (`BrandMark`), favicons in `public/icons/` |
| Enquiry / booking API | `app/api/contact/route.ts` |

Pages: Home, Services (+ one page per treatment), New Patients, About, Emergencies, Contact, Book, Privacy. SEO: per-page metadata and canonicals, `Dentist` + `FAQPage` JSON-LD, `sitemap.xml`, `robots.txt`.

## Acorn Dental Centre — before launch

Confirmed from the practice's own website: phone (08 9497 4777), email, address (10/47 William St), opening hours, HICAPS, Visa/Mastercard and DentiCare orthodontic payment plans. Still to collect:

- [ ] **Online booking link** (HotDoc / Centaur / Dental4Web etc.) → `bookingUrl` in the clinic config. Until set, "Book" goes to the on-site request form.
- [ ] **Treatment list** — implants, crowns/bridges and children's dentistry/CDBS are *not* listed until confirmed.
- [ ] **Team** names, AHPRA titles, bios and photos (About page has a marked slot).
- [ ] **Real photos** of the practice and team.
- [ ] **Dentist sign-off** on all clinical copy (AHPRA advertising guidelines — no testimonials, no guarantees).
- [ ] **Privacy policy** reviewed against the practice's own policy.
- [ ] Google Business Profile / social links → `reviewsUrl`, `social` in the clinic config.

## Environment variables

| Name | Purpose |
| --- | --- |
| `NEXT_PUBLIC_CLINIC` | Which clinic to build (`acorn` default, `armadale`). |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL (defaults to the clinic's own domain). |
| `CONTACT_WEBHOOK_URL` | **Required in production.** Each enquiry is POSTed here as JSON (e.g. a Zapier/Make hook that emails reception). Without it, enquiries are only logged. |

The contact API validates input, has a honeypot field and a basic per-IP rate limit (in-memory — use a shared store if running multiple instances).

## Deploy

Works on Vercel or any Node host (`npm run build && npm start`). Set the env vars above.
