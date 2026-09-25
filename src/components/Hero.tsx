import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Download, MessageSquare } from "lucide-react";
import { SITE } from "@/lib/site";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="noise-overlay relative flex min-h-[calc(100dvh-5rem)] w-full flex-col items-center justify-center overflow-hidden px-4 text-center">
      <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden bg-background">
        <div className="absolute -start-[10%] -top-[10%] h-[60%] w-[60%] rounded-full bg-primary/10 blur-[130px] mix-blend-soft-light motion-safe:animate-pulse"></div>
        <div
          className="absolute -end-[10%] -bottom-[10%] h-[60%] w-[60%] rounded-full bg-primary/20 blur-[130px] mix-blend-soft-light motion-safe:animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_60%,transparent_100%)] opacity-30"></div>
      </div>

      <div className="reveal-up relative z-10 max-w-5xl space-y-10">
        <div className="reveal-scale stagger-1 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-bold tracking-wide text-primary backdrop-blur-md">
          <span className="me-3 flex h-2 w-2 rounded-full bg-primary motion-safe:animate-ping"></span>
          {t("badge")}
        </div>

        <h1 className="reveal-up stagger-2 text-5xl font-black tracking-tighter sm:text-7xl lg:text-8xl">
          <span className="text-gradient">{t("title")}</span>
        </h1>

        <div className="reveal-up stagger-3 mx-auto max-w-3xl space-y-8">
          <p className="text-xl font-medium leading-relaxed text-muted-foreground sm:text-2xl">
            {t("subtitle")}
          </p>
          <div className="flex justify-center">
            <span className="max-w-2xl rounded-2xl border border-primary/10 bg-primary/5 px-6 py-3 font-mono text-sm leading-relaxed tracking-wide text-primary/80 backdrop-blur-sm">
              {t("description")}
            </span>
          </div>
        </div>

        <div className="reveal-up stagger-4 flex flex-col items-center justify-center gap-4 pt-8 sm:flex-row">
          <a href={SITE.cvHref} download={SITE.cvFilename} className="w-full sm:w-auto">
            <Button
              size="lg"
              variant="outline"
              className="glass-morphism h-16 w-full gap-3 border-border/50 px-12 text-lg font-bold transition-all duration-300 hover:bg-primary/5 motion-safe:active:scale-95 sm:w-auto"
            >
              <Download className="h-5 w-5" />
              {t("actions.cv")}
            </Button>
          </a>
          <a href={`mailto:${SITE.email}`} className="w-full sm:w-auto">
            <Button
              size="lg"
              variant="premium"
              className="h-16 w-full gap-3 px-12 text-lg font-bold sm:w-auto"
            >
              <MessageSquare className="h-5 w-5" />
              {t("actions.consultation")}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
