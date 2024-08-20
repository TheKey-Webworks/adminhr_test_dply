import React, { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authenticationStatus, setAuthenticationStatus] = useState(
    sessionStorage.getItem("auth") === "false"?false: true
  );
  return (
    <AuthContext.Provider
      value={{ authenticationStatus, setAuthenticationStatus }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
