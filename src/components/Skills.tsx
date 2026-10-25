import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/SectionHeading";
import { catalog } from "@/lib/catalog";

export function Skills() {
  const t = useTranslations("Skills");

  return (
    <section id="skills" className="w-full space-y-10 py-16 text-start md:py-24">
      <SectionHeading title={t("title")} description={t("description")} />
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        {catalog.skills.map((group) => {
          const items = t.raw(`groups.${group.key}.items`) as readonly string[];

          return (
            <div key={group.key} className="text-start">
              <h3>{t(`groups.${group.key}.title`)}</h3>
              <p className="mt-2 text-base leading-relaxed text-foreground">
                {items.join(" · ")}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
