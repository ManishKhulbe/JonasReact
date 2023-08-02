import { useQuizProvider } from "../context/QuizProvider";
import Option from "./Option";

function Question() {
  const  {questions, index} = useQuizProvider()
    return (
      <div>
        <h4>{questions[index].question}</h4>
        <Option
          question={questions[index]}
        />
      </div>
    );
}

export default Question
