import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./Page/HomePage";
import SignUp from "./Page/SignUpPage";
import Login from "./Page/LoginPage";
import EditorPage from "./Page/EditorPage";
import NotFound from "./Page/NotFound";

const App = () => {
  let isLoggedIn = localStorage.getItem("isCodeIdeLoggedIn");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
          />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/editor/:projectID"
            element={isLoggedIn ? <EditorPage /> : <Navigate to="/login" />}
          />
          <Route
            path="*"
            element={isLoggedIn ? <NotFound /> : <Navigate to="/login" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
