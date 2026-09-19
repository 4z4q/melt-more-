import { SITE_URL, HOME_TITLE, HOME_DESCRIPTION, pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

import localFont from "next/font/local";

const Thamny = localFont({
  src: [
    {
      path: "../../public/fonts/thmanyahsans-Regular.otf",
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
export const metadata: Metadata = {
  ...pageMetadata(HOME_TITLE, HOME_DESCRIPTION, "/"),
  metadataBase: new URL(SITE_URL),
  applicationName: "Melt More",
  title: { default: HOME_TITLE, template: "%s | ميلت مور" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
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
    <html lang="ar" className={`${Thamny.variable} bg-warm-white`} dir="rtl">
      <head>
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
