import Image from "next/image";
import Link from "next/link";
import {site} from "@/lib/site";
import {foodCategories} from "@/lib/foods";
export function SiteFooter(){return <footer className="food-footer"><div className="container-page">
  <div className="food-footer-opening"><h2>Tell us the ingredient.<br/>Start with the details.</h2><a href={"mailto:"+site.email}>{site.email} ↗</a></div>
  <div className="food-footer-grid"><div><Link href="/" aria-label="SJH DEV home"><Image src="/brand-logo-light.svg" alt="SJH DEV — Food ingredients" width={232} height={64}/></Link><p>Dried, dehydrated, canned and freeze-dried products. Nuts and seeds.</p><p>{site.legalName}<br/>Hong Kong</p></div>
    <div><h3>Products</h3>{foodCategories.slice(0,4).map(c=><Link key={c.slug} href={"/products/"+c.slug}>{c.name}</Link>)}</div>
    <div><h3>More ingredients</h3>{foodCategories.slice(4).map(c=><Link key={c.slug} href={"/products/"+c.slug}>{c.name}</Link>)}</div>
    <div><h3>Company</h3><Link href="/about">About SJH DEV</Link><Link href="/services">Sourcing &amp; inquiries</Link><Link href="/contact">Contact &amp; quotations</Link></div>
  </div><div className="food-footer-base"><span>© {new Date().getFullYear()} {site.legalName}</span><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms">Terms</Link></div>
</div></footer>;}
