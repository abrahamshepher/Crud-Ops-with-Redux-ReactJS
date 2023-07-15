import React from "react";
import Home from "/src/Home.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "/src/Create.jsx";
import Update from "/src/Update.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
