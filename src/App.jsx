import React from "react";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import EditPage from "./pages/EditPage";
import NewCode from "./pages/NewCode";
import SearchPage from "./pages/SearchPage";
import UserPage from "./pages/UserPage";
import SearchFullCode from "./pages/SearchFullCode";
import Profile from "./pages/Profile";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/edit" element={<NewCode/>} />
      <Route path="/edit/:id" element={<EditPage/>} />
      <Route path="/search" element={<SearchPage/>} />
      <Route path="/search/:user" element={<UserPage />} />
      <Route path="/search/:user/id/:id" element={<SearchFullCode />} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
