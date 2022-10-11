import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Blogs from "../components/Blogs/Blogs";
import Layout from "../Layout/Layout";
import ErrorPage from "../components/ErrorPage/ErrorPage";

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
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);
