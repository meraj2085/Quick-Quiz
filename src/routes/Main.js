import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Blogs from "../components/Blogs/Blogs";
import Layout from "../Layout/Layout";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Quizzes from "../components/Quizzes/Quizzes";
import Statistics from "../components/Statistics/Statistics";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
      },
      {
        path: "/home",
        element: <Home></Home>,
        loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
      },
      
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("https://openapi.programming-hero.com/api/quiz")
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/quizzes/:quizId",
        loader: async ({ params }) => {
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`);
        },
        element: <Quizzes></Quizzes>,
      },
    ],
  },
]);
