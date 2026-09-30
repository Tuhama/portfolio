const DEFAULT_SITE_URL = "https://tuhama.vercel.app";

export const SITE = {
  name: "Tuhama Qlyshi",
  brand: "Tuhama.dev",
  email: "tuhama.gh.qlyshi@gmail.com",
  github: "https://github.com/Tuhama",
  linkedin: "https://www.linkedin.com/in/tuhama-ql",
  cvHref: "/assets/docs/TuhamaQlyshi_CV.pdf",
  cvFilename: "TuhamaQlyshi_CV.pdf",
} as const;

export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured) {
    return configured.replace(/\/$/, "");
  }

  const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercelProduction) {
    return `https://${vercelProduction.replace(/^https?:\/\//, "").replace(/\/$/, "")}`;
  }

  return DEFAULT_SITE_URL;
}
