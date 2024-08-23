import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route
        exact
        path="/"
        element={<RegisterForm />}
      />
      <Route path="/signup" element={<RegisterForm />} />
      <Route
        path="/signin"
        element={<LoginForm />}
      />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
