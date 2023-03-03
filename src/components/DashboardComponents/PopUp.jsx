import React, { useState, useEffect } from "react";
import "./Popup.css";

const Popup = ({setPopup, message, duration = 1000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setPopup(false);
      if (onClose) {
        onClose();
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className={`popup ${isVisible ? "show" : ""}`}>
      <div className="popup-message">{message}</div>
      <button className="popup-close-btn" onClick={handleClose}>
        X
      </button>
    </div>
  );
};

export default Popup;
