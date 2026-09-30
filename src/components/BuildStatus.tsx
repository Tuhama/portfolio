import { getTranslations } from "next-intl/server";
import {
  type BuildState,
  PRODUCTION_WORKFLOW_URL,
  getProductionBuildState,
} from "@/lib/build-status";

const tone: Record<BuildState, { dot: string; label: string; pulse?: boolean }> = {
  success: {
    dot: "bg-emerald-500",
    label: "text-emerald-700 dark:text-emerald-400",
  },
  failure: {
    dot: "bg-red-500",
    label: "text-red-700 dark:text-red-400",
  },
  pending: {
    dot: "bg-amber-400",
    label: "text-amber-700 dark:text-amber-300",
    pulse: true,
  },
  unknown: {
    dot: "bg-muted-foreground",
    label: "text-muted-foreground",
  },
};

export async function BuildStatus() {
  const t = await getTranslations("Build");
  const state = await getProductionBuildState();
  const styles = tone[state];
  const status = t(state);

  return (
    <a
      href={PRODUCTION_WORKFLOW_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("aria", { status })}
      className="inline-flex w-fit items-center gap-2.5 rounded-full border border-border/60 bg-background/80 py-1.5 ps-2.5 pe-3.5 text-xs font-semibold shadow-sm transition-colors hover:border-primary/40 hover:bg-surface-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <span className="relative flex size-2.5 shrink-0 items-center justify-center" aria-hidden>
        {styles.pulse ? (
          <span className={`absolute size-2.5 animate-ping rounded-full opacity-60 ${styles.dot}`} />
        ) : null}
        <span className={`relative size-2 rounded-full ${styles.dot}`} />
      </span>
      <span className="tracking-tight text-foreground/75">{t("label")}</span>
      <span className={`font-bold ${styles.label}`}>{status}</span>
    </a>
  );
}
