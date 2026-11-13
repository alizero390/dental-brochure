import { site } from "../lib/site";
import { BookButton } from "./BookButton";
import { Icon } from "./Icons";

export function CtaBand({ title = "Ready when you are", body = "New and returning patients welcome. Book a time that suits you, or give our friendly team a call." }: { title?: string; body?: string }) {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 rounded-3xl bg-forest-700 px-6 py-10 text-white sm:px-10 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold">{title}</h2>
          <p className="mt-2 text-forest-100">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <BookButton variant="light" className="px-6 py-3 text-base" label="Book an appointment" />
          <a href={site.phoneHref} className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 font-semibold hover:bg-white/10">
            <Icon name="phone" className="h-4 w-4" /> {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
