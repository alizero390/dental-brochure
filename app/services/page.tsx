import type { Metadata } from "next";
import { CtaBand } from "../components/CtaBand";
import { PageHero } from "../components/PageHero";
import { ServiceCard } from "../components/ServiceCard";
import { services } from "../lib/services";

export const metadata: Metadata = {
  title: "Dental Services in Armadale",
  description: "General and cosmetic dentistry in Armadale WA: check-ups, fillings, root canal treatment, wisdom teeth, dentures, orthodontics and teeth whitening.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our treatments"
        title="General & cosmetic dentistry in Armadale"
        intro="Whether it's a routine check-up or a tooth that's been bothering you, we'll explain your options clearly and help you choose what's right for you."
        crumbs={[{ href: "/services", label: "Services" }]}
      />
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => <ServiceCard key={s.slug} service={s} />)}
        </div>
        <p className="mt-10 text-sm text-muted">Don&rsquo;t see what you need? Give us a call — we&rsquo;re happy to talk through your situation and, where appropriate, refer you to a trusted specialist.</p>
      </section>
      <CtaBand />
    </>
  );
}
