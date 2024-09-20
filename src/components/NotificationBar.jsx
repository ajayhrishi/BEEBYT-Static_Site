// NotificationBar.js
import React from "react";
import "./NotificationBar.css"; // Import your CSS file

export const NotificationBar = ({ message, onClose }) => {
  return (
    <div className="notification-bar">
      <span>{message}</span>
      <button className="close-button" onClick={onClose}>
        X
      </button>
    </div>
  );
};
