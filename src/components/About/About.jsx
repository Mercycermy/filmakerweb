import React, { useState } from 'react';
import './About.css';
import { motion } from "framer-motion";

const About = () => {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <motion.div
           
            className='about' id='about'>
            <div className="about-right">
                <h1 className="about-title">About Me</h1> {/* Added Title */}
                <h2>CEO of GEDL Studio & Co-Founder of Divine Pictures</h2>
                <p>
                    I am Akilas Amebaw, an experimental filmmaker from Ethiopia with over 7 years of experience in TV ads, documentaries, and TV series production.
                    I studied Urban Planning and Design at Hawassa University and have worked with top organizations, including Ethio Telecom, the Prime Minister's Office, 
                    several universities, banks, and financial institutions.
                </p>
                {showMore && (
                    <div className="more-info">
                        <p>
                            Recently, I completed "Tikur Abeba," the first-ever comedy-horror TV series in Ethiopia's history, produced to international standards. 
                            The series was developed in collaboration with the French company Canal Plus Teama and showcases Ethiopian talent to a global audience. 
                        </p>
                        <p>
                            Currently, I'm working on "Adrash," a 104-episode TV sitcom blending humor with suspense and mystery.
                        </p>
                        
                    </div>
                )}
                <button className="btn" onClick={toggleShowMore}>
                    {showMore ? 'See Less' : 'See More'}
                </button>
            </div>
        </motion.div>
    );
};

export default About;
