import type { Metadata } from "next";

export function allowIndexing(): boolean {
  const env = process.env.VERCEL_ENV;
  return env !== "preview" && env !== "development";
}

export function robotsMetadata(): Metadata["robots"] {
  const index = allowIndexing();

  return {
    index,
    follow: index,
    googleBot: {
      index,
      follow: index,
      "max-image-preview": index ? "large" : "none",
      "max-snippet": index ? -1 : 0,
      "max-video-preview": index ? -1 : 0,
    },
  };
}
