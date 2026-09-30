"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";

export function Projects() {
  const t = useTranslations("Projects");
  const { resolvedTheme } = useTheme();
  const [mark, setMark] = useState("/GitHub_Invertocat_White.svg");

  useEffect(() => {
    setMark(
      resolvedTheme === "light"
        ? "/GitHub_Invertocat_Black.svg"
        : "/GitHub_Invertocat_White.svg",
    );
  }, [resolvedTheme]);

  const items = [
    {
      key: "bpro",
      image: "/assets/projects/BProERP.png",
      imageFit: "cover" as const,
      links: {},
    },
    {
      key: "translationManager",
      image: mark,
      imageFit: "contain" as const,
      links: {
        live: "https://www.npmjs.com/package/@tuhama/translation-manager",
        liveLabel: t("view_package"),
      },
    },
    {
      key: "glc",
      image: "/assets/projects/GLC.png",
      imageFit: "cover" as const,
      links: { live: "https://system.glc-qa.com" },
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
              imageFit={item.imageFit}
              tags={t.raw(`items.${item.key}.tags`)}
              links={item.links}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
