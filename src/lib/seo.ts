import type { Metadata } from "next";

// Override only when moving the public website to a new canonical domain.
export const SITE_URL = new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://melt-more.vercel.app").origin;
export const HOME_TITLE = "ميلت مور | حلويات وشوكولاتة سويسرية في الرياض";
export const HOME_DESCRIPTION = "ميلت مور في الرياض: شوكولاتة سويسرية، حلويات وصواني ضيافة، وباقات حالي وموالح للأفراح والمناسبات. استعرض الباقات والحشوات ونسّق طلبك عبر واتساب.";
export function pageMetadata(title: string, description: string, pathname: string): Metadata {
  return {
    title: { absolute: title }, description,
    alternates: { canonical: pathname },
    openGraph: { type: "website", locale: "ar_SA", siteName: "ميلت مور | Melt More", title, description, url: pathname,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "ميلت مور — Melt More" }] },
    twitter: { card: "summary_large_image", title, description, images: ["/og-image.png"] },
  };
}

