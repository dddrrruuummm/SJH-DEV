import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";
import "./hardware.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "SJH DEV | Servers, Hardware & Electronics",
    template: "%s | SJH DEV"
  },
  description: "Explore server, storage, networking, computer components and electronics sourcing with SJH DEV LIMITED, a Hong Kong trading company with a separate food ingredients trade line.",
  keywords: ["food ingredients trade", "dehydrated vegetables", "dried fruit", "canned foods", "enterprise GPU sourcing", "server hardware trade", "Hong Kong trading company", "SJH DEV"],
  openGraph: {
    title: "SJH DEV | Servers, Hardware & Electronics",
    description: "Servers, storage, networking, components and electronics. Specific requirements, focused commercial inquiries.",
    url: site.url,
    siteName: site.name,
    images: [{ url: "/hardware/rack-server.webp", width: 1536, height: 1024, alt: "SJH DEV server hardware and electronics" }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "SJH DEV | Servers, Hardware & Electronics",
    description: "Servers, storage, networking, components and electronics. Specific requirements, focused commercial inquiries.",
    images: ["/hardware/rack-server.webp"]
  },
  alternates: {
    canonical: site.url
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    email: site.email,
    description: "Hong Kong company focused on hardware, electronics and food ingredient trade inquiries.",
    areaServed: "Worldwide"
  };

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
