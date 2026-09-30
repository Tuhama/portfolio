import { Locale, locales } from "@/i18n/locales";
import { createOgImage } from "@/lib/og-image";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ locale: string }> },
) {
  const { locale } = await params;

  if (!(locales as readonly string[]).includes(locale)) {
    return new Response("Not found", { status: 404 });
  }

  return createOgImage(locale as Locale);
}
