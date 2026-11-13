import Link from "next/link";

type Crumb = { href: string; label: string };

export function PageHero({ eyebrow, title, intro, crumbs = [] }: { eyebrow?: string; title: string; intro?: string; crumbs?: Crumb[] }) {
  return (
    <section className="border-b border-forest-100 bg-gradient-to-b from-forest-50 to-cream">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li><Link href="/" className="hover:text-forest-700">Home</Link></li>
              {crumbs.map((c) => (
                <li key={c.href} className="flex items-center gap-1.5">
                  <span aria-hidden="true">/</span>
                  <Link href={c.href} className="hover:text-forest-700">{c.label}</Link>
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && <p className="text-sm font-semibold uppercase tracking-wider text-acorn-600">{eyebrow}</p>}
        <h1 className="mt-2 max-w-3xl text-4xl font-semibold text-forest-900 sm:text-5xl">{title}</h1>
        {intro && <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>}
      </div>
    </section>
  );
}
