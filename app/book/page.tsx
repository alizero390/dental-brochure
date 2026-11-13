import type { Metadata } from "next";
import { EnquiryForm } from "../components/EnquiryForm";
import { Icon } from "../components/Icons";
import { PageHero } from "../components/PageHero";
import { site } from "../lib/site";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description: `Request an appointment at ${site.name}, Armadale. New and existing patients welcome.`,
  alternates: { canonical: "/book" },
};

export default function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="Appointments"
        title="Request an appointment"
        intro="Tell us what you need and when suits you. Our team will be in touch to confirm a time."
        crumbs={[{ href: "/book", label: "Book" }]}
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.5fr_1fr]">
        <EnquiryForm kind="booking" />
        <aside className="space-y-5 lg:pt-1">
          <div className="rounded-2xl bg-forest-700 p-6 text-white">
            <h2 className="text-xl font-semibold">Prefer to talk?</h2>
            <p className="mt-2 text-sm text-forest-100">Call us and we can book you in straight away.</p>
            <a href={site.phoneHref} className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-semibold text-forest-800">
              <Icon name="phone" className="h-4 w-4" /> {site.phone}
            </a>
          </div>
          <div className="rounded-2xl border border-acorn-300 bg-acorn-100/50 p-6">
            <h2 className="flex items-center gap-2 font-sans font-semibold"><Icon name="alert" className="h-5 w-5 text-acorn-700" /> In pain?</h2>
            <p className="mt-2 text-sm text-muted">Please phone for urgent problems rather than using this form, so we can see you as soon as possible.</p>
          </div>
        </aside>
      </section>
    </>
  );
}
