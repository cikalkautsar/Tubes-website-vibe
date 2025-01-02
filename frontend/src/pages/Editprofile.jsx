import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Editprofile.css";
import imageProfileLogo from "../assets/profilelogo.png";
import imageHomeLogo from "../assets/homelogo.png";
import imageSearchLogo from "../assets/searchlogo.png";
import imageCalendarLogo from "../assets/calendarlogo.png";

function Editprofile() {
  const [profilePicture, setprofilePicture] = useState(null);
  const [displayName, setDisplayName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [activeTab, setActiveTab] = useState("profile");
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("username") || "Guest";
    console.log("Nama pengguna di localStorage:", user);
    setUsername(user);

    // Load profile data from localStorage if available
    const savedProfile = JSON.parse(localStorage.getItem("profile"));
    if (savedProfile) {
      setDisplayName(savedProfile.displayName);
      setBio(savedProfile.bio);
    }
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => setprofilePicture(reader.result);
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a valid image file.");
    }
  };

  const handleSave = () => {
    if (!displayName.trim() || !username.trim() || !bio.trim()) {
      alert("All fields must be filled out!");
      return;
    }
    const profileData = {
      profilePicture,
      displayName,
      username,
      bio,
    };
    localStorage.setItem("profile", JSON.stringify(profileData));
    alert("Profile updated!");
    navigate("/profile");
  };

  const BottomNavigation = () => (
    <div className="update-bottom-navigation">
      <img
        src={imageProfileLogo}
        alt="Profile"
        className={`nav-icon ${activeTab === "profile" ? "active" : ""}`}
        onClick={() => {
          setActiveTab("profile");
          navigate("/profile");
        }}
      />
      <img
        src={imageHomeLogo}
        alt="Home"
        className={`nav-icon ${activeTab === "home" ? "active" : ""}`}
        onClick={() => {
          setActiveTab("home");
          navigate("/home");
        }}
      />
      <img
        src={imageSearchLogo}
        alt="Search"
        className={`nav-icon ${activeTab === "search" ? "active" : ""}`}
        onClick={() => {
          setActiveTab("search");
          navigate("/search");
        }}
      />
      <img
        src={imageCalendarLogo}
        alt="Calendar"
        className={`nav-icon ${activeTab === "calendar" ? "active" : ""}`}
        onClick={() => {
          setActiveTab("calendar");
          navigate("/calendar");
        }}
      />
    </div>
  );

  return (
    <div className="profile-container">
      <h1 className="profile-title">Welcome, {username}!</h1>
      <p>Let's complete your profile</p>
      <div className="profile-form">
        <div className="profile-image-upload">
          <label htmlFor="profilePicture" className="upload-label">
            {profilePicture ? (
              <img
                src={profilePicture}
                alt="Profile Preview"
                className="profile-preview"
              />
            ) : (
              <div className="upload-placeholder">Upload profile picture</div>
            )}
          </label>
          <input
            type="file"
            id="profilePicture"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: "none" }}
          />
        </div>
        <div className="form-fields">
          <label htmlFor="displayName">Your Display Name</label>
          <input
            id="displayName"
            type="text"
            placeholder="Type here"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Type here"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            placeholder="Write something about yourself"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
          <button className="profile-button" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
}

export default Editprofile;
