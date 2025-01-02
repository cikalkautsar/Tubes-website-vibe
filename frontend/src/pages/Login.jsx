import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/login.css";
import logo from "../assets/logo.png";
import image from "../assets/login.png";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Login({ setIsAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  // Mengecek jika token sudah ada di localStorage
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.interceptors.request.use((config) => {
        config.headers.Authorization = `Bearer ${token}`;
        return config;
      }, (error) => Promise.reject(error));
    }
  }, []);

  // Handle submit untuk login
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const Response = await axios.post("http://localhost:8000/api/login/", {
        username,
        password,
      });

      // Tampilkan SweetAlert untuk feedback login berhasil
      MySwal.fire({
        title: 'Login Successfully!',
        text: '',
        icon: 'success',
      }).then(() => {
        // Simpan data ke localStorage
        localStorage.setItem("token", Response.data.token);
        localStorage.setItem("name", Response.data.name);
        localStorage.setItem("username", Response.data.username);

        // Simpan username jika rememberMe di-check
        if (rememberMe) {
          localStorage.setItem("rememberMe", true);
          localStorage.setItem("savedUsername", username);
        }

        // Update status autentikasi dan navigasi ke halaman profile
        setIsAuthenticated(true);
        navigate('/profile');
      });
    } catch (error) {
      console.error("Login Gagal:", error);
      MySwal.fire({
        title: 'Login Failed!',
        text: 'Login gagal. Coba lagi.',
        icon: 'error',
      });
    }
  };

  // Navigasi ke halaman sign up
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
              value={username}
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
              <input 
                type="checkbox" 
                id="save-password" 
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="save-password" className="login-label">Save password</label> 
            </div>

            <button type="submit" className="login-button">
              Log in
            </button>
          </div>
        </form>
        <p className="signup-text">
          Don't have an account? <span onClick={handleSignUp} className="signup-link">Sign up here</span>
        </p>
      </div>
      <img src={logo} alt="Vibe Logo" className="logo" />
    </div>
  );
};

export default Login;
