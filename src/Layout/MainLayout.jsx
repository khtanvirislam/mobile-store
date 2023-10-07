import React from "react";
import { NavBar } from "../Components/Header/NavBar/NavBar";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};
