import React, { useState } from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";

export default function GapFillExercise({ jsonData }) {
    const [filledGaps, setFilledGaps] = useState({});
  
    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (!over) return; // No valid drop target
    
        const draggedWord = jsonData.words.find(word => word.id === active.id);
        const correctGap = jsonData.gaps.find(gap => gap.id === over.id); // Find the matching gap
    
        if (draggedWord && correctGap && draggedWord.word === correctGap.correct) {
            setFilledGaps(prev => {
                const updatedGaps = { ...prev, [over.id]: draggedWord.word };
                console.log("Updated filledGaps:", updatedGaps); // Debugging
                console.log("Filled gaps count:", Object.keys(updatedGaps).length);
                console.log("Total words count:", jsonData.words.length);
                return updatedGaps;
            });
        }
    };

    const resetExercise = () => {
        setFilledGaps({});
    };

    // Shuffle words for the word bank
    const shuffledWords = [...jsonData.words].sort(() => Math.random() - 0.5);

    let gapIndex = 0; // Counter to track gaps in the text

    return (
        
        <DndContext onDragEnd={handleDragEnd}>
            <div className="vocab-container">
            
                {/* Word Bank (Above) */}
                <div className="words-container">
    {shuffledWords
        .filter(word => !Object.values(filledGaps).includes(word.word))
        .map((word) => (
            <DraggableWord key={word.id} id={word.id} word={word.word} />
        ))
    }
    {/* Always render an empty box to prevent layout shift */}
    {Object.keys(filledGaps).length === jsonData.words.length && (
        <div className="empty-placeholder"></div>
    )}
</div>

                {/* Gap-Fill Text (Below) */}
                <div className="definitions-container">
    {jsonData.text.map((paragraph, index) => (
        <p key={index}>
            {paragraph.split(/(____)/).map((part, partIndex) => {
                if (part === "____") {
                    const gap = jsonData.gaps[gapIndex++];
                    return (
                        <React.Fragment key={gap.id}>
                            <Gap id={gap.id} filledWord={filledGaps[gap.id]} />
                        </React.Fragment>
                    );
                }
                return (
                    <React.Fragment key={partIndex}>
                        <span dangerouslySetInnerHTML={{ __html: part }} />
                    </React.Fragment>
                );
            })}
        </p>
    ))}
</div>
            </div>
            <button onClick={resetExercise} className="reset-button">
                    Reset
                </button>
        </DndContext>
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
            style={{
                transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : "none",
            }}
        >
            {word}
        </div>
    );
}

function Gap({ id, filledWord }) {
    const { setNodeRef } = useDroppable({ id });
    return (
        <span ref={setNodeRef} className={`gap ${filledWord ? "filled" : ""}`}>
            {filledWord || "____"}
        </span>
    );
}


