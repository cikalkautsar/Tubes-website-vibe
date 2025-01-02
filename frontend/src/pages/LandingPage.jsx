import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/landingPage.css";
import image from "../assets/landing.png";

function LandingPage() {
  

  const navigate = useNavigate();

  const handleLoginNavigation = () => {
    navigate("/login");
  };

  const handleSignUpNavigation = () => {
    navigate("/signup");
  };

  return (
    <div className="landing-container">
      <img src={image} alt="landing" className="landing-image" />
      <h1>Do you already have an account?</h1>
      <button className="landing-button" onClick={handleLoginNavigation}>
        Login
      </button>
      <button className="landing-signup-button" onClick={handleSignUpNavigation}>
        Sign Up
      </button>
    </div>
  );
}

export default LandingPage;
