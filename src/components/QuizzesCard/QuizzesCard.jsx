import React from "react";
import SingleOption from "./SingleOption/SingleOption";
import { toast } from "react-toastify";

const QuizzesCard = ({ questions, id }) => {
  const { options, question, correctAnswer } = questions;

  const handleCorrectAns = (singleAns) => {
    if (singleAns === correctAnswer) {
      toast.success("Answer correct!", { autoClose: 500 });
    } else {
      toast.warning("Answer wrong!", { autoClose: 500 });
    }
  };

  const handleEyeClick = () =>{
     toast.info(`Answer: ${correctAnswer}`, { autoClose: 2000 })
  }

  return (
    <div className="block p-6  bg-white rounded-lg border border-gray-200 shadow-lg">
      <div onClick={handleEyeClick} className="flex justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>

      <div>
        <h5 className="mb-2 flex justify-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {question}
        </h5>
      </div>
      <div className="grid gap-4 mt-9">
        {options.map((singleOption, index) => (
          <SingleOption
            singleOption={singleOption}
            handleCorrectAns={handleCorrectAns}
            key={index}
          ></SingleOption>
        ))}
      </div>
    </div>
  );
};

export default QuizzesCard;
