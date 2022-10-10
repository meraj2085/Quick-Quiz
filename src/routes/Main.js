import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Blogs from "../components/Blogs/Blogs";
import Layout from "../Layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);
