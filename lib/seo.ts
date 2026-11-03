import type {Metadata} from "next";
import {site} from "./site";
import {foods} from "./foods";

export const contentUpdated = "2026-11-03";
export function absoluteUrl(path:string){return new URL(path,site.url+"/").href;}
type PageOptions={title:string;description:string;path:string;image?:string;imageAlt?:string};
export function pageMetadata({title,description,path,image="/foods/dried-mango.webp",imageAlt="Food ingredient product illustration for SJH DEV"}:PageOptions):Metadata{
  const url=absoluteUrl(path),fullTitle=path==="/"?`SJH DEV | ${title}`:`${title} | SJH DEV`;
  return {title,description,alternates:{canonical:url},
    robots:{index:true,follow:true,googleBot:{index:true,follow:true,"max-image-preview":"large","max-snippet":-1,"max-video-preview":-1}},
    openGraph:{type:"website",locale:"en_US",siteName:site.name,title:fullTitle,description,url,images:[{url:absoluteUrl(image),width:1024,height:1024,alt:imageAlt}]},
    twitter:{card:"summary_large_image",title:fullTitle,description,images:[absoluteUrl(image)]}
  };
}
export const organizationSchema={"@context":"https://schema.org","@type":"Organization","@id":absoluteUrl("/#organization"),name:site.name,legalName:site.legalName,url:absoluteUrl("/"),email:site.email,description:"Hong Kong company focused on dried, dehydrated, canned and freeze-dried food ingredients, nuts and seeds.",logo:{"@type":"ImageObject",url:absoluteUrl("/organization-logo.png"),width:512,height:512},address:{"@type":"PostalAddress",addressLocality:site.address.city,addressCountry:site.address.country}};
export const websiteSchema={"@context":"https://schema.org","@type":"WebSite","@id":absoluteUrl("/#website"),name:site.name,url:absoluteUrl("/"),inLanguage:"en",publisher:{"@id":absoluteUrl("/#organization")}};
export function collectionSchema(title:string,path:string,items:typeof foods){const url=absoluteUrl(path);return {"@context":"https://schema.org","@type":"CollectionPage","@id":url+"#collection",url,name:title,inLanguage:"en",isPartOf:{"@id":absoluteUrl("/#website")},mainEntity:{"@type":"ItemList",numberOfItems:items.length,itemListElement:items.map((p,i)=>({"@type":"ListItem",position:i+1,item:{"@type":"Thing",name:p.name,description:p.description,url:url+"#"+p.slug,image:absoluteUrl(p.image)}}))}};}
export function breadcrumbSchema(items:{name:string;path:string}[]){return {"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:items.map((p,i)=>({"@type":"ListItem",position:i+1,name:p.name,item:absoluteUrl(p.path)}))};}
