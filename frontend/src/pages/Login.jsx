import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/login.css";
import logo from "../assets/logo.png";
import loginImage from "../assets/login.png";

const Login = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup"); 
  };

  const handleHome = () => {
    navigate("/home"); 
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Log in</h1>
      <div className="login-form">
        <img src={loginImage} alt="Login Illustration" className="login-image" />
        <div className="form-fields">
          <label htmlFor="email">E-mail / Username</label>
          <input id="email" type="text" placeholder="Type here" />
          <label htmlFor="password">Password</label>
          <input id="password" type="password" placeholder="Type here" />
          <div className="checkbox-container">
            <input type="checkbox" id="save-password" />
            <label htmlFor="save-password">Save password</label>
          </div>
          <button className="login-button" onClick={handleHome}>
            Log in
          </button>
          <p className="signup-text">
            Don't have an account?{" "}
            <span className="signup-link" onClick={handleSignUp}>
              Sign up here
            </span>
          </p>
        </div>
      </div>
      <img src={logo} alt="Vibe Logo" className="logo" />
    </div>
  );
};

export default Login;
