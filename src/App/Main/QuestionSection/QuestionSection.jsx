import React ,{useState} from "react";
import QuestionOptions from "./QuestionOptions/QuestionOptions";

export default function QuestionSection() {
  const [showFinalResults ,setShowFinalResults] = useState(false)
  const [score,setScore] = useState(0)
  const [currentQuestion,setCurrentQuestion] =useState(0)
  const questions =['на яку тему буде тест','хто його придува']

  return (
    <div className=" bg-orange-400 h-[300px] w-[500px] flex flex-col items-center justify-center">
      <h3>Прогрес по питанням: {score}</h3>
      <h2>На яку тему буде цей тест?</h2>
      <QuestionOptions />
      <div><h3>Кінцевий результат</h3>
      <h4>{currentQuestion + 1} із {questions.length} правильно - (20%)</h4></div>
      <button className="bg-red-500">Почати заново</button>
    </div>
  );
}
