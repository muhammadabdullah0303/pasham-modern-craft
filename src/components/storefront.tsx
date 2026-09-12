import { Link } from "@tanstack/react-router";
import { Menu, Search, UserRound, ShoppingBag, Instagram, Facebook, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/wadiy-logo.png.asset.json";
import hero from "@/assets/hero-shawl.jpg";
import editorial from "@/assets/editorial-man.jpg";
import craft from "@/assets/craft-loom.jpg";
import textiles from "@/assets/shawl-textiles.jpg";

export const imagery = { hero, editorial, craft, textiles };

export const products = [
  { name: "Heritage Kashmiri Shawl", price: "Rs. 8,500", image: editorial, label: "Kashmiri" },
  { name: "Classic Wool Shawl", price: "Rs. 7,500", image: textiles, label: "Wool" },
  { name: "Pashmina Shawl", price: "Rs. 12,500", image: hero, label: "Pashmina" },
  { name: "Midnight Wool Shawl", price: "Rs. 9,500", image: editorial, label: "Wool" },
  { name: "Charcoal Wool Stole", price: "Rs. 8,000", image: textiles, label: "Stoles" },
  { name: "Dune Pashmina Shawl", price: "Rs. 11,500", image: hero, label: "Pashmina" },
  { name: "Royal Kashmiri Shawl", price: "Rs. 13,500", image: craft, label: "Kashmiri" },
  { name: "Espresso Wool Shawl", price: "Rs. 9,000", image: textiles, label: "Wool" },
];

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return <img src={logo.url} alt="Wadiy-E-Pasham — Luxury Shawls & Stoles" className={`h-12 w-auto object-contain ${inverse ? "brightness-0 invert opacity-90" : ""}`} />;
}

export function Header() {
  return <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-sm">
    <div className="section-shell grid h-[74px] grid-cols-[auto_1fr_auto] items-center gap-4">
      <Link to="/" aria-label="Wadiy-E-Pasham home"><Logo /></Link>
      <nav className="hidden items-center justify-center gap-8 md:flex editorial-label text-foreground/80">
        <Link to="/shop" className="hover:text-primary">New Arrivals</Link><Link to="/shop" className="hover:text-primary">Shawls</Link><Link to="/shop" className="hover:text-primary">Collections</Link><Link to="/about" className="hover:text-primary">Our Story</Link><a href="#journal" className="hover:text-primary">Journal</a>
      </nav>
      <div className="flex items-center justify-end gap-1">
        <Button variant="ghost" size="icon" aria-label="Search"><Search /></Button>
        <Button variant="ghost" size="icon" aria-label="Account" className="hidden sm:inline-flex"><UserRound /></Button>
        <Button variant="ghost" size="icon" asChild aria-label="Shopping bag"><Link to="/cart"><ShoppingBag /></Link></Button>
        <Button variant="ghost" size="icon" aria-label="Open menu" className="md:hidden"><Menu /></Button>
      </div>
    </div>
  </header>;
}

export function ProductCard({ product, index = 0 }: { product: typeof products[number]; index?: number }) {
  const positions = ["object-center", "object-left", "object-[70%_center]", "object-[35%_center]"];
  return <article className="group min-w-0">
    <Link to="/product" className="image-reveal block aspect-[4/5] bg-secondary">
      <img src={product.image} alt={product.name} width={800} height={1000} loading="lazy" className={`image-lift h-full w-full object-cover ${positions[index % positions.length]}`} />
    </Link>
    <div className="pt-4"><p className="editorial-label text-muted-foreground">{product.label}</p><h3 className="mt-1 text-xl leading-tight"><Link to="/product">{product.name}</Link></h3><p className="mt-1 text-xs font-semibold">{product.price}</p><p className="mt-2 text-[10px] text-primary" aria-label="5 out of 5 stars">★★★★★ <span className="text-muted-foreground">(12)</span></p></div>
  </article>;
}

export function Footer() {
  return <footer className="bg-foreground py-16 text-primary-foreground">
    <div className="section-shell grid gap-12 lg:grid-cols-[1.25fr_2fr_1.2fr]">
      <div><Logo inverse /><p className="mt-5 max-w-xs font-display text-2xl leading-snug">Timeless tradition.<br/>Modern expression.</p></div>
      <div className="grid grid-cols-3 gap-6 text-xs leading-7"><div><p className="editorial-label mb-3">Shop</p><a href="/shop">Shawls</a><br/><a href="/shop">New Arrivals</a><br/><a href="/shop">Collections</a><br/><a href="#gift">Gift Cards</a></div><div><p className="editorial-label mb-3">About</p><a href="/about">Our Story</a><br/><a href="/about">Craftsmanship</a><br/><a href="#journal">Journal</a><br/><a href="#contact">Contact</a></div><div><p className="editorial-label mb-3">Help</p><a href="#shipping">Shipping</a><br/><a href="#returns">Returns</a><br/><a href="#faqs">FAQs</a><br/><a href="#care">Care Guide</a></div></div>
      <div><p className="editorial-label">Join our journey</p><p className="mt-3 text-xs text-primary-foreground/65">Private previews, stories and new collections.</p><div className="mt-5 flex border-b border-primary-foreground/40"><input aria-label="Email address" placeholder="Your email address" className="min-w-0 flex-1 bg-transparent py-3 text-xs outline-none placeholder:text-primary-foreground/50"/><Button variant="ghost" size="icon" aria-label="Subscribe" className="text-primary-foreground"><ArrowRight/></Button></div><div className="mt-6 flex gap-4"><Instagram size={16}/><Facebook size={16}/></div></div>
    </div>
    <div className="section-shell mt-14 flex flex-col justify-between gap-3 border-t border-primary-foreground/20 pt-6 text-[10px] text-primary-foreground/55 sm:flex-row"><span>© 2026 Wadiy-E-Pasham. All rights reserved.</span><span>Privacy Policy &nbsp; · &nbsp; Terms & Conditions</span></div>
  </footer>;
}

export function Page({ children }: { children: React.ReactNode }) { return <><Header/><main>{children}</main><Footer/></>; }