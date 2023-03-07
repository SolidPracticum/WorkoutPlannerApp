import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage";
import SecondModal from "./components/SecondModal/SecondModal";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/SecondModal" element={<SecondModal />} />
      </Routes>
    </div>
  );
}
export default App;
