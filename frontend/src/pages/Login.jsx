import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/login.css";
import logo from "../assets/logo.png";
import image from "../assets/login.png";

const Login = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup"); // Navigasi ke halaman Sign Up
  };

  const handleHome = () => {
    navigate("/home"); // Navigasi ke halaman Beranda
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Log in</h1>
      <div className="login-form">
        <img src={image} alt="Illustration" className="login-image" />
        <div className="login-form-fields">
          <label className="login-label">E-mail / username</label> 
          <input type="text" className="login-input" placeholder="Type here" /> 
          <label className="login-label">Password</label> 
          <input type="password" className="login-input" placeholder="Type here" /> 
          <div className="checkbox-container">
            <input type="checkbox" id="save-password" />
            <label htmlFor="save-password" className="login-label">Save password</label> 
          </div>
          <button className="login-button" onClick={handleHome}>
            Log in
          </button>
          <p className="signup-text">
            Sign up? <span onClick={handleSignUp}>Click here</span>
          </p>
        </div>
      </div>
      <img src={logo} alt="Vibe Logo" className="logo" />
    </div>
  );
};

export default Login;