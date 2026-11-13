import Link from "next/link";
import type { Service } from "../lib/services";
import { Icon } from "./Icons";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col rounded-2xl bg-cream p-6 ring-1 ring-forest-100 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md hover:ring-forest-200"
    >
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-forest-700 text-white">
        <Icon name={service.icon} />
      </span>
      <h3 className="mt-5 text-xl font-semibold text-forest-900">{service.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{service.summary}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-700">
        Learn more <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
