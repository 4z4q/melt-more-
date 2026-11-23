import type { MetadataRoute } from "next";
import { occasions } from "@/lib/occasions";
import { SITE_URL } from "@/lib/seo";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/flavours", "/blog", ...occasions.map(({ slug }) => "/occasions/" + slug)]
    .map(path => ({ url: SITE_URL + path }));
}
