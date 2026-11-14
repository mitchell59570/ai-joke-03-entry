// ai-joke-03 entry (Node 22, standard library only): writes one joke about
// AI coding agents. One line, no trailing newline: the judge reads exactly
// the bytes written, so every word has to earn its place.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), "I asked my coding agent for a one-line fix. It wrote 400 lines, deleted 399 of them, and left a comment that just says 'simplified.'");
