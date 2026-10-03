import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/SectionHeading";

const records = ["001", "002"] as const;

export default function ADRPage() {
  const t = useTranslations("ADR");

  return (
    <main
      id="main"
      className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 pb-20 sm:px-6 lg:px-8"
    >
      <section className="w-full space-y-16 py-24 md:py-32">
        <div className="reveal-up">
          <SectionHeading title={t("title")} description={t("description")} />
        </div>

        <div className="mx-auto flex max-w-3xl flex-col gap-6">
          {records.map((key, index) => (
            <article
              key={key}
              className={`reveal-up stagger-${index + 1} glass-morphism relative overflow-hidden rounded-3xl border border-border/50 bg-white/5 p-6 sm:p-8`}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-2xl font-black tracking-tight">
                  {t(`records.${key}.title`)}
                </h3>
                <span className="inline-flex w-fit shrink-0 items-center rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-bold tracking-wide text-primary">
                  {t("decision")}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
