import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/SignUp.css";
import logo from "../assets/logo.png";
import image from "../assets/signUp.png";

const SignUp = () => {
  const navigate = useNavigate();

  const handleProfile = () => {
    navigate("/profile");
  };

  return (
    <div className="signup-container">
      <h1 className="signup-title">Sign Up</h1>
      <div className="signup-form">
        <img src={image} alt="Illustration" className="signup-image" />
        <div className="form-fields">
          <label>Name</label>
          <input type="text" placeholder="Type here" />
          <label>Date of Birth</label>
          <input type="date" placeholder="yy/mm/dd" />
          <label>E-mail</label>
          <input type="email" placeholder="Type here" />
          <label>Password</label>
          <input type="password" placeholder="Type here" />
          <button className="signup-button" onClick={handleProfile}>
            Sign Up
          </button>
        </div>
      </div>
      <img src={logo} alt="Vibe Logo" className="logo" />
    </div>
  );
};

export default SignUp;
