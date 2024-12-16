import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro.jsx";
import Exploring from "./pages/Exploring.jsx";
import LandingPage from "./pages/Landingpage.jsx";
import Login from "./pages/Login.jsx";
import Signup from './pages/SignUp.jsx';
import UpdateProfile from "./pages/UpdateProfile.jsx"; 
import Profile from "./pages/Profile.jsx";  
import Home from "./pages/Home.jsx";
import Comment from "./pages/Comment.jsx";
import Calendar from "./pages/Calendar.jsx";
import './App.css';


function App() {
  const [IsAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/exploring" element={<Exploring />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/updateprofile" element={<UpdateProfile />} /> {/* Fixed route */}
        <Route path="/profile" element={<Profile />} /> {/* Added Profile route */}
        <Route path="/home" element={<Home />} /> 
        <Route path="/comment" element={<Comment />} />
        <Route path="/calendar" element={<Calendar />} />

        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
