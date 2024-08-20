import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Authentication from "./views/Authentication";
import { Route, Routes } from "react-router-dom";
import UserRoutes from "./components/privateRoutes/UserRoutes";
import TestProtectedScreen from "./views/TestProtectedScreen";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Authentication />} />
        <Route element={<UserRoutes />}>
          <Route path="/dashboard" element={<TestProtectedScreen />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
