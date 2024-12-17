import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/createAch.css";
import imageBack from "../assets/back.png";
import imageProfileLogo from "../assets/profilelogo.png";
import imageHomeLogo from "../assets/homelogo.png";
import imageSearchLogo from "../assets/searchlogo.png";
import imageCalendarLogo from "../assets/calendarlogo.png";
import imageAddFriend from "../assets/addfriend.png"; 

const CreateAch = () => {
  const navigate = useNavigate();

  const [achievementName, setAchievementName] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [showFriends, setShowFriends] = useState(false); // Menampilkan daftar teman
  const [selectedFriends, setSelectedFriends] = useState([]); // Menyimpan teman yang dipilih

  const friendsList = ["User1", "User2", "User3"]; // Contoh daftar teman

  // Fungsi menangani perubahan input waktu
  const handleTimeChange = (e) => {
    const { name, value } = e.target;
    setTime((prevTime) => ({
      ...prevTime,
      [name]: value,
    }));
  };

  // Fungsi menambahkan teman ke daftar
  const addFriend = (friend) => {
    if (!selectedFriends.includes(friend)) {
      setSelectedFriends([...selectedFriends, friend]);
    }
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
          onClick={() => navigate("/achievement")}
        />
        <h2>Achievements</h2>

        <form className="achievement-form">
          {/* Achievement Name */}
          <label>Name of Achievements</label>
          <input
            type="text"
            value={achievementName}
            onChange={(e) => setAchievementName(e.target.value)}
            className="form-input"
          />

          {/* Description */}
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-input"
          ></textarea>

          {/* Choose Your Streaks */}
          <p className="streak-title">Choose your streaks</p>
          <div className="streak-buttons">
            <button
              type="button"
              className="streak-btn"
              onClick={() => setShowFriends(false)}
            >
              own
            </button>
            <button
              type="button"
              className="streak-btn"
              onClick={() => setShowFriends(true)}
            >
              with friends
            </button>
          </div>

          {showFriends && (
  <>
    {/* Overlay Background */}
    <div className="overlay"></div>

    {/* Pop-up Daftar Teman */}
    <div className="friends-selection">
      {/* Tombol Back */}
      <div className="friends-header">
        <img
          src={imageBack}
          alt="Back"
          className="back-button"
          onClick={() => setShowFriends(false)} // Tutup popup
        />
      </div>

      {friendsList.map((friend, index) => (
        <div key={index} className="friend-card">
          <span>{friend}</span>
          <img
            src={imageAddFriend}
            alt="Add"
            className="add-friend-icon"
            onClick={() => addFriend(friend)}
          />
        </div>
      ))}
    </div>
  </>
)}



          {/* Select Time */}
          <p className="select-time-title">Select time</p>
          <div className="time-inputs">
            <input
              type="number"
              name="hours"
              value={time.hours}
              onChange={handleTimeChange}
              placeholder="00"
              className="time-input"
            />
            <span>:</span>
            <input
              type="number"
              name="minutes"
              value={time.minutes}
              onChange={handleTimeChange}
              placeholder="00"
              className="time-input"
            />
            <span>:</span>
            <input
              type="number"
              name="seconds"
              value={time.seconds}
              onChange={handleTimeChange}
              placeholder="00"
              className="time-input"
            />
          </div>

          {/* Save Button */}
          <button type="submit" className="save-btn">
            Save
          </button>
        </form>
      </main>

      {/* Footer */}
      <footer className="mobile-footer">
        <img src={imageProfileLogo} alt="Profile" className="nav-icon" onClick={() => navigate("/profile")} />
        <img src={imageHomeLogo} alt="Home" className="nav-icon" onClick={() => navigate("/")} />
        <img src={imageSearchLogo} alt="Search" className="nav-icon" onClick={() => navigate("/search")} />
        <img src={imageCalendarLogo} alt="Calendar" className="nav-icon active-nav" onClick={() => navigate("/calendar")} />
      </footer>
    </div>
  );
};

export default CreateAch;