import type {MetadataRoute} from "next";
import {site} from "@/lib/site";
import {hardware} from "@/lib/hardware";
export default function sitemap():MetadataRoute.Sitemap{
 const routes=["","/about","/services","/showcase","/contact","/privacy-policy","/terms","/hardware",...hardware.map(p=>"/hardware/"+p.slug)];
 return routes.map(route=>({url:site.url+route,lastModified:new Date("2026-10-17"),changeFrequency:route===""?"weekly":"monthly",priority:route===""?1:route==="/hardware"?.9:.7}));
}

