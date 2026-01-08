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
          <h1>&lt;USER_NAME&gt;</h1>
          <p>
            Filmmaker and creative professional. Portfolio highlights include short films, documentaries, and serialized projects. Replace this text with your biography.
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
