import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Searching from "./Searching";
import Results from "./Results";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Searching />} />
        <Route path="/results/:userName" element={<Results />} />
      </Routes>
    </Router>
  );
}

export default App;
