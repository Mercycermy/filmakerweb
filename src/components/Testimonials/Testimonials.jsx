import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;

    const slideForword = () => {
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}% )`;
    }

    const slideBackword = () => {
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}% )`;
    }

    return (
        <div className='testimonials'>
            <img src={next_icon} className='next-btn' onClick={slideForword} alt="" />
            <img src={back_icon} className='back-btn' onClick={slideBackword} alt="" />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Akilas Amebaw</h3>
                                </div>
                            </div>
                            <p>
                                Akilas Amebaw is an Ethiopian filmmaker with 7 years of experience in TV ads, documentaries, and series production. 
                                He created the first-ever comedy-horror TV series "Tikur Ababa," bringing Ethiopian talent to the global stage.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>Akilas Amebaw</h3>
                                </div>
                            </div>
                            <p>
                                "Working on various film projects has been fulfilling, especially in showcasing Ethiopian stories globally."
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Akilas Amebaw</h3>
            
                                </div>
                            </div>
                            <p>
                                "Tikur Ababa is a milestone for Ethiopian film, blending creativity with international standards for global exposure."
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>Akilas Amebaw</h3>
                                </div>
                            </div>
                            <p>
                                "'Adrash' is an exciting new sitcom, blending comedy and suspense for an unforgettable viewing experience."
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Testimonials;
