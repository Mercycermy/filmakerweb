import React from 'react';
import './About.css';
import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.div
           
            className='about' id='about'>
            <div className="about-right">
                <h1 className="about-title">About Me</h1> {/* Added Title */}
                <p>
                    Filmmaker and creative professional focusing on film, documentary, and serialized storytelling. Replace this section with a project-specific biography and credentials.
                </p>
                <p>
                    This template is neutral and intended for reuse: update company names, credits, and project titles as appropriate.
                </p>
                <p>
                    Current work examples and project descriptions should be added here to reflect your portfolio and ongoing productions.
                </p>
            </div>
        </motion.div>
    );
};

export default About;
