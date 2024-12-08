import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/profile.css"; 

function Profile() {
  const [profileImage, setProfileImage] = useState(null);
  const [displayName, setDisplayName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfileImage(reader.result); // Menampilkan preview gambar
      reader.readAsDataURL(file);
    }
  };

  const handleDashboard = () => {
    navigate("/dashboard"); // Arahkan ke dashboard
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
          <label>Your Display Name</label>
          <input
            type="text"
            placeholder="Type here"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <label>Username</label>
          <input
            type="text"
            placeholder="Type here"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Bio</label>
          <textarea
            placeholder="Write something about yourself"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
          <button className="profile-button" onClick={handleDashboard}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;