import { useQuizProvider } from "../context/QuizProvider";

function Progress() {
  let { numQuestions, index, points, maxPossiblePoints, answer } =
    useQuizProvider();
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{(index = 1)}</strong>/ {numQuestions}
      </p>
      <p>
        <strong>{points}</strong>/ {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress
