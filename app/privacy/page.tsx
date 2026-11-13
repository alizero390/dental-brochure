import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";
import { site } from "../lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} handles personal information submitted through this website.`,
  alternates: { canonical: "/privacy" },
};

// TEMPLATE — the practice must review this against its own privacy policy
// and obligations under the Privacy Act 1988 (Cth) and the APPs.
export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy policy" crumbs={[{ href: "/privacy", label: "Privacy" }]} />
      <article className="mx-auto max-w-3xl space-y-6 px-4 py-14 leading-relaxed sm:px-6 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-forest-900">
        <p>{site.name} respects your privacy and handles personal information in accordance with the <em>Privacy Act 1988</em> (Cth) and the Australian Privacy Principles.</p>

        <h2>What we collect through this website</h2>
        <p>When you use our contact or appointment request forms, we collect the details you provide — such as your name, email, phone number, preferred appointment times and your message.</p>

        <h2>How we use it</h2>
        <p>We use these details only to respond to your enquiry and arrange appointments. We do not sell your information or use it for unrelated marketing without your consent.</p>

        <h2>Health information</h2>
        <p>Please don&rsquo;t submit detailed health information through website forms. We will collect your medical and dental history securely at your appointment.</p>

        <h2>Storage & security</h2>
        <p>We take reasonable steps to protect your information from misuse, loss and unauthorised access. Information sent via the internet can never be guaranteed to be completely secure.</p>

        <h2>Access & complaints</h2>
        <p>
          You may request access to, or correction of, personal information we hold about you. To ask a question or make a complaint, call us on{" "}
          <a href={site.phoneHref} className="font-semibold text-forest-700">{site.phone}</a>
          {site.email && <> or email <a href={`mailto:${site.email}`} className="font-semibold text-forest-700">{site.email}</a></>}. If you are not satisfied with our response, you can contact the Office of the Australian Information Commissioner (oaic.gov.au).
        </p>
      </article>
    </>
  );
}
