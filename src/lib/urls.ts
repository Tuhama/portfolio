import { defaultLocale, Locale, locales } from "@/i18n/locales";
import { getSiteUrl } from "@/lib/site";

const openGraphLocales: Record<Locale, string> = {
  [Locale.English]: "en_US",
  [Locale.Deutsch]: "de_DE",
  [Locale.Arabic]: "ar_AR",
};

export function localizedPath(locale: string, path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const suffix = normalized === "/" ? "" : normalized.replace(/\/$/, "");

  if (locale === defaultLocale) {
    return suffix || "/";
  }

  return `/${locale}${suffix}`;
}

export function languageAlternates(path = "/"): Record<string, string> {
  return {
    ...Object.fromEntries(locales.map((locale) => [locale, localizedPath(locale, path)])),
    "x-default": localizedPath(defaultLocale, path),
  };
}

export function absoluteUrl(locale: string, path = "/"): string {
  const siteUrl = getSiteUrl();
  const localized = localizedPath(locale, path);

  if (localized === "/") {
    return siteUrl;
  }

  return `${siteUrl}${localized}`;
}

export function absoluteLanguageAlternates(path = "/"): Record<string, string> {
  return Object.fromEntries(
    Object.entries(languageAlternates(path)).map(([locale, localized]) => [
      locale,
      localized === "/" ? getSiteUrl() : `${getSiteUrl()}${localized}`,
    ]),
  );
}

export function openGraphLocale(locale: string): string {
  if (locale in openGraphLocales) {
    return openGraphLocales[locale as Locale];
  }

  return openGraphLocales[defaultLocale];
}

export function openGraphAlternateLocales(locale: string): string[] {
  return locales.filter((item) => item !== locale).map((item) => openGraphLocale(item));
}
