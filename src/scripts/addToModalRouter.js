const fs = require("fs");
const path = require("path");

// Path to ModalRouter.js
const ROUTER_PATH = path.join(__dirname, "../components/ModalRouter.js");

// All categories that need import + DATA_MAP insertion
const CATEGORIES = [
  { key: "grammarexplanation",      prefix: "HuExplanation",     folder: "explanation",      file: "explanation_" },
  { key: "dialogue",         prefix: "HuDialogue",        folder: "dialogues",        file: "dialogue_" },
  { key: "grammarquiz",      prefix: "Hu",               folder: "grammarquiz",      file: "grammarquiz_" },
  { key: "tapaudio",         prefix: "HuTapAudio",        folder: "tapaudio",         file: "tapaudio_" },
  { key: "imagematch",       prefix: "HuImageMatch",      folder: "imagematch",       file: "imagematch_" },
  { key: "audiowordmatch",   prefix: "HuAudioWordMatch",  folder: "audiowordmatch",   file: "audiowordmatch_" },
  { key: "ordering",         prefix: "HuOrdering",        folder: "ordering",         file: "wordorder_" },
  { key: "vocabmatch",       prefix: "HuVocabmatch",      folder: "vocabmatch",       file: "vocabmatch_" },
  { key: "lessoncomplete",   prefix: "HuLessoncomplete",  folder: "lessoncomplete",   file: "lessoncomplete_" },
];

// capitalize first letter only
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

function run() {
  const lesson = process.argv[2];

  if (!lesson) {
    console.error("❌ ERROR: You must supply a lesson name.\nExample: node addLesson.js orderingdrinks");
    process.exit(1);
  }

  const Lesson = capitalize(lesson);
  let router = fs.readFileSync(ROUTER_PATH, "utf8");

  console.log(`🔧 Adding lesson: ${lesson}\n`);

  CATEGORIES.forEach(({ key, prefix, folder, file }) => {
    const varName = `${prefix}${Lesson}Data`;
    const importLine = `import ${varName} from "../Utils/Activities/Data/${folder}/${file}${lesson}.json";`;

    // 1️⃣ Add import if missing
    const importSectionRegex = new RegExp(`//\\s*\\*\\*\\s*${key.toUpperCase()}`, "i");
    if (!router.includes(importLine)) {
      if (importSectionRegex.test(router)) {
        router = router.replace(importSectionRegex, (match) => `${match}\n${importLine}`);
        console.log(`✔ Added import → ${varName}`);
      } else {
        console.warn(`⚠ Could not find import marker for '${key}' (expected // **${key.toUpperCase()})`);
      }
    } else {
      console.log(`• Import already exists for ${varName} (skipped)`);
    }

    // 2️⃣ Add DATA_MAP entry
    const mapRegex = new RegExp(`${key}\\s*:\\s*{([\\s\\S]*?)}`, "i");
    const mapMatch = router.match(mapRegex);

    if (mapMatch) {
      const block = mapMatch[0];

      // skip if lesson already exists
      if (!block.includes(`${lesson}:`)) {
        const updatedBlock = block.replace(
          "{",
          `{\n    ${lesson}: ${varName},`
        );
        router = router.replace(block, updatedBlock);
        console.log(`✔ Added DATA_MAP entry → ${key}.${lesson}`);
      } else {
        console.log(`• DATA_MAP entry already exists for ${key}.${lesson} (skipped)`);
      }
    } else {
      console.warn(`⚠ Could not find DATA_MAP section for '${key}'`);
    }
  });

  // Save file
  fs.writeFileSync(ROUTER_PATH, router, "utf8");

  console.log("\n🎉 DONE! ModalRouter.js has been updated safely.\nYou can run this again anytime — it will never duplicate inside the file.");
}

run();
