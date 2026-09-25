import { useTranslations } from "next-intl";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { SITE } from "@/lib/site";

export function Contact() {
  const t = useTranslations("Contact");
  const tHero = useTranslations("Hero");

  return (
    <section id="contact" className="w-full space-y-12 py-24 md:py-32">
      <div className="reveal-up">
        <SectionHeading title={t("title")} description={t("description")} />
      </div>
      <div className="flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row">
        <a href={`mailto:${SITE.email}`} className="w-full sm:w-auto">
          <Button
            size="lg"
            variant="premium"
            className="h-14 w-full gap-3 px-8 text-base font-bold sm:w-auto"
          >
            <Mail className="h-5 w-5" />
            {t("email")}
          </Button>
        </a>
        <a
          href={SITE.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto"
        >
          <Button
            size="lg"
            variant="outline"
            className="glass-morphism h-14 w-full gap-3 border-border/50 px-8 text-base font-bold hover:bg-primary/5 sm:w-auto"
          >
            <Linkedin className="h-5 w-5" />
            {t("linkedin")}
          </Button>
        </a>
        <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
          <Button
            size="lg"
            variant="outline"
            className="glass-morphism h-14 w-full gap-3 border-border/50 px-8 text-base font-bold hover:bg-primary/5 sm:w-auto"
          >
            <Github className="h-5 w-5" />
            {t("github")}
          </Button>
        </a>
        <a href={SITE.cvHref} download={SITE.cvFilename} className="w-full sm:w-auto">
          <Button
            size="lg"
            variant="outline"
            className="glass-morphism h-14 w-full gap-3 border-border/50 px-8 text-base font-bold hover:bg-primary/5 sm:w-auto"
          >
            <Download className="h-5 w-5" />
            {tHero("actions.cv")}
          </Button>
        </a>
      </div>
    </section>
  );
}
