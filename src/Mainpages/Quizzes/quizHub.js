import { Link } from "react-router-dom";
import { QUIZZES } from "../../Utils/Activities/Data/quiz/quizTopics";
import "../../CSS/QuizHub.css";

export default function QuizHub() {
  return (
    <div className="quiz-hub-page">
      <h1>Quizzes</h1>
      <div className="quiz-grid">
        {QUIZZES.map((quiz) => (
          <Link
            to={`/hungarian/activity/quiz/${quiz.id}`}
            state={{ data: quiz.data }}
            key={quiz.id}
            className="quiz-card"
          >
            <h2>{quiz.title}</h2>
            <p>{quiz.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
