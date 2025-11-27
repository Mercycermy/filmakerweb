import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='background'>
      <div id="hero" className="hero-container">
        <motion.div
          className="hero-text"
        >
          <h1>Akilas Amebaw</h1>
          <p>
            An entrepreneur and filmmaker based in Addis Ababa, Ethiopia. Co-founder of Wondgeri Trading PLC, with over 9 years of experience in TVCs, documentaries, TV series, and photography. Currently working on a new mini-series titled Adrash.
          </p>
          <button className="btn">
            <a href="#about">Learn more <img src={dark_arrow} alt="arrow" /></a>
          </button>
        </motion.div>
      </div>
      <div className="hero-shape">l</div> {/* Fix the closing div */}
    </div>
  );
};

export default Hero;
