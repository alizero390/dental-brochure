import type { Metadata } from "next";
import { CtaBand } from "../components/CtaBand";
import { Icon } from "../components/Icons";
import { PageHero } from "../components/PageHero";
import { site } from "../lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `About ${site.name} — a local general and cosmetic dental practice on William Street, Armadale WA.`,
  alternates: { canonical: "/about" },
};

const values = [
  { title: "Gentle by default", body: "Many people feel uneasy about the dentist. We listen, explain, and work at a pace that suits you." },
  { title: "Honest advice", body: "We recommend treatment only when there's a clinical reason, and we'll always discuss alternatives and costs first." },
  { title: "Prevention focused", body: "Healthy habits and regular check-ups mean simpler, more affordable care over a lifetime." },
  { title: "Part of the community", body: "A local practice caring for patients from Armadale and the surrounding hills and suburbs." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Small acorns, strong smiles"
        intro={`${site.name} is a general and cosmetic dental practice in the heart of Armadale. Like an acorn growing into an oak, we believe good dental health is built with steady care over time.`}
        crumbs={[{ href: "/about", label: "About" }]}
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-3xl font-semibold text-forest-900">What we stand for</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="flex gap-4 rounded-2xl bg-white p-6 ring-1 ring-forest-100">
              <Icon name="check" className="h-6 w-6 shrink-0 text-forest-600" />
              <div>
                <h3 className="font-sans text-lg font-semibold">{v.title}</h3>
                <p className="mt-1.5 leading-relaxed text-muted">{v.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/*
        TEAM SECTION — add once the practice supplies names, AHPRA-registered
        titles, short bios and professional photos. Do not publish placeholders.
      */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-semibold text-forest-900">Meet the team</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Our dentists, hygienists and front-desk team are here to make every visit comfortable. Pop in and say hello, or call us on{" "}
            <a href={site.phoneHref} className="font-semibold text-forest-700">{site.phone}</a> with any questions.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
