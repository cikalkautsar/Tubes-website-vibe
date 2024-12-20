
import React from "react";
import { useNavigate } from "react-router-dom"; 
import "../css/intro.css";
import image from "../assets/logo.png"; 

function Intro() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/exploring");
  };

  return (
    <div className="intro-container">
      <img src={image} alt="Logo" className="intro-image" />
      <h1>Virtual Interactive Bridge for Education</h1>
      <p>Your Virtual Mate</p>
      <button className="intro-button" onClick={handleNavigation}>
        Tap here
      </button>
    </div>
  );
}

export default Intro;
