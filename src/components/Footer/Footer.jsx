import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaWhatsapp, FaTelegram, FaLinkedinIn, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Link
          to="/privacypolicy"

        >
          Privacy Policy
        </Link>
        <p>© 2024  Akilas Amebaw. All rights reserved.</p>
      </div>
      <div className="footer-socials">

        <a href="https://wa.me/251941525051" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FaWhatsapp />
        </a>
        <a href="https://t.me/akilasamebaw" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
          <FaTelegram />
        </a>

        <a href="https://et.linkedin.com/in/akilas-amebaw-1898441b2" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedinIn />
        </a>
        <a href="https://www.facebook.com/akilas.amebaw" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebook />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
