import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

import msg_icon from '../../assets/msg-icon.png';
import white_arrow from '../../assets/white-arrow.png';
import { motion } from "framer-motion";

const Contact = () => {

    return (
        <motion.div
            className='contact'>
            {/* Title and Image Section */}
            <div className="contact-header">
                <h1 className="contact-title">Contact &lt;USER_NAME&gt;</h1>
                <img className="msg-icon" src={msg_icon} alt="Message Icon" />
            </div>

            {/* Form Section */}
            <div className="form-col">
                <form action="#" method="POST">
                    
                    {/* Disable spam bots */}
                    <input type="hidden" name="_captcha" value="false" />
                    
                    {/* Redirect after success */}
                    <input type="hidden" name="_next" value="https://example.com/thank-you.html" />
                    <input type="hidden" name="_subject" value="New Message From &lt;USER_NAME&gt; Website" />
                    <label htmlFor="name">Your name</label>
                    <input type="text" name='name' placeholder='Enter your name' required />
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='Enter your email' required />
                    <label htmlFor="message">Write your message here</label>
                    <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
                </form>
            </div>

            {/* Contact Information Section */}
            <div className="contact-info">
                <p>Feel free to reach out</p>
                <ul>
                    <li>
                        <FaEnvelope />
                        <a href="mailto:example@email.com">example@email.com</a>
                    </li>
                    <li>
                        <FaPhoneAlt />
                        <a href="#">+&lt;PHONE_NUMBER&gt;</a>
                    </li>
                    <li>
                        <FaMapMarkerAlt />
                        <a
                            href="https://www.google.com/maps?q=City,Country"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            City, Country
                        </a>
                    </li>
                </ul>
            </div>

        </motion.div>
    );
};

export default Contact;
