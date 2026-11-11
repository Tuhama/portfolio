import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/SectionHeading";
import { catalog } from "@/lib/catalog";

export function Education() {
  const t = useTranslations("Education");

  return (
    <section id="education" className="w-full space-y-10 py-16 text-start md:py-24">
      <SectionHeading title={t("title")} description={t("description")} />
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div className="text-start">
          <h3>{t("degreesTitle")}</h3>
          <ul className="mt-2 list-none space-y-4 p-0">
            {catalog.degrees.map((degree) => (
              <li key={degree.key}>
                <p className="font-medium text-foreground">
                  {t(`degrees.${degree.key}.title`)}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t(`degrees.${degree.key}.school`)} ·{" "}
                  {t(`degrees.${degree.key}.year`)}
                </p>
                {degree.thesis ? (
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {t("thesis")}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-start">
          <h3>{t("languagesTitle")}</h3>
          <ul className="mt-2 list-none space-y-1 p-0">
            {catalog.languages.map((language) => (
              <li key={language.key} className="text-base leading-relaxed">
                <span className="text-foreground">
                  {t(`languages.${language.key}.name`)}
                </span>
                <span className="text-muted-foreground">
                  {" — "}
                  {t(`languages.${language.key}.level`)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
