import React from "react";
import loading from "../Assets/loading.gif";
import "./loading.css";
export const Loading = () => {
  return (
    <div className="loading-div">
      <img src={loading} alt="loading" className="first-loading" />
    </div>
  );
};
