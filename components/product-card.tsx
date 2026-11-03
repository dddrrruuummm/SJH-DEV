import Image from "next/image";
import Link from "next/link";
import {foods} from "@/lib/foods";
export function ProductCard({product}:{product:(typeof foods)[number]}){return <article className="food-product"><div className="food-product-photo"><Image src={product.image} alt={product.alt} fill sizes="(max-width:600px) 100vw,33vw"/></div><h2>{product.name}</h2><p>{product.description}</p><Link className="text-link" href={"/contact?food="+encodeURIComponent(product.name)}>Discuss this product ↗</Link></article>;}
