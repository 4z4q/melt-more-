"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Star } from "lucide-react";
import { SectionDivider } from "./section-divider";

// WhatsApp business number — owner can update via env or directly here
const WHATSAPP_NUMBER = "+966534611644";

function buildWhatsAppLink(p: { name: string; price: number }) {
  const message = `مرحباً Melt More،
أرغب في طلب المنتج التالي:

• ${p.name}
• السعر: ${p.price}

شكراً لكم.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

type Product = {
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  tag?: string;
};

const products: Product[] = [
  {
    name: "Milk Chocolate Truffles",
    description: "Velvety ganache enrobed in silky milk chocolate.",
    price: 28,
    rating: 4.9,
    image: "/products/truffles.jpg",
  },
  {
    name: "Kunafa Chocolate Bar",
    description: "Crisp kunafa layered with pistachio & dark chocolate.",
    price: 22,
    rating: 5.0,
    image: "/products/kunafa-bar.jpg",
    tag: "Bestseller",
  },
  {
    name: "Cardamom Pralines",
    description: "Aromatic cardamom kissed with toasted almond praline.",
    price: 34,
    rating: 4.8,
    image: "/products/cardamom-pralines.jpg",
  },
  {
    name: "Assorted Gift Box",
    description: "A curated selection of our finest creations.",
    price: 62,
    rating: 4.9,
    image: "/products/gift-box.jpg",
    tag: "Gift",
  },
  {
    name: "Rose & Pistachio Bark",
    description: "Delicate rose petals, crushed pistachio, cream chocolate.",
    price: 24,
    rating: 4.9,
    image: "/products/rose-pistachio.jpg",
  },
  {
    name: "Seasonal Special",
    description: "Date & saffron pralines — a limited seasonal edition.",
    price: 38,
    rating: 5.0,
    image: "/products/seasonal.jpg",
    tag: "Limited",
  },
];

function ProductCard({ p, i }: { p: Product; i: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      {/* Warm blush glow on hover */}
      <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-blush/0 via-warm-beige/0 to-rose-gold/0 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 -z-10 group-hover:from-blush/40 group-hover:via-warm-beige/30 group-hover:to-rose-gold/20" />

      <div className="relative overflow-hidden rounded-3xl bg-warm-white border border-warm-beige/60 shadow-[0_8px_30px_-12px_rgba(44,24,16,0.08)] transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_-20px_rgba(196,149,106,0.35)]">
        <div className="relative aspect-[4/5] overflow-hidden bg-cream">
          <Image
            src={p.image || "/placeholder.svg"}
            alt={p.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
          />
          {p.tag && (
            <span className="absolute top-4 left-4 text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full bg-warm-white/90 text-rose-gold border border-warm-beige backdrop-blur-sm">
              {p.tag}
            </span>
          )}

          {/* Order via WhatsApp — slides up on hover */}
          <div className="absolute inset-x-4 bottom-4 translate-y-[140%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
            <a
              href={buildWhatsAppLink(p)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-espresso text-warm-white text-xs tracking-[0.2em] uppercase font-medium hover:bg-rose-gold transition-colors duration-500"
              aria-label={`Order ${p.name} via WhatsApp`}
            >
              <span
                className="font-arabic text-sm tracking-normal"
                dir="rtl"
                lang="ar"
              >
                اطلب الآن
              </span>
              <span aria-hidden="true">🛒</span>
            </a>
          </div>
        </div>

        <div className="p-6 md:p-7">
          <div className="flex items-center gap-1.5 text-antique-gold">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span className="text-xs tracking-wide text-espresso/70">
              {p.rating.toFixed(1)}
            </span>
          </div>
          <h3 className="mt-2 font-serif-italic text-2xl md:text-[1.6rem] text-espresso leading-tight">
            {p.name}
          </h3>
          <p className="mt-2 text-sm text-espresso/65 font-light leading-relaxed">
            {p.description}
          </p>
          <div className="mt-5 flex items-center justify-between">
            <span
              className="font-serif text-xl text-rose-gold"
              style={{ fontWeight: 500 }}
            >
              {Intl.NumberFormat("ar-SA", {
                style: "currency",
                currency: "SAR",
              }).format(p.price)}
            </span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-espresso/50">
              Handcrafted
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function FeaturedProducts() {
  return (
    <section id="collection" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="text-center"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-rose-gold mb-4">
            The Collection
          </p>
          <h2 className="font-serif italic text-5xl md:text-6xl lg:text-7xl text-espresso text-balance">
            Our Signature Collection
          </h2>
          <p className="mt-5 text-base md:text-lg text-espresso/65 font-light max-w-xl mx-auto">
            Six creations, each a small ceremony — where tradition meets the
            tender art of modern confectionery.
          </p>
        </motion.div>

        <SectionDivider />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {products.map((p, i) => (
            <ProductCard key={p.name} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
