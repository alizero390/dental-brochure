import { NextRequest, NextResponse } from "next/server";

/**
 * Receives contact and appointment-request enquiries.
 *
 * Delivery: set CONTACT_WEBHOOK_URL to forward each enquiry as JSON
 * (e.g. a Zapier/Make/Power Automate hook that emails reception, or a
 * Slack/Teams webhook). Without it, enquiries are only written to the server
 * log — fine for local dev, NOT for production.
 */

const MAX = { name: 100, email: 200, phone: 30, message: 2000, short: 120 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Basic in-memory rate limit (per server instance). Use a shared store
// (e.g. Upstash/Redis) if deploying to multiple instances.
const hits = new Map<string, { count: number; reset: number }>();
function rateLimited(ip: string) {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || entry.reset < now) {
    hits.set(ip, { count: 1, reset: now + 10 * 60_000 });
    return false;
  }
  entry.count += 1;
  return entry.count > 5;
}

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "").trim().slice(0, max) : "";

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests. Please call us instead." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot filled → silently accept and drop.
  if (clean(body.company, 100)) return NextResponse.json({ ok: true });

  const kind = body.kind === "booking" ? "booking" : "contact";
  const enquiry = {
    kind,
    name: clean(body.name, MAX.name),
    email: clean(body.email, MAX.email).toLowerCase(),
    phone: clean(body.phone, MAX.phone),
    treatment: clean(body.treatment, MAX.short),
    preferred: clean(body.preferred, MAX.short),
    patientType: clean(body.patientType, MAX.short),
    message: clean(body.message, MAX.message),
    receivedAt: new Date().toISOString(),
  };

  if (!enquiry.name) return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  if (!EMAIL_RE.test(enquiry.email)) return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  if (kind === "booking" && enquiry.phone.replace(/\D/g, "").length < 8)
    return NextResponse.json({ error: "Please enter a phone number so we can confirm your appointment." }, { status: 400 });
  if (kind === "contact" && !enquiry.message) return NextResponse.json({ error: "Please enter a message." }, { status: 400 });
  if (body.consent !== "yes") return NextResponse.json({ error: "Please tick the privacy consent box." }, { status: 400 });

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(enquiry),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    } catch (err) {
      console.error("Enquiry delivery failed:", err);
      return NextResponse.json({ error: "We couldn't send your enquiry right now. Please call us." }, { status: 502 });
    }
  } else {
    console.warn("CONTACT_WEBHOOK_URL not set — enquiry logged only:", enquiry);
  }

  return NextResponse.json({ ok: true });
}
