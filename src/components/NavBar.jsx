import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css"; // Optional: Add styles for active links

function NavBar() {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
      >
        Home
      </NavLink>
      <NavLink
        to="/directors"
        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
      >
        Directors
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
      >
        About
      </NavLink>
    </nav>
  );
}

export default NavBar;