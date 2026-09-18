"use client";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
type ProductGridProps = { selectedIds: number[]; onToggle: (id: number) => void; };
const groups = [{name:"جميع الحشوات", pattern:null},{name:"المكسرات", pattern:/بندق|بيكان|فستق|جمل|صنوبر|سوداني/},{name:"القهوة والبهارات",pattern:/قهوة|هيل/},{name:"الفواكه",pattern:/رمان|مانجو|ليمون/},{name:"البسكويت والكراميل",pattern:/بسكويت|لوتس|أوريو|بريتزل|كراميل/}];
const normalize = (s:string) => s.replace(/[أإآ]/g,"ا").replace(/ى/g,"ي").replace(/[\u064B-\u065F]/g,"").trim();
export function ProductGrid({ selectedIds, onToggle }: ProductGridProps) {
  const selectedSet = useMemo(() => new Set(selectedIds), [selectedIds]);
  const [query,setQuery] = useState("");
  const [category,setCategory] = useState(0);
  const [onlySelected,setOnlySelected] = useState(false);
  const shown = products.filter(p => normalize(p.name).includes(normalize(query)) && (!groups[category].pattern || groups[category].pattern!.test(p.name)) && (!onlySelected || selectedSet.has(p.id)));
  return <section id="flavours" className="mm-flavours" aria-labelledby="flavours-title">
    <div className="mm-flavours-intro"><div className="mm-container"><p className="mm-eyebrow">A TASTE FOR EVERY MOOD</p><h1 id="flavours-title">اكتشف حشوتك <em>المفضلة.</em></h1><p>نكهات تلتقي بالشوكولاتة لتصنع لحظتك الحلوة.<br />اختر ما تحب، واجمع تشكيلتك، وأرسلها لنا عبر واتساب.</p><span className="mm-flavours-count">{products.length} حشوة… والكثير من الحلاوة</span></div><span className="mm-flavours-watermark" aria-hidden="true">Melt.</span></div>
    <div className="mm-container mm-catalogue">
      <div className="mm-catalogue-toolbar"><label className="mm-search"><Search size={19}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="ابحث عن حشوتك… فستق، كراميل، قهوة" aria-label="ابحث عن حشوة" />{query && <button type="button" onClick={()=>setQuery("")} aria-label="مسح البحث"><X size={17}/></button>}</label><button type="button" className={`mm-selected-filter ${onlySelected ? "is-active" : ""}`} onClick={()=>setOnlySelected(!onlySelected)} aria-pressed={onlySelected}><SlidersHorizontal size={17}/> اختياراتي ({selectedIds.length})</button></div>
      <div className="mm-filter-row" role="group" aria-label="تصنيف الحشوات">{groups.map((group,index)=><button key={group.name} type="button" aria-pressed={category===index} className={category===index ? "is-active" : ""} onClick={()=>setCategory(index)}>{group.name}</button>)}</div>
      <div className="mm-catalogue-count"><span aria-live="polite">{shown.length} حشوة</span><span>لمسة واحدة لإضافة ما تحب</span></div>
      <div className="mm-product-grid">{shown.map(product=><ProductCard key={product.id} product={product} selected={selectedSet.has(product.id)} onToggle={onToggle} priority={product.id<=4}/>)}</div>
      {shown.length===0 && <div className="mm-empty"><Search size={32}/><h2>{onlySelected ? "لا توجد اختيارات مطابقة" : "لم نجد هذه النكهة"}</h2><p>جرّب كلمة أخرى أو استعرض التشكيلة كاملة.</p><button className="mm-button mm-button-dark" onClick={()=>{setQuery("");setCategory(0);setOnlySelected(false);}}>استعرض كل الحشوات</button></div>}
    </div>
  </section>;
}
