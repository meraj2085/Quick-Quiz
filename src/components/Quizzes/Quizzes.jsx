import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizzesCard from '../QuizzesCard/QuizzesCard';

const Quizzes = () => {
     const quizzes = useLoaderData().data
     const {questions} = quizzes;

     return (
          <div className='grid grid-cols-1 gap-10 mx-56 mt-7'>
               {
                    questions.map(question => <QuizzesCard questions={question} key={question.id}></QuizzesCard>)
               }
          </div>
     );
};

export default Quizzes;