import React from "react";
<<<<<<< HEAD
import { Route, Routes } from "react-router-dom";
// import FourthModal from "./components/FourthModal";
=======
import { Routes, Route } from "react-router-dom";
import "./App.scss";
>>>>>>> dda2f64f27f01b508a8dec86a8b4c1519230658f
import HomePage from "./pages/HomePage";
import SecondModal from "./components/SecondModal/SecondModal";
import "./App.scss";
import RegisterPage from "./components/RegisterPage/RegisterPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/SecondModal" element={<SecondModal />} />
        {/* <Route path="/fourth" element={<FourthModal />} /> */}
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
