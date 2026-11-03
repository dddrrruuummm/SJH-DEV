import type {Metadata} from "next";
import {SiteHeader} from "@/components/site-header";
import {SiteFooter} from "@/components/site-footer";
import {site} from "@/lib/site";
import "./globals.css";
import "./food.css";
export const metadata:Metadata={
  metadataBase:new URL(site.url),title:{default:"SJH DEV | Food Ingredients & Trade",template:"%s | SJH DEV"},
  description:"Food ingredient sourcing with SJH DEV LIMITED. Explore dehydrated vegetables, dried mushrooms, seasonings, canned foods, dried fruit, freeze-dried products, nuts and seeds.",
  keywords:["food ingredients trade","dehydrated vegetables","dried mushrooms","canned foods","dried fruit","freeze-dried fruit","nuts and seeds","Hong Kong trading company","SJH DEV"],
  openGraph:{title:"SJH DEV | Food Ingredients & Trade",description:"Dried, dehydrated, canned and freeze-dried food products. Nuts, seeds and specific sourcing inquiries.",url:site.url,siteName:site.name,images:[{url:"/foods/dried-mango.webp",width:1024,height:1024,alt:"Dried mango product illustration for SJH DEV food ingredients"}],locale:"en_US",type:"website"},
  twitter:{card:"summary_large_image",title:"SJH DEV | Food Ingredients & Trade",description:"Food products, packing requirements and focused sourcing inquiries.",images:["/foods/dried-mango.webp"]},
  alternates:{canonical:site.url}
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){const schema={"@context":"https://schema.org","@type":"Organization",name:site.name,legalName:site.legalName,url:site.url,email:site.email,description:"Hong Kong company focused on food ingredient sourcing and trade inquiries."};return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><SiteHeader/><main id="main-content">{children}</main><SiteFooter/></body></html>;}
