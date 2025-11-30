import fs from "fs";
import path from "path";

const lesson = process.argv[2];

if (!lesson) {
  console.error("❌ Please provide a lesson name. Example: node createLesson.js basicphrases");
  process.exit(1);
}

// 📁 Base paths for generated files
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

// Ensure directories exist
function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Create a file if missing (SAFELY)
function createFile(filePath, content = "") {
  ensureDir(filePath);

  if (fs.existsSync(filePath)) {
    console.log(`⚠️ SKIPPED (exists): ${filePath}`);
    return;
  }

  fs.writeFileSync(filePath, content, "utf8");
  console.log(`🟢 CREATED: ${filePath}`);
}

// Generate lesson pages
basePaths.pages.forEach((page) =>
  createFile(
    page,
    `// Auto-generated lesson page for ${lesson}
export default function ${lesson}() {
  return <div>${lesson} lesson page</div>;
}
`
  )
);

// Generate empty JSON templates
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
