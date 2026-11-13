import type { Metadata } from "next";
import { EnquiryForm } from "../components/EnquiryForm";
import { Hours } from "../components/Hours";
import { Icon } from "../components/Icons";
import { PageHero } from "../components/PageHero";
import { fullAddress, mapsEmbed, mapsLink, site } from "../lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${site.name}, ${fullAddress}. Phone ${site.phone}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        intro="Questions about treatment, fees or appointments? Send us a message or give us a call."
        crumbs={[{ href: "/contact", label: "Contact" }]}
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_1.3fr]">
        <div className="space-y-8">
          <div className="space-y-5 rounded-2xl bg-white p-7 ring-1 ring-forest-100">
            <a href={site.phoneHref} className="flex gap-4">
              <Icon name="phone" className="h-6 w-6 shrink-0 text-forest-600" />
              <span><span className="block text-sm text-muted">Phone</span><span className="text-lg font-semibold">{site.phone}</span></span>
            </a>
            {site.email && (
              <a href={`mailto:${site.email}`} className="flex gap-4">
                <Icon name="mail" className="h-6 w-6 shrink-0 text-forest-600" />
                <span><span className="block text-sm text-muted">Email</span><span className="font-semibold">{site.email}</span></span>
              </a>
            )}
            <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="flex gap-4">
              <Icon name="pin" className="h-6 w-6 shrink-0 text-forest-600" />
              <span><span className="block text-sm text-muted">Address</span><span className="font-semibold">{fullAddress}</span></span>
            </a>
            <div className="flex gap-4">
              <Icon name="clock" className="h-6 w-6 shrink-0 text-forest-600" />
              <div><span className="block text-sm text-muted">Opening hours</span><Hours /></div>
            </div>
          </div>
          <iframe title={`Map showing ${site.name}`} src={mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-72 w-full rounded-2xl border-0" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-forest-900">Send us a message</h2>
          <p className="mt-2 mb-6 text-muted">For urgent dental pain, please call rather than email.</p>
          <EnquiryForm kind="contact" />
        </div>
      </section>
    </>
  );
}
