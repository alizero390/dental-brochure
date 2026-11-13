import type { IconName } from "../lib/services";

type Props = { className?: string };

export function AcornMark({ className = "h-9 w-9" }: Props) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path d="M24 4c1.5 0 2.6 1 2.6 2.4V9h-5.2V6.4C21.4 5 22.5 4 24 4z" fill="#6e461c" />
      <path d="M26 6.5c3-2.8 7.5-3 10-1.5-2 2.5-5.6 3.8-9 3.2z" fill="#2f7a55" />
      <path d="M8 18c0-5.5 7.2-9.5 16-9.5S40 12.5 40 18c0 1.7-1.3 3-3 3H11c-1.7 0-3-1.3-3-3z" fill="#8a5a24" />
      <path d="M11 14.5h26M9.5 18h29" stroke="#6e461c" strokeWidth="1.2" strokeLinecap="round" opacity=".6" />
      <path d="M11 21h26c0 10-5.8 21-13 23-7.2-2-13-13-13-23z" fill="#ddb98a" />
      <path d="M17 24c0 6 2.6 12.5 6 15.5" stroke="#fbf8f3" strokeWidth="2" strokeLinecap="round" opacity=".7" fill="none" />
    </svg>
  );
}

const paths: Record<IconName | "phone" | "pin" | "clock" | "mail" | "alert" | "heart" | "card" | "check" | "arrow", React.ReactNode> = {
  shield: <><path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6z" /><path d="M9 12l2 2 4-4" /></>,
  tooth: <path d="M7 3c-2.2 0-4 1.8-4 4.5 0 3 1.4 4.5 2 7 .7 3 1.2 6.5 3 6.5 1.6 0 1.8-3.5 2.5-5.5.3-.9.8-1.5 1.5-1.5s1.2.6 1.5 1.5c.7 2 .9 5.5 2.5 5.5 1.8 0 2.3-3.5 3-6.5.6-2.5 2-4 2-7C21 4.8 19.2 3 17 3c-2 0-3 1-5 1S9 3 7 3z" />,
  root: <><path d="M7 3c-2.2 0-4 1.8-4 4.5 0 2 .7 3.3 1.3 4.6M17 3c2.2 0 4 1.8 4 4.5 0 2-.7 3.3-1.3 4.6M7 3c2 0 3 1 5 1s3-1 5-1" /><path d="M9 12l-1 9M15 12l1 9M12 8v6" /></>,
  wisdom: <><path d="M8 4c-2 0-3.5 1.6-3.5 4 0 2.6 1.2 4 1.7 6.2.6 2.6 1 5.8 2.6 5.8 1.4 0 1.6-3 2.2-4.8.3-.8.6-1.2 1-1.2s.7.4 1 1.2c.6 1.8.8 4.8 2.2 4.8 1.6 0 2-3.2 2.6-5.8.5-2.2 1.7-3.6 1.7-6.2 0-2.4-1.5-4-3.5-4-1.8 0-2.6.8-4 .8S9.8 4 8 4z" /><path d="M3 3l18 18" /></>,
  denture: <><path d="M3 10c0-3 4-6 9-6s9 3 9 6v1H3z" /><path d="M5 11v3c0 1 1 2 2 2s2-1 2-2v-3M9 11v3c0 1 1.3 2 3 2s3-1 3-2v-3M15 11v3c0 1 1 2 2 2s2-1 2-2v-3" /></>,
  braces: <><path d="M3 12h18" /><rect x="4" y="8" width="4" height="8" rx="1.5" /><rect x="10" y="8" width="4" height="8" rx="1.5" /><rect x="16" y="8" width="4" height="8" rx="1.5" /></>,
  sparkle: <><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" /><path d="M19 16l.7 1.8 1.8.7-1.8.7L19 21l-.7-1.8-1.8-.7 1.8-.7z" /></>,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2" />,
  pin: <><path d="M12 21s-7-6.2-7-11.5a7 7 0 0114 0C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
  alert: <><path d="M12 3l9.5 17h-19z" /><path d="M12 10v4M12 17.5v.01" /></>,
  heart: <path d="M12 20s-7-4.4-9-9a5 5 0 019-3 5 5 0 019 3c-2 4.6-9 9-9 9z" />,
  card: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18M7 15h3" /></>,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
};

export function Icon({ name, className = "h-6 w-6" }: Props & { name: keyof typeof paths }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
