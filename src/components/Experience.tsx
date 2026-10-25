import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/SectionHeading";
import { catalog } from "@/lib/catalog";

export function Experience() {
  const t = useTranslations("Experience");

  return (
    <section id="experience" className="w-full space-y-10 py-16 text-start md:py-24">
      <SectionHeading title={t("title")} description={t("description")} />

      <ol className="list-none divide-y divide-border p-0">
        {catalog.roles.map((item) => {
          const highlights = t.raw(
            `items.${item.key}.highlights`,
          ) as readonly string[];
          const tags = t.raw(`items.${item.key}.tags`) as readonly string[];

          return (
            <li key={item.key} className="py-6 first:pt-0">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <h3>{t(`items.${item.key}.company`)}</h3>
                <p className="shrink-0 text-sm text-muted-foreground">
                  {t(`items.${item.key}.period`)}
                </p>
              </div>
              <p className="mt-1 font-medium text-foreground">
                {t(`items.${item.key}.role`)}
              </p>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground">
                {t(`items.${item.key}.description`)}
              </p>
              <ul className="mt-3 max-w-3xl list-disc space-y-1 ps-5 text-sm leading-relaxed text-muted-foreground">
                {highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                {tags.map((tag) => (
                  <li key={tag} className="text-sm text-muted-foreground">
                    {tag}
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
