import React from "react";
import SingleOption from "./SingleOption/SingleOption";

const QuizzesCard = ({ questions, id }) => {
  const { options, question, correctAnswer } = questions;

     const handleCorrectAns = (singleAns) =>{
          if(singleAns === correctAnswer){
               console.log('correct')
          } else{
               console.log('incorrect')
          }
     }


  return (
    <div className="block p-6  bg-white rounded-lg border border-gray-200 shadow-lg">
      <div>
        <h5 className="mb-2 flex justify-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {question}
        </h5>
      </div>
      <div className="grid gap-4 mt-9">
          {
               options.map((singleOption, index) => <SingleOption singleOption={singleOption} handleCorrectAns={handleCorrectAns} key={index}></SingleOption>)
          }
      </div>
    </div>
  );
};

export default QuizzesCard;
