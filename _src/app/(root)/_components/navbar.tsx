"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "الرئيسية", href: "/" },
  { label: "البكجات", href: "/#packages" },
  { label: "الحشوات", href: "/flavours" },
  { label: "اطلب الآن", href: "/#order" },
];

const Logo = ({ className }: { className?: string }) => (
  <Image
    src="/logo.png"
    alt="Melt More Logo"
    width={160}
    height={132}
    className={cn("h-auto object-contain", className)}
    priority
  />
);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isLightPage = pathname !== "/";
  const isDark = isLightPage || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        isDark
          ? "border-b border-[#b8d8d7]/40 bg-[#fff8f0]/88 backdrop-blur-xl shadow-[0_2px_20px_-12px_rgba(13,51,49,0.22)]"
          : "bg-transparent"
      )}
    >
      {/* ═════════ Desktop + Mobile Top Bar ═════════ */}
      <div className="mx-auto max-w-7xl relative flex h-16 items-center justify-between px-4 sm:px-6 lg:px-10">
        {/* Desktop Left Spacer */}
        <div className="hidden md:block w-14" />

        {/* ═════════ Logo ═════════ */}
        <Link
          href="/"
          aria-label="Melt More - الصفحة الرئيسية"
          className={cn(
            "flex items-center transition-all duration-500",

            // Mobile → center
            "absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0",

            // Desktop sizing
            "md:flex-shrink-0"
          )}
        >
          {/* Mobile Logo Text */}
          <span
            className={cn(
              "md:hidden flex flex-col items-center leading-none transition-colors duration-500",
              isDark ? "text-[#1a4d4b]" : "text-[#fbebd3]"
            )}
          >
            <span className="text-[15px] font-bold tracking-[0.08em]">
              Black
            </span>

            <span className="mt-0.5 text-[8px] uppercase tracking-[0.32em] opacity-75">
              Chocolate
            </span>
          </span>

          {/* Desktop Logo */}
          <Logo
            className={cn(
              "hidden md:block w-12 lg:w-14 transition-all duration-500",
              !isDark
                ? "brightness-0 invert drop-shadow-[0_1px_4px_rgba(0,0,0,0.18)]"
                : "drop-shadow-[0_2px_6px_rgba(13,51,49,0.20)]"
            )}
          />
        </Link>

        {/* ═════════ Desktop Nav ═════════ */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-10 mx-auto">
          {links.map((l) => {
            const isActive =
              l.href === "/"
                ? pathname === "/"
                : pathname.startsWith(l.href.split("#")[0]) &&
                  l.href.split("#")[0] !== "/";

            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={cn(
                    "group relative py-1 text-sm uppercase tracking-[0.16em] transition-colors duration-300",
                    isDark
                      ? "text-[#1a4d4b]/80 hover:text-[#458482]"
                      : "text-[#fbebd3]/85 hover:text-[#d4a96a]",

                    isActive &&
                      (isDark
                        ? "font-medium text-[#458482]"
                        : "font-medium text-[#d4a96a]")
                  )}
                >
                  {l.label}

                  <span
                    className={cn(
                      "absolute left-0 -bottom-0.5 h-px transition-all duration-500",
                      isActive ? "w-full" : "w-0 group-hover:w-full",
                      isDark ? "bg-[#458482]" : "bg-[#d4a96a]"
                    )}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* ═════════ Desktop CTA ═════════ */}
        <Link
          href="/#order"
          className={cn(
            "hidden md:inline-flex flex-shrink-0 items-center rounded-full border px-6 py-2.5 text-sm uppercase tracking-[0.16em] transition-all duration-500",
            isDark
              ? "border-[#458482] text-[#458482] hover:bg-[#458482] hover:text-[#fff8f0]"
              : "border-[#d4a96a] text-[#d4a96a] hover:bg-[#d4a96a] hover:text-[#1a4d4b]"
          )}
        >
          اطلب الآن
        </Link>
      </div>

      {/* ═════════ Mobile Bottom Nav ═════════ */}
      <nav
        aria-label="القائمة الرئيسية"
        className={cn(
          "md:hidden border-t transition-colors duration-500",
          isDark ? "border-[#b8d8d7]/30" : "border-[#fbebd3]/10"
        )}
      >
        <ul className="flex h-11 items-stretch">
          {links.map((l, i) => {
            const isActive =
              l.href === "/"
                ? pathname === "/"
                : pathname.startsWith(l.href.split("#")[0]) &&
                  l.href.split("#")[0] !== "/";

            const isLast = i === links.length - 1;

            return (
              <li
                key={l.href}
                className={cn(
                  "flex flex-1",
                  !isLast &&
                    (isDark
                      ? "border-l border-[#b8d8d7]/20"
                      : "border-l border-[#fbebd3]/10")
                )}
              >
                <Link
                  href={l.href}
                  className={cn(
                    "relative flex w-full items-center justify-center text-[11px] tracking-[0.06em] transition-all duration-300",

                    // CTA Mobile
                    isLast
                      ? isDark
                        ? "bg-[#1a4d4b] font-semibold text-[#fbebd3] hover:bg-[#458482]"
                        : "bg-[#d4a96a]/85 font-semibold text-[#1a4d4b]"
                      : isDark
                      ? isActive
                        ? "font-semibold text-[#458482]"
                        : "text-[#1a4d4b]/65 hover:text-[#1a4d4b]"
                      : isActive
                      ? "font-semibold text-[#d4a96a]"
                      : "text-[#fbebd3]/70 hover:text-[#fbebd3]"
                  )}
                >
                  {l.label}

                  {/* Active Indicator */}
                  {!isLast && isActive && (
                    <span
                      className={cn(
                        "absolute bottom-0 left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full",
                        isDark ? "bg-[#458482]" : "bg-[#d4a96a]"
                      )}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </motion.header>
  );
}