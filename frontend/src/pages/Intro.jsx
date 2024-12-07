// src/pages/Intro.jsx
import React from "react";
import { useNavigate } from "react-router-dom"; // Pastikan useNavigate diimpor
import "../css/intro.css";
import image from "../assets/logo.png"; // Pastikan path gambar sudah benar

function Intro() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/exploring"); // Navigasi ke halaman login
  };

  return (
    <div className="intro-container">
      <img src={image} alt="Logo" className="intro-image" />
      <h1>VIBE</h1>
      <p>Your Virtual Mate</p>
      <button className="intro-button" onClick={handleNavigation}>
        Tap here
      </button>
    </div>
  );
}

export default Intro;
