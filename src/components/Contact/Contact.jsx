import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

import msg_icon from '../../assets/msg-icon.png';
import white_arrow from '../../assets/white-arrow.png';
import { motion } from "framer-motion";

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
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
                <form onSubmit={onSubmit}>
                    <label htmlFor="">Your name</label>
                    <input type="text" name='name' placeholder='Enter your name' required />
                    <label htmlFor="">Phone Number</label>
                    <input type="tel" name='phone' placeholder='Enter your mobile number' required />
                    <label htmlFor="">Write your message here</label>
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
                        <a href="tel:+251941525061">+251 94 152 5061</a>
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
