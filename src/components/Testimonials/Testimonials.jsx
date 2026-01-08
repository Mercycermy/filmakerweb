import React, { useRef, useState } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';

import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';
import user_5 from '../../assets/user-5.png'; 
import { FaArrowCircleRight } from 'react-icons/fa';
import user_11 from '../../assets/user-11.jpg';
import user_111 from '../../assets/user-111.jpg';
import user_1111 from '../../assets/user-1111.jpg';
import user_22 from '../../assets/user-22.jpg';
import user_222 from '../../assets/user-222.jpg';
import user_2222 from '../../assets/user-2222.jpg';
import user_33 from '../../assets/user-33.jpg';
import user_333 from '../../assets/user-333.jpg';
import user_3333 from '../../assets/user-3333.jpg';
import user_44 from '../../assets/user-44.jpg';
import user_444 from '../../assets/user-444.jpg';
import user_4444 from '../../assets/user-4444.jpg';
import user_55 from '../../assets/user-55.jpg';
import user_555 from '../../assets/user-555.jpg';
import user_5555 from '../../assets/user-5555.jpg';

const testimonialsData = [
  {
    img: user_5,
    name: "Reviewer 1 — Journalist",
    description: "As a contemplative director, the director has a clear understanding of both current direction and future vision.",
    popupDetails: [
      { img: user_55 },
      { img: user_555 },
      { img: user_5555 },
     { description: "As a contemplative director, the director has a clear understanding of both current direction and future vision."}
    ]
  },
  {
    img: user_4,
    name: "Reviewer 2 — Actor",
    description: "At times, I don't fully get what they're doing, but when shown on the monitor, it absolutely impresses me.",
    popupDetails: [
      { img: user_44 },
      { img: user_444 },
      { img: user_4444 },
     { description: "At times, I don't fully get what they're doing, but when shown on the monitor, it absolutely impresses me."}
    ]
  },
  {
    img: user_3,
    name: "Reviewer 3 — Actress",
    description: "I love how the director combines folklore, social themes, and visual storytelling in their work.",
    popupDetails: [
      { img: user_33 },
      { img: user_333 },
      { img: user_3333 },
     { description: "I love how the director combines folklore, social themes, and visual storytelling in their work."}
    ]
  },
  {
    img: user_2,
    name: "Reviewer 4 — Actress",
    description: "Once the director shouted ACTION, the set came alive.",
    popupDetails: [
      { img: user_22 },
      { img: user_222 },
      { img: user_2222 },
     { description: "Once the director shouted ACTION, the set came alive."}
    ]
  },
  {
    img: user_1,
    name: "Reviewer 5 — Actor",
    description: "The director clearly knew how to align the project and the people involved.",
    popupDetails: [
      { img: user_1111 },
      { img: user_111 },
      { img: user_11 },
    {  description: "The director clearly knew how to align the project and the people."}
    ]
  }
];

const Testimonials = () => {
  const slider = useRef();
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedPopupData, setSelectedPopupData] = useState([]);
  let tx = 0;

  const slideForword = () => {
    const isMobile = window.innerWidth <= 800;
    const limit = isMobile ? -80 : -40;
    if (tx > limit) tx -= 20;
    slider.current.style.transform = `translateX(${tx}% )`;
  };

  const slideBackword = () => {
    if (tx < 0) tx += 20;
    slider.current.style.transform = `translateX(${tx}% )`;
  };

  const showPopup = (popupData) => {
    setSelectedPopupData(popupData);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className='testimonials'>
      <h1 className="testimonials-title">Words From the Artists</h1>
      <img src={next_icon} className='next-btn' onClick={slideForword} alt="Next" />
      <img src={back_icon} className='back-btn' onClick={slideBackword} alt="Back" />
      <div className="slider">
        <ul ref={slider}>
          {testimonialsData.map((item, index) => (
            <li key={index}>
              <div className="slide">
                <div className="user-info">
                  <img src={item.img} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                  </div>
                </div>
                <p>{item.description}</p>
                <button 
                  className="view-btn" 
                  onClick={() => showPopup(item.popupDetails)} 
                  aria-label="View Details"
                >
                  View
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
  
      {/* Popup for additional details */}
      {popupVisible && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content1" onClick={(e) => e.stopPropagation()}>
            <h2>More Details</h2>
            <div className="popup-details">
              {selectedPopupData.slice(0, 3).map((detail, idx) => (
                <div key={idx} className="popup-item">
                  <img src={detail.img} alt={detail.title} className="popup-image" />
                </div>
              ))}
            </div>
            <p className="popup-description">
              {selectedPopupData.find(item => item.description)?.description || "No description available"}
            </p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );  
};

export default Testimonials;
