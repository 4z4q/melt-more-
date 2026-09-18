"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

/* ─── Slide data ─────────────────────────────────────────────────── */
const slides = [
  {
    id: 1,
    desktopSrc: "/og-image.jpg",
    mobileSrc: "/og-image.jpg",
    alt: "Black Chocolate – مجموعة هدايا الشوكولاتة البلجيكية الفاخرة",
    label: "اكتشف تشكيلتنا",
    href: "#packages",
  },
  {
    id: 2,
    desktopSrc: "/banner.webp",
    mobileSrc: "/banner.webp",
    alt: "توت مغطى بالشوكولاتة البلجيكية من بلاك شوكلت الرياض",
    label: "تعرف على البكجات",
    href: "#packages",
  },
  {
    id: 3,
    desktopSrc: "/1.jpg",
    mobileSrc: "/1.jpg",
    alt: "هدايا الأفراح والمناسبات – بلاك شوكلت الرياض",
    label: "اطلب الآن",
    href: "#packages",
  },
];

/* ─── Hero Carousel ──────────────────────────────────────────────── */
export function Hero() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const autoplay = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
    api.on("reInit", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  /* keyboard navigation */
  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        api?.scrollPrev();
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        api?.scrollNext();
      }
    },
    [api]
  );

  return (
    <section
      id="home"
      aria-label="عروض بلاك شوكلت"
      className="relative w-full overflow-hidden bg-[#1a4d4b] pt-[108px] md:pt-16"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      dir="ltr"
    >
      <Carousel
        setApi={setApi}
        opts={{ loop: true, align: "center", dragFree: false }}
        plugins={[autoplay.current]}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem
              key={slide.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${slides.length}`}
            >
              <div className="relative w-full aspect-[4/5] sm:aspect-[8/3]">
                {/* Desktop image */}
                <Image
                  src={slide.desktopSrc}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="100vw"
                  className="object-cover hidden sm:block transition-opacity duration-700"
                />

                {/* Mobile image */}
                <Image
                  src={slide.mobileSrc}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="100vw"
                  className="object-cover block sm:hidden transition-opacity duration-700"
                />

                {/* Overlay gradient */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#0d3331]/70 via-transparent to-transparent"
                />

                {/* Slide CTA */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
                  <a
                    href={slide.href}
                    className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#d4a96a] text-[#1a4d4b] text-sm tracking-[0.2em] uppercase font-semibold hover:bg-[#b8924e] transition-colors duration-300 shadow-[0_8px_30px_-8px_rgba(212,169,106,0.6)] whitespace-nowrap"
                  >
                    {slide.label}
                  </a>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* ── Prev / Next arrows ── */}
        {/* <button
          onClick={() => api?.scrollPrev()}
          aria-label="الشريحة السابقة"
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center size-9 sm:size-11 rounded-full bg-[#1a4d4b]/70 text-[#fbebd3] border border-[#fbebd3]/20 hover:bg-[#d4a96a] hover:text-[#1a4d4b] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4a96a]"
        >
          <ChevronLeft className="size-5 sm:size-6" />
        </button>

        <button
          onClick={() => api?.scrollNext()}
          aria-label="الشريحة التالية"
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center size-9 sm:size-11 rounded-full bg-[#1a4d4b]/70 text-[#fbebd3] border border-[#fbebd3]/20 hover:bg-[#d4a96a] hover:text-[#1a4d4b] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4a96a]"
        >
          <ChevronRight className="size-5 sm:size-6" />
        </button> */}

        {/* ── Pagination dots ── */}
        <div
          role="tablist"
          aria-label="تنقل بين الشرائح"
          className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2"
        >
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={index === current}
              aria-label={`الشريحة ${index + 1}`}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4a96a]",
                index === current
                  ? "bg-[#d4a96a] w-6 h-2"
                  : "bg-[#fbebd3]/50 w-2 h-2 hover:bg-[#fbebd3]/80"
              )}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
}
