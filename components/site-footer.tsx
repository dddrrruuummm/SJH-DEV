import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { navItems, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-white">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="font-serif text-2xl font-bold">{site.name}</p>
          <p className="mt-4 max-w-md text-sm leading-6 text-white/70">
            Fresh origins and enterprise infrastructure, connected through global trade conversations.
          </p>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-white/60">Explore</p>
          <div className="mt-4 grid gap-2 text-sm text-white/75">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-white/60">Contact</p>
          <div className="mt-4 grid gap-3 text-sm text-white/75">
            <a className="flex gap-2 hover:text-white" href={`mailto:${site.email}`}><Mail size={16} />{site.email}</a>
            <p className="flex gap-2"><MapPin size={16} />Based in {site.address.city}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © 2026 {site.legalName}. All rights reserved.
      </div>
    </footer>
  );
}
