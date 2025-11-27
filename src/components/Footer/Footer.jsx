import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaWhatsapp, FaYoutube, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

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
        <a href="https://www.youtube.com/@akilasamebaw636" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <FaYoutube />
        </a>

        <a href="https://et.linkedin.com/in/akilas-amebaw-1898441b2" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedinIn />
        </a>
        <a href="https://www.instagram.com/akilas_a/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
