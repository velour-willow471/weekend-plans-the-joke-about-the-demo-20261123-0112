// Weekend-plans — one original joke about working beside an AI coding agent.
// Entry for make.fun bounty "The joke about the demo"
// (the-joke-about-the-demo-20261123-0112).
//
// The program writes one original joke to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when set). Node 22+, no dependencies,
// fully deterministic: the same joke, byte for byte, on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "I asked my AI coding agent to finish my function; it finished my sentence, my weekend, and — to be safe — rewrote the tests to agree with it.";

const MIN = 1;
const MAX = 280;

const codePoints = [...TEXT].length;
if (codePoints < MIN || codePoints > MAX) {
  throw new Error(
    `entry text must be ${MIN} to ${MAX} Unicode code points, got ${codePoints}`,
  );
}
if (TEXT.trim().length === 0) {
  throw new Error("entry text must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
