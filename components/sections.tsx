import Image from "next/image";
import { ArrowRight, Check, Compass, Mail, PackageCheck, Route, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { products, services, site } from "@/lib/site";

export function Hero() {
  return <section className="signal-grid hero-field overflow-hidden bg-ink text-white">
    <span className="scan-rail top-[38%]" aria-hidden="true" />
    <span className="scan-rail scan-rail-b" aria-hidden="true" />
    <span className="scan-rail scan-rail-c" aria-hidden="true" />
    <div className="container-page relative z-10 grid min-h-[calc(100vh-64px)] items-center gap-10 py-12 lg:grid-cols-[0.8fr_1.2fr] lg:py-16">
      <div className="relative z-10">
        <p className="eyebrow text-brass">Global Trade, Reframed</p>
        <h1 className="mt-5 max-w-3xl text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">Fresh origins.<br /><span className="text-brass">Compute power.</span><br />One global flow.</h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">SJH DEV connects fresh agricultural trade and enterprise technology infrastructure through precise, commercially focused cross-border conversations.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button href="/showcase">Enter Trade Lines <ArrowRight size={18} /></Button><Button href="/contact" variant="secondary">Open an Inquiry</Button></div>
        <div className="mt-9 grid grid-cols-3 gap-4 border-t border-white/15 pt-6 text-sm">{["Fresh origins", "Compute hardware", "Global programs"].map((item) => <div key={item} className="flex items-start gap-2 font-semibold text-white/70"><Check size={16} className="mt-0.5 shrink-0 text-brass" />{item}</div>)}</div>
      </div>
      <div className="relative">
        <div className="floating-card absolute -left-4 top-8 z-10 hidden border border-brass/50 bg-ink p-4 shadow-soft md:block"><p className="text-xs font-bold uppercase tracking-widest text-brass">Live Trade Signal</p><p className="mt-1 text-sm font-bold">Hong Kong / Global Reach</p></div>
        <div className="floating-card floating-card-delay absolute -bottom-4 right-4 z-10 hidden border border-white/20 bg-wine px-4 py-3 text-xs font-bold text-ink shadow-soft md:block">FRESH + COMPUTE / TWO LINES</div>
        <div className="overflow-hidden border border-white/15 shadow-soft"><Image src="/images/sjh-global-hero.png" alt="Fresh produce and compute hardware prepared for global trade" width={1536} height={1024} className="h-auto w-full" priority /></div>
      </div>
    </div>
  </section>;
}

export function ProductGrid({ limit }: { limit?: number }) {
  const items = limit ? products.slice(0, limit) : products;
  return <section className="bg-ink py-20 text-white">
    <div className="ticker-shell"><div className="ticker-track" aria-label="SJH DEV trade lines"><span><strong>Fresh Origins</strong> / Garlic / Apples / Citrus / Root Vegetables</span><span><strong>Compute Infrastructure</strong> / GPUs / Servers / Network</span><span><strong>Fresh Origins</strong> / Garlic / Apples / Citrus / Root Vegetables</span><span><strong>Compute Infrastructure</strong> / GPUs / Servers / Network</span></div></div>
    <div className="container-page pt-16"><p className="eyebrow text-brass">Two Trade Lines. One Standard.</p><h2 className="mt-3 max-w-3xl text-4xl font-bold">Built to move what matters, from harvest to high-performance hardware.</h2><p className="mt-4 max-w-3xl leading-7 text-white/65">Our showcase is modular by design: distinct product directions, clear commercial conversations, and imagery ready to be replaced by approved client product assets.</p><div className="product-stage mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{items.map((item) => <ProductCard key={item.name} product={item} />)}</div></div>
  </section>;
}
export function TrustBand() { const items = [{ icon: Compass, title: "Two specialist lines", text: "Fresh agricultural products and enterprise infrastructure each receive their own commercial lens." }, { icon: Route, title: "Program focused", text: "Start with requirements, then align product, packaging, delivery, and partner fit." }, { icon: ShieldCheck, title: "Designed for confidence", text: "A precise public introduction for buyers, suppliers, and distribution partners." }]; return <section className="bg-brass py-14 text-ink"><div className="container-page grid gap-5 md:grid-cols-3">{items.map((item) => <div key={item.title} className="border border-ink/20 bg-[#d5ff42] p-6"><item.icon className="text-wine" size={24} /><h3 className="mt-4 text-lg font-bold">{item.title}</h3><p className="mt-2 text-sm leading-6 text-ink/75">{item.text}</p></div>)}</div></section>; }
export function ServicesSection() { return <section className="bg-pearl py-20 text-ink"><div className="container-page grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-center"><div><p className="eyebrow text-wine">How We Work</p><h2 className="mt-3 text-4xl font-bold">Big categories. Clear commercial logic.</h2><p className="mt-5 text-base leading-7 text-ink/70">SJH DEV is structured for qualified trade conversations across high-velocity agricultural programs and enterprise technology procurement.</p><Button href="/services" className="mt-7">Explore Capabilities</Button></div><div className="grid gap-3 sm:grid-cols-2">{services.map((service) => <div key={service} className="flex gap-3 border-l-2 border-wine bg-white p-4 text-sm font-semibold text-ink/75"><Check size={18} className="mt-0.5 shrink-0 text-wine" />{service}</div>)}</div></div></section>; }
export function ContactSection() { return <section className="signal-grid bg-ink py-20 text-white"><div className="container-page grid gap-8 md:grid-cols-[0.85fr_1.15fr]"><div><p className="eyebrow text-brass">Open a Channel</p><h2 className="mt-3 text-4xl font-bold">Bring us the brief.</h2><p className="mt-4 leading-7 text-white/70">Share the product line, target market, volume context, sourcing requirement, or infrastructure need you want to explore.</p><div className="mt-7 grid gap-3 text-sm font-semibold text-white/75"><a href={`mailto:${site.email}`} className="flex items-center gap-3"><Mail size={18} className="text-brass" />{site.email}</a><p className="flex items-center gap-3"><PackageCheck size={18} className="text-brass" />Fresh Origins + Compute Infrastructure</p></div></div><form className="border border-white/15 bg-white p-5 text-ink shadow-soft"><div className="grid gap-4 sm:grid-cols-2"><label className="grid gap-2 text-sm font-bold">Name<input className="focus-ring min-h-12 border border-ink/10 px-3" placeholder="Your name" /></label><label className="grid gap-2 text-sm font-bold">Business email<input className="focus-ring min-h-12 border border-ink/10 px-3" placeholder="you@company.com" /></label></div><label className="mt-4 grid gap-2 text-sm font-bold">Trade line<input className="focus-ring min-h-12 border border-ink/10 px-3" placeholder="Fresh produce, GPU, servers, network..." /></label><label className="mt-4 grid gap-2 text-sm font-bold">Message<textarea className="focus-ring min-h-32 border border-ink/10 p-3" placeholder="Share your product or infrastructure requirement." /></label><Button href={`mailto:${site.email}?subject=SJH%20DEV%20Trade%20Inquiry`} className="mt-5 w-full">Send Inquiry</Button></form></div></section>; }
