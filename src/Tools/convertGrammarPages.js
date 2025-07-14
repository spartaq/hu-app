const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '../Mainpages/Grammar-Exercises');
const outputDir = path.join(__dirname, 'converted-pages');

fs.mkdirSync(outputDir, { recursive: true });

fs.readdirSync(sourceDir).forEach(file => {
  if (file.endsWith('.js')) {
    const nameWithoutExt = file.replace('.js', '');
    const capitalizedTitle = nameWithoutExt
      .replace(/-/g, ' ')
      .replace(/\b\w/g, char => char.toUpperCase());

    const level = "A1";
    const imageName = nameWithoutExt + '.jpg';
    const explanationComponent = nameWithoutExt + 'explanation';
    const componentName = nameWithoutExt.replace(/(^\w|-\w)/g, m => m.replace('-', '').toUpperCase());

    const newContent = `
import React from 'react';
import GrammarPageLayout from '../../Components/GrammarPageLayout';
import GrammarExplanation from '../../Components/GrammarExplanationComps/${explanationComponent}';
import mainimage from '../../Images/${imageName}';

const sections = [
  { label: "Grammar", description: "Do this exercise to practice grammar.", type: "grammar", subtype: "${nameWithoutExt}" },
];

const ${componentName} = () => (
  <GrammarPageLayout
    level="${level}"
    title="${capitalizedTitle}"
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="English Exam Exercises - ${capitalizedTitle}"
    seoDescription="A big list of English exam exercises to practice"
    relatedCategory="grammar-exercises"
    relatedLevel="${level}"
  />
);

export default ${componentName};
`.trim();

    const outputPath = path.join(outputDir, file);
    fs.writeFileSync(outputPath, newContent);
    console.log(`Converted: ${file}`);
  }
});
