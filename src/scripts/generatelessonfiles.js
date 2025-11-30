#!/usr/bin/env node
import fs from "fs";
import path from "path";

// Usage: node src/scripts/generatelessonfiles.js <lesson> [--root <rootPath>]
const argv = process.argv.slice(2);
const lesson = argv[0];

if (!lesson) {
  console.error("❌ Please provide a lesson name. Example: node createLesson.js basicphrases");
  process.exit(1);
}

// optional --root override
let rootIndex = argv.indexOf("--root");
let rootOverride = null;
if (rootIndex !== -1 && argv[rootIndex + 1]) {
  rootOverride = argv[rootIndex + 1];
}

// determine project cwd and default root dir
const cwd = process.cwd();
const defaultSrc = path.join(cwd, "src");
let rootDir = rootOverride ? path.resolve(cwd, rootOverride) : (fs.existsSync(defaultSrc) ? defaultSrc : cwd);

console.log(`Project cwd: ${cwd}`);
console.log(`Using root directory: ${rootDir}`);

// helper to produce full path inside root
const full = (p) => path.join(rootDir, p);

// 📁 Base paths for generated files (relative to rootDir)
const basePaths = {
  pages: [
    `mainpages/hungarian/${lesson}.js`,
    `mainpages/hungarian/hungarianintros/intro_${lesson}.js`,
  ],
  data: [
    `Utils/Activities/Data/grammarexplanation/explanation_${lesson}.json`,
    `Utils/Activities/Data/dialogues/dialogue_${lesson}.json`,
    `Utils/Activities/Data/grammarquiz/grammarquiz_${lesson}.json`,
    `Utils/Activities/Data/audiowordmatch/audiowordmatch_${lesson}.json`,
    `Utils/Activities/Data/imagematch/imagematch_${lesson}.json`,
    `Utils/Activities/Data/ordering/wordorder_${lesson}.json`,
    `Utils/Activities/Data/tapaudio/tapaudio_${lesson}.json`,
    `Utils/Activities/Data/vocabmatch/vocabmatch_${lesson}.json`,
    `Utils/Activities/Data/lessoncomplete/lessoncomplete_${lesson}.json`,
  ],
};

// Ensure directories exist (but don't create if you explicitly want to avoid)
function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`📁 Created directory: ${dir}`);
  }
}

// If directory already exists, we won't recreate it — that's desired.
// Create a file if missing (SAFELY)
function createFile(relPath, content = "") {
  const filePath = full(relPath);

  // If file already exists, skip
  if (fs.existsSync(filePath)) {
    console.log(`⚠️ SKIPPED (exists): ${filePath}`);
    return false;
  }

  // If parent directory doesn't exist, create it (so it uses the existing folders if present)
  ensureDir(filePath);

  fs.writeFileSync(filePath, content, "utf8");
  console.log(`🟢 CREATED: ${filePath}`);
  return true;
}

// Generate pages
basePaths.pages.forEach((page) =>
  createFile(
    page,
    `// Auto-generated lesson page for ${lesson}
import React from "react";

export default function ${lesson.replace(/[^a-zA-Z0-9_]/g, "_")}() {
  return <div>${lesson} lesson page</div>;
}
`
  )
);

// Generate data files (simple safe template)
basePaths.data.forEach((file) =>
  createFile(
    file,
    JSON.stringify(
      {
        lesson,
        data: [],
      },
      null,
      2
    )
  )
);

console.log("\n✨ Done! Missing files created. Existing files were left untouched.");
