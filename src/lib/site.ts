const DEFAULT_SITE_URL = "https://tuhama.vercel.app";

export const SITE = {
  name: "Tuhama Qlyshi",
  givenName: "Tuhama",
  familyName: "Qlyshi",
  brand: "Tuhama Qlyshi",
  email: "tuhama.gh.qlyshi@gmail.com",
  github: "https://github.com/Tuhama",
  linkedin: "https://www.linkedin.com/in/tuhama-ql",
  cvHref: "/assets/docs/TuhamaQlyshi_CV.pdf",
  cvFilename: "TuhamaQlyshi_CV.pdf",
  expertise: [
    "React",
    "Next.js",
    "TypeScript",
    "Java Spring Boot",
    "MySQL",
    "Frontend architecture",
    "Web application security",
    "Internationalization",
  ],
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
