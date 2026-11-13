"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "../lib/site";
import { AcornMark, Icon } from "./Icons";
import { BookButton } from "./BookButton";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-forest-100 bg-cream/95 backdrop-blur">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded focus:bg-white focus:px-3 focus:py-2">
        Skip to content
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
          <AcornMark />
          <span className="leading-tight">
            <span className="block font-serif text-lg font-semibold text-forest-800">Acorn Dental</span>
            <span className="block text-xs tracking-wide text-muted">CENTRE · ARMADALE</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors hover:bg-forest-50 hover:text-forest-800 ${active ? "bg-forest-50 text-forest-800" : "text-ink"}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href={site.phoneHref} className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-forest-800 hover:bg-forest-50 sm:flex">
            <Icon name="phone" className="h-4 w-4" />
            {site.phone}
          </a>
          <BookButton className="hidden sm:inline-flex" />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-forest-800 hover:bg-forest-50 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-forest-100 bg-cream lg:hidden">
          <ul className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 font-medium text-ink hover:bg-forest-50">
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 grid grid-cols-2 gap-2 pb-1">
              <a href={site.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-full border border-forest-600 px-4 py-3 font-semibold text-forest-700">
                <Icon name="phone" className="h-4 w-4" /> Call
              </a>
              <BookButton className="justify-center" />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
