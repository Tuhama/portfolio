import Image from "next/image";
import { useTranslations } from "next-intl";
import { ContactActions } from "@/components/ContactActions";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="w-full pt-16 pb-8 text-start md:pt-24 md:pb-12">
      <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <Image
          src="/assets/portrait.jpg"
          alt={t("title")}
          width={224}
          height={224}
          sizes="(min-width: 1024px) 14rem, (min-width: 640px) 8rem, 6rem"
          priority
          className="size-24 shrink-0 rounded-full border border-border object-cover sm:size-32 lg:order-last lg:size-56"
        />
        <div className="min-w-0 max-w-3xl space-y-6">
          <div className="space-y-3">
            <h1 className="text-foreground">{t("title")}</h1>
            <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1">
              <p className="text-xl text-foreground sm:text-2xl">{t("subtitle")}</p>
              <p className="text-xl text-foreground sm:text-2xl">{t("badge")}</p>
            </div>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            {t("description")}
          </p>
          <ContactActions emailLabel={t("actions.contact")} />
        </div>
      </div>
    </section>
  );
}
