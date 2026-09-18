"use client";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { useMemo } from "react";

type ProductGridProps = {
  selectedIds: number[];
  onToggle: (id: number) => void;
};

export function ProductGrid({ selectedIds, onToggle }: ProductGridProps) {
  const selectedSet = useMemo(() => new Set(selectedIds), [selectedIds]);

  return (
    <section
      id="flavours"
      aria-labelledby="flavours-title"
      className="relative bg-[#e8f4f3] text-[#0d3331] animate-pkg-fade-in"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        {/* Section title with thin gold underline */}
        <div className="text-center mb-12 sm:mb-14">
          <p className="text-xs tracking-[0.4em] uppercase text-[#458482] mb-3">
            Black Chocolate
          </p>
          <h2
            id="flavours-title"
            className="font-serif text-5xl md:text-6xl text-balance text-[#0d3331]"
          >
            الحشــــوات
          </h2>
          <div
            aria-hidden="true"
            className="mx-auto mt-5 h-[2px] w-16 bg-[#d4a96a]"
          />
          <p className="mt-5 text-base text-[#3a7472] font-light max-w-xl mx-auto">
            اختر الحشوات المفضلة وأرسل طلبك مباشرةً عبر واتساب
          </p>
        </div>

        {/* Responsive grid — 2 / 3 / 4 cols, gaps per spec */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              selected={selectedSet.has(product.id)}
              onToggle={onToggle}
              priority={product.id <= 4}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
