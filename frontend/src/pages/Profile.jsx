import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/profile.css";
import image from "../assets/Award.png"; 
import imageTimer from "../assets/Timer.png";
import imagePersonalcard from "../assets/Personalcard.png";
import imageCeklis from "../assets/Ceklis.png";
import imageEdit from "../assets/Edit.png";
import imageProfileLogo from "../assets/profilelogo.png";
import imageHomeLogo from "../assets/homelogo.png";
import imageSearchLogo from "../assets/searchlogo.png";
import imageCalendarLogo from "../assets/calendarlogo.png";

const Profile = () => {
  const navigate = useNavigate();

  const [profilePicture, setProfilePicture] = useState(null);
  const [username, setUsername] = useState("Username");
  const [fullname, setFullname] = useState("Full Name");
  const [bio, setBio] = useState("(BIO)");

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditProfile = () => {
    console.log("Edit Profile Clicked");
  };

  return (
    <div className="mobile-container">
      <header className="mobile-header">
        <div className="profile-info">

          <div className="profile-picture">
            <img
              src={profilePicture || "https://via.placeholder.com/100"} 
              alt="Profile"
              style={{ width: "70px", height: "70px", borderRadius: "50%", marginRight: "-50px"}}
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePictureChange}
              style={{ display: "none" }}
              id="profile-picture-input"
            />
            <label htmlFor="profile-picture-input" style={{ cursor: "pointer" }}>
              Edit
            </label>
          </div>
          <div>
            <p className="username">{username}</p>
            <p className="fullname">{fullname}</p>
            <p className="bio">{bio}</p>
          </div>
        </div>
        <button className="edit-button" onClick={handleEditProfile}>Edit</button>
      </header>

      <main className="mobile-main">
        <div className="navigation-card" onClick={() => navigate("/achievement")}>
          <img src={image} alt="Award" style={{ width: "70px", height: "70px", marginRight: "30px", marginTop: "50px" }} />
          <img src={imageTimer} alt="Timer" style={{ width: "70px", height: "70px", marginRight: "30px" }}/>
          <img src={imagePersonalcard} alt="Personalcard" style={{ width: "70px", height: "70px", marginRight: "30px" }}/>
          <p className="card-title">Achievement</p>
          <button className="card-button">Get in</button>
        </div>
        <div className="card-row">
          <div className="navigation-card-item" onClick={() => navigate("/todo-list")}>
            <img src={imageCeklis} alt="Ceklis" style={{ width: "50px", height: "50px", marginRight: "10px", marginTop: "50px" }}/>  
            <p className="card-title">To Do List</p>
            <button className="card-button">Get in</button>
          </div>
          <div className="navigation-card-item" onClick={() => navigate("/create-post")}>
            <img src={imageEdit} alt="Edit" style={{ width: "50px", height: "50px", marginRight: "10px", marginTop: "50px" }}/>
            <p className="card-title">Create a post</p>
            <button className="card-button">Create</button>
          </div>
        </div>
      </main>


       <div className="mobile-footer">
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
};

export default Profile;