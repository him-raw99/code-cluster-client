import React from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

import "./App.css";
import Dashboard from "./pages/Dashboard";
import EditPage from "./pages/EditPage";
import NewCode from "./pages/NewCode";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/edit" element={<NewCode/>} />
      <Route path="/edit/:id" element={<EditPage/>} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
