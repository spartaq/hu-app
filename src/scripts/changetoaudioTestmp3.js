// changetoaudioTestmp3.js
const fs = require('fs');
const path = require('path');

const REPLACEMENT = "/Audio/audiotest.mp3";
const AUDIO_REGEX = /\/audio\/([^"'\s]+?\.mp3)/gi;

// CLI args:
// node changetoaudioTestmp3.js [dataDir] [--dry] [--backup]
const args = process.argv.slice(2);
const maybePath = args.find(a => !a.startsWith('--'));
const dryRun = args.includes('--dry');
const makeBackup = args.includes('--backup');

function candidatePaths() {
  const candidates = [];
  if (maybePath) {
    candidates.push(path.resolve(maybePath));
  }
  // prefer project working directory (where node was called)
  candidates.push(path.join(process.cwd(), 'Utils', 'Activities', 'Data'));
  // fallback relative to script location (useful if you run script from other dir)
  candidates.push(path.join(__dirname, '..', '..', 'Utils', 'Activities', 'Data'));
  // another fallback in case script placed directly with src
  candidates.push(path.join(__dirname, '..', 'Utils', 'Activities', 'Data'));
  return candidates;
}

function findDataDir() {
  for (const p of candidatePaths()) {
    if (fs.existsSync(p) && fs.statSync(p).isDirectory()) {
      return p;
    }
  }
  return null;
}

function processJsonFile(filePath) {
  const original = fs.readFileSync(filePath, 'utf8');
  const updated = original.replace(AUDIO_REGEX, REPLACEMENT);

  if (original === updated) {
    return { changed: false };
  }

  if (dryRun) {
    return { changed: true, written: false };
  }

  if (makeBackup) {
    const bakPath = filePath + '.bak';
    fs.writeFileSync(bakPath, original, 'utf8');
  }

  fs.writeFileSync(filePath, updated, 'utf8');
  return { changed: true, written: true };
}

function walkDirectory(dirPath, stats) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      walkDirectory(fullPath, stats);
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.json')) {
      stats.filesScanned++;
      try {
        const res = processJsonFile(fullPath);
        if (res.changed) {
          stats.filesChanged++;
          console.log(`${res.written === false ? 'DRY:' : 'UPDATED:'} ${fullPath}`);
        } else {
          // optional: show unchanged? keep minimal
          console.log(`UNCHANGED: ${fullPath}`);
        }
      } catch (err) {
        console.error(`ERROR processing ${fullPath}:`, err.message);
        stats.errors++;
      }
    }
  }
}

function run() {
  const dataDir = findDataDir();
  if (!dataDir) {
    console.error('Folder not found. Tried these locations:');
    candidatePaths().forEach(p => console.error('  -', p));
    process.exitCode = 2;
    return;
  }

  console.log('Using Data folder:', dataDir);
  if (maybePath) console.log('(Custom path provided via CLI argument)');
  if (dryRun) console.log('DRY RUN — no files will be written.');
  if (makeBackup) console.log('BACKUP enabled — .bak files will be created for modified files.');
  console.log('');

  const stats = { filesScanned: 0, filesChanged: 0, errors: 0 };
  walkDirectory(dataDir, stats);

  console.log('\nDone.');
  console.log(`Files scanned: ${stats.filesScanned}`);
  console.log(`Files changed: ${stats.filesChanged}`);
  if (stats.errors) console.log(`Errors: ${stats.errors}`);
}

// run
run();
