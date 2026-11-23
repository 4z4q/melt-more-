import type { Metadata } from "next";

// Override only when moving the public website to a new canonical domain.
export const SITE_URL = new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://melt-more.vercel.app").origin;
export const HOME_TITLE = "ميلت مور | ضيافة زواج وملكة واستقبالات في السعودية";
export const HOME_DESCRIPTION = "باقات ضيافة زواج وملكة وأفراح واستقبالات من ميلت مور، بصواني حالي وموالح وشوكولاتة سويسرية. استعرض الأسعار واطلب من فرع الرياض أو الطائف مع توصيل لجميع مناطق المملكة.";
export function pageMetadata(title: string, description: string, pathname: string): Metadata {
  return {
    title: { absolute: title }, description,
    alternates: { canonical: pathname },
    openGraph: { type: "website", locale: "ar_SA", siteName: "ميلت مور | Melt More", title, description, url: pathname,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "ميلت مور — Melt More" }] },
    twitter: { card: "summary_large_image", title, description, images: ["/og-image.png"] },
  };
}

