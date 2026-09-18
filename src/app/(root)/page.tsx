// app/(root)/page.tsx
import { Hero } from "@/components/hero";
import { Categories } from "@/components/categories";
import { OrderCTA } from "@/components/order-cta";
import { PkgPackages } from "@/components/pakage";
import { MenuSection } from "@/components/menu-section";

import type { Metadata } from "next";
import { faqs } from "@/lib/faqs";

// ─── Metadata محسّن للـ SEO ───────────────────────────────────────────────────
export const metadata: Metadata = {
  // ✅ title يحتوي الكلمة الذهبية + الاسم التجاري
  title: "Melt More | باقات ضيافة الشوكولاتة الفاخرة للمناسبات والأفراح",

  // ✅ description يحتوي كل الكلمات المفتاحية المهمة بشكل طبيعي
  description:
    "ميلت مور — ضيافة شوكولاتة فاخرة للمناسبات والأفراح. باقات راقية، صواني ضيافة، قوائم حالي وموالح فاخرة، وتقديم بأجود أنواع الشوكولاتة. اطلب عبر واتساب.",

  alternates: {
    canonical: "/",
    languages: { "ar-SA": "/", "x-default": "/" },
  },

  // ✅ keywords محدّثة بالكلمات السهلة أولاً
  keywords: [
    "باقات المناسبات",
    "ضيافة الأفراح الرياض",
    "باقات شوكولاتة مناسبات",
    "صواني ضيافة الرياض",
    "شوكولاتة أفراح الرياض",
    "ميلت مور",
    "Melt More",
    "شوكولاتة فاخرة الرياض",
    "ضيافة شوكولاتة الأعراس",
    "باقات هدايا مناسبات الرياض",
    "توزيعات زواج شوكولاتة",
    "صواني شوكولاتة ضيافة",
    "موالح فاخرة المناسبات",
    "حالي المناسبات الرياض",
    "هدايا شوكولاتة فاخرة",
  ],

  openGraph: {
    title: "Melt More | باقات ضيافة الشوكولاتة الفاخرة للمناسبات والأفراح",
    description:
      "ضيافة شوكولاتة فاخرة للمناسبات والأفراح. باقات راقية، صواني ضيافة، وقوائم حالي وموالح فاخرة. اطلب الآن عبر واتساب.",
    url: "/",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <><Hero /><Categories /><PkgPackages /><MenuSection /><OrderCTA />
    <section id="faq" className="mm-section mm-faq" aria-labelledby="faq-heading"><div className="mm-container mm-faq-layout"><div><p className="mm-eyebrow">A LITTLE MORE TO KNOW</p><h2 id="faq-heading">قبل لحظتك<br/><em>الحلوة.</em></h2><p>إجابات تساعدك في تنسيق ضيافتك.</p><a href="https://wa.me/966552202321" target="_blank" rel="noopener noreferrer">لديك سؤال آخر؟ تواصل معنا ↖</a></div><div>{faqs.map(({q,a},i)=><details key={q}><summary><span><small>{String(i+1).padStart(2,"0")}</small>{q}</span><span className="mm-faq-plus" aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></div></section>
  </>;
}
