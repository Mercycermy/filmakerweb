import React, { useRef, useState } from 'react';
import './Contact.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

import msg_icon from '../../assets/msg-icon.png';
import white_arrow from '../../assets/white-arrow.png';
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';

const Contact = () => {
    const [result, setResult] = useState("");
    const form = useRef();

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");

        emailjs.sendForm(
            'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
            'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
            form.current,
            'YOUR_USER_ID' // Replace with your EmailJS user ID
        ).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setResult("Form Submitted Successfully");
            event.target.reset();
        }).catch((error) => {
            console.error('FAILED...', error);
            setResult("An error occurred. Please try again later.");
        });
    };

    return (
        <motion.div
            className='contact'>
            {/* Title and Image Section */}
            <div className="contact-header">
                <h1 className="contact-title">Contact Akilas Amebaw</h1>
                <img className="msg-icon" src={msg_icon} alt="Message Icon" />
            </div>

            {/* Form Section */}
            <div className="form-col">
                <form ref={form} onSubmit={onSubmit}>
                    <label htmlFor="name">Your name</label>
                    <input type="text" name='user_name' placeholder='Enter your name' required />
                    <label htmlFor="email">Email</label>
                    <input type="email" name='user_email' placeholder='Enter your email' required />
                    <label htmlFor="message">Write your message here</label>
                    <textarea name="message" rows="6" placeholder='Enter your message'></textarea>
                    <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>

            {/* Contact Information Section */}
            <div className="contact-info">
                <p>Feel free to reach out</p>
                <ul>
                    <li>
                        <FaEnvelope />
                        <a href="mailto:akilasamebaw@gmail.com">akilasamebaw@gmail.com</a>
                    </li>
                    <li>
                        <FaPhoneAlt />
                        <a href="tel:+251941525051">0941525051</a>
                    </li>
                    <li>
                        <FaMapMarkerAlt />
                        <a
                            href="https://www.google.com/maps?q=Addis+Ababa,+Ethiopia"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ethiopia, Addis Ababa
                        </a>
                    </li>
                </ul>
            </div>

        </motion.div>
    );
};

export default Contact;
