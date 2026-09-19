import { branches } from "@/lib/branches";
import { SITE_URL, HOME_DESCRIPTION } from "@/lib/seo";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": SITE_URL + "/#organization", name: "ميلت مور", alternateName: "Melt More", url: SITE_URL,
        logo: SITE_URL + "/logo.png", description: HOME_DESCRIPTION,
        sameAs: ["https://www.instagram.com/melt.more", "https://www.tiktok.com/@melt.more"] },
      { "@type": "WebSite", "@id": SITE_URL + "/#website", name: "ميلت مور", alternateName: "Melt More", url: SITE_URL, inLanguage: "ar-SA", publisher: { "@id": SITE_URL + "/#organization" } },
      ...branches.map((branch, i) => ({
        "@type": "Store", "@id": SITE_URL + "/#branch-" + i, name: "ميلت مور — " + branch.name,
        url: SITE_URL + "/#branches", image: SITE_URL + "/logo.png", telephone: branch.phone,
        parentOrganization: { "@id": SITE_URL + "/#organization" }, hasMap: branch.mapsUrl,
        address: { "@type": "PostalAddress", streetAddress: branch.neighborhood + "، " + branch.address, addressLocality: i === 0 ? "الرياض" : "الطائف", addressCountry: "SA" },
      })),
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />;
}
