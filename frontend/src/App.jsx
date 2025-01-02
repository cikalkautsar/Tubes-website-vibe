import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro.jsx";
import Exploring from "./pages/Exploring.jsx";
import LandingPage from "./pages/Landingpage.jsx";
import Login from "./pages/Login.jsx";
import Signup from './pages/SignUp.jsx';
import UpdateProfile from "./pages/Editprofile.jsx";
import Profile from "./pages/Profile.jsx";  
import Home from "./pages/Home.jsx";
import Comment from "./pages/Comment.jsx";
import Calendar from "./pages/Calendar.jsx";
import Achievement from "./pages/Achievement.jsx";
import CreateAch from "./pages/CreateAch.jsx";
import Search from "./pages/Search.jsx";
import './App.css';
import Editprofile from "./pages/Editprofile.jsx";



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
        <Route path="/editprofile" element={<Editprofile />} /> 
        <Route path="/profile" element={<Profile />} /> 
        <Route path="/home" element={<Home />} /> 
        <Route path="/comment" element={<Comment />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/achievement" element={<Achievement />} />
        <Route path="/createAch" element={<CreateAch />} />
        <Route path="/search" element={<Search />} />

        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
