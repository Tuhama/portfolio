"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  links?: {
    github?: string;
    live?: string;
    liveLabel?: string;
  };
  imageFit?: "cover" | "contain";
}

const linkClassName =
  "text-sm text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function ProjectCard({
  title,
  description,
  image,
  tags,
  links,
  imageFit = "cover",
}: ProjectCardProps) {
  const t = useTranslations("Projects");
  const tA11y = useTranslations("A11y");
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <Card className="flex h-full flex-col overflow-hidden">
      <figure className="flex h-full flex-col">
        <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
          <DialogTrigger asChild>
            <button
              type="button"
              className="relative aspect-[16/10] w-full cursor-zoom-in overflow-hidden border-b border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
              aria-label={`${title} — ${tA11y("imagePreview")}`}
            >
              <Image
                src={image}
                alt={title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className={imageFit === "contain" ? "object-contain p-8" : "object-cover"}
              />
            </button>
          </DialogTrigger>
          <DialogContent
            closeLabel={tA11y("close")}
            className="max-w-5xl border-none bg-transparent p-0 shadow-none"
          >
            <DialogHeader className="sr-only">
              <DialogTitle>
                {title} — {tA11y("imagePreview")}
              </DialogTitle>
            </DialogHeader>
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <Image
                src={image}
                alt={title}
                fill
                sizes="(min-width: 1024px) 64rem, 100vw"
                className={imageFit === "contain" ? "object-contain p-16" : "object-contain"}
              />
            </div>
          </DialogContent>
        </Dialog>

        <figcaption className="space-y-2 p-4 text-start">
          <h3>{title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
          <ul className="flex flex-wrap gap-x-3 gap-y-1">
            {tags.map((tag) => (
              <li key={tag} className="text-sm text-muted-foreground">
                {tag}
              </li>
            ))}
          </ul>
          {links?.live || links?.github ? (
            <div className="flex flex-wrap gap-x-4 gap-y-2 pt-1">
              {links.live ? (
                <a
                  href={links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClassName}
                >
                  {links.liveLabel ?? t("live_demo")}
                </a>
              ) : null}
              {links.github ? (
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClassName}
                >
                  {tA11y("github")}
                </a>
              ) : null}
            </div>
          ) : null}
        </figcaption>
      </figure>
    </Card>
  );
}
