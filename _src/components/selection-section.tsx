"use client";
// components/
import { useState } from "react";
import { ProductGrid } from "@/components/product-grid";
import { StickyBar } from "@/components/sticky-bar";

export function SelectionSection() {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  function toggleSelection(id: number) {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  return (
    <>
      <ProductGrid selectedIds={selectedIds} onToggle={toggleSelection} />
      <StickyBar selectedIds={selectedIds} />
    </>
  );
}
