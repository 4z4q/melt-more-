"use client";
import { BranchOrder } from "@/components/branch-order";

import { products } from "@/lib/products";
import { ArrowUpLeft, X } from "lucide-react";
export function StickyBar({selectedIds,onClear}:{selectedIds:number[];onClear?:()=>void}) {
 if(!selectedIds.length) return null;
 const names = products.filter(p=>selectedIds.includes(p.id)).map(p=>p.name);
 return <aside className="mm-selection-bar" aria-label="تشكيلتك المختارة"><div><span className="mm-selection-count" aria-live="polite">{selectedIds.length}</span><p>تشكيلتك الخاصة<small>{names.slice(0,2).join("، ")}{names.length>2 ? " والمزيد…" : ""}</small></p></div><div>{onClear && <button className="mm-clear-selection" onClick={onClear} aria-label="مسح كل الاختيارات"><X size={18}/></button>}<BranchOrder message={["مرحباً ميلت مور، أرغب في طلب الحشوات التالية:", ...names.map(name => "• " + name.trim())].join("\n")} className="mm-button mm-button-gold">أرسل تشكيلتي <ArrowUpLeft size={18}/></BranchOrder></div></aside>;
}
