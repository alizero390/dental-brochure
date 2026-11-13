import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { site } from "./lib/site";
import { services } from "./lib/services";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Dentist in Armadale, WA`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: site.name,
    title: `${site.name} | Dentist in Armadale, WA`,
    description: site.description,
  },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = { themeColor: "#1d4f38" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: site.name,
  url: site.url,
  telephone: site.phone,
  ...(site.email ? { email: site.email } : {}),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.suburb,
    addressRegion: site.address.state,
    postalCode: site.address.postcode,
    addressCountry: site.address.country,
  },
  areaServed: site.serviceAreas.map((name) => ({ "@type": "Place", name })),
  availableService: services.map((s) => ({
    "@type": "MedicalProcedure",
    name: s.name,
    url: `${site.url}/services/${s.slug}`,
  })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <body className="flex min-h-screen flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
