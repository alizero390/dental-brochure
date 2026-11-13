import Link from "next/link";
import { fullAddress, mapsLink, nav, site } from "../lib/site";
import { services } from "../lib/services";
import { AcornMark, Icon } from "./Icons";
import { Hours } from "./Hours";

export function Footer() {
  return (
    <footer className="bg-forest-900 text-forest-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <AcornMark />
            <span className="font-serif text-lg font-semibold text-white">{site.name}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-forest-200">{site.tagline}. Proudly caring for patients from Armadale and surrounding suburbs.</p>
        </div>

        <div>
          <h2 className="font-sans text-sm font-semibold uppercase tracking-wider text-white">Treatments</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-white">{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-sm font-semibold uppercase tracking-wider text-white">Practice</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.filter((n) => n.href !== "/services").map((n) => (
              <li key={n.href}><Link href={n.href} className="hover:text-white">{n.label}</Link></li>
            ))}
            <li><Link href="/book" className="hover:text-white">Request an appointment</Link></li>
            <li><Link href="/privacy" className="hover:text-white">Privacy policy</Link></li>
          </ul>
        </div>

        <div className="space-y-4 text-sm">
          <h2 className="font-sans text-sm font-semibold uppercase tracking-wider text-white">Visit us</h2>
          <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-white">
            <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0" />
            <span>{fullAddress}</span>
          </a>
          <a href={site.phoneHref} className="flex gap-3 hover:text-white">
            <Icon name="phone" className="h-5 w-5 shrink-0" />
            <span>{site.phone}</span>
          </a>
          {site.email && (
            <a href={`mailto:${site.email}`} className="flex gap-3 hover:text-white">
              <Icon name="mail" className="h-5 w-5 shrink-0" />
              <span>{site.email}</span>
            </a>
          )}
          <div className="flex gap-3">
            <Icon name="clock" className="h-5 w-5 shrink-0" />
            <Hours dark />
          </div>
        </div>
      </div>
      <div className="border-t border-forest-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-forest-200 sm:flex-row sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Information on this site is general in nature and is not a substitute for advice from your dentist. Any surgical or invasive procedure carries risks.</p>
        </div>
      </div>
    </footer>
  );
}
