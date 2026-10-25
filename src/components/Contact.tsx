import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/SectionHeading";
import { SITE } from "@/lib/site";

const linkClassName =
  "text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function Contact() {
  const t = useTranslations("Contact");
  const tHero = useTranslations("Hero");

  return (
    <section id="contact" className="w-full space-y-8 py-16 text-start md:py-24">
      <div className="max-w-3xl space-y-8">
        <SectionHeading title={t("title")} description={t("description")} />
        <div className="flex flex-col items-start gap-3">
          <a href={`mailto:${SITE.email}`} className={linkClassName}>
            {t("email")}
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="me noopener noreferrer"
            className={linkClassName}
          >
            {t("linkedin")}
          </a>
          <a
            href={SITE.github}
            target="_blank"
            rel="me noopener noreferrer"
            className={linkClassName}
          >
            {t("github")}
          </a>
          <a href={SITE.cvHref} download={SITE.cvFilename} className={linkClassName}>
            {tHero("actions.cv")}
          </a>
        </div>
      </div>
    </section>
  );
}
