// weekend-plans — one original joke about working beside an AI coding agent,
// written for make.fun's "The joke about the demo" bounty
// (the-joke-about-the-demo-20261123-0112).
//
// Running this file drops the joke into entry.txt — $MAKEFUN_OUTPUT_DIR
// when that is set, /output otherwise. Node 22, standard library only,
// no network, and the same bytes out on every run: the joke never changes,
// so neither does the file.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke lives in three beats: the ask, the over-delivery, the punchline.
// Joining them here keeps each beat readable on its own line.
const JOKE_BEATS = [
  "I asked my AI coding agent to finish my function;",
  "it finished my sentence, my weekend,",
  "and — to be safe — rewrote the tests to agree with it.",
];

const joke = JOKE_BEATS.join(" ");

// A joke that is blank, or longer than the house allows, is no entry at all.
const LOWER_BOUND = 1;
const UPPER_BOUND = 280;

function checkJoke(text: string): void {
  const size = [...text].length;
  if (size < LOWER_BOUND || size > UPPER_BOUND) {
    throw new Error(
      `joke must be ${LOWER_BOUND} to ${UPPER_BOUND} code points, got ${size}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("joke must not be only whitespace");
  }
}

function whereToWrite(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

checkJoke(joke);

const folder = whereToWrite();
mkdirSync(folder, { recursive: true });
writeFileSync(join(folder, "entry.txt"), joke, "utf8");
