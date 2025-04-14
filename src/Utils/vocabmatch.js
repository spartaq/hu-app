import { useState, useMemo } from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";

export default function VocabularyMatch({ data, topic }) {
  const filteredData = data.filter(
    item => item.topic?.toLowerCase() === topic?.toLowerCase()
  );
  const [matchedPairs, setMatchedPairs] = useState([]);

  // Shuffle the definitions using useMemo so they don't reshuffle on every render
  const shuffledDefinitions = useMemo(() => {
    const definitions = [...filteredData];
    for (let i = definitions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [definitions[i], definitions[j]] = [definitions[j], definitions[i]];
    }
    return definitions;
  }, [filteredData]); // Include filteredData as a dependency

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over && active.id === over.id) {
      setMatchedPairs(prev => [...prev, active.id]);
    }
  };

  const resetExercise = () => {
    setMatchedPairs([]); // Reset matched pairs
  };

  return (
    <div>
      <button onClick={resetExercise} className="reset-button">
        Reset
      </button>
      <DndContext onDragEnd={handleDragEnd}>
        <div className="vocab-container">
          <div className="words-container">
            {filteredData.map((item) =>
              !matchedPairs.includes(item.word) && (
                <DraggableWord key={item.word} id={item.word} word={item.word} />
              )
            )}
          </div>

          <div className="definitions-container">
            {shuffledDefinitions.map((item) => (
              <DroppableDefinition
                key={item.word}
                id={item.word}
                definition={item.definition}
                word={item.word}
                isMatched={matchedPairs.includes(item.word)}
              />
            ))}
          </div>
        </div>
      </DndContext>
    </div>
  );
}

function DraggableWord({ id, word }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id: id.toString() });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="draggable-word"
      style={{
        transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : "none",
      }}
      dangerouslySetInnerHTML={{ __html: word }} // Renders HTML tags
    />
  );
}

function DroppableDefinition({ id, definition, word, isMatched }) {
  const { setNodeRef } = useDroppable({ id: id.toString() });

  return (
    <div ref={setNodeRef} className={`droppable-definition ${isMatched ? "matched" : ""}`}>
      {isMatched ? <strong dangerouslySetInnerHTML={{ __html: word }} /> : null}
      {" "}
      <span dangerouslySetInnerHTML={{ __html: definition }} />
    </div>
  );
}

