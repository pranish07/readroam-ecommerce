import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <h2>One shop stop for all your book needs and moods.</h2>
      <button>
        <NavLink to="/products">Shop Now</NavLink>
      </button>
    </div>
  );
};
