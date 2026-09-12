import type { Metadata } from "next";
import { Check } from "lucide-react";
import { services } from "@/lib/site";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore SJH DEV capabilities for fresh produce, enterprise technology, and global trade programs."
};

export default function ServicesPage() {
  return (
    <section className="bg-white py-16 text-ink">
      <div className="container-page">
        <p className="eyebrow text-wine">Capabilities</p>
        <h1 className="mt-4 max-w-3xl text-5xl font-bold leading-tight">Trade capabilities made for decisive, cross-category commercial programs.</h1>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <div key={service} className="rounded-lg border border-ink/10 bg-pearl p-6">
              <Check className="text-wine" />
              <h2 className="mt-4 text-xl font-bold">{service}</h2>
              <p className="mt-3 text-sm leading-6 text-ink/65">
                A disciplined framework for moving from initial product interest to a clear conversation about requirements, program fit, and operational next steps.
              </p>
            </div>
          ))}
        </div>
        <Button href="/contact" className="mt-9">Open an Inquiry</Button>
      </div>
    </section>
  );
}
