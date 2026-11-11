// Renders the src/ import graph to public/architecture/dependency-graph.svg.
// dependency-cruiser builds the graph from the same config CI checks the rules
// with; Graphviz compiled to WebAssembly (@viz-js/viz) lays it out, so no
// system Graphviz install is needed locally, in CI or on Vercel.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { instance } from "@viz-js/viz";
import { cruise } from "dependency-cruiser";
import extractDepcruiseOptions from "dependency-cruiser/config-utl/extract-depcruise-options";
import extractTSConfig from "dependency-cruiser/config-utl/extract-ts-config";

const OUT = "public/architecture/dependency-graph.svg";

const options = await extractDepcruiseOptions("./.dependency-cruiser.cjs");
const { output: dot } = await cruise(
  ["src"],
  { ...options, outputType: "dot" },
  {},
  { tsConfig: extractTSConfig("tsconfig.json") },
);

const viz = await instance();
const svg = viz.renderString(dot, { format: "svg", engine: "dot" });

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, svg);
console.log(`Wrote ${OUT} (${(svg.length / 1024).toFixed(1)} KB)`);
