import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import {useAuth } from "../../contexts/AuthContext";

export const RequiresAuth = ({ children }) => {
  const { isLoggedIn } = useAuth();
  let location = useLocation();

  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
