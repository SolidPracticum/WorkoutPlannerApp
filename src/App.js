import React from "react";
import { Route, Routes } from "react-router-dom";
// import FourthModal from "./components/FourthModal";
import "./App.scss";
import HomePage from "./pages/HomePage";
import SecondModal from "./components/SecondModal/SecondModal";
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
