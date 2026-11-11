import { useTranslations } from "next-intl";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { textLinkClass } from "@/components/ui/text-link";
import { SITE } from "@/lib/site";

interface ContactActionsProps {
  emailLabel: string;
}

export function ContactActions({ emailLabel }: ContactActionsProps) {
  const tHero = useTranslations("Hero");
  const tContact = useTranslations("Contact");

  return (
    <div className="flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
      <Button size="lg" className="w-full gap-2 sm:w-auto" asChild>
        <a href={SITE.cvHref} download={SITE.cvFilename}>
          <Download className="h-4 w-4" />
          {tHero("actions.cv")}
        </a>
      </Button>
      <a href={`mailto:${SITE.email}`} className={textLinkClass}>
        {emailLabel}
      </a>
      <a
        href={SITE.linkedin}
        target="_blank"
        rel="me noopener noreferrer"
        className={textLinkClass}
      >
        {tContact("linkedin")}
      </a>
      <a
        href={SITE.github}
        target="_blank"
        rel="me noopener noreferrer"
        className={textLinkClass}
      >
        {tContact("github")}
      </a>
    </div>
  );
}
