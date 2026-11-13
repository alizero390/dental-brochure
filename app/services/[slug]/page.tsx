import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookButton } from "../../components/BookButton";
import { CtaBand } from "../../components/CtaBand";
import { Icon } from "../../components/Icons";
import { PageHero } from "../../components/PageHero";
import { getService, services } from "../../lib/services";
import { site } from "../../lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};
  return {
    title: `${service.name} in Armadale`,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const service = getService((await params).slug);
  if (!service) notFound();

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <PageHero
        eyebrow="Treatment"
        title={`${service.name} in Armadale`}
        intro={service.summary}
        crumbs={[{ href: "/services", label: "Services" }, { href: `/services/${service.slug}`, label: service.name }]}
      />

      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_320px]">
        <article className="space-y-12">
          <section>
            <p className="text-lg leading-relaxed">{service.intro}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-forest-900">Who it can help</h2>
            <ul className="mt-5 space-y-3">
              {service.whoFor.map((w) => (
                <li key={w} className="flex gap-3">
                  <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-forest-600" />
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-forest-900">What to expect</h2>
            <ol className="mt-6 grid gap-4 sm:grid-cols-2">
              {service.steps.map((step, i) => (
                <li key={step.title} className="rounded-2xl bg-white p-5 ring-1 ring-forest-100">
                  <span className="font-serif text-sm font-semibold text-acorn-600">Step {i + 1}</span>
                  <h3 className="mt-1 font-sans text-lg font-semibold">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.body}</p>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-forest-900">Common questions</h2>
            <div className="mt-5 divide-y divide-forest-100 rounded-2xl bg-white ring-1 ring-forest-100">
              {service.faqs.map((f) => (
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

          <p className="text-sm text-muted">
            This information is general in nature. Every mouth is different — your dentist will discuss the benefits, risks and alternatives for your situation. Any surgical or invasive procedure carries risks; before proceeding, you may wish to seek a second opinion.
          </p>
        </article>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl bg-forest-700 p-6 text-white">
            <h2 className="text-xl font-semibold">Talk to us about {service.name.toLowerCase()}</h2>
            <p className="mt-2 text-sm text-forest-100">We&rsquo;ll explain your options and costs before any treatment.</p>
            <div className="mt-5 flex flex-col gap-3">
              <BookButton variant="light" className="justify-center" label="Book an appointment" />
              <a href={site.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold hover:bg-white/10">
                <Icon name="phone" className="h-4 w-4" /> {site.phone}
              </a>
            </div>
          </div>
          <nav aria-label="Other treatments" className="rounded-2xl bg-white p-6 ring-1 ring-forest-100">
            <h2 className="font-sans text-sm font-semibold uppercase tracking-wider text-muted">Other treatments</h2>
            <ul className="mt-3 space-y-2">
              {others.map((o) => (
                <li key={o.slug}><Link href={`/services/${o.slug}`} className="font-medium text-forest-700 hover:text-forest-900">{o.name}</Link></li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
      <CtaBand />
    </>
  );
}
