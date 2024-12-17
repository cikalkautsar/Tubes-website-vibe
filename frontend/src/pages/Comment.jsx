import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/comment.css";
import imageProfileLogo from "../assets/profilelogo.png";
import imageHomeLogo from "../assets/homelogo.png";
import imageSearchLogo from "../assets/searchlogo.png";
import imageCalendarLogo from "../assets/calendarlogo.png";
function Comment() {
  const navigate = useNavigate([]);

  const [comments, setComments] = useState([
    { user: "User3", text: "Great progress! Keep up the good work!" },
    { user: "User4", text: "Great post!!!" },
    { user: "User5", text: "Any tips for maintaining consistency?" },
  ]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, { user: "You", text: newComment }]);
      setNewComment("");
    }
  };

  return (
    <div className="comment-container">
      <div className="comment-header">
        <span onClick={() => navigate("/home")} className="back-icon">←</span>
        <h2>Comment</h2>
      </div>

      <div className="comment-list">
        {comments.map((comment, index) => (
          <div className="comment-card" key={index}>
            <div className="comment-user">
              <span className="user-icon">👤</span>
              <p className="comment-username">{comment.user}</p>
            </div>
            <p className="comment-text">{comment.text}</p>
            <span className="reply-icon">💬 Reply</span>
          </div>
        ))}
      </div>

      <div className="add-comment">
        <span className="add-comment-icon">👤</span>
        <input
          type="text"
          className="comment-input"
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button className="comment-post-btn" onClick={handleAddComment}>
          Post
        </button>
      </div>

      <div className="comment-bottom-navigation">
        <img src={imageProfileLogo} alt="Profile" className="nav-icon" onClick={() => navigate("/profile")} />
        <img src={imageHomeLogo} alt="Home" className="nav-icon" onClick={() => navigate("/")} />
        <img src={imageSearchLogo} alt="Search" className="nav-icon" onClick={() => navigate("/search")} />
        <img src={imageCalendarLogo} alt="Calendar" className="nav-icon active-nav" onClick={() => navigate("/calendar")} />
      </div>
    </div>
  );
}

export default Comment;