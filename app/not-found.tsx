import Link from "next/link";
import { AcornMark } from "./components/Icons";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center">
      <AcornMark className="h-20 w-20" />
      <h1 className="mt-6 text-4xl font-semibold text-forest-900">Page not found</h1>
      <p className="mt-3 text-muted">Sorry, we couldn&rsquo;t find that page. It may have moved.</p>
      <div className="mt-8 flex gap-3">
        <Link href="/" className="rounded-full bg-forest-700 px-6 py-3 font-semibold text-white hover:bg-forest-800">Go home</Link>
        <Link href="/services" className="rounded-full border border-forest-600 px-6 py-3 font-semibold text-forest-700 hover:bg-forest-50">Our services</Link>
      </div>
    </section>
  );
}
