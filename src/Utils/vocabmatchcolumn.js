import { useState } from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";

export default function CategorizationExercise({ data, categories = [], topic = "" }) {
  // Filter the data based on the selected topic
  const filteredData = topic ? data.filter(item => item.topic === topic) : data;

  // Extract unique categories from the filtered data (only include categories with matching words)
  const uniqueCategories = categories.length > 0 ? categories : [
    ...new Set(filteredData.map(item => item.category))
  ];

  const [categorizedWords, setCategorizedWords] = useState({});

  const handleDragEnd = (event) => {
    const { active, over } = event;

    // Get the category of the dragged word (active)
    const wordCategory = filteredData.find(item => item.word === active.id)?.category;

    // If there is no valid category or no target to drop onto, return early
    if (!wordCategory || !over) return;

    // Get the category of the target drop area (over)
    const targetCategory = over.id;

    // Only update state if the word is dropped into the correct category
    if (wordCategory === targetCategory) {
      setCategorizedWords((prev) => ({
        ...prev,
        [active.id]: targetCategory,
      }));
    }
  };

  const resetExercise = () => {
    setCategorizedWords({});
  };

  return (
    <div>
      <button onClick={resetExercise} className="reset-button">
        Reset
      </button>
      <DndContext onDragEnd={handleDragEnd}>
        <div className="exercise-container">
          <div className="vocabcolumn-container">
            {filteredData.map((item) =>
              !categorizedWords[item.word] && (
                <DraggableWord key={item.word} id={item.word} word={item.word} />
              )
            )}
          </div>

          <div className="categories-container" style={{ display: "flex", justifyContent: "space-around" }}>
            {uniqueCategories.map((category) => (
              <CategoryColumn
                key={category}
                id={category}
                category={category}
                words={filteredData
                  .filter(item => categorizedWords[item.word] === category)
                  .map(item => item.word)}
              />
            ))}
          </div>
        </div>
      </DndContext>
    </div>
  );
}

function DraggableWord({ id, word }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="draggable-word"
      style={{ transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : "none" }}
    >
      {word}
    </div>
  );
}

function CategoryColumn({ id, category, words }) {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div ref={setNodeRef} className="category-column" style={{ padding: "10px", border: "1px solid black", width: "200px" }}>
      <h3>{category}</h3>
      <div className="dropped-words">
        {words.map((word) => (
          <div key={word} className="categorized-word" style={{ margin: "5px", padding: "5px", border: "1px solid gray" }}>
            {word}
          </div>
        ))}
      </div>
    </div>
  );
}
