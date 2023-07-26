import React from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";
import { useData } from "../../contexts/DataContext";

export const Header = () => {
  const { dispatch } = useData();
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch({ type: "CLEAR_ALL_FILTERS" });
    navigate(`/products`);
  };
  return (
    <div>
      <h2>One shop stop for all your book needs and moods.</h2>
      <button onClick={handleClick}>Shop Now</button>
    </div>
  );
};
