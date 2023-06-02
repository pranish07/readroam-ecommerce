import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./navbar.css";
export const Navbar = () => {
  const getActiveStyle = ({ isActive }) => ({
    // margin: "1rem 0",
    // fontWeight: isActive ? "600" : "200",
    // padding: isActive ? "1rem" : "0.5rem",
    color: isActive ? "red" : "",
  });
  const [login,setLogin] = useState(false)
  return (
    <div className="navbar-container">
      <h1>ReadRoam</h1>
      <div className="nav-center">
        <NavLink style={getActiveStyle} to="/">
          <h2>Home</h2>
        </NavLink>
        <NavLink style={getActiveStyle} to="/shop">
          <h2>Shop</h2>
        </NavLink>
      </div>
      <div className="nav-right">
        {/* <input type="text" placeholder="Search" /> */}
        <button onClick={()=>setLogin(login=>!login)}>
          <NavLink style={getActiveStyle} to="/login">
            {login?"Logout":"Login"}
          </NavLink>
        </button>
        <p>
          <NavLink style={getActiveStyle} to="/wishlist">
            wishlist
          </NavLink>
        </p>
        <p>
          <NavLink style={getActiveStyle} to="/cart">
            cart
          </NavLink>
        </p>
      </div>
    </div>
  );
};
