import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage";
import SecondModal from "./components/SecondModal/SecondModal";
import RegisterPage from "./components/registerPage/RegisterPage";
import UserPage from "./components/HeaderUserPage/HeaderUserPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/SecondModal" element={<SecondModal />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/UserPage" element={<UserPage />} />
      </Routes>
    </div>
  );
}
export default App;
