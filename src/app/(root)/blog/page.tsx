import Image from "next/image";
import Link from "next/link";
import { occasions } from "@/lib/occasions";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("مدونة الضيافة | ميلت مور", "مقالات تساعدك في اختيار صواني الزواج والملكة وترتيب ضيافة الاستقبالات.", "/blog");

export default function BlogPage() {
  return (
    <section className="mm-section mm-container mm-journal" aria-labelledby="journal-title">
      <h1 id="journal-title">مدونة الضيافة</h1>
      <div className="mm-story-grid">
        {occasions.map(story => (
          <article key={story.slug}>
            <Link href={"/occasions/" + story.slug}>
              <div className="mm-story-cover">
                <Image src={story.photo} alt="" fill sizes="(max-width: 720px) 92vw, 32vw" />
              </div>
              <small>{story.name}</small>
              <h2>{story.headline}</h2>
              <p>{story.intro}</p>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
