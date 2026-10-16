import type {Metadata} from "next";
import {Suspense} from "react";
import Link from "next/link";
import {HardwareExplorer} from "@/components/hardware-explorer";
export const metadata:Metadata={title:"Servers, Hardware & Electronics",description:"Explore server, storage, networking, computer component and electronics sourcing with SJH DEV. Browse categories and build a specific commercial inquiry.",alternates:{canonical:"/hardware"}};
export default function Page(){return <section className="hw-catalog container-page"><nav className="hw-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>Hardware</span></nav><div className="hw-page-heading"><h1>Find your hardware.</h1><p>Explore the product categories below. For a quotation, tell us the exact model or configuration, quantity and destination.</p></div><Suspense fallback={<p>Loading hardware categories…</p>}><HardwareExplorer/></Suspense><p className="hw-commercial-note">Product categories introduce the types of inquiries we handle. Exact models, configuration, condition, warranty, availability and lead times are confirmed in a quotation.</p></section>;}

