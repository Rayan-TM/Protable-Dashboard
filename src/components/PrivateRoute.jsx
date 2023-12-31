import React from "react";
import { isLogin } from "./../utilities";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const isLoggedIn = isLogin();
  return <>{isLoggedIn ? children : <Navigate to="/login" />}</>;
}
