import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpLeft } from "lucide-react";
export function Hero() {
  return (
    <section id="home" className="mm-hero" aria-labelledby="hero-title">
      <div className="mm-hero-photo"><Image src="/1.webp" alt="صينية ميلت مور من الشوكولاتة المزينة بالتوت والذهب لضيافة الأفراح" fill priority sizes="100vw" className="object-cover" /></div>
      <div className="mm-hero-shade" />
      <div className="mm-container mm-hero-content">
        <p className="mm-eyebrow"><span /> MELT MORE · CHOCOLATE & MORE</p>
        <h1 id="hero-title">حلويات الرياض،<br /><em>بلمسة ميلت مور.</em></h1>
        <p className="mm-hero-description">شوكولاتة سويسرية وحلويات وصواني ضيافة في الرياض.<br className="hidden sm:block" /> باقات حالي وموالح تُكمل جمال أفراحك ومناسباتك.</p>
        <div className="mm-actions">
          <a className="mm-button mm-button-gold" href="#packages">اكتشف باقات الضيافة <ArrowUpLeft size={18} /></a>
          <Link className="mm-button mm-button-glass" href="/flavours">تعرّف على الحشوات <ArrowUpLeft size={18} /></Link>
        </div>
      </div>
      <div className="mm-hero-bottom mm-container"><a href="#collection" className="mm-discover"><ArrowDown size={16} /> تمهّل… واستمتع بالتفاصيل</a><span className="mm-hero-signature" dir="ltr">A little more indulgence.</span></div>
    </section>
  );
}
