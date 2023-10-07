import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/Home"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-blue-600 font-semibold"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
