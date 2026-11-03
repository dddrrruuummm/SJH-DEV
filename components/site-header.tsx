import Image from "next/image";
import Link from "next/link";
import {site, navItems} from "@/lib/site";
export function SiteHeader(){return <header className="site-header food-header">
  <a className="skip-link" href="#main-content">Skip to content</a>
  <div className="food-utility"><div className="container-page"><span>Food ingredients trade · Hong Kong</span><a href={"mailto:"+site.email}>{site.email}</a></div></div>
  <div className="container-page food-header-main"><Link className="food-brand" href="/" aria-label="SJH DEV home"><Image src="/brand-logo.svg" alt="SJH DEV — Food ingredients" width={232} height={64} priority/></Link>
    <nav className="food-main-nav" aria-label="Main navigation">{navItems.filter(i=>i.href!=="/contact").map(i=><Link key={i.href} href={i.href}>{i.label}</Link>)}</nav>
    <Link className="action food-header-inquiry" href="/contact">Request a quote ↗</Link>
    <details className="mobile-menu"><summary>Menu</summary><nav aria-label="Mobile navigation">{navItems.map(i=><Link href={i.href} key={i.href}>{i.label}</Link>)}</nav></details>
  </div>
  <div className="food-search-band"><form className="container-page" action="/showcase" role="search"><label htmlFor="ingredient-search">Find an ingredient</label><input id="ingredient-search" name="q" type="search" placeholder="Search garlic, dried fruit, canned products…"/><button type="submit">Search</button></form></div>
</header>;}
