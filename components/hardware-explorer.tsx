"use client";
import {useState} from "react";
import {useSearchParams} from "next/navigation";
import {hardware,hardwareCategories} from "@/lib/hardware";
import {HardwareCard} from "@/components/hardware-card";
export function HardwareExplorer(){const params=useSearchParams();return <Explorer key={params.toString()} initialCategory={params.get("category")||"All hardware"} initialQuery={params.get("q")||""}/>;}
function Explorer({initialCategory,initialQuery}:{initialCategory:string;initialQuery:string}){
 const categories=["All hardware",...hardwareCategories];
 const [category,setCategory]=useState(categories.includes(initialCategory)?initialCategory:"All hardware");
 const [query,setQuery]=useState(initialQuery);
 const [sort,setSort]=useState("featured");
 const items=hardware.filter(p=>(category==="All hardware"||p.category===category)&&(p.name+" "+p.category+" "+p.summary+" "+p.uses.join(" ")).toLowerCase().includes(query.trim().toLowerCase()));
 if(sort==="name")items.sort((a,b)=>a.name.localeCompare(b.name));
 return <div className="hw-explorer"><aside className="hw-filter"><h2>Product categories</h2><div aria-label="Filter hardware">{categories.map(c=><button key={c} type="button" aria-pressed={category===c} onClick={()=>setCategory(c)}>{c}<span>{c==="All hardware"?hardware.length:hardware.filter(p=>p.category===c).length}</span></button>)}</div><div className="hw-filter-help"><h3>Have a part number?</h3><p>Send the model, quantity and destination with your inquiry.</p><a href="/contact?topic=Hardware%20procurement">Request a quote ↗</a></div></aside><div className="hw-results"><div className="hw-results-toolbar"><label>Search hardware<input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Server, memory, SSD…" /></label><label>Sort by<select value={sort} onChange={e=>setSort(e.target.value)}><option value="featured">Featured</option><option value="name">Name, A–Z</option></select></label></div><div className="hw-results-label"><h2>{category}</h2><p aria-live="polite">{items.length} product {items.length===1?"category":"categories"}</p></div>{items.length?<div className="hw-catalog-grid">{items.map(p=><HardwareCard item={p} key={p.slug}/>)}</div>:<div className="hw-empty"><h2>No matching hardware.</h2><p>Try a different term, or send us the specific part number you need.</p><button type="button" className="action" onClick={()=>{setQuery("");setCategory("All hardware");}}>Reset filters</button></div>}</div></div>;
}

