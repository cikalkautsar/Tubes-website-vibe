import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Search.css";
import imageProfileLogo from "../assets/profilelogo.png";
import imageHomeLogo from "../assets/homelogo.png";
import imageSearchLogo from "../assets/searchlogo.png";
import imageCalendarLogo from "../assets/calendarlogo.png";

function Search() {
  const navigate = useNavigate();
  
  const [isSearchVisible, setIsSearchVisible] = useState(true);


  const handleScroll = () => {
    console.log("Scroll event triggered");
  };

  return (
    <div className="search-container" onScroll={handleScroll}>
      {isSearchVisible && (
        <div className="search-bar">
          <span className="search-icon">👤</span>
          <input type="text" placeholder="Search" className="search-input" />
        </div>
      )}

      <div className="search-navigation">
        <img
          src={imageProfileLogo}
          alt="Profile"
          className="search-nav-icon"
          onClick={() => navigate("/profile")}
        />
        <img
          src={imageHomeLogo}
          alt="Home"
          className="search-nav-icon"
          onClick={() => navigate("/home")}
        />
        <img
          src={imageSearchLogo}
          alt="Search"
          className="search-nav-icon"
          onClick={() => navigate("/search")}
        />
        <img
          src={imageCalendarLogo}
          alt="Calendar"
          className="search-nav-icon"
          onClick={() => navigate("/calendar")}
        />
      </div>
    </div>
  );
}

export default Search;
