import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro.jsx";
import Exploring from "./pages/Exploring.jsx";
import LandingPage from "./pages/LandingPage.jsx";  
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/intro" element={<Intro />} />
        <Route path="/exploring" element={<Exploring />} />
        <Route path="/landingPage" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
