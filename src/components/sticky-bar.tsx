"use client";
import { products } from "@/lib/products";
import { ArrowUpLeft, X } from "lucide-react";
export const WHATSAPP_NUMBER = "966552202321";
export function buildOrderLink(selectedNames: string[]): string {
 const message = "مرحباً ميلت مور، أرغب في طلب الحشوات التالية:\n\n" + selectedNames.map(name=>"• "+name.trim()).join("\n");
 return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
export function StickyBar({selectedIds,onClear}:{selectedIds:number[];onClear?:()=>void}) {
 if(!selectedIds.length) return null;
 const names = products.filter(p=>selectedIds.includes(p.id)).map(p=>p.name);
 return <aside className="mm-selection-bar" aria-label="تشكيلتك المختارة"><div><span className="mm-selection-count" aria-live="polite">{selectedIds.length}</span><p>تشكيلتك الخاصة<small>{names.slice(0,2).join("، ")}{names.length>2 ? " والمزيد…" : ""}</small></p></div><div>{onClear && <button className="mm-clear-selection" onClick={onClear} aria-label="مسح كل الاختيارات"><X size={18}/></button>}<a href={buildOrderLink(names)} target="_blank" rel="noopener noreferrer" className="mm-button mm-button-gold">أرسل تشكيلتك <ArrowUpLeft size={18}/></a></div></aside>;
}
