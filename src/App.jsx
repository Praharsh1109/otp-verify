import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Receiving from "./Receiving";
import OtpPage from "./OtpPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OtpPage />} />
        <Route path="/Receiving" element={<Receiving />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
