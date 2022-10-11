import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizzesCard from "../QuizzesCard/QuizzesCard";

const Quizzes = () => {
  const quizzes = useLoaderData().data;
  const { questions } = quizzes;

  return (
    <div className="grid grid-cols-1 gap-10 lg:mx-56 md:mx-24 mx-5 mt-7">
      <div className="flex justify-center">
        <h1 className="text-2xl font-semibold">Quiz of <span className="text-purple-600">{quizzes.name}</span></h1>
      </div>
      {questions.map((question) => (
        <QuizzesCard
          questions={question}
          id={question.id}
          key={question.id}
        ></QuizzesCard>
      ))}
    </div>
  );
};

export default Quizzes;
