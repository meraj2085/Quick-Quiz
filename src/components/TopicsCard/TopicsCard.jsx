import React from "react";
import { Link, Navigate } from "react-router-dom";

const TopicsCard = ({ quiz }) => {
  const { id, name, logo, total } = quiz;


  return (
    <div class="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
      <div class="px-6">
        <div class="flex flex-wrap justify-center">
          <div class="w-full flex justify-center">
            <div class="relative">
              <img
                src={logo}
                alt=""
                class="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
              />
            </div>
          </div>
          <div class="w-full text-center mt-20">
            <div class="flex justify-center lg:pt-4 pt-8 pb-0">
              <div class="p-3 text-center">
                <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">
                  {total}
                </span>
                <span class="text-sm text-slate-400">Total Quizzes</span>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-2">
          <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1">
            {name}
          </h3>
        </div>
        <div class="mt-6 py-6 border-t border-slate-200 text-center">
          <div class="flex flex-wrap justify-center">
            <div class="w-full px-4">
            <Link to={`/quizzes/${id}`}>
            <button type="button" className="px-4 py-2 font-semibold rounded-full border-2 border-gray-800 text-gray-800 hover:border-none hover:bg-gray-800 hover:text-gray-100">Start Quiz</button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicsCard;
