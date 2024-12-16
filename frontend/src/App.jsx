import React, { useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro.jsx"
import Exploring from "./pages/Exploring.jsx"
import LandingPage from "./pages/Landingpage.jsx"
import Login from "./pages/Login.jsx"
import Signup from './pages/Signup.jsx'
import Profile from "./pages/Updateprofile.jsx"
import "./App.css";

function App() {
  const [IsAuthenticated, setIsAuthenticated] = useState(false);

  useEffect (() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated}/>} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/exploring" element={<Exploring />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/updateprofile" element={<Profile />} />

    
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}



export default App;
