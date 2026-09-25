"use client";

import { useTranslations } from "next-intl";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";

export function Projects() {
  const t = useTranslations("Projects");

  const items = [
    {
      key: "bpro",
      image: "/assets/projects/BProERP.png",
      links: {},
    },
    {
      key: "mercato",
      image: "/assets/projects/mercato-b2b.png",
      links: {
        live: "https://mercato-pos.com/login",
      },
    },
    {
      key: "glc",
      image: "/assets/projects/GLC.png",
      links: { live: "https://glc-v2-web.web.app/" },
    },
  ];

  return (
    <section id="projects" className="w-full space-y-16 py-24 md:py-32">
      <div className="reveal-up">
        <SectionHeading title={t("title")} description={t("description")} />
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <div key={item.key} className={`reveal-up stagger-${index + 1}`}>
            <ProjectCard
              title={t(`items.${item.key}.title`)}
              description={t(`items.${item.key}.description`)}
              image={item.image}
              tags={t.raw(`items.${item.key}.tags`)}
              links={item.links}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
