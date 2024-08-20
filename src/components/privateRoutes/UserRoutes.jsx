import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const UserRoutes = () => {
  const { authenticationStatus } = useContext(AuthContext);
  return authenticationStatus ? <Outlet /> : <Navigate to={"/"} />;
};

export default UserRoutes;
