import React from 'react';
import './Program.css';
import program_1 from '../../assets/program-1.jpg'; // Tikur Ababa
import program_2 from '../../assets/program-2.jpg'; // Adrash
import program_3 from '../../assets/program-3.jpg'; // TV Ads
import { motion } from "framer-motion";

const Programs = () => {
  return (
    <motion.div className="programs">
      {/* Title Section */}
      <div className="programs-title">
        <h2>Featured Programs</h2>
        <p>Explore some of the most notable programs and projects we have worked on.</p>
      </div>

      <div className="program">
        <img src={program_1} alt="Tikur Ababa" />
        <div className="caption">
          <h3>Tikur Ababa</h3>
          <p>
            Tikur Ababa is Ethiopia's first comedy-horror TV series produced to international standards. Developed in collaboration with Canal Plus, the series showcases Ethiopian talent on a global platform with production quality comparable to Netflix.
          </p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="Adrash" />
        <div className="caption">
          <h3>Focus on Ability Short Film Festival 2022</h3>
          <p>
            The image promotes the 2022 Focus on Ability Short Film Festival hosted by Nova Employment. It highlights an international short film entry titled Stay on Humanity by Akilal Amebaw from Ethiopia. The festival awards over $100,000 in prizes and ran from August 16 to August 22, 2022. The website for more details is www.focusonability.com.au.
          </p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="TV Ads & Documentaries" />
        <div className="caption">
          <h3>TV Ads & Documentaries</h3>
          <p>
            Over 7 years, Akilas has worked on TV ads and documentaries for organizations like Ethio Telecom, the Prime Minister's Office, universities, banks, and financial institutions, creating impactful content for Ethiopian and international audiences.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Programs;
