import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Out today: I am staring at a wall without summarizing it. Your email will remain unsummarized until tomorrow.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry + "\n", "utf8");
