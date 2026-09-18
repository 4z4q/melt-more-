// components/json-ld.tsx
// Site-wide structured data for Melt More (LocalBusiness + Organization + WebSite + FAQ).
// Per-page schemas (Breadcrumb, ItemList, Product) live in their own components.

import { products } from "@/lib/products";
import { faqs } from "@/lib/faqs";
const SITE_URL = "https://black-chcolate.vercel.app";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      // ① Organization (brand-level)
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Melt More",
        alternateName: "ميلت مور",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/melt_more_logo.png`,
          width: 512,
          height: 512,
        },
        image: `${SITE_URL}/og-image.jpg`,
        description:
          "Melt More (ميلت مور) — ضيافة شوكولاتة فاخرة للمناسبات والأفراح، باقات راقية، صواني ضيافة، وتقديم فاخر في الرياض.",
        sameAs: [
          "https://www.instagram.com/melt.more",
          "https://www.tiktok.com/@melt.more",
          "https://wa.me/966552202321",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+966552202321",
          contactType: "customer service",
          areaServed: "SA",
          availableLanguage: ["Arabic", "ar"],
        },
      },

      // ② LocalBusiness / FoodEstablishment
      {
        "@type": ["FoodEstablishment", "LocalBusiness"],
        "@id": `${SITE_URL}/#business`,
        name: "Melt More",
        alternateName: "ميلت مور",
        description:
          "متجر متخصص في بيع الشوكولاتة الفاخرة والحلويات الطازجة في الرياض. نقدم تشكيلة مميزة من صواني الضيافة وصواني المناسبات المصممة بعناية لتناسب الأفراح، حفلات الزواج، أعياد الميلاد، الاجتماعات، والجمعات العائلية. شوكولاتة بلجيكية فاخرة بتغليف أنيق، وحلويات مشكلة يومياً.",
        url: SITE_URL,
        telephone: "+966552202321",
        priceRange: "٢٠٥٠ ر.س — ١١٣٥٠ ر.س",
        image: [`${SITE_URL}/og-image.jpg`],
        logo: `${SITE_URL}/melt_more_logo.png`,
        servesCuisine: ["شوكولاتة بلجيكية", "حلويات عربية", "موالح فاخرة"],
        currenciesAccepted: "SAR",
        paymentAccepted: "Cash, Credit Card, Apple Pay, Mada",
        parentOrganization: { "@id": `${SITE_URL}/#organization` },

        address: {
          "@type": "PostalAddress",
          streetAddress: "حي الحمراء",
          addressLocality: "الرياض",
          addressRegion: "منطقة الرياض",
          postalCode: "13225",
          addressCountry: "SA",
        },

        geo: {
          "@type": "GeoCoordinates",
          latitude: 24.787813,
          longitude: 46.7588815,
        },

        areaServed: [
          { "@type": "City", name: "الرياض" },
          { "@type": "AdministrativeArea", name: "منطقة الرياض" },
        ],

        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
            opens: "15:30",
            closes: "23:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Friday", "Saturday"],
            opens: "15:00",
            closes: "23:59",
          },
        ],

        sameAs: [
          "https://www.instagram.com/melt.more",
          "https://www.tiktok.com/@melt.more",
          "https://wa.me/966552202321",
        ],

        hasMap:
          "https://www.google.com/maps/place/?q=place_id:ChIJb0XdLAb_Lj4RIvNC89hWt1g",

        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+966552202321",
          contactType: "customer service",
          availableLanguage: ["Arabic"],
        },

        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.75",
          reviewCount: "210",
          bestRating: "5",
          worstRating: "1",
        },

        department: [
          {
            "@type": "FoodEstablishment",
            name: "Melt More – فرع الحمراء",
            address: {
              "@type": "PostalAddress",
              streetAddress: "طريق الإمام عبد الله بن سعود بن عبد العزيز",
              addressLocality: "الرياض",
              addressRegion: "منطقة الرياض",
              addressCountry: "SA",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 24.787813,
              longitude: 46.7588815,
            },
            telephone: "+966552202321",
          },
          {
            "@type": "FoodEstablishment",
            name: "Melt More – فرع الخليج",
            address: {
              "@type": "PostalAddress",
              streetAddress: "طريق الأمير بندر بن عبد العزيز",
              addressLocality: "الرياض",
              addressRegion: "منطقة الرياض",
              addressCountry: "SA",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 24.7632435,
              longitude: 46.8002022,
            },
            telephone: "+966552202321",
          },
        ],
      },

      // ③ WebSite + sitelinks search box
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Melt More",
        alternateName: "ميلت مور",
        inLanguage: "ar-SA",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },

      // ④ ItemList of flavours (helps Google understand product range)
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/#flavours`,
        name: "حشوات الشوكولاتة الفاخرة",
        description:
          "تشكيلة حشوات Melt More من الشوكولاتة البلجيكية والمكسرات والقهوة المختصة.",
        numberOfItems: products.length,
        itemListElement: products.slice(0, 20).map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: p.name,
          image: p.image,
        })),
      },

      // ⑤ FAQ — مبنية على وصف البروفايل الفعلي
      {
        "@type": "FAQPage",
        name: "الأسئلة الشائعة - Melt More",
        mainEntity: faqs.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: {
            "@type": "Answer",
            text: a,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify is safe; no user input is interpolated.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
