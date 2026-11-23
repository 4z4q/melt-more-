import { BranchOrder } from "@/components/branch-order";
import Link from "next/link";
import { ArrowUpLeft, Instagram, Music2, MessageCircle } from "lucide-react";
export function Footer() {
  return (
    <footer className="mm-footer">
      <div className="mm-container">
        <div className="mm-footer-top">
          <div>
            <Link href="/" className="mm-wordmark">
              <span dir="ltr">
                Melt More<span className="mm-wordmark-dot">.</span>
              </span>
              <small>CHOCOLATE & MORE</small>
            </Link>
            <p>
              أكثر من شوكولاتة.
              <br />
              تفاصيل صغيرة، ومشاعر لا تُنسى.
            </p>
          </div>
          <div className="mm-footer-links">
            <h2>عالم ميلت مور</h2>
            <Link href="/#packages">باقات الضيافة</Link>
            <Link href="/flavours">الشوكولاتة والحشوات</Link>
            <Link href="/#menu">قائمة الضيافة</Link>
            <Link href="/#branches">فروعنا</Link>
            <Link href="/blog">المدونة</Link>
          </div>
          <div className="mm-footer-contact">
            <h2>نصنع معك لحظتك الحلوة</h2>
            <Link className="mm-footer-phone" href="/#branches">
              أرقام الفروع <ArrowUpLeft size={22} />
            </Link>
            <div className="mm-socials">
              <a
                href="https://www.instagram.com/mm.chocolatee"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ميلت مور على إنستغرام"
              >
                <Instagram size={19} />
              </a>
              <a
                href="https://www.tiktok.com/@melt.more"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ميلت مور على تيك توك"
              >
                <Music2 size={19} />
              </a>
              <BranchOrder aria-label="واتساب ميلت مور">
                <MessageCircle size={19} />
              </BranchOrder>
            </div>
          </div>
        </div>
        <div className="mm-footer-bottom">
          <span>
            © {new Date().getFullYear()} ميلت مور. جميع الحقوق محفوظة.
          </span>
          <span dir="ltr">Made for moments. Meant to be shared.</span>
          <a href="#main-content">إلى الأعلى ↑</a>
        </div>
      </div>
    </footer>
  );
}
