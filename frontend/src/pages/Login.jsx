import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/login.css";
import logo from "../assets/logo.png";
import image from "../assets/login.png";

const Login = () => {
  const navigate = useNavigate();
  const [name, setUsername] = useState('')
  const [password , setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const [formData, setFormData] = useState({
  //   username: "",
  //   password: "",
  // });

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.interceptors.request.use((config) => {
        config.headers.Authorization = `Bearer ${token}`;
        return config;
      }, (error) => {
        return Promise.reject(error);
      });
    }
  }, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const Response = await axios.post("http://localhost:8000/api/login/", { //axios.post untuk mengirim data ke endpoint API  
        name,
        password,
      })
      localStorage.setItem("token", Response.data.token); // Simpan Token
      setIsAuthenticated(true);
      alert("Login Berhasil");  
      navigate('/updateprofile');
    } catch (error) {
      console.error("Login Gagal:", error);
      alert("Login gagal. Coba lagi");
    }
  };

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     axios.interceptors.request.use((config) => {
  //       config.headers.Authorization = Bearer ${token};
  //       return config;
  //     }, (error) => {
  //       return Promise.reject(error);
  //     });
  //   }
  // }, []);


  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Log in</h1>
      <div className="login-form">
        <img src={image} alt="Illustration" className="login-image" />
        <form onSubmit={handleSubmit}>
          <div className="login-form-fields">
            <label className="login-label" htmlFor="username">Username</label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              className="login-input" 
              placeholder="Type here"
              value={name}
              onChange={(e) => setUsername(e.target.value)}
            /> 
            <label className="login-label" htmlFor="password">Password</label> 
            <input 
              type="password" 
              id="password" 
              name="password"
              className="login-input" 
              placeholder="Type here"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            /> 
            <div className="checkbox-container">
              <input type="checkbox" id="save-password" />
              <label htmlFor="save-password" className="login-label">Save password</label> 
            </div>
            <button type="submit" className="login-button">
              Log in
            </button>
          </div>
        </form>
        <p className="signup-text">
          Sign up? <span onClick={handleSignUp} className="signup-link">Click here</span>
        </p>
      </div>
      <img src={logo} alt="Vibe Logo" className="logo" />
    </div>
  );
};

export default Login;
