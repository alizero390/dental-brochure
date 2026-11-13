"use client";

import Link from "next/link";
import { useState } from "react";
import { services } from "../lib/services";
import { site } from "../lib/site";

type Status = { state: "idle" } | { state: "sending" } | { state: "sent" } | { state: "error"; message: string };

const input =
  "mt-1.5 block w-full rounded-xl border border-forest-200 bg-white px-4 py-3 text-ink shadow-sm placeholder:text-muted/60 focus:border-forest-500 focus:outline-none focus:ring-2 focus:ring-forest-200";
const label = "block text-sm font-medium text-ink";

export function EnquiryForm({ kind }: { kind: "booking" | "contact" }) {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const booking = kind === "booking";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus({ state: "sending" });
    try {
      const data = Object.fromEntries(new FormData(form));
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, kind }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error ?? "Something went wrong.");
      form.reset();
      setStatus({ state: "sent" });
    } catch (err) {
      setStatus({ state: "error", message: err instanceof Error ? err.message : "Something went wrong." });
    }
  }

  if (status.state === "sent") {
    return (
      <div role="status" className="rounded-2xl border border-forest-200 bg-forest-50 p-8">
        <h2 className="text-2xl font-semibold text-forest-800">Thank you — we&rsquo;ve got it.</h2>
        <p className="mt-2 text-muted">
          {booking
            ? "Our team will contact you to confirm a time. Your appointment isn't booked until we've confirmed it with you."
            : "We'll get back to you as soon as we can."}{" "}
          If it&rsquo;s urgent, please call <a href={site.phoneHref} className="font-semibold text-forest-700">{site.phone}</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>Full name</label>
          <input id="name" name="name" required autoComplete="name" maxLength={100} className={input} />
        </div>
        <div>
          <label htmlFor="phone" className={label}>Phone</label>
          <input id="phone" name="phone" type="tel" required={booking} autoComplete="tel" maxLength={30} className={input} />
        </div>
      </div>
      <div>
        <label htmlFor="email" className={label}>Email</label>
        <input id="email" name="email" type="email" required autoComplete="email" maxLength={200} className={input} />
      </div>

      {booking && (
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="treatment" className={label}>Reason for visit</label>
            <select id="treatment" name="treatment" className={input} defaultValue="Check-ups & Cleans">
              {services.map((s) => <option key={s.slug}>{s.name}</option>)}
              <option>Toothache / emergency</option>
              <option>Something else</option>
            </select>
          </div>
          <div>
            <label htmlFor="preferred" className={label}>Preferred days / times</label>
            <input id="preferred" name="preferred" placeholder="e.g. Tue or Thu mornings" maxLength={120} className={input} />
          </div>
          <fieldset className="sm:col-span-2">
            <legend className={label}>Have you visited us before?</legend>
            <div className="mt-2 flex gap-6">
              <label className="flex items-center gap-2"><input type="radio" name="patientType" value="New patient" defaultChecked className="accent-forest-600" /> New patient</label>
              <label className="flex items-center gap-2"><input type="radio" name="patientType" value="Existing patient" className="accent-forest-600" /> Existing patient</label>
            </div>
          </fieldset>
        </div>
      )}

      <div>
        <label htmlFor="message" className={label}>{booking ? "Anything we should know? (optional)" : "Message"}</label>
        <textarea id="message" name="message" rows={5} required={!booking} maxLength={2000} className={input} />
        <p className="mt-1.5 text-xs text-muted">Please don&rsquo;t include detailed medical information — we&rsquo;ll discuss that with you privately.</p>
      </div>

      {/* Honeypot: hidden from people, bots tend to fill it. */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label>Leave this empty<input name="company" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <label className="flex items-start gap-3 text-sm text-muted">
        <input type="checkbox" name="consent" value="yes" required className="mt-1 accent-forest-600" />
        <span>I agree to {site.name} using these details to respond to my enquiry, as described in the <Link href="/privacy" className="text-forest-700 underline">privacy policy</Link>.</span>
      </label>

      {status.state === "error" && <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-800">{status.message}</p>}

      <button
        type="submit"
        disabled={status.state === "sending"}
        className="inline-flex w-full items-center justify-center rounded-full bg-forest-700 px-6 py-3.5 font-semibold text-white shadow-sm transition-colors hover:bg-forest-800 disabled:opacity-60 sm:w-auto"
      >
        {status.state === "sending" ? "Sending…" : booking ? "Request appointment" : "Send message"}
      </button>
    </form>
  );
}
