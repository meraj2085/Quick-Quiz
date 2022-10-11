import React from "react";
import { useLoaderData } from "react-router-dom";
import quizImg from "../../images/quiz-bg.png";
import TopicsCard from "../TopicsCard/TopicsCard";

const Home = () => {
  const quizzes = useLoaderData().data;

  return (
    <div>
      <section className="bg-gray-100 text-gray-800">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              Judge yourself through our
              <span className="text-purple-600"> quizzes...</span>
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Make yourself ready for the future and grab the best opportunities
            </p>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img src={quizImg} alt="" className="object-contain h-[600px]" />
          </div>
        </div>
      </section>
      <section className="mx-6 mb-7 mt-14">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
          {quizzes.map((quiz) => (
            <TopicsCard quiz={quiz} key={quiz.id}></TopicsCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
