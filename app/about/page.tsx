import type { Metadata } from "next";
import { CtaBand } from "../components/CtaBand";
import { Icon } from "../components/Icons";
import { PageHero } from "../components/PageHero";
import { site } from "../lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `About ${site.name} — a local dental practice at ${site.address.street}, ${site.address.suburb} ${site.address.state}.`,
  alternates: { canonical: "/about" },
};


export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={site.copy.aboutTitle}
        intro={site.copy.aboutIntro}
        crumbs={[{ href: "/about", label: "About" }]}
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-3xl font-semibold text-forest-900">What we stand for</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {site.copy.aboutValues.map((v) => (
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

      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-semibold text-forest-900">Meet the team</h2>
          {site.team.length > 0 ? (
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {site.team.map((m) => (
                <article key={m.name} className="rounded-2xl bg-cream p-7 ring-1 ring-forest-100">
                  <div className="flex items-center gap-4">
                    <span aria-hidden="true" className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-forest-700 font-serif text-xl font-semibold text-white">
                      {m.name.replace(/^Dr\.?\s+/, "").split(" ").map((w) => w[0]).slice(0, 2).join("")}
                    </span>
                    <div>
                      <h3 className="font-sans text-lg font-semibold">{m.name}</h3>
                      <p className="text-sm text-muted">{m.role}{m.quals ? ` · ${m.quals}` : ""}</p>
                    </div>
                  </div>
                  <p className="mt-4 leading-relaxed text-muted">{m.bio}</p>
                </article>
              ))}
            </div>
          ) : (
            // Shown until the practice supplies names, AHPRA titles and bios.
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
              Our dentists, hygienists and front-desk team are here to make every visit comfortable. Pop in and say hello, or call us on{" "}
              <a href={site.phoneHref} className="font-semibold text-forest-700">{site.phone}</a> with any questions.
            </p>
          )}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
