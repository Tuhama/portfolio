export enum Locale {
  English = "en",
  Arabic = "ar",
  Deutsch = "de",
}

export const locales = [Locale.English, Locale.Arabic, Locale.Deutsch] as const;

export const defaultLocale = Locale.English;
