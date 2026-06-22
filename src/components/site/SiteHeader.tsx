import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "الرئيسية" },
  { to: "/about", label: "من نحن" },
  { to: "/services", label: "خدماتنا" },
  { to: "/projects", label: "مشاريعنا" },
  { to: "/fleet", label: "أسطولنا" },
  { to: "/contact", label: "تواصل" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-charcoal/95 backdrop-blur-md border-b border-white/5 shadow-[var(--shadow-card)]"
          : "bg-transparent",
      )}
    >
      <div className="container-x flex h-20 md:h-24 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2" aria-label="شركة الأسطول الآلي">
          <img src={logoWhite} alt="الأسطول الآلي" className="h-16 md:h-[72px] w-auto object-contain" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="رئيسية">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="relative px-4 py-2 text-base font-medium text-white/80 hover:text-white transition-colors"
              activeProps={{ className: "text-gold" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+966508331111"
            className="flex items-center gap-2 text-base text-white/70 hover:text-gold transition-colors num"
            dir="ltr"
          >
            <Phone className="size-5" />
            +966 50 833 1111
          </a>
          <Link
            to="/contact"
            className="inline-flex h-12 items-center rounded-md bg-gold px-6 text-base font-bold text-charcoal hover:bg-gold-muted hover:text-white transition-colors"
          >
            تواصل معنا
          </Link>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-md text-white hover:bg-white/10"
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile slide-in */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-20 md:top-24 z-40 bg-charcoal transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full",
        )}
        aria-hidden={!open}
      >
        <nav className="container-x flex flex-col py-8 gap-1" aria-label="جانبية">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: n.to === "/" }}
              className="border-b border-white/5 py-4 text-lg font-medium text-white/80 hover:text-gold"
              activeProps={{ className: "text-gold" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex h-12 items-center justify-center rounded-md bg-gold px-5 font-bold text-charcoal"
          >
            تواصل معنا
          </Link>
        </nav>
      </div>
    </header>
  );
}
