import Image from "next/image";
import Link from "next/link";
import type {foods} from "@/lib/foods";
export function FoodProductGrid({items}:{items:typeof foods}){return <div className="food-product-grid">{items.map(p=><article className="food-product" id={p.slug} key={p.slug}><div className="food-product-photo"><Image src={p.image} alt={p.alt} fill sizes="(max-width:600px) 100vw,(max-width:1100px) 45vw,28vw"/></div><h2>{p.name}</h2><p className="food-product-category">{p.category}</p><p>{p.description}</p><Link className="text-link" href={"/contact?food="+encodeURIComponent(p.name)}>Discuss this product ↗</Link></article>)}</div>;}
