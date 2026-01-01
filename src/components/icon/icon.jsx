import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";  // New import for WhatsApp
import EmailIcon from "@mui/icons-material/Email";        // New import for Email
import "./ScrollToTop.css";

const ContactIcons = () => {
  const whatsappStyle = {
    position: "fixed",
    bottom: "30%",
    right: "20px",
    zIndex: "1000",
    cursor: "pointer",
  };
  const emailStyle = {
    position: "fixed",
    bottom: "20%",
    right: "20px",
    zIndex: "1000",
    cursor: "pointer",
  };
  return (
    <div>
      {/* WhatsApp Icon */}
      <div className="scroll-top" style={whatsappStyle}>
        <a
          href="https://wa.me/251941525051"  // Replace with your WhatsApp link
          aria-label="Chat on WhatsApp"
          target="_blank"
          rel="noreferrer"
          className="whatsapp-icon-container"
        >
          <div className="whatsapp-icon-circle">
            <WhatsAppIcon fontSize="large" className="whatsapp-icon" />
          </div>
        </a>
      </div>

      {/* Email Icon */}
      <div className="scroll-top" style={emailStyle}>
        <a
          href="mailto:contact@akilasamebaw.com"
          aria-label="Send Email"
        >
          <div className="email-icon-circle">
            <EmailIcon fontSize="large" className="email-icon" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default ContactIcons;
