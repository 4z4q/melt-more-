"use client";

import { motion } from "motion/react";
import {
  Instagram,
  Music2,
  MessageCircle,
  MapPin,
  Clock,
  Star,
  Phone,
} from "lucide-react";

// ─── Branch data (from Google Places) ────────────────────────────────────────
const branches = [
  {
    id: "hamra",
    name: "فرع الحمراء",
    address: "طريق الإمام عبد الله بن سعود بن عبد العزيز",
    neighborhood: "حي الحمراء",
    rating: 4.7,
    ratingCount: 99,
    hours: "٣:٣٠ م – ١١ م",
    phone: "+966534611644",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJb0XdLAb_Lj4RIvNC89hWt1g",
    lat: 24.787813,
    lng: 46.7588815,
  },
  {
    id: "khaleej",
    name: "فرع الخليج",
    address: "طريق الأمير بندر بن عبد العزيز",
    neighborhood: "حي الخليج",
    rating: 4.8,
    ratingCount: 111,
    hours: "٣:٠٠ م – ١١ م",
    phone: "+966534611644",
    mapsUrl:
      "https://www.google.com/maps/place/?q=place_id:ChIJm_lRkkUBLz4RhC9RfgzARmc",
      // 24.763243516911796, 46.8002558441782
    lat: 24.7632435,
    lng: 46.8002022,
  },
];

// ─── Star rating helper ───────────────────────────────────────────────────────
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`w-3 h-3 ${
            s <= Math.round(rating)
              ? "fill-[#d4a96a] text-[#d4a96a]"
              : "fill-transparent text-[#b8d8d7]"
          }`}
        />
      ))}
      <span className="text-[11px] text-[#3a7472] font-semibold mr-0.5">
        {rating}
      </span>
    </div>
  );
}

// ─── Google Static Map ────────────────────────────────────────────────────────
// يستخدم iframe embed بدون API key
function BranchMap({
  lat,
  lng,
  name,
}: {
  lat: number;
  lng: number;
  name: string;
}) {
  const src = `https://maps.google.com/maps?q=${lat},${lng}&z=16&output=embed&hl=ar`;
  return (
    <div className="relative w-full h-[200px] rounded-2xl overflow-hidden border border-[#b8d8d7]/40">
      <iframe
        title={`خريطة ${name}`}
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0, filter: "saturate(0.85) contrast(1.05)" }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      
    </div>
  );
}

// ─── Branch Card ──────────────────────────────────────────────────────────────
function BranchCard({
  branch,
  i,
}: {
  branch: (typeof branches)[0];
  i: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
      dir="rtl"
      className="bg-white rounded-3xl border border-[#b8d8d7]/60 shadow-[0_8px_32px_-8px_rgba(69,132,130,0.12)] overflow-hidden"
    >
      {/* Map */}
      <BranchMap lat={branch.lat} lng={branch.lng} name={branch.name} />

      {/* Info */}
      <div className="p-5">
        {/* Name + rating */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="text-[#0d3331] font-bold text-base leading-tight">
              {branch.name}
            </h3>
            <p className="text-[#458482] text-xs mt-0.5">
              {branch.neighborhood}
            </p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <StarRating rating={branch.rating} />
            <span className="text-[10px] text-[#3a7472]/60">
              ({branch.ratingCount} تقييم)
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#b8d8d7]/40 mb-3" />

        {/* Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-start gap-2 text-[12px] text-[#3a7472]">
            <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-[#458482]" />
            <span>{branch.address}</span>
          </div>
          <div className="flex items-center gap-2 text-[12px] text-[#3a7472]">
            <Clock className="w-3.5 h-3.5 flex-shrink-0 text-[#458482]" />
            <span>{branch.hours}</span>
          </div>
          <div className="flex items-center gap-2 text-[12px] text-[#3a7472]">
            <Phone className="w-3.5 h-3.5 flex-shrink-0 text-[#458482]" />
            <span dir="ltr">{branch.phone}</span>
          </div>
        </div>

        {/* CTA */}
        <a
          href={branch.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-[#458482] text-[#fff8f0] text-[11px] tracking-[0.15em] font-bold hover:bg-[#2d6e6c] transition-colors duration-300"
        >
          افتح في الخرائط
          <MapPin className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export function OrderCTA() {
  return (
    <section
      id="order"
      className="relative bg-[#fff8f0] text-[#1a4d4b] py-24 md:py-32 overflow-hidden"
    >
      {/* Soft accent glow */}
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[60%] h-[280px] bg-[#e8f4f3] blur-3xl rounded-full opacity-70"
      />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* ── CTA Header ── */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xs tracking-[0.4em] uppercase text-[#458482] mb-5"
          >
            — Let&apos;s order —
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-serif italic text-5xl md:text-6xl lg:text-7xl text-[#0d3331] leading-[1.05] text-balance"
          >
            Ready to order something sweet?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-5 font-arabic text-xl md:text-2xl text-[#1a4d4b]/85 font-light"
            dir="rtl"
            lang="ar"
          >
            جاهز تطلب شيء حلو؟
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <a
              href="https://wa.me/+966534611644"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#458482] text-[#fff8f0] text-sm tracking-[0.2em] uppercase font-semibold hover:bg-[#2d6e6c] transition-colors duration-500 shadow-[0_14px_40px_-14px_rgba(69,132,130,0.55)]"
            >
              أطلب عبر الواتساب
              <MessageCircle className="w-4 h-4" />
            </a>

            <div className="flex items-center gap-3">
              <a
                href="https://www.tiktok.com/@black.chcolate"
                aria-label="TikTok"
                className="w-12 h-12 rounded-full border border-[#b8d8d7] bg-[#fff8f0] flex items-center justify-center text-[#458482] hover:text-[#fff8f0] hover:bg-[#458482] hover:border-[#458482] transition-colors duration-500"
              >
                <Music2 className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/blackchocolate666"
                aria-label="Instagram"
                className="w-12 h-12 rounded-full border border-[#b8d8d7] bg-[#fff8f0] flex items-center justify-center text-[#458482] hover:text-[#fff8f0] hover:bg-[#458482] hover:border-[#458482] transition-colors duration-500"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-10 text-xs tracking-[0.3em] uppercase text-[#3a7472]"
          >
            توصيل داخل الرياض مجانا - صواني بأشكال متميزه ومختلفه
          </motion.p>
        </div>

        {/* ── Branches ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
          dir="rtl"
        >
          <h3 className="font-serif text-4xl md:text-5xl text-[#0d3331] text-balance">
            زورونا في أقرب فرع
          </h3>
          <div
            aria-hidden="true"
            className="mx-auto mt-6 h-[2px] w-16 bg-[#d4a96a] rounded-full"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {branches.map((branch, i) => (
            <BranchCard key={branch.id} branch={branch} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
