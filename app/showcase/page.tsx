import type { Metadata } from "next";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/site";

export const metadata: Metadata = {
  title: "Showcase",
  description: "Explore SJH DEV trade lines across fresh agricultural products and enterprise compute infrastructure."
};

export default function ShowcasePage() {
  return (
    <section className="bg-white py-16 text-ink">
      <div className="container-page">
        <p className="eyebrow text-wine">Trade Lines</p>
        <h1 className="mt-4 max-w-3xl text-5xl font-bold leading-tight">Fresh origins and compute infrastructure, in one global commercial view.</h1>
        <p className="mt-5 max-w-2xl leading-7 text-ink/70">
          This showcase presents product directions rather than a live inventory catalog. Visuals and descriptions are intentionally modular, ready to be replaced with supplier-approved photography, part numbers, certifications, and final programs.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
