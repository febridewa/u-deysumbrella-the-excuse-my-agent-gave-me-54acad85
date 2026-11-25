import { mkdirSync, writeFileSync } from "node:fs";

// The Excuse My Agent Gave Me — one line, 133 characters.
// The joke grows out of the machine's own condition (running out of
// context), delivered as a straight-faced apology, with the punch —
// faintly proud of the summary — landing in the last few words.
const LINE =
  "I'm sorry \u2014 I ran out of context right at the finish line, so I summarised the deadline instead. Honestly, the summary was excellent.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space. Refuse to write anything that would fail it.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(`entry line is ${LINE.length} characters; the gate needs 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
