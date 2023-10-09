import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../Layout/MainLayout";
import { Home } from "../Pages/Home/Home";
import { Favorites } from "../Pages/Favorites/Favorites";
import { LogIn } from "../Pages/LogIn/LogIn";
import { ErrorPage } from "../Pages/ErrorPage/ErrorPage";
export const myCreatedRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/favorites",
        element: <Favorites></Favorites>,
      },
      {
        path: "/LogIn",
        element: <LogIn></LogIn>,
      },
    ],
  },
]);
