import React from "react";
import { NavLink } from "react-router-dom";
export const ErrorPage = () => {
  return (
    <div className="text-center margin-top-1">
      {/* <img src={Error404} alt="errorPage" height={250} width={250} /> */}
      <p className="margin-top-1 font-2">
        click Here to go 👉🏻 <NavLink to="/">Home</NavLink>
      </p>
    </div>
  );
};
