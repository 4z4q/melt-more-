"use client";
import { Check, Plus } from "lucide-react";
import type { Product } from "@/lib/products";
import ImageKit from "./image-kit";
type ProductCardProps = { product: Product; selected: boolean; onToggle: (id:number)=>void; priority?:boolean; };
export function ProductCard({product,selected,onToggle,priority}:ProductCardProps) {
 return <button type="button" onClick={()=>onToggle(product.id)} aria-pressed={selected} aria-label={`${selected ? "إلغاء اختيار" : "اختيار"} ${product.name.trim()}`} className={`mm-product-card ${selected ? "is-selected" : ""}`}><div className="mm-product-image"><ImageKit src={product.image} alt={product.name.trim()} priority={priority}/><span className="mm-product-index">N° {String(product.id).padStart(2,"0")}</span><span className="mm-product-add">{selected ? <Check size={18}/> : <Plus size={18}/>}</span></div><div className="mm-product-info"><span>CHOCOLATE COLLECTION</span><h2>{product.name.trim()}</h2><p>{selected ? "أُضيفت إلى تشكيلتك" : "أضف إلى تشكيلتك"}</p></div></button>;
}
