import { HOME_TITLE, HOME_DESCRIPTION, pageMetadata } from "@/lib/seo";
// app/(root)/page.tsx
import { Hero } from "@/components/hero";
import { Categories } from "@/components/categories";
import { OrderCTA } from "@/components/order-cta";
import { PkgPackages } from "@/components/pakage";
import { MenuSection } from "@/components/menu-section";

import type { Metadata } from "next";
import { faqs } from "@/lib/faqs";

export const metadata: Metadata = pageMetadata(HOME_TITLE, HOME_DESCRIPTION, "/");

export default function Page() {
  return <><Hero /><Categories /><PkgPackages /><MenuSection /><OrderCTA />
    <section id="faq" className="mm-section mm-faq" aria-labelledby="faq-heading"><div className="mm-container mm-faq-layout"><div><p className="mm-eyebrow">A LITTLE MORE TO KNOW</p><h2 id="faq-heading">قبل لحظتك<br/><em>الحلوة.</em></h2><p>إجابات تساعدك في تنسيق ضيافتك.</p><a href="https://wa.me/966552202321" target="_blank" rel="noopener noreferrer">لديك سؤال آخر؟ تواصل معنا ↖</a></div><div>{faqs.map(({q,a},i)=><details key={q}><summary><span><small>{String(i+1).padStart(2,"0")}</small>{q}</span><span className="mm-faq-plus" aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></div></section>
  </>;
}
