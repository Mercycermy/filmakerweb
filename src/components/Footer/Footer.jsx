import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaTelegram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Link
          to="/privacypolicy"

        >
          Privacy Policy
        </Link>
        <p>© 2024 Filmmaker Portfolio. All rights reserved.</p>
      </div>
      <div className="footer-socials">
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
          <FaTelegram />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebook />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
