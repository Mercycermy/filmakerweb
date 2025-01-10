import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='background'>
      <div id="hero" className="hero-container">
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
      <div className="hero-shape">l</div> {/* Fix the closing div */}
    </div>
  );
};

export default Hero;
