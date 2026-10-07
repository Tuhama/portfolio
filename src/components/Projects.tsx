import { useTranslations } from "next-intl";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { catalog } from "@/lib/catalog";

export function Projects() {
  const t = useTranslations("Projects");

  return (
    <section id="projects" className="w-full space-y-16 py-24 md:py-32">
      <div className="reveal-up">
        <SectionHeading title={t("title")} description={t("description")} />
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {catalog.projects.map((project) => (
          <div key={project.key}>
            <ProjectCard
              title={t(`items.${project.key}.title`)}
              description={t(`items.${project.key}.description`)}
              image={project.image}
              tags={t.raw(`items.${project.key}.tags`)}
              links={
                project.links
                  ? {
                      github: project.links.github,
                      live: project.links.live,
                      liveLabel: project.links.liveLabel
                        ? t(project.links.liveLabel)
                        : undefined,
                    }
                  : undefined
              }
            />
          </div>
        ))}
      </div>
    </section>
  );
}
