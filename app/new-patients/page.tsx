import type { Metadata } from "next";
import { CtaBand } from "../components/CtaBand";
import { Icon } from "../components/Icons";
import { PageHero } from "../components/PageHero";
import { site } from "../lib/site";

export const metadata: Metadata = {
  title: "New Patients",
  description: `What to expect at your first visit to ${site.name}, plus health funds, payments and tips for nervous patients.`,
  alternates: { canonical: "/new-patients" },
};

const bring = [
  "Your health fund card (if you have one)",
  "A list of any medications you take",
  "Details of any medical conditions or allergies",
  "Any recent dental X-rays or records, if you have them",
  "Concession, DVA or other cards if relevant",
];

const faqs = [
  { q: "Do you accept health funds?", a: "Yes, you're welcome to use your private health insurance. How much you get back depends on your fund and level of extras cover — check with your fund, and bring your card so our team can help with your claim." },
  { q: "How much will my visit cost?", a: "Fees depend on the treatment you need. We'll give you a written estimate before starting any treatment beyond your initial examination, so there are no surprises." },
  { q: "Do you offer payment plans?", a: "Ask our team about the payment options available for larger treatment plans." },
  { q: "Can I bring my child?", a: "Please call us to discuss appointments for children, including whether the Child Dental Benefits Schedule may apply." },
];

export default function NewPatientsPage() {
  return (
    <>
      <PageHero
        eyebrow="New patients"
        title="Welcome to Acorn Dental"
        intro="Whether you're new to the area or it's been a while since your last visit, we'll help you feel at home from the moment you walk in."
        crumbs={[{ href: "/new-patients", label: "New Patients" }]}
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold text-forest-900">Your first appointment</h2>
          <ol className="mt-6 space-y-5">
            {[
              ["Arrive a few minutes early", "So we can complete a short medical history form with you."],
              ["Have a chat", "Tell us about any concerns, goals or past experiences — good or bad."],
              ["Comprehensive check", "We examine your teeth, gums and mouth, taking X-rays only if needed."],
              ["Clean & plan", "A professional clean (where appropriate) and a clear plan with costs."],
            ].map(([t, b], i) => (
              <li key={t} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest-700 font-semibold text-white">{i + 1}</span>
                <div>
                  <h3 className="font-sans font-semibold">{t}</h3>
                  <p className="text-muted">{b}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="rounded-2xl bg-white p-7 ring-1 ring-forest-100">
          <h2 className="text-2xl font-semibold text-forest-900">What to bring</h2>
          <ul className="mt-5 space-y-3">
            {bring.map((b) => (
              <li key={b} className="flex gap-3"><Icon name="check" className="h-5 w-5 shrink-0 text-forest-600" />{b}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-acorn-100/50 py-14">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[auto_1fr] lg:items-center">
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-acorn-700 shadow-sm"><Icon name="heart" className="h-8 w-8" /></span>
          <div>
            <h2 className="text-3xl font-semibold text-forest-900">Feeling nervous? Tell us.</h2>
            <p className="mt-3 max-w-3xl text-lg leading-relaxed text-muted">
              Dental anxiety is really common. Let us know when you book and we&rsquo;ll allow extra time, explain each step before we do it, and agree on a signal so you can pause whenever you need. You&rsquo;re always in control.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <h2 className="text-3xl font-semibold text-forest-900">Fees, funds & payments</h2>
        <div className="mt-6 divide-y divide-forest-100 rounded-2xl bg-white ring-1 ring-forest-100">
          {faqs.map((f) => (
            <details key={f.q} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                {f.q}
                <span className="text-xl text-forest-600 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <CtaBand title="Book your first visit" />
    </>
  );
}
