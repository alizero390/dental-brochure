import Link from "next/link";
import { bookHref, bookIsExternal } from "../lib/site";

type Props = { className?: string; label?: string; variant?: "solid" | "light" };

export function BookButton({ className = "", label = "Book online", variant = "solid" }: Props) {
  const styles =
    variant === "solid"
      ? "bg-forest-700 text-white hover:bg-forest-800"
      : "bg-white text-forest-800 hover:bg-forest-50";
  const cls = `inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm transition-colors ${styles} ${className}`;

  return bookIsExternal ? (
    <a href={bookHref} className={cls} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  ) : (
    <Link href={bookHref} className={cls}>
      {label}
    </Link>
  );
}
