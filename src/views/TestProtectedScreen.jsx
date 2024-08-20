import React from "react";

const TestProtectedScreen = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <button
        style={{
          position: "absolute",
          right: "15px",
          top: "15px",
          fontSize: "large",
          padding: "10px",
        }}
        onClick={() => {
          sessionStorage.setItem("auth", "false");

          window.location.reload();
        }}
      >
        Cerrar sesión
      </button>
      <h2>Iniciaste sesión, pero esta aplicación aún está en desarrollo.</h2>
    </div>
  );
};

export default TestProtectedScreen;
