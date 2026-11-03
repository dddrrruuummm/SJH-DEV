"use client";
import {useState} from "react";
import {useSearchParams} from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {foods,foodCategories} from "@/lib/foods";
export function CollectionExplorer(){const params=useSearchParams();const q=params.get("q")||"";return <Explorer key={params.toString()} initialQuery={q.toLowerCase()==="fresh"?"":q}/>;}
function Explorer({initialQuery}:{initialQuery:string}){
  const [query,setQuery]=useState(initialQuery);const [category,setCategory]=useState("All");
  const items=foods.filter(p=>(category==="All"||p.category===category)&&`${p.name} ${p.category} ${p.description} ${p.tags.join(" ")}`.toLowerCase().includes(query.toLowerCase().trim()));
  return <div className="food-explorer"><aside className="food-controls"><label className="food-collection-search">Search products<input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Ingredient or product form"/></label><div className="food-filters" aria-label="Filter by category"><button type="button" aria-pressed={category==="All"} onClick={()=>setCategory("All")}>All products <span>{foods.length}</span></button>{foodCategories.map(c=><button type="button" key={c.slug} aria-pressed={category===c.name} onClick={()=>setCategory(c.name)}>{c.name}<span>{c.count}</span></button>)}</div></aside><div className="food-results"><p className="food-result-count" aria-live="polite">{items.length} {items.length===1?"product":"products"}</p>{items.length?<div className="food-product-grid">{items.map(p=><article className="food-product" id={p.slug} key={p.slug}><div className="food-product-photo"><Image src={p.image} alt={p.alt} fill sizes="(max-width:600px) 100vw,(max-width:1100px) 45vw,28vw"/></div><h2>{p.name}</h2><p className="food-product-category">{p.category}</p><p>{p.description}</p><Link className="text-link" href={"/contact?food="+encodeURIComponent(p.name)}>Discuss this product ↗</Link></article>)}</div>:<div className="food-empty"><h2>No matching products.</h2><p>Try another ingredient or choose All products.</p><button className="action" type="button" onClick={()=>{setQuery("");setCategory("All")}}>Show all products</button></div>}</div></div>;
}
