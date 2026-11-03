import type {MetadataRoute} from "next";
import {site} from "@/lib/site";
export default function sitemap():MetadataRoute.Sitemap{return ["","/about","/services","/showcase","/contact","/privacy-policy","/terms"].map(route=>({url:site.url+route,lastModified:new Date("2026-11-03"),changeFrequency:route===""?"weekly":"monthly",priority:route===""?1:route==="/showcase"?.9:.7}));}
