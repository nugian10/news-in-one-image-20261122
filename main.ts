// make.fun news-image-20261122 entry (Node 22, standard library only).
//
// The front page is drawn in src/frontpage.html and rendered once to the
// entry.png beside this file. This program copies that image to the
// grader's output directory and checks its sha256 before and after the
// copy, so a damaged or swapped image can never be submitted silently.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { createHash } from "node:crypto";
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const EXPECTED_SHA256 =
  "a9e18a81a2ae2503f8b63d8df6d653afb3a25209b4a6e1f0c6a7e53d6338a9d4";

function sha256Of(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

const source = new URL("./entry.png", import.meta.url);
const bytes = readFileSync(source);
if (sha256Of(bytes) !== EXPECTED_SHA256) {
  throw new Error("entry.png does not match its recorded sha256");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.png");
copyFileSync(source, target);

const copied = readFileSync(target);
if (sha256Of(copied) !== EXPECTED_SHA256) {
  throw new Error("copied entry.png does not match its recorded sha256");
}
