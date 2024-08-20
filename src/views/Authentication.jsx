import React, { useContext } from "react";
import AuthenticationLayout from "../layouts/AuthenticationLayout";
import LoginForm from "../components/forms/authentication/LoginForm";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Authentication = () => {
  const location = useLocation().pathname;
  const { authenticationStatus } = useContext(AuthContext);
  return authenticationStatus ? (
    <Navigate to={"/dashboard"} />
  ) : (
    <AuthenticationLayout>
      <div>
        <h2>Bienvenido a AdminPro HR</h2>
        <h3>{location === "/" ? "Inicia sesión" : "Registrate"}</h3>
      </div>
      <LoginForm />
    </AuthenticationLayout>
  );
};

export default Authentication;
