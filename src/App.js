import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage";
import SecondModal from "./components/SecondModal/SecondModal";
import ThirdRegisterModal from "./components/ThirdRegisterModal/ThirdRegisterModal";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/SecondModal" element={<SecondModal />} />
        <Route path="/ThirdRegisterModal" element={<ThirdRegisterModal />} />
      </Routes>
    </div>
  );
}
export default App;
