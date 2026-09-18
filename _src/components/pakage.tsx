"use client";

import { motion } from "motion/react";

const WHATSAPP_NUMBER = "+966534611644";

function buildWhatsAppLink(p: { name: string }) {
  const message = `مرحباً Black Chocolate،\nأرغب في طلب البكج التالي:\n\n• ${p.name}\n\nشكراً لكم.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// ─── Types ────────────────────────────────────────────────────────────────────
type PackageUnit = "صواني" | "صينية";

type Package = {
  id: number;
  size: string;
  unit: PackageUnit;
  personsMin: number;
  personsMax: number | null;
  price: number;
  printingBoards: number;
  vases: number;
  mashrama: boolean;
  printingNote: number;
  popular?: boolean;
  isActive: boolean;
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const packages: Package[] = [
  {
    id: 1,
    size: "3",
    unit: "صواني",
    personsMin: 20,
    personsMax: 20,
    price: 360,
    printingBoards: 1,
    vases: 0,
    mashrama: false,
    printingNote: 80,
    isActive: true,
  },
  {
    id: 2,
    size: "5",
    unit: "صواني",
    personsMin: 40,
    personsMax: 40,
    price: 600,
    printingBoards: 2,
    vases: 0,
    mashrama: false,
    printingNote: 80,
    isActive: true,
    popular: true,
  },
  {
    id: 3,
    size: "8",
    unit: "صواني",
    personsMin: 60,
    personsMax: 70,
    price: 960,
    printingBoards: 2,
    vases: 0,
    mashrama: false,
    printingNote: 80,
    isActive: true,
  },
  {
    id: 4,
    size: "10",
    unit: "صواني",
    personsMin: 90,
    personsMax: 90,
    price: 1200,
    printingBoards: 3,
    vases: 0,
    mashrama: false,
    printingNote: 80,
    isActive: true,
  },
  {
    id: 5,
    size: "14",
    unit: "صينية",
    personsMin: 110,
    personsMax: 120,
    price: 1680,
    printingBoards: 4,
    vases: 0,
    mashrama: false,
    printingNote: 80,
    isActive: true,
  },
  {
    id: 6,
    size: "18",
    unit: "صينية",
    personsMin: 150,
    personsMax: 150,
    price: 2160,
    printingBoards: 4,
    vases: 0,
    mashrama: false,
    printingNote: 80,
    isActive: true,
  },
  {
    id: 7,
    size: "24",
    unit: "صينية",
    personsMin: 200,
    personsMax: 200,
    price: 2880,
    printingBoards: 20,
    vases: 0,
    mashrama: false,
    printingNote: 80,
    isActive: true,
  },
  {
    id: 8,
    size: "30",
    unit: "صينية",
    personsMin: 250,
    personsMax: 250,
    price: 3800,
    printingBoards: 6,
    vases: 6,
    mashrama: true,
    printingNote: 80,
    isActive: true,
    popular: true,
  },
  {
    id: 9,
    size: "40",
    unit: "صينية",
    personsMin: 300,
    personsMax: 350,
    price: 5100,
    printingBoards: 8,
    vases: 12,
    mashrama: true,
    printingNote: 80,
    isActive: true,
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function formatPersons(pkg: Package): string {
  if (pkg.personsMin === pkg.personsMax || pkg.personsMax === null)
    return `${pkg.personsMin} شخص`; 
  return `${pkg.personsMin} – ${pkg.personsMax} شخص`;
}

function buildExtras(pkg: Package): string[] {
  const extras: string[] = [];
  if (pkg.printingBoards > 0) extras.push(`${pkg.printingBoards} لوح طباعة`);
  if (pkg.vases > 0) extras.push(`${pkg.vases} فازة`);
  if (pkg.mashrama) extras.push("مشرفة");
  return extras;
}

// ─── WhatsApp Icon ────────────────────────────────────────────────────────────
function WhatsAppIcon() {
  return (
    <svg
      className="w-3 h-3 fill-current flex-shrink-0"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────
function PackageCard({ pkg, i }: { pkg: Package; i: number }) {
  const isPopular = !!pkg.popular;
  const extras = buildExtras(pkg);
  const fullName = `${pkg.size} ${pkg.unit}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group relative h-full"
      dir="rtl"
    >
      {/* Popular badge — floats above the card */}
      {isPopular && (
        <div className="absolute -top-3 right-4 z-10">
          <span
            className="inline-block bg-[#d4a96a] text-[#1a4d4b] text-[9px] tracking-[0.16em]
                       uppercase font-bold px-3 py-1 rounded-full
                       shadow-[0_4px_14px_-4px_rgba(212,169,106,0.55)]"
          >
            الأكثر طلباً
          </span>
        </div>
      )}

      <div
        className={`relative h-full flex flex-col rounded-2xl overflow-hidden
          transition-transform duration-300 ease-out
          group-hover:-translate-y-1
          group-hover:shadow-[0_18px_40px_-16px_rgba(13,51,49,0.35)]
          ${isPopular ? "bg-[#1a4d4b]" : "bg-[#fdf6ec]"}`}
      >
        {/* Top accent strip */}
        <div
          className={`h-1 w-full flex-shrink-0
            ${isPopular ? "bg-[#d4a96a]" : "bg-[#b8d5d4]"}`}
        />

        <div className="flex flex-col flex-1 p-5">
          {/* Size + unit */}
          <div className="flex items-baseline gap-1.5 mb-1">
            <span
              className={`text-5xl font-bold leading-none tracking-tight
                ${isPopular ? "text-[#fbebd3]" : "text-[#0d3331]"}`}
            >
              {pkg.size}
            </span>
            <span
              className={`text-sm font-medium
                ${isPopular ? "text-[#fbebd3]/60" : "text-[#458482]"}`}
            >
              {pkg.unit}
            </span>
          </div>

          {/* Persons */}
          <p
            className={`text-[11px] mb-4
              ${isPopular ? "text-[#fbebd3]/50" : "text-[#5a8a88]"}`}
          >
            عدد الأشخاص:&nbsp;
            <span className="font-semibold">{formatPersons(pkg)}</span>
          </p>

          {/* Divider */}
          <div
            className={`h-px w-full mb-3
              ${isPopular ? "bg-[#fbebd3]/10" : "bg-[#458482]/15"}`}
          />

          {/* Extras pills */}
          {extras.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-2 min-h-[22px]">
              {extras.map((ex) => (
                <span
                  key={ex}
                  className={`text-[9px] font-semibold px-2 py-0.5 rounded-full
                    ${
                      isPopular
                        ? "bg-[#d4a96a]/18 text-[#d4a96a]"
                        : "bg-[#458482]/10 text-[#1a4d4b]"
                    }`}
                >
                  {ex}
                </span>
              ))}
            </div>
          )}

          {/* Printing note */}
          <p
            className={`text-[9px] mb-4 leading-relaxed
              ${isPopular ? "text-[#fbebd3]/30" : "text-[#8aaeac]"}`}
          >
            * الطباعة الإضافية {pkg.printingNote} ر.س على الصينية
          </p>

          {/* Price — pushed to bottom */}
          <div className="flex items-baseline gap-1 mt-auto mb-4">
            <span
              className={`text-[1.65rem] font-bold leading-none
                ${isPopular ? "text-[#d4a96a]" : "text-[#1a4d4b]"}`}
            >
              {Intl.NumberFormat("ar-SA").format(pkg.price)}
            </span>
            <span
              className={`text-xs font-semibold
                ${isPopular ? "text-[#d4a96a]/80" : "text-[#458482]"}`}
            >
              ر.س
            </span>
          </div>

          {/* CTA */}
          <a
            href={buildWhatsAppLink({ name: fullName })}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`اطلب ${fullName} عبر واتساب`}
            className={`flex items-center justify-center gap-1.5 w-full py-2.5 rounded-full
              text-[10px] font-bold tracking-[0.12em]
              transition-all duration-250
              ${
                isPopular
                  ? "bg-[#d4a96a] text-[#1a4d4b] border-[1.5px] border-[#d4a96a] hover:bg-transparent hover:text-[#d4a96a]"
                  : "bg-transparent text-[#1a4d4b] border-[1.5px] border-[#458482] hover:bg-[#458482] hover:text-[#fbebd3] hover:border-[#458482]"
              }`}
          >
            <span>اطلب الآن</span>
            <WhatsAppIcon />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export function PkgPackages() {
  return (
    <section
      id="packages"
      className="relative bg-[#2d6e6c] py-20 md:py-28"
      dir="rtl"
    >
      {/* Subtle ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#fbebd3]/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-[#1a4d4b]/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#d4a96a] mb-3 font-medium">
            Black Chocolate
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#fbebd3] leading-tight">
            بكجاتنا المميزة
          </h2>
          <div
            aria-hidden="true"
            className="mx-auto mt-4 h-0.5 w-10 rounded-full bg-[#d4a96a]"
          />
          <p className="mt-4 text-sm text-[#fbebd3]/65 font-light max-w-md mx-auto leading-relaxed">
            اختيار الصواني والأصناف من حالي ومالح حسب طلب العميل
          </p>
        </motion.div>

        {/* Grid — 3 cols max for better card proportions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {packages
            .filter((p) => p.isActive)
            .map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} i={i} />
            ))}
        </div>
      </div>
    </section>
  );
}
