"use client";
import { useState } from "react";
import { ArrowUpLeft, Check, Gift, Users } from "lucide-react";
type Package = {
  id: number;
  name: string;
  guests: string;
  trays: string;
  price: number;
  gift: string;
  featured?: boolean;
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const packages: Package[] = [
  {
    id: 1,
    name: "باقة 1",
    guests: "50 – 70 شخص",
    trays: "7 صواني",
    price: 2050,
    gift: "50 قطعة",
  },
  {
    id: 2,
    name: "باقة 2",
    guests: "100 شخص",
    trays: "12 صينية",
    price: 3550,
    gift: "100 قطعة",
  },
  {
    id: 3,
    name: "باقة 3",
    guests: "150 شخص",
    trays: "16 صينية",
    price: 4950,
    gift: "150 قطعة + 4 فازات + مشرفة",
  },
  {
    id: 4,
    name: "باقة 4",
    guests: "200 شخص",
    trays: "20 صينية",
    price: 6150,
    gift: "200 قطعة + 4 فازات + مشرفة + تصوير",
    featured: true,
  },
  {
    id: 5,
    name: "باقة 5",
    guests: "250 شخص",
    trays: "24 صينية",
    price: 7350,
    gift: "250 قطعة + 6 فازات + تصوير",
  },
  {
    id: 6,
    name: "باقة 6",
    guests: "300 شخص",
    trays: "28 صينية",
    price: 8550,
    gift: "300 قطعة + 8 فازات + تصوير",
  },
  {
    id: 7,
    name: "باقة 7",
    guests: "350 شخص",
    trays: "34 صينية",
    price: 10250,
    gift: "350 قطعة + تصوير + صينية مطربة",
  },
  {
    id: 8,
    name: "باقة 8",
    guests: "400 شخص",
    trays: "38 صينية",
    price: 11350,
    gift: "400 قطعة + تصوير + صينية مطربة",
  },
];

const filters = [{ label: "جميع الباقات", max: 0 }, { label: "حتى ١٠٠ ضيف", max: 100 }, { label: "١٥٠ – ٢٥٠ ضيف", max: 250 }, { label: "٣٠٠ ضيف وأكثر", max: 400 }];
export function PkgPackages() {
  const [filter, setFilter] = useState(0);
  const shown = packages.filter(p => filter === 0 || (filter === 100 ? p.id <= 2 : filter === 250 ? p.id >= 3 && p.id <= 5 : p.id >= 6));
  return <section id="packages" className="mm-section mm-packages" aria-labelledby="packages-title"><div className="mm-container">
    <div className="mm-section-heading"><div><p className="mm-eyebrow">THE ART OF HOSTING</p><h2 id="packages-title">مناسبتك استثنائية.<br /><em>وضيافتها كذلك.</em></h2></div><p>من اللقاءات الحميمة إلى الأفراح الكبيرة،<br />باقات مدروسة لتجد ما يليق بعدد ضيوفك.</p></div>
    <div className="mm-filter-row" role="group" aria-label="تصفية الباقات حسب عدد الضيوف">{filters.map(f => <button type="button" key={f.max} aria-pressed={filter === f.max} className={filter === f.max ? "is-active" : ""} onClick={() => setFilter(f.max)}>{f.label}</button>)}</div>
    <p className="mm-results sr-only" aria-live="polite">{shown.length} باقات</p>
    <div className="mm-package-grid">{shown.map(pkg => <article key={pkg.id} className={`mm-package-card ${pkg.featured ? "mm-package-featured" : ""}`}>
      <div className="mm-package-top"><span className="mm-package-number">N° {String(pkg.id).padStart(2, "0")}</span>{pkg.featured && <span className="mm-package-badge">باقة مميزة</span>}</div>
      <h3>{pkg.name}</h3><p className="mm-package-guests"><Users size={16} /> {pkg.guests}</p>
      <div className="mm-package-price"><strong>{new Intl.NumberFormat("en-US").format(pkg.price)}</strong><span>ر.س</span></div>
      <div className="mm-package-details"><p><Check size={16} /> {pkg.trays} لضيافة مناسبتك</p><p><Gift size={16} /><span>{pkg.gift}</span></p></div>
      <a className="mm-package-order" href={`https://wa.me/966552202321?text=${encodeURIComponent(`مرحباً ميلت مور، أرغب في الاستفسار عن ${pkg.name}، لعدد ${pkg.guests}، بسعر ${pkg.price} ر.س.`)}`} target="_blank" rel="noopener noreferrer" aria-label={`اطلب ${pkg.name} عبر واتساب`}>اختر هذه الباقة <ArrowUpLeft size={18} /></a>
    </article>)}</div>
    <div className="mm-package-note"><span>لأن لكل مناسبة تفاصيلها الخاصة</span><a href="https://wa.me/966552202321" target="_blank" rel="noopener noreferrer">دعنا نساعدك في الاختيار <ArrowUpLeft size={16} /></a></div>
  </div></section>;
}
