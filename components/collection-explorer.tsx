"use client";
import {useState} from "react";
import {foods,foodCategories} from "@/lib/foods";
import {FoodProductGrid} from "@/components/food-product-grid";
import {filterFoods} from "@/lib/food-search";
export function CollectionExplorer({initialQuery=""}:{initialQuery?:string}){
  const [query,setQuery]=useState(initialQuery);const [category,setCategory]=useState("All");
  const items=filterFoods({query,category});
  return <div className="food-explorer"><aside className="food-controls"><label className="food-collection-search">Search products<input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Ingredient or product form"/></label><div className="food-filters" aria-label="Filter by category"><button type="button" aria-pressed={category==="All"} onClick={()=>setCategory("All")}>All products <span>{foods.length}</span></button>{foodCategories.map(c=><button type="button" key={c.slug} aria-pressed={category===c.name} onClick={()=>setCategory(c.name)}>{c.name}<span>{c.count}</span></button>)}</div></aside><div className="food-results"><p className="food-result-count" aria-live="polite">{items.length} {items.length===1?"product":"products"}</p>{items.length?<FoodProductGrid items={items}/>:<div className="food-empty"><h2>No matching products.</h2><p>Try another ingredient or choose All products.</p><button className="action" type="button" onClick={()=>{setQuery("");setCategory("All")}}>Show all products</button></div>}</div></div>;
}
