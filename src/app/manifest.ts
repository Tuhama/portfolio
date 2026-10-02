import type { MetadataRoute } from "next";
import en from "../../messages/en.json";
import { SITE } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: en.Metadata.title,
    short_name: SITE.brand,
    description: en.Metadata.description,
    start_url: "/",
    display: "standalone",
    background_color: "#020817",
    theme_color: "#020817",
    lang: "en",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
