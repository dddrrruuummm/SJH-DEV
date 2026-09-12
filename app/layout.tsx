import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "SJH DEV | Global Trade, Fresh Origins & Compute",
    template: "%s | SJH DEV"
  },
  description: "SJH DEV LIMITED connects global fresh produce and enterprise compute infrastructure with qualified commercial trade opportunities.",
  keywords: ["global produce trade", "garlic export", "apple export", "enterprise GPU sourcing", "server hardware trade", "Hong Kong trading company", "SJH DEV"],
  openGraph: {
    title: "SJH DEV | Global Trade, Fresh Origins & Compute",
    description: "Fresh origins and compute infrastructure, connected through global trade.",
    url: site.url,
    siteName: site.name,
    images: [{ url: "/images/sjh-global-hero.png", width: 1536, height: 1024, alt: "SJH DEV global fresh produce and compute trade" }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "SJH DEV | Global Trade, Fresh Origins & Compute",
    description: "Fresh origins and compute infrastructure, connected through global trade.",
    images: ["/images/sjh-global-hero.png"]
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
    description: "Hong Kong company focused on global fresh produce and enterprise technology trade opportunities.",
    areaServed: "Worldwide"
  };

  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
