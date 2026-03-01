"use client";

import { useTranslations } from "next-intl";
import { ProjectCard } from "./ProjectCard";

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
        live: "https://dev.mercato-b2b.com/login",
      },
    },
    {
      key: "glc",
      image: "/assets/projects/GLC.png",
      links: { live: "https://glc-v2-web.web.app/" },
    },
  ];

  return (
    <section id="projects" className="w-full py-32 space-y-16">
      <div className="space-y-6 text-center max-w-4xl mx-auto reveal-up">
        <h2 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50">
          {t("title")}
        </h2>
        <p className="text-xl text-muted-foreground leading-relaxed font-medium">
          {t("description")}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
