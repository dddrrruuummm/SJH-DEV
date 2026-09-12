import Image from "next/image";
import { products } from "@/lib/site";

type Product = (typeof products)[number];

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-md border border-white/10 bg-[#0c1c22] shadow-sm transition duration-500 hover:-translate-y-2 hover:border-brass hover:shadow-soft">
      <div className="relative aspect-[4/3] bg-mist">
        <Image src={product.image} alt={`${product.name} product category`} fill className="object-cover transition duration-700 group-hover:scale-110" />
      </div>
      <div className="p-5">
        <p className="text-xs font-bold uppercase tracking-widest text-brass">{product.category}</p>
        <h3 className="mt-2 text-xl font-bold text-white">{product.name}</h3>
        <p className="mt-3 text-sm leading-6 text-white/65">{product.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span key={tag} className="rounded-md border border-white/15 px-2.5 py-1 text-xs font-semibold text-white/65">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
