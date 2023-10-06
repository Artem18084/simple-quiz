import React from "react";
import QuestionSection from "./QuestionSection/QuestionSection";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { getStart, getResult } from "../../futures/result/resultSlice";

export default function Main() {
  const getStartQuiz = useSelector((state) => state.result.result);
  const dispatch = useDispatch();
  return (
    <div className="bg-gray-500">
      <h1 onClick={() => dispatch(getStart())}>Біблійна Вікторина</h1>
      <h2>По всіх книгах Біблії</h2>
      {getStartQuiz ? <QuestionSection /> : <div>Привіт друже</div>}
    </div>
  );
}
