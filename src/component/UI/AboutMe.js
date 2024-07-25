import React from "react";
import "../../styles/aboutme.css";
import aboutMe from "../../images/about-us.jpg";

const chooseUsData = [
  {
    id: 1,
    icon: "ri-code-line",
    title: "Custom Web Development",
    desc: "We build tailor-made web solutions that deliver exceptional user experiences and drive business growth.",
  },
  {
    id: 2,
    icon: "ri-mobile-line",
    title: "Mobile App Development",
    desc: "Our end-to-end mobile app development services have helped clients launch successful apps on multiple platforms.",
  },
  {
    id: 3,
    icon: "ri-seo-line",
    title: "Digital Marketing & SEO",
    desc: "We provide comprehensive digital marketing strategies, including SEO, to boost our clients' online presence and attract targeted traffic.",
  },
];

const AboutMe = () => {
  return (
    <section id='about'>
      <div className='container'>
        <div className='about__wrapper'>
          <div className='about__content'>
            <h6 className='subtitle'>About Us</h6>
            <h2>We specialize in</h2>
            <h2 className='highlight'>Innovative Digital Solutions</h2>
            <p className='description'>
              With years of experience in the industry, we have successfully delivered custom web development, mobile app development, and digital marketing solutions that have helped our clients achieve their business goals.
            </p>

            <div className='about__us-wrapper'>
              {chooseUsData.map((item) => (
                <div className='choose_us-item' key={item.id}>
                  <span className='choose__us-icon'>
                    <i className={item.icon}></i>
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
            <img src={aboutMe} alt="About Us" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
