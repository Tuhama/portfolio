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
    background_color: "#fbfaf9",
    theme_color: "#fbfaf9",
    lang: "en",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
