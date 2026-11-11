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
            <li
              key={item.key}
              className="py-8 first:pt-0 lg:grid lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-x-10"
            >
              <div className="space-y-1">
                <h3>{t(`items.${item.key}.company`)}</h3>
                <p className="font-medium text-foreground">
                  {t(`items.${item.key}.role`)}
                </p>
                <p className="text-sm text-muted-foreground">
                  {t(`items.${item.key}.period`)}
                </p>
              </div>
              <div className="mt-4 max-w-3xl space-y-3 lg:mt-0">
                <p className="text-base leading-relaxed text-muted-foreground">
                  {t(`items.${item.key}.description`)}
                </p>
                {highlights.length > 0 ? (
                  <ul className="list-disc space-y-1.5 ps-5 text-base leading-relaxed text-foreground marker:text-muted-foreground">
                    {highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                ) : null}
                <ul className="flex flex-wrap gap-x-3 gap-y-1 pt-1">
                  {tags.map((tag) => (
                    <li key={tag} className="text-sm text-muted-foreground">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
