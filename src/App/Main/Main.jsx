import React from "react";
import QuestionSection from "./QuestionSection/QuestionSection";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { getStart, getResult } from "../../futures/result/resultSlice";
import { fetchData } from "../../futures/data/dataSlice";


export default function Main() {
  const getStartQuiz = useSelector((state) => state.result.result);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.data.posts);
  console.log(posts,"posts")
  return (
    <div className="bg-gray-500">
      <h1 onClick={() => dispatch(getStart())}>Біблійна Вікторина</h1>
      <h2 onClick={() => dispatch(fetchData())} >По всіх книгах Біблії</h2>
      {getStartQuiz ? <QuestionSection /> : <div>Привіт друже</div>}
    </div>
  );
}
