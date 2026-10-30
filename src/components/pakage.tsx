"use client";
import { useState } from "react";
import { ArrowUpLeft, Check, Gift, Users, Sparkles } from "lucide-react";

type Package = {
  id: number;
  name: string;
  guests: string;
  trays: string;
  price: number;
  gift: string;
  featured?: boolean;
};

const WHATSAPP = "966552202321";

// ─── Data ─────────────────────────────────────────────────────────────────────
// الباقات العائلية الصغيرة (للمجالس واللقاءات الخاصة)
const miniPackages: Package[] = [
  {
    id: 9,
    name: "بكج ميني عائلي",
    guests: "2 حالي + 2 موالح",
    trays: "4 صواني",
    price: 1150,
    gift: "",
  },
  {
    id: 10,
    name: "بكج ميني عائلي",
    guests: "3 حالي + 2 موالح",
    trays: "5 صواني",
    price: 1450,
    gift: "",
  },
];

// باقات المناسبات الكبيرة
const eventPackages: Package[] = [
  { id: 1, name: "باقة 1", guests: "50 – 70 شخص", trays: "7 صواني", price: 2050, gift: "50 قطعة" },
  { id: 2, name: "باقة 2", guests: "100 شخص", trays: "12 صينية", price: 3550, gift: "100 قطعة" },
  { id: 3, name: "باقة 3", guests: "150 شخص", trays: "16 صينية", price: 4950, gift: "150 قطعة + 4 فازات + مشرفة" },
  { id: 4, name: "باقة 4", guests: "200 شخص", trays: "20 صينية", price: 6150, gift: "200 قطعة + 4 فازات + مشرفة + تصوير", featured: true },
  { id: 5, name: "باقة 5", guests: "250 شخص", trays: "24 صينية", price: 7350, gift: "250 قطعة + 6 فازات + تصوير" },
  { id: 6, name: "باقة 6", guests: "300 شخص", trays: "28 صينية", price: 8550, gift: "300 قطعة + 8 فازات + تصوير" },
  { id: 7, name: "باقة 7", guests: "350 شخص", trays: "34 صينية", price: 10250, gift: "350 قطعة + تصوير + صينية مطربة" },
  { id: 8, name: "باقة 8", guests: "400 شخص", trays: "38 صينية", price: 11350, gift: "400 قطعة + تصوير + صينية مطربة" },
];

const filters = [
  { label: "جميع الباقات", key: "all" },
  { label: "حتى ١٠٠ ضيف", key: "s" },
  { label: "١٥٠ – ٢٥٠ ضيف", key: "m" },
  { label: "٣٠٠ ضيف وأكثر", key: "l" },
] as const;

type FilterKey = (typeof filters)[number]["key"];

const formatPrice = (n: number) => new Intl.NumberFormat("en-US").format(n);

const waLink = (pkg: Package) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    `مرحباً ميلت مور، أرغب في الاستفسار عن ${pkg.name}، لعدد ${pkg.guests}، بسعر ${pkg.price} ر.س.`
  )}`;

// ─── Mini card (أفقية، مضغوطة، بدون هدايا) ─────────────────────────────────────
function MiniCard({ pkg }: { pkg: Package }) {
  return (
    <article className="mm-mini-card">
      <div className="mm-mini-info">
        <span className="mm-package-number">N° {String(pkg.id).padStart(2, "0")}</span>
        <h4>{pkg.name}</h4>
        <p className="mm-mini-mix">
          <Users size={16} /> {pkg.guests}
        </p>
        <p className="mm-mini-trays">
          <Check size={16} /> {pkg.trays}
        </p>
      </div>
      <div className="mm-mini-action">
        <div className="mm-package-price">
          <strong>{formatPrice(pkg.price)}</strong>
          <span>ر.س</span>
        </div>
        <a
          className="mm-package-order"
          href={waLink(pkg)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`اطلب ${pkg.name} عبر واتساب`}
        >
          اطلب الآن <ArrowUpLeft size={18} />
        </a>
      </div>
    </article>
  );
}

// ─── Event card (عمودية، فيها الهدايا والتفاصيل) ───────────────────────────────
function EventCard({ pkg }: { pkg: Package }) {
  return (
    <article className={`mm-package-card ${pkg.featured ? "mm-package-featured" : ""}`}>
      <div className="mm-package-top">
        <span className="mm-package-number">N° {String(pkg.id).padStart(2, "0")}</span>
        {pkg.featured && (
          <span className="mm-package-badge">
            <Sparkles size={12} /> باقة مميزة
          </span>
        )}
      </div>
      <h3>{pkg.name}</h3>
      <p className="mm-package-guests">
        <Users size={16} /> {pkg.guests}
      </p>
      <div className="mm-package-price">
        <strong>{formatPrice(pkg.price)}</strong>
        <span>ر.س</span>
      </div>
      <div className="mm-package-details">
        <p>
          <Check size={16} /> {pkg.trays} لضيافة مناسبتك
        </p>
        {pkg.gift && (
          <p>
            <Gift size={16} />
            <span>{pkg.gift}</span>
          </p>
        )}
      </div>
      <a
        className="mm-package-order"
        href={waLink(pkg)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`اطلب ${pkg.name} عبر واتساب`}
      >
        اختر هذه الباقة <ArrowUpLeft size={18} />
      </a>
    </article>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export function PkgPackages() {
  const [filter, setFilter] = useState<FilterKey>("all");

  const shownEvents = eventPackages.filter((p) => {
    if (filter === "all") return true;
    if (filter === "s") return p.id <= 2;
    if (filter === "m") return p.id >= 3 && p.id <= 5;
    return p.id >= 6;
  });

  return (
    <section id="packages" className="mm-section mm-packages" aria-labelledby="packages-title">
      <div className="mm-container">
        <div className="mm-section-heading">
          <div>
            <p className="mm-eyebrow">THE ART OF HOSTING</p>
            <h2 id="packages-title">
              مناسبتك استثنائية.
              <br />
              <em>وضيافتها كذلك.</em>
            </h2>
          </div>
          <p>
            من اللقاءات الحميمة إلى الأفراح الكبيرة،
            <br />
            باقات مدروسة لتجد ما يليق بعدد ضيوفك.
          </p>
        </div>

        {/* ═══ القسم 1: الباقات العائلية ═══ */}
        <div className="mm-group">
          <div className="mm-group-head">
            <h3>الباقات العائلية</h3>
            <p>للمجالس واللقاءات الخاصة</p>
          </div>
          <div className="mm-mini-grid">
            {miniPackages.map((pkg) => (
              <MiniCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>

        {/* ═══ القسم 2: باقات المناسبات ═══ */}
        <div className="mm-group">
          <div className="mm-group-head">
            <h3>باقات المناسبات</h3>
            <p>للأفراح والحفلات والمناسبات الكبيرة</p>
          </div>

          <div className="mm-filter-row" role="group" aria-label="تصفية الباقات حسب عدد الضيوف">
            {filters.map((f) => (
              <button
                type="button"
                key={f.key}
                aria-pressed={filter === f.key}
                className={filter === f.key ? "is-active" : ""}
                onClick={() => setFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <p className="sr-only" aria-live="polite">
            {shownEvents.length} باقات
          </p>

          <div className="mm-package-grid">
            {shownEvents.map((pkg) => (
              <EventCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>

        <div className="mm-package-note">
          <span>لأن لكل مناسبة تفاصيلها الخاصة</span>
          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer">
            دعنا نساعدك في الاختيار <ArrowUpLeft size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}