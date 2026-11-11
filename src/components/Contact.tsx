import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/SectionHeading";
import { textLinkClass } from "@/components/ui/text-link";
import { SITE } from "@/lib/site";

export function Contact() {
  const t = useTranslations("Contact");
  const tHero = useTranslations("Hero");

  return (
    <section id="contact" className="w-full space-y-8 py-16 text-start md:py-24">
      <div className="max-w-3xl space-y-8">
        <SectionHeading title={t("title")} description={t("description")} />
        <div className="flex flex-col items-start gap-3">
          <a href={`mailto:${SITE.email}`} className={textLinkClass}>
            {t("email")}
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="me noopener noreferrer"
            className={textLinkClass}
          >
            {t("linkedin")}
          </a>
          <a
            href={SITE.github}
            target="_blank"
            rel="me noopener noreferrer"
            className={textLinkClass}
          >
            {t("github")}
          </a>
          <a href={SITE.cvHref} download={SITE.cvFilename} className={textLinkClass}>
            {tHero("actions.cv")}
          </a>
        </div>
      </div>
    </section>
  );
}
