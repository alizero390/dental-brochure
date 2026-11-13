import type { Metadata } from "next";
import { Icon } from "../components/Icons";
import { PageHero } from "../components/PageHero";
import { site } from "../lib/site";

export const metadata: Metadata = {
  title: "Emergency Dentist Armadale",
  description: `Toothache, a broken tooth or a knocked-out tooth? Call ${site.name} in Armadale on ${site.phone}. First-aid tips while you wait.`,
  alternates: { canonical: "/emergency" },
};

const tips = [
  { title: "Toothache", body: "Rinse with warm salty water and gently floss to remove trapped food. Over-the-counter pain relief can help — follow the packet directions. Don't put aspirin on the gum." },
  { title: "Knocked-out adult tooth", body: "Time matters. Hold it by the crown (not the root), rinse briefly in milk if dirty, and try to put it back in its socket. If you can't, keep it in milk and see a dentist immediately. Don't re-insert baby teeth." },
  { title: "Chipped or broken tooth", body: "Rinse your mouth, save any pieces, and use a cold compress on the cheek for swelling. Call us to arrange a visit." },
  { title: "Lost filling or crown", body: "Keep the crown if you have it and avoid chewing on that side. Call us to have it assessed and refitted or replaced." },
  { title: "Swelling or abscess", body: "A swollen face or gum, or a pimple on the gum, can mean infection. Call us promptly — infections should not be left untreated." },
];

export default function EmergencyPage() {
  return (
    <>
      <PageHero
        eyebrow="Dental emergencies"
        title="In pain? Call us first."
        intro="We keep time aside for urgent problems and will do our best to see you as soon as possible."
        crumbs={[{ href: "/emergency", label: "Emergencies" }]}
      />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-6 rounded-3xl bg-forest-700 p-8 text-white sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Call {site.name}</h2>
            <p className="mt-1 text-forest-100">Phone is the fastest way to get an urgent appointment.</p>
          </div>
          <a href={site.phoneHref} className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-xl font-semibold text-forest-800 hover:bg-forest-50">
            <Icon name="phone" className="h-6 w-6" /> {site.phone}
          </a>
        </div>

        <div role="note" className="mt-6 flex gap-4 rounded-2xl border border-red-200 bg-red-50 p-6 text-red-900">
          <Icon name="alert" className="h-6 w-6 shrink-0" />
          <p>
            <strong>Go to a hospital emergency department or call 000</strong> if you have swelling that affects your breathing or swallowing, uncontrolled bleeding, a serious facial injury, or high fever with facial swelling.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <h2 className="text-3xl font-semibold text-forest-900">What to do while you wait</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {tips.map((t) => (
            <div key={t.title} className="rounded-2xl bg-white p-6 ring-1 ring-forest-100">
              <h3 className="font-sans text-lg font-semibold">{t.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{t.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted">This is general first-aid information only and does not replace an assessment by a dentist or doctor.</p>
      </section>
    </>
  );
}
