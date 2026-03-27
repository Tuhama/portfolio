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
      <Card className="group glass-morphism overflow-hidden border-white/5 transition-all duration-700 hover:border-primary/40 hover:shadow-premium flex flex-col h-full bg-white/5 relative active:scale-[0.98]">
        <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
          <DialogTrigger asChild>
            <div className="relative aspect-[16/10] overflow-hidden cursor-zoom-in">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-1000 cubic-bezier(0.2, 1, 0.3, 1) group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />

              {/* Subtle inner border on hover */}
              <div className="absolute inset-0 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-5xl border-none bg-transparent p-0 shadow-none">
            <DialogHeader className="sr-only">
              <DialogTitle>{title} - Image Preview</DialogTitle>
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
          <CardTitle className="text-2xl font-black tracking-tight group-hover:text-primary transition-colors duration-500">
            {title}
          </CardTitle>
          <CardDescription className="line-clamp-4 text-muted-foreground/80 text-base leading-relaxed font-medium">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow pb-6">
          <div className="flex flex-wrap gap-2.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-primary/5 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-primary/70 border border-primary/10 group-hover:border-primary/30 group-hover:bg-primary/10 transition-all duration-500"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="gap-4 pt-4 pb-8 px-6">
          {links?.live && (
            <Button
              variant="premium"
              size="sm"
              className="w-full gap-2.5 shadow-lg shadow-primary/10 font-bold tracking-tight h-11"
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
              className="px-5 border-primary/10 hover:bg-primary/5 transition-all h-11 glass-morphism"
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
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
