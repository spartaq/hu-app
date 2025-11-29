import { Link } from "react-router-dom";

import readingParentsFootballMatch from "../../Utils/Activities/Data/reading/readingParentsFootball.js";
import readingStreamingFatigue from "../../Utils/Activities/Data/reading/readingStreamingFatigue.js";
import readingANevemBob from "../../Utils/Activities/Data/reading/readingANevemBob.js";
import readingEssityAccount from "../../Utils/Activities/Data/reading/readingEssityAccount.js";
import readingSimplePresent from "../../Utils/Activities/Data/reading/readingSimplePresent.js";

const READINGS = [
  {
    id: "parents-football-match",
    title: "Parents Football Match",
    description: "A fun, beginner-friendly story.",
    data: readingParentsFootballMatch
  },
  {
    id: "streaming-fatigue",
    title: "Streaming Fatigue",
    description: "A reading on the rise of streaming exhaustion.",
    data: readingStreamingFatigue
  },
  {
    id: "nevem-bob",
    title: "A Nevém Bob",
    description: "A simple reading focused on introductions.",
    data: readingANevemBob
  },
  {
    id: "essityaccount",
    title: "Essity Account",
    description: "A workplace reading task.",
    data: readingEssityAccount
  },
  {
    id: "simplepresent",
    title: "Simple Present",
    description: "A short reading practicing present tense.",
    data: readingSimplePresent
  }
];

export default function ReadingExercises() {
  return (
    <div className="reading-list-page">

      <h1>Reading Exercises</h1>

      <div className="reading-list">
        {READINGS.map((item) => (
          <Link
            to={`/hungarian/activity/reading/${item.id}`}
            state={{ data: item.data }}
            key={item.id}
            className="reading-card"
          >
            <div className="reading-card-title">{item.title}</div>
            <p className="reading-card-desc">{item.description}</p>
          </Link>
        ))}
      </div>

    </div>
  );
}
