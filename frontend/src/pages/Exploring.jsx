import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Exploring.css"; 
import image from "../assets/exploring.png"; 

function Exploring() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/landingPage");
  };

  return (
    <div className="exploring-container">
      <img src={image} alt="Exploring" className="exploring-image" />
      <h1>Are you ready to learn while exploring?</h1>
      <button className="exploring-button" onClick={handleNavigation}>
        I'm Ready
      </button>
    </div>
  );
}

export default Exploring;
