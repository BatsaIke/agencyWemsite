import React from "react";

import "../../styles/aboutme.css";
import aboutMe from "../../images/about-us.jpg";
const chooseUsData = [
  {
    id: 1,
    icon: "ri-home-wifi-line",
    title: "First working process",
    desc: "Proficient in anything concerning mobile app development from start to testing and hosting on all profesional platforms",
  },
  {
    id: 2,
    icon: "ri-group-line",
    title: "Dedicated team",
    desc: "Proficient in anything concerning mobile app development from start to testing and hosting on all profesional platforms",
  },
  {
    id: 3,
    icon: "ri-customer-service-fill",
    title: "24/7 Hours support",
    desc: "Proficient in anything concerning mobile app development from start to testing and hosting on all profesional platforms",
  },
];
const AboutMe = () => {
  return (
    <section id='about'>
      <div className='container'>
        <div className='about__wrapper'>
          <div className='about__content'>
            <h6 className='subtitle'>About Me</h6>
            <h2>Specialist in avoiding clients on</h2>
            <h2 className='highlight'>Financial Challenges</h2>
            <p className='description'>
              Proficient in anything concerning mobile app development from
              start to testing and hosting on all profesional platforms
            </p>

            <div className='about__us-wrapper'>
              {chooseUsData.map((item) => (
                <div className='choose_us-item' key={item.id}>
                  <span className='choose__us-icon'>
                    <i class={item.icon}></i>
                  </span>
                  <div>
                    <h4 className='choose__us-title'>{item.title}</h4>
                    <p className='description'>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='about__img'>
            <img src={aboutMe} alt={aboutMe}  />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
