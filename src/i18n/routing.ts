import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export enum Locale {
  English = "en",
  Arabic = "ar",
  Deutsch = "de",
}

export const routing = defineRouting({
  locales: [Locale.English, Locale.Arabic, Locale.Deutsch],
  defaultLocale: Locale.English,
  localePrefix: "as-needed",
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
