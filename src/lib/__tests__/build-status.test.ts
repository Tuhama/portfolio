import { describe, expect, it } from "vitest";
import { buildStateFromRun } from "../build-status";

describe("buildStateFromRun", () => {
  it("treats a completed successful run as passing", () => {
    expect(buildStateFromRun({ status: "completed", conclusion: "success" })).toBe("success");
  });

  it("treats an in-progress run as pending", () => {
    expect(buildStateFromRun({ status: "in_progress", conclusion: null })).toBe("pending");
  });

  it("treats failed conclusions as failing", () => {
    expect(buildStateFromRun({ status: "completed", conclusion: "failure" })).toBe("failure");
    expect(buildStateFromRun({ status: "completed", conclusion: "timed_out" })).toBe("failure");
  });

  it("returns unknown when the run is missing or inconclusive", () => {
    expect(buildStateFromRun(null)).toBe("unknown");
    expect(buildStateFromRun({ status: "completed", conclusion: "cancelled" })).toBe("unknown");
  });
});
