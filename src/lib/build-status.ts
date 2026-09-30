export type BuildState = "success" | "failure" | "pending" | "unknown";

export const PRODUCTION_WORKFLOW_URL =
  "https://github.com/Tuhama/portfolio/actions/workflows/production.yml";

const RUNS_URL =
  "https://api.github.com/repos/Tuhama/portfolio/actions/workflows/production.yml/runs?branch=main&event=push&per_page=1";

type WorkflowRun = {
  status?: string | null;
  conclusion?: string | null;
};

export function buildStateFromRun(run: WorkflowRun | null | undefined): BuildState {
  if (!run?.status) return "unknown";
  if (run.status !== "completed") return "pending";

  switch (run.conclusion) {
    case "success":
      return "success";
    case "failure":
    case "timed_out":
    case "startup_failure":
    case "action_required":
      return "failure";
    default:
      return "unknown";
  }
}

export async function getProductionBuildState(): Promise<BuildState> {
  try {
    const response = await fetch(RUNS_URL, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "tuhama-portfolio",
      },
      next: { revalidate: 300 },
    });

    if (!response.ok) return "unknown";

    const data = (await response.json()) as { workflow_runs?: WorkflowRun[] };
    return buildStateFromRun(data.workflow_runs?.[0]);
  } catch {
    return "unknown";
  }
}
