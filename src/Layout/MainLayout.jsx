import React from "react";
import { NavBar } from "../Components/Header/NavBar/NavBar";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="w-11/12 mx-auto ">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};
