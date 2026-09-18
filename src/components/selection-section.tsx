"use client";
import { useSyncExternalStore } from "react";
import { ProductGrid } from "@/components/product-grid";
import { StickyBar } from "@/components/sticky-bar";
import { products } from "@/lib/products";
const key = "melt-more-selection";
let fallback = "[]";
function snapshot() {try{return localStorage.getItem(key) ?? fallback;}catch{return fallback;}}
function subscribe(callback:()=>void) {
 window.addEventListener("storage",callback);
 window.addEventListener("melt-selection",callback);
 return ()=>{window.removeEventListener("storage",callback);window.removeEventListener("melt-selection",callback);};
}
function save(ids:number[]) {
 fallback=JSON.stringify(ids);
 try{localStorage.setItem(key,fallback);}catch{/* Keep the selection available when storage is disabled. */}
 window.dispatchEvent(new Event("melt-selection"));
}
export function SelectionSection() {
 const stored=useSyncExternalStore(subscribe,snapshot,()=>"[]");
 let selectedIds:number[]=[];
 try{const value:unknown=JSON.parse(stored);if(Array.isArray(value))selectedIds=[...new Set(value.filter((id):id is number=>typeof id==="number" && products.some(p=>p.id===id)))];}catch{/* Ignore an invalid saved selection. */}
 return <><ProductGrid selectedIds={selectedIds} onToggle={id=>save(selectedIds.includes(id)?selectedIds.filter(x=>x!==id):[...selectedIds,id])}/><StickyBar selectedIds={selectedIds} onClear={()=>save([])}/></>;
}
