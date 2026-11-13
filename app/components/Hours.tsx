import { site } from "../lib/site";

export function Hours({ dark = false }: { dark?: boolean }) {
  if (!site.hours) {
    return (
      <p className={dark ? "text-forest-100" : "text-muted"}>
        Please call{" "}
        <a href={site.phoneHref} className={`font-semibold underline-offset-2 hover:underline ${dark ? "text-white" : "text-forest-700"}`}>
          {site.phone}
        </a>{" "}
        for current opening hours.
      </p>
    );
  }
  return (
    <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
      {site.hours.map((h) => (
        <div key={h.days} className="contents">
          <dt className="font-medium">{h.days}</dt>
          <dd>{h.hours}</dd>
        </div>
      ))}
    </dl>
  );
}
