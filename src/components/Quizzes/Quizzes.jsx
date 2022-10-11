import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quizzes = () => {
     const quizzes = useLoaderData().data
     console.log(quizzes)
     return (
          <div>
               <h1>Inside quiz</h1>
          </div>
     );
};

export default Quizzes;