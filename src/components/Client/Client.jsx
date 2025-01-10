import React from 'react';
import './Client.css';
import gallary_1 from '../../assets/gallery-1.png';
import gallary_2 from '../../assets/gallery-2.png';
import gallary_3 from '../../assets/gallery-3.png';
import gallary_4 from '../../assets/gallery-4.png';
import gallary_5 from '../../assets/gallery-5.png';
import gallary_6 from '../../assets/gallery-6.png';
import gallary_7 from '../../assets/gallery-7.png';
import gallary_8 from '../../assets/gallery-8.png';
import { motion } from "framer-motion";

const Client = () => {
  return (
    <div id="client" className="client">
      <h1 className="client-title">Our Clients</h1>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="gallery-slider"
      >
        <div className="gallery">
          <img src={gallary_1} alt="Client 1" />
          <img src={gallary_2} alt="Client 2" />
          <img src={gallary_3} alt="Client 3" />
          <img src={gallary_4} alt="Client 4" />
          <img src={gallary_5} alt="Client 5" />
          <img src={gallary_6} alt="Client 6" />
          <img src={gallary_7} alt="Client 7" />
          <img src={gallary_8} alt="Client 8" />
        </div>
      </motion.div>
    </div>
  );
};

export default Client;
