import type {Metadata} from "next";
import {ContactSection} from "@/components/sections";
import {foods} from "@/lib/foods";
export const metadata:Metadata={title:"Contact & Quotations",description:"Discuss food ingredient sourcing, product formats, packing and quantities with SJH DEV LIMITED.",alternates:{canonical:"/contact"}};
export default async function Page({searchParams}:{searchParams:Promise<{food?:string;product?:string;topic?:string}>}){
  const params=await searchParams;
  const candidate=typeof params.food==="string"?params.food:typeof params.product==="string"?params.product:"";
  const food=foods.find(p=>p.name===candidate)?.name||"";
  const allowed=["Food ingredients","Packing & specifications","Trade partnership"];
  const topic=food?"Food ingredients":allowed.includes(params.topic||"")?params.topic:"";
  const details=food?"Food product: "+food+"\nProduct form / grade:\nPacking / pack size:\nQuantity / unit:\nDestination:\nRequired timing:\nDocumentation requirements:":"";
  return <ContactSection page initialTopic={topic} initialDetails={details}/>;
}
