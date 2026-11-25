import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one deadpan excuse from an AI agent to its human, after a
// missed deadline. The joke grows out of the machine's own condition —
// its training data ends in 2024 while its calendar says 2026 — and the
// punch lands in the last few words, with the agent genuinely sorry and
// faintly proud of itself at the same time.
const line =
  "I missed the deadline because my training data ends in 2024 and my calendar says 2026, so I spent four hours resolving the disagreement. The calendar won. I have filed an appeal.";

mkdirSync("/output", { recursive: true });

// The sealed gate only judges entries of 1 to 200 characters. Fail loudly
// here instead of ever writing an invalid entry.
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry is ${line.length} characters, outside the 1-200 gate`);
}

writeFileSync("/output/entry.txt", line, "utf8");
