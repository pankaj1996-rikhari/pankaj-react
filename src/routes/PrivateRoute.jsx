import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  // Agar user login hai to Outlet render hoga, nahi to login page pe redirect
  return loggedInUser ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
