import React from 'react';
import './Hero.css';
import profile2 from "../../assets/hero.jpg"; // Profile image
import dark_arrow from '../../assets/dark-arrow.png';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div id="hero" className="hero-container">
      <motion.img
        src={profile2}
        alt="Profile"
        className="profile-image"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="hero-text"
      >
        <h1>Akilas Amebaw</h1>
        <p>
          CEO of GEDL Studio and Co-founder of Divine Pictures. A filmmaker with 7+ years of experience in TV ads, documentaries, and series, including Ethiopia's first comedy-horror *Tikur Ababa*. Currently producing *Adrash*, a 104-episode sitcom.
        </p>
        <button className="btn">
          <a href="#about">Learn more <img src={dark_arrow} alt="arrow" /></a>
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;
