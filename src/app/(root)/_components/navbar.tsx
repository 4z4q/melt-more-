"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowUpLeft, Home, Gift, Candy, UtensilsCrossed, MapPin } from "lucide-react";

const links = [
  { label: "الرئيسية", mobileLabel: "الرئيسية", href: "/", section: "home", icon: Home },
  { label: "باقات الضيافة", mobileLabel: "الباقات", href: "/#packages", section: "packages", icon: Gift },
  { label: "الشوكولاتة والحشوات", mobileLabel: "الحشوات", href: "/flavours", section: "flavours", icon: Candy },
  { label: "قائمة الضيافة", mobileLabel: "الضيافة", href: "/#menu", section: "menu", icon: UtensilsCrossed },
  { label: "فروعنا", mobileLabel: "فروعنا", href: "/#branches", section: "branches", icon: MapPin },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 40);
      if (pathname !== "/") return;
      let current = "home";
      for (const id of ["home", "packages", "menu", "branches"]) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= 190) current = id;
      }
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [pathname]);

  const current = pathname === "/flavours" ? "flavours" : active;
  return (
    <header className={`mm-header ${scrolled || pathname !== "/" ? "mm-header-solid" : ""}`}>
      <div className="mm-nav mm-container">
        <Link href="/" className="mm-wordmark" aria-label="ميلت مور — الرئيسية">
          <span dir="ltr">Melt More<span className="mm-wordmark-dot">.</span></span>
          <small>CHOCOLATE & MORE</small>
        </Link>
        <nav aria-label="التنقل الرئيسي" className="mm-desktop-nav">
          {links.map(link => <Link key={link.href} href={link.href} className={current === link.section ? "is-active" : ""} aria-current={current === link.section ? "location" : undefined}>{link.label}</Link>)}
        </nav>
        <Link href="/#order" className="mm-nav-cta">نسّق مناسبتك <ArrowUpLeft size={16} /></Link>
      </div>
      <nav className="mm-mobile-links" aria-label="التنقل على الجوال">
        {links.map(({ icon: Icon, ...link }) => (
          <Link key={link.href} href={link.href} className={current === link.section ? "is-active" : ""} aria-current={current === link.section ? "location" : undefined}>
            <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
            <span>{link.mobileLabel}</span>
          </Link>
        ))}
      </nav>
    </header>
  );
}

