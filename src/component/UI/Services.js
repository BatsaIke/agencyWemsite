import React from "react";
import '../../styles/service.css';

const serviceData = [
  {
    id: 1,
    icon: "ri-apps-line",
    title: "Web Development",
    desc: "Transform your vision into reality with our expert web development services. From stunning websites to seamless e-commerce platforms, we ensure your online presence is not just effective but exceptional."
  },
  {
    id: 2,
    icon: "ri-window-2-line",
    title: "Mobile App Development",
    desc: "Unlock the power of mobile with our tailored app development solutions. Whether it’s Android, iOS, or cross-platform, we create intuitive, user-friendly apps that drive engagement and deliver results."
  },
  {
    id: 3,
    icon: "ri-mail-settings-fill",
    title: "Software Engineering",
    desc: "Streamline your operations with our robust software engineering services. We build scalable and reliable software solutions that address your unique challenges and foster growth."
  },
  {
    id: 4,
    icon: "ri-bar-chart-line",
    title: "Digital Marketing",
    desc: "Elevate your brand’s visibility and engagement with our comprehensive digital marketing strategies. From social media to content marketing, we craft campaigns that resonate with your audience and drive conversions."
  },
  {
    id: 5,
    icon: "ri-search-line",
    title: "SEO",
    desc: "Boost your online presence with our targeted SEO strategies. We optimize your website to rank higher on search engines, attract more traffic, and turn visitors into loyal customers."
  }
];

const Services = () => {
  return (
    <section id='service'>
      <div className='container'>
        <div className='services__top-content'>
          <h6 className='subtitle'>Our Services</h6>
          <h2>Save time managing your businesses</h2>
          <h2 className='highlight'>Our Best Services</h2>
        </div>
        <div className='service__item-wrapper'>
          {serviceData.map((item) => (
            <div className='services__item' key={item.id}>
              <span className='service__icon'>
                <i className={item.icon}></i>
              </span>
              <h3 className='service__title'>{item.title}</h3>
              <p className="description">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
