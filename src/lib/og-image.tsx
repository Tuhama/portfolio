import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";
import { Locale } from "@/i18n/locales";
import { SITE } from "@/lib/site";

export const ogImageSize = {
  width: 1200,
  height: 630,
};

export const ogImageAlt = SITE.name;

let fontsPromise: Promise<[Buffer, Buffer]> | null = null;

function loadFonts() {
  if (!fontsPromise) {
    fontsPromise = Promise.all([
      readFile(join(process.cwd(), "src/assets/fonts/inter-latin-700-normal.woff")),
      readFile(join(process.cwd(), "src/assets/fonts/cairo-arabic-700-normal.woff")),
    ]);
  }

  return fontsPromise;
}

export async function createOgImage(locale: string) {
  const [inter, arabic] = await loadFonts();
  const t = await getTranslations({ locale, namespace: "Hero" });
  const isArabic = locale === Locale.Arabic;
  const copyFont = isArabic ? "Cairo" : "Inter";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#020817",
          color: "#f8fafc",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#a78bfa",
            fontFamily: "Inter",
          }}
        >
          {SITE.brand}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              lineHeight: 1.05,
              fontFamily: "Inter",
              letterSpacing: "-0.04em",
            }}
          >
            {SITE.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 36,
              color: "#cbd5e1",
              fontFamily: copyFont,
              direction: isArabic ? "rtl" : "ltr",
            }}
          >
            {t("subtitle")}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#94a3b8",
            fontFamily: copyFont,
            direction: isArabic ? "rtl" : "ltr",
          }}
        >
          {t("badge")}
        </div>
      </div>
    ),
    {
      ...ogImageSize,
      fonts: [
        { name: "Inter", data: inter, weight: 700, style: "normal" },
        { name: "Cairo", data: arabic, weight: 700, style: "normal" },
      ],
    },
  );
}
