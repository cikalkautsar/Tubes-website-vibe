import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/home.css";
import imageProfileLogo from "../assets/profilelogo.png";
import imageHomeLogo from "../assets/homelogo.png";
import imageSearchLogo from "../assets/searchlogo.png";
import imageCalendarLogo from "../assets/calendarlogo.png";

function Home() {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [likedPosts, setLikedPosts] = useState({});
  const navigate = useNavigate();

  const handleScroll = (e) => {
    if (e.target.scrollTop > 50) {
      setSearchVisible(true);
    } else {
      setSearchVisible(false);
    }
  };

  const toggleLike = (index) => {
    setLikedPosts((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="home-container" onScroll={handleScroll}>
      {isSearchVisible && (
        <div className="search-bar">
          <span className="search-profile-icon">👤</span>
          <input type="text" placeholder="Search" className="search-input" />
        </div>
      )}

      <div className="timeline">
        <h2>For You</h2>
        {[...Array(3)].map((_, index) => (
          <div className="post-card" key={index}>
            <div className="post-header">
              <span className="user-icon">👤</span>
              <p className="username">User{index + 1}</p>
            </div>
            <p className="post-text">
              {index % 2 === 0
                ? "Started my first study streak!"
                : "Completed my study session on meditation."}
            </p>
            <div className="post-image-placeholder">
              [Image Placeholder]
            </div>
            <div className="post-actions">
              <span
                className={likedPosts[index] ? "liked" : ""}
                onClick={() => toggleLike(index)}
              >
                ♡
              </span>
              <span
                className="comment-icon"
                onClick={() => navigate("/comment")}

              >
                💬 3
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="home-bottom-navigation">
        <img
          src={imageProfileLogo}
          alt="Profile"
          className="nav-icon"
          onClick={() => navigate("/profile")}
        />
        <img
          src={imageHomeLogo}
          alt="Home"
          className="nav-icon"
          onClick={() => navigate("/home")}
        />
        <img
          src={imageSearchLogo}
          alt="Search"
          className="nav-icon"
          onClick={() => navigate("/search")}
        />
        <img
          src={imageCalendarLogo}
          alt="Calendar"
          className="nav-icon"
          onClick={() => navigate("/calendar")}
        />
      </div>
    </div>
  );
}

export default Home;