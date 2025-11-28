import React, { useState } from 'react';
import './Program.css';
import Bts from '../../assets/bts.png';
import Bts2 from '../../assets/bts2.png';
import Bts3 from '../../assets/bts3.png';
import Bts4 from '../../assets/bts4.png';
import Bts5 from '../../assets/bts5.png';
import Bts6 from '../../assets/bts6.png';
import Work from '../../assets/work.png';
import Work2 from '../../assets/work2.png';
import Work3 from '../../assets/work3.png';
import Work4 from '../../assets/work4.png';
import Work5 from '../../assets/work5.png';
import Work6 from '../../assets/work6.png';
import Work7 from '../../assets/work7.png';
import Work8 from '../../assets/work8.png';
import Work9 from '../../assets/work9.png';
import { motion } from "framer-motion";

const workImages = [Work, Work2, Work3, Work4, Work5, Work6, Work7, Work8, Work9];
const btsImages = [Bts, Bts2, Bts3, Bts4, Bts5, Bts6];

const Programs = () => {
  return (
    <motion.div className="programs-container">
      {/* Featured Projects Section */}
      <div className="programs-title">
        <h2>My Previous Touch</h2>
      </div>

      <div className="programs">
        {workImages.map((img, index) => (
          <div key={index} className="program">
            <div className="program-image-wrapper">
              <img src={img} alt={`Featured Project ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Behind the Scene Section */}
      <div className="programs-title">
        <h2>Behind the Scene</h2>
      </div>

      <div className="programs">
        {btsImages.map((img, index) => (
          <div key={index} className="program">
            <div className="program-image-wrapper">
              <img src={img} alt={`Behind the Scene ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Programs;
