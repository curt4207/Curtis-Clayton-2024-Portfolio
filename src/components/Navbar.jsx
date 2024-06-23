import React from "react";
import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-28 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">Curtis Clayton Home</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/githubprojects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          GitHub Projects
        </NavLink>
      
      </nav>
    </header>
  );
}

export default Navbar;
