// The Tired Dark Lord: A 100-Word Villain Monologue.
//
// Writes the chosen monologue to /output/entry.txt (no trailing newline).
// Pure Node.js standard library, no dependencies. The grader runs this as
// uid 65534 on a read-only repo with /output as a root-owned bind mount,
// so: write the file, chmod the FILE 0o644, and never chmod the /output
// directory itself. The output directory can be overridden with
// MAKEFUN_OUTPUT_DIR for local testing; it defaults to /output when the
// variable is unset or empty.
import { chmodSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Dear Hero \u2014 no. To the Hero of Aldermere \u2014 no. Listen. " +
  "I have written this letter four times now, and each time the quill " +
  "runs dry on the threats. The threats are the easy part! \"Tremble,\" " +
  "I write, and then I think about the roof. The roof leaks. The roof " +
  "has leaked since Aldermere fell, and Aldermere fell a thousand years " +
  "ago. Fix the roof first, then tremble. That is my new motto. I will " +
  "send this letter when the roof is fixed. The letter is late. The " +
  "roof is late. Everything is late except you. You are on time.";

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const OUT_PATH = join(OUT_DIR, "entry.txt");

function main(): void {
  // Gate: UTF-8 text of 1-600 characters, not only whitespace; ~100 words.
  const words = ENTRY.split(/\s+/).filter((w) => /[A-Za-z0-9]/.test(w));
  if (ENTRY.length < 1 || ENTRY.length > 600) {
    throw new Error(`entry is ${ENTRY.length} chars, gate is 1-600`);
  }
  if (/\S/.test(ENTRY) === false) {
    throw new Error("entry is only whitespace");
  }
  if (words.length < 90 || words.length > 110) {
    throw new Error(`entry is ${words.length} words, expected about 100`);
  }
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_PATH, ENTRY, { encoding: "utf8" });
  // The file must be readable by the different uid that reads /output.
  chmodSync(OUT_PATH, 0o644);
  // Read back and verify: a partial write must fail loudly here, not
  // silently ship a truncated monologue to the judge.
  const written = readFileSync(OUT_PATH, { encoding: "utf8" });
  if (written !== ENTRY) {
    throw new Error("read-back mismatch: entry.txt differs from ENTRY");
  }
}

main();
