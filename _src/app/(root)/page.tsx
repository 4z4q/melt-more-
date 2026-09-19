// app/(root)/page.tsx
import { Hero } from "@/components/hero";
import { Categories } from "@/components/categories";
import { OrderCTA } from "@/components/order-cta";
import { PkgPackages } from "@/components/pakage";
import { WaveDivider } from "@/components/wave-divider";
import type { Metadata } from "next";
import { faqs } from "@/lib/faqs";

// ─── Metadata محسّن للـ SEO ───────────────────────────────────────────────────
export const metadata: Metadata = {
  // ✅ title يحتوي الكلمة الذهبية + الاسم التجاري
  title: "Melt More | صواني ضيافة وشوكولاتة سويسرية فاخرة في الرياض",

  // ✅ description يحتوي كل الكلمات المفتاحية المهمة بشكل طبيعي
  description:
    "ميلت مور — صواني ضيافة شوكولاتة سويسرية فاخرة مصنوعة يدوياً في الرياض. بكجات أفراح وزواج ومناسبات، توت مغطى بالشوكولاتة، أكثر من 30 نكهة. توصيل داخل الرياض. اطلب عبر واتساب.",

  alternates: {
    canonical: "/",
    languages: { "ar-SA": "/", "x-default": "/" },
  },

  // ✅ keywords محدّثة بالكلمات السهلة أولاً
  keywords: [
    "صواني ضيافة الرياض",
    "بكج شوكولاتة مناسبات",
    "توت بالشوكولاتة الرياض",
    "شوكولاتة أفراح الرياض",
    "ميلت مور",
    "Melt More",
    "شوكولاتة سويسرية الرياض",
    "شوكولاتة مصنوعة يدوياً الرياض",
    "بكجات هدايا مناسبات الرياض",
    "توزيعات زواج شوكولاتة",
    "صواني شوكولاتة ضيافة",
    "شوكولاتة فاخرة حي الحمراء",
    "شوكولاتة حي الخليج الرياض",
    "هدايا شوكولاتة فاخرة",
    "شوكولاتة سويسرية طازجة السعودية",
  ],

  openGraph: {
    title: "Melt More | صواني ضيافة وشوكولاتة سويسرية في الرياض",
    description:
      "شوكولاتة سويسرية فاخرة مصنوعة يدوياً في الرياض. صواني ضيافة، بكجات أفراح ومناسبات، وتوت بالشوكولاتة. اطلب الآن عبر واتساب.",
    url: "/",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <>
      {/* 1. HERO */}
      <Hero />
      {/* <WaveDivider topColor="#1a4d4b" bottomColor="#fbebd3" /> */}

      {/* 2. CATEGORIES */}
      <Categories />
      {/* <WaveDivider topColor="#fbebd3" bottomColor="#458482" /> */}

      {/* 3. PACKAGES */}
      <PkgPackages />
      <WaveDivider topColor="#458482" bottomColor="#fff8f0" />

      {/* 4. ORDER CTA */}
      <OrderCTA />

      {/* 5. FAQ — مرئي للزوار + SEO */}
      <section
        id="faq"
        aria-labelledby="faq-heading"
        className="bg-[#fff8f0] py-20 px-6"
      >
        <div className="mx-auto max-w-3xl">
          {/* العنوان يحتوي keyword */}
          <h2
            id="faq-heading"
            className="text-center text-2xl font-bold text-[#1a4d4b] mb-2 tracking-wide"
          >
            أسئلة شائعة عن صواني الضيافة والشوكولاتة
          </h2>
          <p className="text-center text-sm text-[#3a7472] mb-10 tracking-wide">
            كل ما تحتاج معرفته قبل الطلب
          </p>

          <div className="space-y-4">
            {faqs.map(({ q, a }, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-[#b8d8d7]/50 bg-white/60 overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-[#1a4d4b] font-medium text-sm list-none select-none hover:bg-[#e8f4f3]/40 transition-colors">
                  <span>{q}</span>
                  {/* + / - icon */}
                  <span className="text-[#458482] text-xl leading-none transition-transform duration-300 group-open:rotate-45 ml-4 shrink-0">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5 text-sm text-[#3a7472] leading-relaxed border-t border-[#b8d8d7]/30 pt-4">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider topColor="#fff8f0" bottomColor="#0d3331" />
    </>
  );
}
