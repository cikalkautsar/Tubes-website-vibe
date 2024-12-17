import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Updateprofile.css";
import imageProfileLogo from "../assets/profilelogo.png";
import imageHomeLogo from "../assets/homelogo.png";
import imageSearchLogo from "../assets/searchlogo.png";
import imageCalendarLogo from "../assets/calendarlogo.png";

function UpdateProfile() {
  const [profileImage, setProfileImage] = useState(null);
  const [displayName, setDisplayName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [firstname, setFirstName] = useState("User"); 
  const navigate = useNavigate();

  useEffect(() => {
    const fullName = localStorage.getItem("name") || "User";
    const firstWord = fullName.split(" ")[0]; // Ambil kata pertama dari nama
    setFirstName(firstWord); // Set nama depan ke state firstname
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfileImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div className="profile-container">
      <h1 className="profile-title">Welcome, User!</h1>
      <p>Let's complete your profile</p>
      <div className="profile-form">
        <div className="profile-image-upload">
          <label htmlFor="profileImage" className="upload-label">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile Preview"
                className="profile-preview"
              />
            ) : (
              <div className="upload-placeholder">Upload profile picture</div>
            )}
          </label>
          <input
            type="file"
            id="profileImage"
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
          <button className="profile-button" onClick={handleDashboard}>
            Save
          </button>
        </div>
      </div>
      <div className="update-bottom-navigation">
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

export default UpdateProfile;