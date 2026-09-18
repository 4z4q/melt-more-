import Link from "next/link";
import Image from "next/image";
import { ArrowUpLeft, Gift, Sparkles, Heart } from "lucide-react";
export function Categories() {
  return <>
    <div className="mm-brand-strip"><span><Sparkles size={17} /> تفاصيل تُصنع بشغف</span><i /><span><Gift size={17} /> ضيافة تليق بمناسبتك</span><i /><span><Heart size={17} /> مذاق يستحق المشاركة</span></div>
    <section id="collection" className="mm-section mm-collection">
      <div className="mm-container">
        <div className="mm-section-heading"><div><p className="mm-eyebrow">THE MELT MORE COLLECTION</p><h2>لكل لحظة، <em>حلاوتها.</em></h2></div><p>للّمة، للهدية، ولليوم الذي لا يتكرر.<br />اختر تفاصيل ضيافتك… ودع الباقي علينا.</p></div>
        <div className="mm-collection-grid">
          <Link href="/#packages" className="mm-collection-card mm-collection-main"><Image src="/2.webp" alt="تقديم ميلت مور للشوكولاتة في المناسبات" fill sizes="(max-width: 700px) 100vw, 60vw" /><div><span className="mm-eyebrow">MADE FOR YOUR MOMENTS</span><h3>ضيافة تترك أثرًا</h3><p>باقات المناسبات والأفراح</p></div><span className="mm-circle-arrow"><ArrowUpLeft /></span></Link>
          <Link href="/flavours" className="mm-collection-card"><Image src="/3.webp" alt="تشكيلة شوكولاتة ميلت مور الفاخرة" fill sizes="(max-width: 700px) 100vw, 40vw" /><div><span className="mm-eyebrow">FIND YOUR FAVOURITE</span><h3>حشوات تستحق الاكتشاف</h3><p>اختر توليفتك المفضلة</p></div><span className="mm-circle-arrow"><ArrowUpLeft /></span></Link>
        </div>
      </div>
    </section>
  </>;
}
