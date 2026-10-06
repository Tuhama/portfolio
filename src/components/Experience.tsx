import { useTranslations } from "next-intl";
import { Building2, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { catalog } from "@/lib/catalog";

export function Experience() {
  const t = useTranslations("Experience");

  return (
    <section id="experience" className="w-full space-y-16 py-24 md:py-32">
      <div className="reveal-up">
        <SectionHeading title={t("title")} description={t("description")} />
      </div>

      <div className="mx-auto max-w-5xl">
        <div className="relative border-s-2 border-primary/20 ms-4 sm:ms-8 ps-6 sm:ps-12 space-y-12">
          {catalog.roles.map((item, index) => {
            const Icon = item.icon;
            const highlights = t.raw(
              `items.${item.key}.highlights`,
            ) as readonly string[];
            const tags = t.raw(`items.${item.key}.tags`) as readonly string[];

            return (
              <div
                key={item.key}
                className={`reveal-up stagger-${index + 1} relative group`}
              >
                {/* Timeline node indicator */}
                <div
                  className="absolute -start-[2.65rem] sm:-start-[4.15rem] top-1.5 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl border border-primary/30 bg-background text-primary shadow-premium transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-primary/30"
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>

                {/* Experience Card */}
                <div className="glass-morphism relative overflow-hidden rounded-3xl border border-border/50 bg-white/5 p-6 sm:p-8 transition-all duration-700 hover:border-primary/40 hover:shadow-premium motion-safe:hover:scale-[1.01] motion-safe:active:scale-[0.99]">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-2xl font-black tracking-tight transition-colors duration-500 group-hover:text-primary">
                        {t(`items.${item.key}.role`)}
                      </h3>
                      <div className="mt-1 flex items-center gap-2 text-base font-semibold text-muted-foreground">
                        <Building2 className="h-4 w-4 shrink-0 text-primary/70" />
                        <span>{t(`items.${item.key}.company`)}</span>
                      </div>
                    </div>

                    <div className="inline-flex w-fit items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-bold tracking-wide text-primary">
                      <Calendar className="h-3.5 w-3.5 shrink-0" />
                      <span>{t(`items.${item.key}.period`)}</span>
                    </div>
                  </div>

                  <p className="mt-4 text-base font-medium leading-relaxed text-foreground/80">
                    {t(`items.${item.key}.description`)}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {highlights.map((highlight, hIndex) => (
                      <li
                        key={hIndex}
                        className="flex items-start gap-3 text-sm sm:text-base leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2 pt-2 border-t border-border/30">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-xs font-black tracking-widest text-primary uppercase transition-all duration-500 group-hover:border-primary/30 group-hover:bg-primary/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
