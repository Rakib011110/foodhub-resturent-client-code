import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Page/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
