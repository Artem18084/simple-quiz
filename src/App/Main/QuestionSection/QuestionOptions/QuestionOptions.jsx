import React from "react";
import AnswerItem from "./AnswerItem/AnswerItem";

export default function QuestionOptions() {

  return (
    <ul>
      <AnswerItem answer="Тварини" />
      <AnswerItem answer ="Біблія"/>
      <AnswerItem answer="Будівництво" />
      <AnswerItem answer="Програмування"/>
    </ul>
  );
}
