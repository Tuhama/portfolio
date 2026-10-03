import { useTranslations } from "next-intl";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { SITE } from "@/lib/site";

const linkClassName =
  "inline-flex items-center gap-2 text-sm font-bold text-foreground/60 transition-colors hover:text-primary focus-visible:rounded-sm focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function Contact() {
  const t = useTranslations("Contact");
  const tHero = useTranslations("Hero");

  return (
    <section id="contact" className="w-full py-16 md:py-20">
      <div className="reveal-up mx-auto max-w-3xl space-y-8 text-center">
        <SectionHeading title={t("title")} description={t("description")} />
        <div className="flex flex-col items-center gap-5">
          <a href={`mailto:${SITE.email}`}>
            <Button
              size="lg"
              variant="premium"
              className="h-12 gap-2.5 px-8 text-base font-bold"
            >
              <Mail className="h-5 w-5" />
              {t("email")}
            </Button>
          </a>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="me noopener noreferrer"
              className={linkClassName}
            >
              <Linkedin className="h-4 w-4" />
              {t("linkedin")}
            </a>
            <a
              href={SITE.github}
              target="_blank"
              rel="me noopener noreferrer"
              className={linkClassName}
            >
              <Github className="h-4 w-4" />
              {t("github")}
            </a>
            <a href={SITE.cvHref} download={SITE.cvFilename} className={linkClassName}>
              <Download className="h-4 w-4" />
              {tHero("actions.cv")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
