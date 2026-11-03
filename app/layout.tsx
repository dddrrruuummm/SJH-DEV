import type {Metadata} from "next";
import {SiteHeader} from "@/components/site-header";
import {SiteFooter} from "@/components/site-footer";
import {JsonLd} from "@/components/json-ld";
import {site} from "@/lib/site";
import {pageMetadata,organizationSchema,websiteSchema} from "@/lib/seo";
import "./globals.css";
import "./food.css";
export const metadata:Metadata={...pageMetadata({title:"Food Ingredients & Trade",description:"Food ingredient sourcing with SJH DEV LIMITED. Explore dehydrated vegetables, mushrooms, seasonings, canned foods, dried fruit, nuts and seeds.",path:"/"}),metadataBase:new URL(site.url),title:{default:"SJH DEV | Food Ingredients & Trade",template:"%s | SJH DEV"},keywords:["food ingredients trade","dehydrated vegetables","dried mushrooms","canned foods","dried fruit","freeze-dried fruit","nuts and seeds","Hong Kong trading company","SJH DEV"]};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body><JsonLd data={organizationSchema}/><JsonLd data={websiteSchema}/><SiteHeader/><main id="main-content">{children}</main><SiteFooter/></body></html>;}
