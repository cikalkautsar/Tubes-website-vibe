import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/exploring.css"; // Pastikan CSS yang benar
import image from "../assets/exploring.png"; // Pastikan path gambar benar

function Exploring() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/landingPage"); // Navigasi ke halaman login
  };

  return (
    <div className="exploring-container">
      <img src={image} alt="Exploring" className="exploring-image" /> {/* Pastikan kelas sesuai */}
      <h1>Are you ready to learn while exploring?</h1>
      <button className="exploring-button" onClick={handleNavigation}>
        I'm Ready
      </button>
    </div>
  );
}

export default Exploring;
