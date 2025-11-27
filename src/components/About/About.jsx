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
                    I’m Akilas Amebaw, Ethiopian filmmaker shaped by story, instinct, and the rhythm of folklore. I studied Urban Planning and Design at Hawassa University, but my real education came from chasing light, emotion, and truth through nearly a decade of filmmaking. Over the years, I’ve worked with major institutions including Ethio Telecom, the Prime Minister’s Office, leading universities, banks, and financial organizations crafting visual stories that connect on a national scale.
                </p>
                <p>
                    I’m also an entrepreneur, co-founder of Wondgeri Trading PLC, where creativity meets risk-taking and long-term vision. My journey reached a milestone with “Tikur Abeba” the first comedy-horror series in Ethiopia’s history, produced to international standards and designed to showcase Ethiopian talent to the world.
                </p>
                <p>
                    Today, I’m shaping Adrash, mini-series carved from urban life cinematic, tense, and emotionally charged. Everything I create reflects one mission: to tell Ethiopian stories with uncompromising vision and courage.
                </p>
            </div>
        </motion.div>
    );
};

export default About;
