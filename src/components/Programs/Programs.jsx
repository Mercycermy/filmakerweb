import React, { useState } from 'react';
import './Program.css';
import program_1 from '../../assets/program-1.jpg';
import program_2 from '../../assets/program-2.jpg';
import program_3 from '../../assets/program-3.jpg';
import { motion } from "framer-motion";

const programDetails = [
  {
    id: 1,
    title: "Tikur Abeba",
    description:
      "Tikur Abeba is Ethiopia's first comedy-horror TV series produced to international standards. Developed in collaboration with Canal Plus, the series showcases Ethiopian talent on a global platform with production quality comparable to Netflix.",
    image: program_1,
  },
  {
    id: 2,
    title: "Focus on Ability Short Film Festival 2022",
    description:
      "The image promotes the 2022 Focus on Ability Short Film Festival hosted by Nova Employment. It highlights an international short film entry titled Stay on Humanity by Akilal Amebaw from Ethiopia. The festival awards over $100,000 in prizes and ran from August 16 to August 22, 2022. The website for more details is www.focusonability.com.au.",
    image: program_2,
  },
  {
    id: 3,
    title: "TV Ads & Documentaries",
    description:
      "Over 7 years, Akilas has worked on TV ads and documentaries for organizations like Ethio Telecom, the Prime Minister's Office, universities, banks, and financial institutions, creating impactful content for Ethiopian and international audiences.",
    image: program_3,
  },
];

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const handleProgramClick = (program) => {
    setSelectedProgram(program);
  };

  const closePopup = () => {
    setSelectedProgram(null);
  };

  return (
    <motion.div className="programs-container">
      {/* Title Section */}
      <div className="programs-title">
        <h2>Featured projects</h2>
          <p>Explore some of the most notable projects we have worked on.</p>
      </div>


      <div class="programs">
    {/* Program Cards */}
    {programDetails.map((program) => (
        <div
          key={program.id}
          className="program"
          onClick={() => handleProgramClick(program)}
        >
          {/* Wrap the image with a clickable container */}
          <div className="program-image-wrapper">
            <img src={program.image} alt={program.title} />
          </div>
        </div>
      ))}

      {/* Popup */}
      {selectedProgram && (
        <div className="popup-overlay" onClick={closePopup}>
          <div
            className="popup-content"
            onClick={(e) => e.stopPropagation()} // Prevent click propagation
          >
            <button className="popup-close" onClick={closePopup}>
              &times;
            </button>
            <h3>{selectedProgram.title}</h3>
            <p>{selectedProgram.description}</p>
          </div>
        </div>
      )}
  </div>
     
    </motion.div>
  );
};

export default Programs;
