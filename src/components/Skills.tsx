import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/SectionHeading";
import { catalog } from "@/lib/catalog";

export function Skills() {
  const t = useTranslations("Skills");

  return (
    <section id="skills" className="w-full space-y-16 py-24 md:py-32">
      <div className="scroll-reveal">
        <SectionHeading title={t("title")} description={t("description")} />
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {catalog.skills.map((group, index) => {
          const Icon = group.icon;
          const items = t.raw(`groups.${group.key}.items`) as readonly string[];

          return (
            <div
              key={group.key}
              className={`scroll-reveal stagger-${index + 1} group glass-morphism relative overflow-hidden rounded-[2.5rem] border border-border/50 bg-gradient-to-br from-primary/10 to-primary/5 p-10 transition-all duration-700 hover:border-primary/40 hover:shadow-premium motion-safe:hover:scale-[1.03] motion-safe:active:scale-[0.98]`}
            >
              <div className="absolute -end-4 -top-4 h-24 w-24 rounded-full bg-primary/5 blur-2xl transition-colors duration-700 group-hover:bg-primary/10" />

              <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10 text-primary shadow-inner transition-all duration-700 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/30">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mb-8 text-3xl font-black tracking-tight">
                {t(`groups.${group.key}.title`)}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-xl border border-border/50 bg-surface-1 px-4 py-2 text-sm font-bold text-foreground/70 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
