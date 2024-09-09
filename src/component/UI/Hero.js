import React from "react";
import { useNavigate } from 'react-router-dom';
import "../../styles/hero.css";
import lightImg from '../../images/light-hero-bg.jpg';
import heroDarkImg from "../../images/hero-img.png";

const Hero = ({ theme }) => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/digital-marketing');
  };

  return (
    <section className='hero__section' id="home">
      <div className='container'>
        <div className='hero__wrapper'>
          <div className='hero__content'>
            <div>
              <h2>Innovative Digital Solutions</h2>
              <h2>To Elevate Your</h2>
              <h2 className='highlight'>Business Growth</h2>
            </div>
            <p className='description'>
              Partner with us to develop cutting-edge mobile apps and digital platforms that enhance your brand's presence and drive success. Join us and experience a transformation in your digital journey.
            </p>
            <div className='hero__btns'>
              <button className='primary__btn' onClick={handleGetStartedClick}>Digital Marketing</button>
              <button className='secondary__btn'>Software Engineering</button>
            </div>
          </div>
          <div className='hero__img'>
            <img src={theme === 'light-theme' ? lightImg : heroDarkImg} alt='heroImg' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
