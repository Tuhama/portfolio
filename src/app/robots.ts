import type { MetadataRoute } from "next";
import { allowIndexing } from "@/lib/indexing";
import { getSiteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  if (!allowIndexing()) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${getSiteUrl()}/sitemap.xml`,
  };
}
