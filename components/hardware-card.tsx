import Image from "next/image";
import Link from "next/link";
import type {Hardware} from "@/lib/hardware";
export function HardwareCard({item:p}:{item:Hardware}){return <article className="hw-product"><Link className={"hw-product-photo"+(["rack-servers","storage-systems","network-switches"].includes(p.slug)?" hw-product-studio":"")} href={"/hardware/"+p.slug}><Image src={p.image} alt={p.alt} fill sizes="(max-width:600px) 100vw,(max-width:1000px) 50vw,25vw"/></Link><div className="hw-product-copy"><p>{p.category}</p><h2><Link href={"/hardware/"+p.slug}>{p.name}</Link></h2><p>{p.summary}</p><Link className="hw-detail-link" href={"/hardware/"+p.slug}>View details <span aria-hidden="true">↗</span></Link></div></article>;}

