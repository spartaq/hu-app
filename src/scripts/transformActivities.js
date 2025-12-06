const fs = require('fs');
const path = require('path');

// CONFIG
// Correct paths relative to script location
const inputFolder = path.join(__dirname, '..', 'Utils', 'Activities', 'Data');
const outputFolder = path.join(__dirname, '..', 'Utils', 'Activities', 'canonical');

// Activity types and whether they are multiple-item
const activityTypes = {
  audiowordmatch: true,
  dialogues: false,
  grammarexplanation: false,
  lessoncomplete: false,
  ordering: true,
  sayaloud: true,
  tapaudio: true,
  vocabmatch: true,
  imagematch: true
};

// Map folder names to activity types
const typeMap = {
  dialogues: 'dialogue',
  grammarexplanation: 'grammarexplanation',
  lessoncomplete: 'lessoncomplete',
  audiowordmatch: 'audiowordmatch',
  ordering: 'wordorder',
  sayaloud: 'sayaloud',
  tapaudio: 'tapaudio',
  vocabmatch: 'vocabmatch',
  imagematch: 'imagematch'
};

// Ensure output folder exists
if (!fs.existsSync(outputFolder)) fs.mkdirSync(outputFolder, { recursive: true });

/**
 * Recursively process a folder
 */
console.log('Input folder exists:', fs.existsSync(inputFolder));
console.log('Input folder path:', inputFolder);
function processFolder(folderPath, relativePath = '') {
  const entries = fs.readdirSync(folderPath, { withFileTypes: true });

  entries.forEach(entry => {
    const fullPath = path.join(folderPath, entry.name);
    const outputPath = path.join(outputFolder, relativePath, entry.name);

    if (entry.isDirectory()) {
      fs.mkdirSync(outputPath, { recursive: true });
      processFolder(fullPath, path.join(relativePath, entry.name));
    } else if (entry.isFile() && entry.name.endsWith('.json')) {
      transformFile(fullPath, outputPath, relativePath);
    }
  });
}

/**
 * Transform a single file into canonical format
 */
function transformFile(inputPath, outputPath, relativePath) {
  const folderName = relativePath.split(path.sep)[0]; // top-level folder
  const activityType = typeMap[folderName] || folderName;
  const isMultiple = activityTypes[folderName] ?? false;

  const rawData = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
  let transformed;

  if (isMultiple) {
    let itemsArray;
    if (Array.isArray(rawData)) {
      itemsArray = rawData;
    } else if (rawData.data && Array.isArray(rawData.data.items)) {
      // already canonical multiple
      transformed = rawData;
      transformed.type = activityType;
      fs.writeFileSync(outputPath, JSON.stringify(transformed, null, 2));
      console.log('Transformed:', inputPath, '→', outputPath);
      return;
    } else if (rawData.data) {
      // single item in data, convert to multiple
      itemsArray = [rawData.data];
    } else {
      // assume object is single item
      itemsArray = [rawData];
    }

    // Special handling for vocabmatch
    if (folderName === 'vocabmatch' && rawData.pairs) itemsArray = rawData.pairs;

    // Remove redundant fields from items
    itemsArray.forEach(item => {
      if (item.type) delete item.type;
      // Remove other redundant fields if needed
    });

    transformed = {
      type: activityType,
      title: rawData.title || rawData.quizTitle || path.basename(inputPath, '.json'),
      data: {
        items: itemsArray
      }
    };
  } else {
    if (rawData.data) {
      // already canonical single
      transformed = rawData;
      transformed.type = activityType;
      if (transformed.data.title && transformed.data.title === transformed.title) delete transformed.data.title;
    } else {
      // original single
      transformed = {
        type: activityType,
        title: rawData.title || path.basename(inputPath, '.json'),
        data: rawData
      };
      if (transformed.data.title && transformed.data.title === transformed.title) delete transformed.data.title;
    }
  }

  fs.writeFileSync(outputPath, JSON.stringify(transformed, null, 2));
  console.log('Transformed:', inputPath, '→', outputPath);
}

// Run
processFolder(inputFolder);

console.log('✅ Transformation complete! All files are in:', outputFolder);
