import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div class="lg:px-24 lg:py-24 md:py-20 md:px-44 px-5 mt-7 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
      <div class="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
        <div class="relative">
          <div class="absolute">
            <div class="">
              <h1 class="my-2 text-gray-800 font-bold text-4xl">
              This page does not exist
              </h1>
              <p class="my-2 text-gray-800">
                Sorry about that! The page you are looking for could not be found. Please visit our hompage to get where you need
                to go.
              </p>
              <Link to="/">
              <button type="button" className="px-8 py-3 font-semibold rounded-full bg-gray-800 text-gray-100">Home</button>
              </Link>
            </div>
          </div>
          <div>
            <img src="https://i.ibb.co/G9DC8S0/404-2.png" alt="" />
          </div>
        </div>
      </div>
      <div>
        <img src="https://i.ibb.co/ck1SGFJ/Group.png" alt="" />
      </div>
    </div>
  );
};

export default ErrorPage;
