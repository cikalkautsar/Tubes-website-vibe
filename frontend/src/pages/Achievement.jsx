import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/achievement.css";
import imageProfileLogo from "../assets/profilelogo.png";
import imageHomeLogo from "../assets/homelogo.png";
import imageSearchLogo from "../assets/searchlogo.png";
import imageCalendarLogo from "../assets/calendarlogo.png";
import imagePause from "../assets/pause.png";
import imagePlay from "../assets/play.png";
import imageReset from "../assets/reset.png";
import imageBack from "../assets/back.png";

const Achievement = () => {
  const navigate = useNavigate();

  const [time, setTime] = useState(0); // Waktu dalam detik
  const [isRunning, setIsRunning] = useState(false); // Status Timer

  // Timer Effect
  useEffect(() => {
    let timerInterval = null;
    if (isRunning) {
      timerInterval = setInterval(() => {
        setTime((prevTime) => prevTime + 1); // Tambahkan waktu
      }, 1000);
    }

    // Cleanup interval
    return () => {
      if (timerInterval) clearInterval(timerInterval);
    };
  }, [isRunning]);

  // Format waktu hh:mm:ss
  const formatTime = (timeInSeconds) => {
    const hours = String(Math.floor(timeInSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((timeInSeconds % 3600) / 60)).padStart(2, "0");
    const seconds = String(timeInSeconds % 60).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  // Toggle Play/Pause Timer
  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  // Reset Timer
  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="achievements-container">
      {/* Header */}
      <header className="profile-header">
        <div className="profile-details">
          <div className="profile-pic"></div>
          <div>
            <p className="username">Username</p>
            <p className="fullname">Full name</p>
            <p className="bio">always motivated | mathematics enthu (BIO)</p>
          </div>
        </div>
        {/* Tombol Edit */}
        <p className="edit-button" onClick={() => console.log("Edit Profile")}>
          edit
        </p>
      </header>

      {/* Main Content */}
      <main className="achievements-main">
        <img
          src={imageBack}
          alt="Back"
          className="back"
          onClick={() => navigate("/dashboard")}
        />
        <h2>Achievements</h2>
        <div className="achievements-icons">
          <div className="achievement-card">
            <h1>⭐</h1>
            <p>Beginner Streak</p>
          </div>
          <div className="achievement-card">
            <h1>💧</h1>
            <p>Focused</p>
          </div>
          <div
            className="achievement-card"
            onClick={() => navigate("/createAch")}
          >
            <h1>➕</h1>
            <p>Create your own achievements</p>
          </div>
        </div>

        {/* Timer Section */}
        <section className="timer-section">
          <h3>Timer</h3>
          <div className="timer-display">
            <p>{formatTime(time)}</p>
            <img
              src={isRunning ? imagePause : imagePlay}
              alt={isRunning ? "Pause" : "Play"}
              className="icon"
              onClick={toggleTimer}
            />
            <img
              src={imageReset}
              alt="Reset"
              className="icon"
              onClick={resetTimer}
            />
          </div>
          <div className="timer-buttons">
            <button onClick={() => setTime(5 * 60)}>5 min</button>
            <button onClick={() => setTime(10 * 60)}>10 min</button>
            <button onClick={() => setTime(30 * 60)}>30 min</button>
            <button onClick={() => setTime(1 * 60 * 60)}>1 hour</button>
          </div>
        </section>

        {/* Streak Friend Section */}
        <section className="streak-friend-section">
          <h3>🔥 Streak Friend</h3>
          <ul>
            <li>⭐ 100 days with Mavin</li>
            <li>💧 50 days with Kevin</li>
            <li>⭐ 20 days with Axel</li>
          </ul>
          <p
            className="add-streaks"
            onClick={() => navigate("/addStreak")}
          >
            + Add Streaks Buddies
          </p>
        </section>
      </main>

      <footer className="mobile-footer">
        <img src={imageProfileLogo} alt="Profile" className="nav-icon" onClick={() => navigate("/profile")} />
        <img src={imageHomeLogo} alt="Home" className="nav-icon" onClick={() => navigate("/")} />
        <img src={imageSearchLogo} alt="Search" className="nav-icon" onClick={() => navigate("/search")} />
        <img src={imageCalendarLogo} alt="Calendar" className="nav-icon active-nav" onClick={() => navigate("/calendar")} />
      </footer>
    </div>
  );
};

export default Achievement;
