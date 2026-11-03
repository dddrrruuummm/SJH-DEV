import type {Metadata} from "next";
import {ContactSection} from "@/components/sections";
export const metadata:Metadata={title:"Contact & Quotations",description:"Discuss servers, hardware, electronics or food ingredient requirements with SJH DEV LIMITED.",alternates:{canonical:"/contact"}};
export default async function Page({searchParams}:{searchParams:Promise<{product?:string;topic?:string;food?:string}>}){
  const params=await searchParams;
  const product=typeof params.product==="string"?params.product.slice(0,160):"";
  const food=typeof params.food==="string"?params.food.slice(0,160):"";
  const allowed=["Hardware procurement","Computers & electronics","Food ingredients","Trade partnership"];
  const requestedTopic=params.topic==="Fresh produce"?"Food ingredients":params.topic;
  const topic=food?"Food ingredients":product?"Hardware procurement":allowed.includes(requestedTopic||"")?requestedTopic:"";
  const details=food?"Food product: "+food+"\nProduct form / grade:\nPacking / pack size:\nQuantity / unit:\nDestination:\nRequired timing:\nDocumentation requirements:":product?"Product category: "+product+"\nModel / part number:\nConfiguration:\nQuantity:\nCondition preference:\nDestination:\nRequired timing:":"";
  return <ContactSection page initialTopic={topic} initialDetails={details}/>;
}
