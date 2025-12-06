const fs = require("fs");
const path = require("path");

// Folder containing grammarquiz JSON files
const folderPath = path.join(__dirname, "../Utils/Activities/Data/grammarquiz");

// Default image path (can be replaced or customized per question)
const defaultImage = "/Images/default.jpg";

fs.readdir(folderPath, (err, files) => {
  if (err) throw err;

  files.forEach(file => {
    if (file.endsWith(".json")) {
      const filePath = path.join(folderPath, file);
      const rawData = fs.readFileSync(filePath, "utf8");
      let json;
      try {
        json = JSON.parse(rawData);
      } catch (e) {
        console.error(`Invalid JSON in file: ${file}`);
        return;
      }

      // Skip if already has image (assuming already updated)
      if (json.data && json.data.questions && json.data.questions[0].image) {
        console.log(`Skipping ${file}, already updated`);
        return;
      }

      // Remove "type" inside data if it exists
      if (json.data.type) {
        delete json.data.type;
      }

      // Add image property to each question
      if (json.data.questions && Array.isArray(json.data.questions)) {
        json.data.questions = json.data.questions.map((q, idx) => ({
          ...q,
          image: defaultImage // you can customize per question if needed
        }));
      }

      // Optionally update quizTitle (example)
      json.data.quizTitle = json.data.quizTitle || "Choose the correct response";

      // Write back the updated JSON
      fs.writeFileSync(filePath, JSON.stringify(json, null, 2), "utf8");
      console.log(`Updated: ${file}`);
    }
  });
});
