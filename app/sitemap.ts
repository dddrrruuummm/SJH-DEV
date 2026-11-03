import type {MetadataRoute} from "next";
import {foodCategories,foods} from "@/lib/foods";
import {absoluteUrl,contentUpdated} from "@/lib/seo";
export default function sitemap():MetadataRoute.Sitemap{const base=["/","/about","/services","/showcase","/contact","/privacy-policy","/terms"].map(path=>({url:absoluteUrl(path),lastModified:new Date(contentUpdated),changeFrequency:path==="/"?"weekly" as const:"monthly" as const,priority:path==="/"?1:path==="/showcase"?.9:.7,...(path==="/showcase"?{images:foods.map(p=>absoluteUrl(p.image))}:{})}));return [...base,...foodCategories.map(c=>({url:absoluteUrl("/products/"+c.slug),lastModified:new Date(contentUpdated),changeFrequency:"monthly" as const,priority:.8,images:foods.filter(p=>p.category===c.name).map(p=>absoluteUrl(p.image))}))];}
