import type {Metadata} from "next";
import {Suspense} from "react";
import {CollectionExplorer} from "@/components/collection-explorer";
export const metadata:Metadata={title:"Food Ingredients",description:"Explore dehydrated vegetables, dried mushrooms, seasonings, canned foods, dried and freeze-dried fruit, nuts and seeds.",alternates:{canonical:"/showcase"}};
export default function Page(){return <section className="food-catalog container-page"><div className="food-page-heading"><h1>Explore the ingredients.</h1><p>Browse by product or category. Share your preferred form, grade, packing and quantity when requesting a quotation.</p></div><Suspense fallback={<p>Loading products…</p>}><CollectionExplorer/></Suspense><p className="food-catalog-note">Product images illustrate the range. Exact specifications, ingredients, packing, origin, availability and delivery terms are confirmed during inquiry.</p></section>;}
