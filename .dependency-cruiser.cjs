/**
 * Architecture rules for the portfolio, checked by `pnpm arch:check` in CI.
 * The same config drives the dependency graph rendered by `pnpm arch:graph`.
 *
 * Layers (a layer may only depend on the ones below it):
 *   src/app            routes, layouts, metadata files
 *   src/components     page sections and composed widgets
 *   src/components/ui  shared primitives (leaf layer)
 *   src/lib, src/i18n  data, config and helpers (no React UI)
 *
 * @type {import('dependency-cruiser').IConfiguration}
 */
const TESTS = "(^src/test/|/__tests__/|\\.test\\.tsx?$)";

module.exports = {
  forbidden: [
    {
      name: "no-circular",
      severity: "error",
      comment: "Circular imports make modules hard to reason about and to test in isolation.",
      from: {},
      to: { circular: true },
    },
    {
      name: "ui-primitives-are-leaves",
      severity: "error",
      comment:
        "src/components/ui holds generic primitives. They must not know about page sections, routes or i18n; only other primitives and @/lib/utils.",
      from: { path: "^src/components/ui/", pathNot: TESTS },
      to: {
        path: "^src/",
        pathNot: ["^src/components/ui/", "^src/lib/utils\\.tsx?$"],
      },
    },
    {
      name: "components-do-not-import-app",
      severity: "error",
      comment: "Routes compose components, never the other way around.",
      from: { path: "^src/components/" },
      to: { path: "^src/app/" },
    },
    {
      name: "lib-has-no-ui",
      severity: "error",
      comment: "src/lib and src/i18n are data and helpers; they must not depend on components or routes.",
      from: { path: "^src/(lib|i18n)/" },
      to: { path: "^src/(app|components)/" },
    },
    {
      name: "use-i18n-routing",
      severity: "error",
      comment:
        "Components and lib use Link/useRouter/usePathname/redirect from @/i18n/routing so locale prefixes stay correct. next/navigation is only allowed in src/app (for notFound) and src/i18n.",
      from: { path: "^src/(components|lib)/" },
      to: { path: "node_modules/next/(link|navigation)(\\.js)?$" },
    },
    {
      name: "tests-stay-out-of-production",
      severity: "error",
      comment: "Production code must not import test files or test helpers.",
      from: { path: "^src/", pathNot: TESTS },
      to: { path: TESTS },
    },
    {
      name: "no-dev-deps-in-production",
      severity: "error",
      comment: "Production code must only use packages from dependencies, or it may break in the deployed build.",
      from: { path: "^src/", pathNot: TESTS },
      to: { dependencyTypes: ["npm-dev"], dependencyTypesNot: ["type-only"], pathNot: "node_modules/@types/" },
    },
    {
      name: "not-to-unresolvable",
      severity: "error",
      comment: "Every import must resolve to a file or an installed package.",
      from: {},
      to: { couldNotResolve: true },
    },
    {
      name: "no-orphans",
      severity: "warn",
      comment: "A module nothing imports is probably dead code. Next.js entry files and tests are exempt.",
      from: {
        orphan: true,
        pathNot: [
          TESTS,
          "\\.d\\.ts$",
          "^src/app/",
          "^src/proxy\\.ts$",
          "^src/global\\.ts$",
          "^src/i18n/request\\.ts$",
        ],
      },
      to: {},
    },
  ],
  options: {
    doNotFollow: { path: "node_modules" },
    exclude: { path: "\\.(css|png|ico|svg|woff2?)$" },
    tsPreCompilationDeps: true,
    tsConfig: { fileName: "tsconfig.json" },
    enhancedResolveOptions: {
      exportsFields: ["exports"],
      conditionNames: ["import", "require", "node", "default", "types"],
      mainFields: ["module", "main", "types", "typings"],
    },
    reporterOptions: {
      dot: {
        // The published graph shows the app's own modules only, grouped by folder.
        filters: { includeOnly: { path: "^src/" }, exclude: { path: TESTS } },
        theme: {
          graph: {
            rankdir: "LR",
            splines: "true",
            nodesep: "0.15",
            ranksep: "0.9",
            bgcolor: "transparent",
            // Folder clusters
            style: "rounded,filled",
            color: "#cbd5e1",
            fillcolor: "#f8fafc80",
            penwidth: "1",
            fontcolor: "#475569",
            fontname: "Helvetica",
            fontsize: "11",
            pad: "0.3",
          },
          node: {
            shape: "box",
            style: "rounded,filled",
            fillcolor: "#ffffff",
            color: "#94a3b8",
            fontname: "Helvetica",
            fontsize: "10",
            height: "0.3",
          },
          edge: { color: "#64748b99", arrowhead: "vee", arrowsize: "0.6", penwidth: "0.8" },
          modules: [
            { criteria: { source: "^src/app/" }, attributes: { fillcolor: "#dbeafe", color: "#3b82f6" } },
            { criteria: { source: "^src/components/ui/" }, attributes: { fillcolor: "#ede9fe", color: "#8b5cf6" } },
            { criteria: { source: "^src/components/" }, attributes: { fillcolor: "#dcfce7", color: "#22c55e" } },
            { criteria: { source: "^src/(lib|i18n)/" }, attributes: { fillcolor: "#fef3c7", color: "#f59e0b" } },
          ],
        },
      },
    },
  },
};
