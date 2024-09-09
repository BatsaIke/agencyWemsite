// WhatsAppButton.js
import React from 'react';
import './WhatsAppButton.css'; // CSS file for styling

const WhatsAppButton = () => {
  const phoneNumber = '+233543869957'; // Your WhatsApp number

  return (
    <div className="whatsapp-container">
      <a
        href={`https://wa.me/${phoneNumber}`}
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="whatsapp-icon"
        />
      </a>
      <span className="whatsapp-text">Contact Us Now</span>
    </div>
  );
};

export default WhatsAppButton;
