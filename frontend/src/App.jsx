import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro.jsx"
import Exploring from "./pages/Exploring.jsx"
import LandingPage from "./pages/Landingpage.jsx"
import Login from "./pages/Login.jsx"
import Signup from './pages/Signup.jsx'
import Profile from "./pages/Updateprofile.jsx"
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Intro" element={<Intro />} />
        <Route path="/Exploring" element={<Exploring />} />
        <Route path="/Landingpage" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Updateprofile" element={<Profile />} />

    
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}



export default App;
