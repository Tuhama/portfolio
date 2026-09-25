"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
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
  };
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  links,
}: ProjectCardProps) {
  const t = useTranslations("Projects");
  const tA11y = useTranslations("A11y");
  const { resolvedTheme } = useTheme();
  const [githubIcon, setGithubIcon] = useState("/GitHub_Invertocat_Black.svg");
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setGithubIcon(
      resolvedTheme === "light"
        ? "/GitHub_Invertocat_Black.svg"
        : "/GitHub_Invertocat_White.svg",
    );
  }, [resolvedTheme]);

  return (
    <div className="scroll-reveal h-full">
      <Card className="group relative flex h-full flex-col overflow-hidden border-border/50 bg-white/5 glass-morphism transition-all duration-700 hover:border-primary/40 hover:shadow-premium motion-safe:active:scale-[0.98]">
        <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
          <DialogTrigger asChild>
            <button
              type="button"
              className="relative aspect-[16/10] w-full cursor-zoom-in overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
              aria-label={`${title} — ${tA11y("imagePreview")}`}
            >
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.2,1,0.3,1)] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-40" />
              <div className="pointer-events-none absolute inset-0 border border-white/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
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
                className="object-contain"
                priority
              />
            </div>
          </DialogContent>
        </Dialog>

        <CardHeader className="space-y-3 pb-4">
          <CardTitle className="text-2xl font-black tracking-tight transition-colors duration-500 group-hover:text-primary">
            {title}
          </CardTitle>
          <CardDescription className="line-clamp-4 text-base font-medium leading-relaxed text-muted-foreground">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow pb-6">
          <div className="flex flex-wrap gap-2.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-xs font-black tracking-widest text-primary uppercase transition-all duration-500 group-hover:border-primary/30 group-hover:bg-primary/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="gap-4 px-6 pt-4 pb-8">
          {links?.live && (
            <Button
              variant="premium"
              size="sm"
              className="h-11 w-full gap-2.5 font-bold tracking-tight shadow-lg shadow-primary/10"
              asChild
            >
              <a href={links.live} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                <span>{t("live_demo")}</span>
              </a>
            </Button>
          )}
          {links?.github && (
            <Button
              variant="outline"
              size="sm"
              className="glass-morphism h-11 px-5 border-border/50 transition-all hover:bg-primary/5"
              asChild
            >
              <a href={links.github} target="_blank" rel="noopener noreferrer">
                <Image
                  alt=""
                  src={githubIcon}
                  className="h-5 w-5 transition-transform group-hover:scale-110"
                  width={20}
                  height={20}
                />
                <span className="sr-only">{tA11y("github")}</span>
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
