import React from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import SecondModal from "./components/SecondModal/SecondModal";
import HomePage from "./pages/HomePage";
import "./App.scss";

function App() {
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicRoute Component={HomePage} />} />
        <Route path="/secondModal" element={<{SecondModal}/>} />
      </Routes>
       </BrowserRouter> 
     </div>
  );
}
export default App;


