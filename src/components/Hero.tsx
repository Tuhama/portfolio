import Image from "next/image";
import { useTranslations } from "next-intl";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

const linkClassName =
  "text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="w-full space-y-6 py-16 text-start md:py-24">
      <div className="flex max-w-3xl flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-6">
        <Image
          src="/assets/portrait.jpg"
          alt={t("title")}
          width={128}
          height={128}
          priority
          className="size-24 shrink-0 rounded-full border border-border object-cover sm:size-32"
        />
        <div className="min-w-0 space-y-3">
          <h1 className="text-foreground">{t("title")}</h1>
          <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1">
            <p className="text-xl text-foreground sm:text-2xl">{t("subtitle")}</p>
            <p className="text-xl text-foreground sm:text-2xl">{t("badge")}</p>
          </div>
        </div>
      </div>
      <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
        {t("description")}
      </p>
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <Button size="lg" className="w-full gap-2 sm:w-auto" asChild>
          <a href={SITE.cvHref} download={SITE.cvFilename}>
            <Download className="h-4 w-4" />
            {t("actions.cv")}
          </a>
        </Button>
        <a href={`mailto:${SITE.email}`} className={linkClassName}>
          {t("actions.contact")}
        </a>
      </div>
    </section>
  );
}
