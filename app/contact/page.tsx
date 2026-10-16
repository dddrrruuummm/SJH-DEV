import type {Metadata} from "next";
import {ContactSection} from "@/components/sections";
export const metadata:Metadata={title:"Contact & Quotations",description:"Discuss servers, hardware, electronics or fresh produce requirements with SJH DEV LIMITED.",alternates:{canonical:"/contact"}};
export default async function Page({searchParams}:{searchParams:Promise<{product?:string;topic?:string}>}){
  const params=await searchParams;
  const product=typeof params.product==="string"?params.product.slice(0,160):"";
  const allowed=["Hardware procurement","Computers & electronics","Fresh produce","Trade partnership"];
  const topic=product?"Hardware procurement":allowed.includes(params.topic||"")?params.topic:"";
  return <ContactSection page initialTopic={topic} initialDetails={product?"Product category: "+product+"\nModel / part number:\nConfiguration:\nQuantity:\nCondition preference:\nDestination:\nRequired timing:":""}/>;
}
