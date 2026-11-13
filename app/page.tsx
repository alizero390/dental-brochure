import Link from "next/link";
import { BookButton } from "./components/BookButton";
import { CtaBand } from "./components/CtaBand";
import { Hours } from "./components/Hours";
import { AcornMark, Icon } from "./components/Icons";
import { ServiceCard } from "./components/ServiceCard";
import { services } from "./lib/services";
import { fullAddress, mapsEmbed, mapsLink, site } from "./lib/site";

const reasons = [
  { icon: "heart" as const, title: "Nervous? You're in good hands", body: "We take things at your pace, explain every step and stop whenever you need a break." },
  { icon: "card" as const, title: "Clear costs, no surprises", body: "You'll get a treatment plan and fee estimate before we start. HICAPS on-the-spot health fund claims." },
  { icon: "clock" as const, title: "Short-notice appointments", body: "Toothache can't wait. Call us and we'll do our best to see you quickly." },
  { icon: "shield" as const, title: "Prevention first", body: "Regular check-ups catch small problems early — usually the simplest and most affordable care." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-forest-50 via-cream to-acorn-100/60">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-sm font-medium text-forest-700 ring-1 ring-forest-100">
              <Icon name="pin" className="h-4 w-4" /> William Street, Armadale WA
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight text-forest-900 sm:text-5xl lg:text-6xl">
              Gentle dental care that helps your smile grow strong.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              From check-ups and fillings to root canal treatment, orthodontics, dentures and whitening — {site.name} looks after patients from Armadale and surrounding suburbs with calm, unhurried care.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BookButton className="px-7 py-3.5 text-base" label="Book an appointment" />
              <a href={site.phoneHref} className="inline-flex items-center gap-2 rounded-full border border-forest-600 bg-white px-7 py-3.5 font-semibold text-forest-700 hover:bg-forest-50">
                <Icon name="phone" className="h-4 w-4" /> Call {site.phone}
              </a>
            </div>
            <p className="mt-6 text-sm text-muted">
              In pain right now? <Link href="/emergency" className="font-semibold text-acorn-700 underline underline-offset-2">See emergency dental care →</Link>
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-md" aria-hidden="true">
            <div className="absolute -inset-6 rounded-[3rem] bg-forest-200/40 blur-2xl" />
            <div className="relative rounded-[2.5rem] bg-forest-700 p-10 shadow-xl">
              <AcornMark className="mx-auto h-40 w-40 drop-shadow-lg" />
              <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
                {["Check-ups", "Fillings", "Root canal", "Orthodontics", "Dentures", "Whitening"].map((t) => (
                  <span key={t} className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-forest-50">
                    <Icon name="check" className="h-4 w-4 text-acorn-300" /> {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Acorn */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-forest-100">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-acorn-100 text-acorn-700">
                <Icon name={r.icon} />
              </span>
              <h2 className="mt-4 font-sans text-lg font-semibold text-forest-900">{r.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{r.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-acorn-600">Our treatments</p>
              <h2 className="mt-2 text-3xl font-semibold text-forest-900 sm:text-4xl">Everything your smile needs, under one roof</h2>
            </div>
            <Link href="/services" className="inline-flex items-center gap-1.5 font-semibold text-forest-700 hover:text-forest-900">
              All services <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s) => <ServiceCard key={s.slug} service={s} />)}
          </div>
        </div>
      </section>

      {/* New patients */}
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-acorn-600">New patients</p>
          <h2 className="mt-2 text-3xl font-semibold text-forest-900 sm:text-4xl">Your first visit, made easy</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Haven&rsquo;t seen a dentist in a while? That&rsquo;s okay. We&rsquo;ll start with a relaxed conversation, a thorough check and a clear plan — no pressure, no judgement.
          </p>
          <Link href="/new-patients" className="mt-6 inline-flex items-center gap-1.5 font-semibold text-forest-700 hover:text-forest-900">
            What to expect & health funds <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
        <ol className="space-y-4">
          {["Book online or call our team", "Tell us about your health and any worries", "Comprehensive exam and clean", "A clear plan with costs before any treatment"].map((step, i) => (
            <li key={step} className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-forest-100">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest-700 font-serif text-lg font-semibold text-white">{i + 1}</span>
              <span className="font-medium">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Location */}
      <section className="bg-forest-50 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-acorn-600">Find us</p>
            <h2 className="mt-2 text-3xl font-semibold text-forest-900">In the heart of Armadale</h2>
            <div className="mt-6 space-y-5">
              <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-forest-700">
                <Icon name="pin" className="h-5 w-5 shrink-0 text-forest-600" /> {fullAddress}
              </a>
              <a href={site.phoneHref} className="flex gap-3 font-semibold hover:text-forest-700">
                <Icon name="phone" className="h-5 w-5 shrink-0 text-forest-600" /> {site.phone}
              </a>
              <div className="flex gap-3">
                <Icon name="clock" className="h-5 w-5 shrink-0 text-forest-600" />
                <Hours />
              </div>
            </div>
            <p className="mt-6 text-sm text-muted">Welcoming patients from {site.serviceAreas.slice(1).join(", ")} and nearby.</p>
          </div>
          <iframe
            title={`Map showing ${site.name}`}
            src={mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-80 w-full rounded-2xl border-0 shadow-sm lg:h-full lg:min-h-80"
          />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
