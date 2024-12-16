import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/calendar.css";
import imageProfileLogo from "../assets/profilelogo.png";
import imageHomeLogo from "../assets/homelogo.png";
import imageSearchLogo from "../assets/searchlogo.png";
import imageCalendarLogo from "../assets/calendarlogo.png";
import imageCalendar from "../assets/calendar.png";


const Calendar = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

  const changeMonth = (offset) => {
    const newDate = new Date(date.getFullYear(), date.getMonth() + offset, 1);
    setDate(newDate);
    setSelectedDate(null);
  };

  const selectDate = (day) => {
    setSelectedDate(new Date(date.getFullYear(), date.getMonth(), day));
  };

  const dayNames = ["S", "M", "T", "W", "T", "F", "S"];
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const year = date.getFullYear();
  const month = date.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = new Date(year, month, 1).getDay();

  return (
    <div className="calendar-container">
      <header className="calendar-header">
        <button className="nav-button" onClick={() => changeMonth(-1)}>&lt;</button>
        <h1>{monthNames[month]} <span>{year}</span></h1>
        <button className="nav-button" onClick={() => changeMonth(1)}>&gt;</button>
        <img src={imageCalendar} alt="Calendar" className="calendar-icon" />
      </header>

      <div className="calendar-grid">
        <div className="calendar-days">
          {dayNames.map((day) => (
            <div className="day-name" key={day}>{day}</div>
          ))}
        </div>
        <div className="calendar-dates">
          {Array.from({ length: firstDay }).map((_, i) => (
            <div key={`empty-${i}`} className="calendar-date"></div>
          ))}

          {Array.from({ length: daysInMonth }, (_, i) => {
            const day = i + 1;
            const isSelected = selectedDate?.getDate() === day &&
                               selectedDate?.getMonth() === month &&
                               selectedDate?.getFullYear() === year;

            return (
              <div 
                key={i} 
                className={`calendar-date ${isSelected ? "selected-date" : ""}`}
                onClick={() => selectDate(day)}
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>

      <div className="task-list">
        <p className="task-list-title">List</p>
        <ul>
          <li><input type="checkbox" /><span>My Task</span></li>
          <li><input type="checkbox" /><span>List item</span></li>
          <li><input type="checkbox" /><span>My Task</span></li>
          <li><input type="checkbox" /><span>My Task</span></li>
        </ul>
      </div>

      <button className="create-list-button" onClick={() => navigate("/create-new-list")}>
        Create New List
      </button>

      <footer className="mobile-footer">
        <img src={imageProfileLogo} alt="Profile" className="nav-icon" onClick={() => navigate("/profile")} />
        <img src={imageHomeLogo} alt="Home" className="nav-icon" onClick={() => navigate("/")} />
        <img src={imageSearchLogo} alt="Search" className="nav-icon" onClick={() => navigate("/search")} />
        <img src={imageCalendarLogo} alt="Calendar" className="nav-icon active-nav" onClick={() => navigate("/calendar")} />
      </footer>
    </div>
  );
};

export default Calendar;
