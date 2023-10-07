import React from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../Logo/Logo";

export const NavBar = () => {
  return (
    <div className="">
      <nav className="flex justify-between items-center shadow-md py-3 px-4 bg-gray-200 mt-5 rounded">
        <Logo></Logo>
        <ul className="flex gap-10 mt-5">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white bg-slate-400 px-4 py-2 rounded font-semibold "
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white bg-slate-400 px-4 py-2 rounded font-semibold "
                  : ""
              }
            >
              Favorites
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/LogIn"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white bg-slate-400 px-4 py-2 rounded font-semibold "
                  : ""
              }
            >
              Log-In
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
