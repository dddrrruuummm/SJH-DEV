import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about SJH DEV LIMITED, a Hong Kong company focused on global agricultural and enterprise technology trade."
};

export default function AboutPage() {
  return (
    <section className="bg-pearl py-16 text-ink">
      <div className="container-page grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="eyebrow text-wine">About SJH DEV</p>
          <h1 className="mt-4 text-5xl font-bold leading-tight">A Hong Kong trade platform for two high-impact global categories.</h1>
          <p className="mt-6 leading-8 text-ink/70">
            SJH DEV LIMITED is a Hong Kong body corporate. Our business registration establishes the company; our trade focus brings together fresh agricultural products and enterprise technology infrastructure.
          </p>
          <p className="mt-4 leading-8 text-ink/70">
            We create a clear starting point for buyers, suppliers, distributors, and partners to begin qualified commercial conversations across these distinct product lines.
          </p>
          <Button href="/contact" className="mt-7">Contact the Company</Button>
        </div>
        <div className="grid gap-4 rounded-md border border-ink/10 bg-white p-7 shadow-soft"><p className="eyebrow text-wine">Operating Focus</p><p className="text-3xl font-bold leading-tight">Fresh origins. Compute infrastructure. Global commercial programs.</p><div className="grid gap-4 border-t border-ink/10 pt-6 text-sm leading-6 text-ink/65"><p>Built for buyer, supplier, distribution, and commercial partnership conversations.</p><p>Initial discussions can be tailored around market requirements, product specifications, delivery context, and program fit.</p></div></div>
      </div>
    </section>
  );
}
