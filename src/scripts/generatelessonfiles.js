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

const full = (p) => path.join(rootDir, p);

// ---------------------------------------------------------
// 🔥 NEW: Template map for each activity type
// ---------------------------------------------------------

const templates = {
  grammarexplanation: () => ({
    type: "explanation",
    title: "#",
    sections: [
      {
        heading: "#",
        paragraphs: ["#"],
        list: ["#"]
      }
    ]
  }),

  dialogue: () => ({
    title: "#",
    audio: "#",
    avatarMap: {
      "Speaker1": "/avatars/default1.png",
      "Speaker2": "/avatars/default2.png"
    },
    lines: [
      {
        speaker: "Speaker1",
        text: "#",
        translation: "#",
        start: 0,
        end: 0
      }
    ]
  }),

  grammarquiz: () => ({
    quizTitle: "#",
    type: "quiz",
    questions: [
      {
        id: 1,
        question: "#",
        options: ["#", "#", "#", "#"],
        answer: "#",
        translate: "#"
      }
    ]
  }),

  audiowordmatch: () => [
    {
      id: "aw1",
      audio: "/audio/example.mp3",
      text: "#",
      translation: "#"
    }
  ],

  imagematch: () => [
    {
      id: 1,
      quizTitle: "#",
      audio: "/audio/example.mp3",
      prompt: "#",
      options: [
        { id: "a", image: "/images/example1.jpg", word: "#", isCorrect: true },
        { id: "b", image: "/images/example2.jpg", word: "#", isCorrect: false }
      ],
      translation: "#",
      mode: "word-to-image"
    }
  ],

  wordorder: () => [
    {
      id: `${lesson}-1`,
      type: "ordering",
      topic: lesson,
      quizTitle: "Syllable Ordering",
      sentence: "# #",
      translation: "#"
    }
  ],

  tapaudio: () => [
    {
      id: `${lesson}-1`,
      title: "Tap What You Hear",
      audiosrc: "/audio/example.mp3",
      correctSequence: ["#"],
      translation: "#"
    }
  ],

  vocabmatch: () => [
    {
      id: `${lesson}-1`,
      prompt: "#",
      options: ["#", "#", "#"],
      answer: "#"
    }
  ],

  lessoncomplete: () => ({
    id: `lessonComplete-${lesson}`,
    type: "lessoncomplete",
    title: "Lesson Complete!",
    message: "Great job! You're ready to move on.",
    nextLessonUrl: `/hungarian/${lesson}`,
    hubUrl: "/activities"
  }),

 lessonPage: (lesson) => `import React from 'react';
import ModalPageLayout from '../../Components/ModalLayout';
import GrammarExplanation from './HungarianIntros/intro_${lesson}';
import mainimage from '../../Images/placeholder.jpg';

const sections = [
  { label: "Explanation", type: "grammarexplanation", subtype: "${lesson}" },
  { label: "Dialogue", type: "dialogue", subtype: "${lesson}" },
  { label: "Vocab", type: "vocabmatch", subtype: "${lesson}" },
  { label: "Audio Match", type: "audiowordmatch", subtype: "${lesson}" },
  { label: "Tap What You Hear", type: "tapaudio", subtype: "${lesson}" },
  { label: "Exercises", type: "grammarquiz", subtype: "${lesson}" },
  { label: "Word Order", type: "ordering", subtype: "${lesson}" },
  { label: "Reading", type: "reading", subtype: "nevem-bob" },
  { label: "Video", type: "video", subtype: "videos" },
  { label: "Lesson Complete", type: "lessoncomplete", subtype: "${lesson}" },
];

const ${lesson} = () => (
  <ModalPageLayout
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="Hungarian Grammar Exercises - ${lesson}"
    seoDescription="A big list of Hungarian grammar exercises to practice"
  />
);

export default ${lesson};
`,

  introPage: (lesson) => `import React from 'react';
import '../../../CSS/lessonIntro.css';
import { FaBookOpen } from 'react-icons/fa';

const ${lesson}Intro = () => {
  return (
    <div className="lesson-intro-style">
      <div>
        <h2><FaBookOpen style={{ marginRight: '0.5rem' }} /> ${lesson}</h2>
        <p>
          Learn to use ${lesson}.
        </p>
      </div>
    </div>
  );
};

export default ${lesson}Intro;
`,


};

// ---------------------------------------------------------

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

// ---------------------------------------------------------

function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`📁 Created directory: ${dir}`);
  }
}

function createFile(relPath, content = "") {
  const filePath = full(relPath);

  if (fs.existsSync(filePath)) {
    console.log(`⚠️ SKIPPED (exists): ${filePath}`);
    return false;
  }

  ensureDir(filePath);
  fs.writeFileSync(filePath, content, "utf8");

  console.log(`🟢 CREATED: ${filePath}`);
  return true;
}

// ---------------------------------------------------------
// 🔥 NEW: Function that selects the correct template
// ---------------------------------------------------------

function getTemplateForPath(filepath) {
  if (filepath.includes("grammarexplanation")) return templates.grammarexplanation();
  if (filepath.includes("dialogues")) return templates.dialogue();
  if (filepath.includes("grammarquiz")) return templates.grammarquiz();
  if (filepath.includes("audiowordmatch")) return templates.audiowordmatch();
  if (filepath.includes("imagematch")) return templates.imagematch();
  if (filepath.includes("ordering")) return templates.wordorder();
  if (filepath.includes("tapaudio")) return templates.tapaudio();
  if (filepath.includes("vocabmatch")) return templates.vocabmatch();
  if (filepath.includes("lessoncomplete")) return templates.lessoncomplete();

  return { lesson, data: [] }; // fallback
}

// ---------------------------------------------------------

// Generate pages using custom templates
basePaths.pages.forEach((page) => {
  let content = "";

  if (page.includes("hungarianintros")) {
    content = templates.introPage(lesson);
  } else {
    content = templates.lessonPage(lesson);
  }

  createFile(page, content);
});

// Generate data files using real templates
basePaths.data.forEach((file) =>
  createFile(
    file,
    JSON.stringify(getTemplateForPath(file), null, 2)
  )
);

console.log("\n✨ Done! Missing files created. Existing files were left untouched.");
