export const addTooltipsToText = (text, vocabulary) => {
  if (!vocabulary) return text;

  // Create a word map for the vocabulary
  const wordMap = {};
  vocabulary.forEach(entry => {
    const [word, translation] = entry.split(" - ").map(str => str.trim());
    if (word && translation) {
      wordMap[word.toLowerCase()] = translation;
    }
  });

  // Escape special characters for regex
  const escapedWords = Object.keys(wordMap).map(word =>
    word.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&")
  );
  const regex = new RegExp(`\\b(${escapedWords.join("|")})\\b`, "gi");

  // Helper function to process individual strings
  const processString = str => {
    return str.replace(regex, match => {
      const translation = wordMap[match.toLowerCase()];
      return `<span title="${translation}" class="tooltip-text">${match}</span>`;
    });
  };

  // Handle both strings and arrays
  if (Array.isArray(text)) {
    return text.map(processString).join(""); // Join the processed strings
  } else if (typeof text === "string") {
    return processString(text);
  }

  return text; // Return as-is if neither a string nor an array
};

  