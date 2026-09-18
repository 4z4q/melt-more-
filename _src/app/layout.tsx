import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

import localFont from "next/font/local";

const Thamny = localFont({
  src: [
    {
      path: "../../public/fonts/thmanyahsans-Black.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/thmanyahsans-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/thmanyahsans-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-cairo",
});
const SITE_URL = "https://black-chcolate.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Black Chocolate | بلاك شوكلت",
    template: "%s | Black Chocolate",
  },
  description:
    "بلاك شوكلت Black Chocolate – شوكولاتة بلجيكية فاخرة، صواني ضيافة، توت مغطى بالشوكولاتة، بكجات هدايا للمناسبات والأعراس في الرياض. توصيل مجاني داخل الرياض. اطلب عبر واتساب.",
  // app/layout.tsx — keywords محدّثة فقط، باقي الكود كما هو
  // غيّر فقط قسم keywords في metadata الموجود لديك:

  keywords: [
    // ✅ الكلمات السهلة أولاً (منافسة منخفضة + نية شراء عالية)
    "صواني ضيافة الرياض",
    "صواني شوكولاتة ضيافة",
    "بكج شوكولاتة مناسبات",
    "توت بالشوكولاتة الرياض",

    // ✅ كلمات المناسبات (long-tail)
    "شوكولاتة أفراح الرياض",
    "توزيعات زواج شوكولاتة",
    "بكجات هدايا مناسبات الرياض",
    "شوكولاتة عيد ميلاد الرياض",
    "توزيعات حفلات الرياض",

    // ✅ الاسم التجاري
    "بلاك شوكلت",
    "Black Chocolate",
    "Black Chocolate الرياض",

    // ✅ المنتج + الموقع
    "شوكولاتة بلجيكية الرياض",
    "شوكولاتة بلجيكية مصنوعة يدوياً الرياض",
    "شوكولاتة فاخرة حي الحمراء",
    "شوكولاتة حي الخليج الرياض",

    // ✅ عام (منافسة عالية — نضعها لكن ما نركّز عليها)
    "هدايا شوكولاتة فاخرة",
    "شوكولاتة بلجيكية السعودية",
    "luxury chocolate Riyadh",
    "chocolate gifts Riyadh",
    "Belgian chocolate Saudi Arabia",
  ],
  authors: [{ name: "Black Chocolate" }],
  creator: "Black Chocolate",
  publisher: "Black Chocolate",
  applicationName: "Black Chocolate",
  category: "Food & Beverage",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "ar-SA": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: SITE_URL,
    siteName: "Black Chocolate",
    title: "Black Chocolate | شوكولاتة بلجيكية فاخرة في الرياض",
    description:
      "تجربة فاخرة من الشوكولاتة البلجيكية والحلويات العربية. صواني ضيافة، توت بالشوكولاتة، وبكجات هدايا للمناسبات في الرياض.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Black Chocolate – شوكولاتة بلجيكية فاخرة في الرياض",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Black Chocolate | شوكولاتة بلجيكية فاخرة في الرياض",
    description:
      "بلاك شوكلت – شوكولاتة بلجيكية، صواني ضيافة، وبكجات هدايا فاخرة. توصيل داخل الرياض.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
import { ImageKitProvider } from "@imagekit/next";
import { JsonLd } from "@/components/json-ld";
import { Toaster } from "@/components/ui/toaster";

const imagekitUrlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT;
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" className={`${Thamny.className} bg-warm-white `} dir="rtl">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <JsonLd />
      </head>
      <body className="font-sans antialiased bg-warm-white text-espresso">
        <ImageKitProvider urlEndpoint={imagekitUrlEndpoint}>
          {children}
        </ImageKitProvider>
        <Toaster />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
