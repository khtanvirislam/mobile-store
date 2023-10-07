import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../Layout/MainLayout";
import { Home } from "../Pages/Home/Home";
import { Favorites } from "../Pages/Favorites/Favorites";

export const myCreatedRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/favorites",
        element: <Favorites></Favorites>,
      },
    ],
  },
]);
