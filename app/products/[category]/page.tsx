import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import {foods,foodCategories} from "@/lib/foods";
import {foodCategoryDescriptions} from "@/lib/food-category-seo";
import {pageMetadata,breadcrumbSchema,collectionSchema} from "@/lib/seo";
import {JsonLd} from "@/components/json-ld";
import {FoodProductGrid} from "@/components/food-product-grid";
export const dynamicParams=false;
export function generateStaticParams(){return foodCategories.map(c=>({category:c.slug}));}
type Props={params:Promise<{category:string}>};
export async function generateMetadata({params}:Props):Promise<Metadata>{const {category}=await params;const c=foodCategories.find(c=>c.slug===category);if(!c)return {};return pageMetadata({title:c.name,description:foodCategoryDescriptions[c.slug],path:"/products/"+c.slug,image:c.image,imageAlt:c.alt});}
export default async function Page({params}:Props){const {category}=await params;const c=foodCategories.find(c=>c.slug===category);if(!c)notFound();const items=foods.filter(p=>p.category===c.name);const path="/products/"+c.slug;return <section className="food-catalog container-page">
  <JsonLd data={collectionSchema(c.name,path,items)}/><JsonLd data={breadcrumbSchema([{name:"Home",path:"/"},{name:"Products",path:"/showcase"},{name:c.name,path}])}/>
  <nav className="food-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/showcase">Products</Link><span aria-hidden="true">/</span><span>{c.name}</span></nav>
  <div className="food-page-heading"><h1>{c.name}</h1><p>{foodCategoryDescriptions[c.slug]}</p></div><p className="food-result-count">{items.length} products</p><FoodProductGrid items={items}/>
  <div className="food-category-next"><h2>Explore other ingredients.</h2><nav className="food-category-links" aria-label="Food categories">{foodCategories.filter(x=>x.slug!==c.slug).map(x=><Link key={x.slug} href={"/products/"+x.slug}>{x.name}</Link>)}</nav><p className="food-catalog-note">Images illustrate product types. Exact specifications, ingredients, packing, origin, availability and delivery terms are confirmed through inquiry.</p></div>
</section>;}
