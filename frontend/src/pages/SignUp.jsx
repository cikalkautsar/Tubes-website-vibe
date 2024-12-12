import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/signup.css"; 
import axios from 'axios';
import logo from "../assets/logo.png";
import image from "../assets/signUp.png";

const Signup = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name : "",
    username : "",
    email : "",
    password : "",
  })

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/user/", formData);
      alert("Registrasi berhasil! Silakan login.");
      navigate("/login");
    } catch (error) {
      console.error("Registrasi Gagal:", error);
      alert("Registrasi gagal. Coba lagi");
    }
  };


  return (
    <div className="signup-container">
      <h1 className="signup-title">Sign up</h1>
      <div className="signup-form">
        <img src={image} alt="Illustration" className="signup-image" />
        <form onSubmit={handleSubmit}>
        <div className="signup-form-fields">
          <label htmlFor="name" className="signup-label">Name</label> {/* Ganti kelas */}
          <input 
          type="text"
          id="name"
          name="name" 
          className="signup-input"
          value={formData.name} 
          onChange={handleChange}
          placeholder="Type here" /> {/* Ganti kelas */}
          
          <label htmlFor="username" className="signup-label">Username</label> {/* Ganti kelas */}
          <input 
          type="text"
          id="username"
          name="username"
          className="signup-input" 
          value={formData.username}
          onChange={handleChange}
          placeholder="Type Here" /> {/* Ganti kelas */}
          
          <label htmlFor="email" className="signup-label">E-mail</label> {/* Ganti kelas */}
          <input 
          type="email" 
          id="email"
          name="email"
          className="signup-input"
          value={formData.email}
          onChange={handleChange}           
          placeholder="Type here" /> {/* Ganti kelas */}
          
          <label htmlFor="password" className="signup-label">Password</label> {/* Ganti kelas */}
          <input 
          type="password" 
          id="password"
          name="password"
          className="signup-input" 
          value={formData.password}
          onChange={handleChange}
          placeholder="Value" /> {/* Ganti kelas */}
          
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </div>
        </form>
      </div>
      <img src={logo} alt="Vibe Logo" className="logo" />
    </div>
  );
};

export default Signup;

