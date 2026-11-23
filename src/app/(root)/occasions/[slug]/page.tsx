import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { occasions } from "@/lib/occasions";
import { pageMetadata } from "@/lib/seo";
import { BranchOrder } from "@/components/branch-order";

export const dynamicParams = false;
export function generateStaticParams() {
  return occasions.map(({ slug }) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

async function getOccasion(params: Props["params"]) {
  const { slug } = await params;
  return occasions.find(occasion => occasion.slug === slug) ?? notFound();
}

export async function generateMetadata({ params }: Props) {
  const occasion = await getOccasion(params);
  return pageMetadata(occasion.headline + " | مدونة ميلت مور", occasion.description, "/occasions/" + occasion.slug);
}

export default async function OccasionPage({ params }: Props) {
  const occasion = await getOccasion(params);
  return (
    <article className="mm-container mm-occasion-page">
      <Link href="/blog">مدونة الضيافة</Link>
      <h1>{occasion.headline}</h1>
      <p>{occasion.intro}</p>
      <div className="mm-story-cover mm-article-cover">
        <Image src={occasion.photo} alt="" fill priority sizes="(max-width: 900px) 94vw, 850px" />
      </div>
      <h2>{occasion.heading}</h2>
      <p>{occasion.advice}</p>
      <p>{occasion.example}</p>
      <h2>{occasion.sub}</h2>
      <p>{occasion.tip}</p>
      <div className="mm-occasion-links">
        <Link className="mm-button mm-button-dark" href={"/#package-" + occasion.packageId}>{occasion.link}</Link>
        <Link href="/#menu">قائمة الحالي والموالح</Link>
        <Link href="/flavours">اختر حشوات الشوكولاتة</Link>
      </div>
      <h2>نسّق التوصيل لمناسبتك</h2>
      <p>نوصل من الرياض والطائف لجميع مناطق المملكة. أرسل للفرع اسم مدينة التوصيل وتاريخ المناسبة وعدد الضيوف عشان ترتّب تفاصيل الطلب.</p>
      <BranchOrder className="mm-button mm-button-gold" message={`مرحباً ميلت مور، أود تنسيق ${occasion.name}. مدينة التوصيل: …، تاريخ المناسبة: …، عدد الضيوف: …`}>استفسر عبر واتساب</BranchOrder>
    </article>
  );
}
