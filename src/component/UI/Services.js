import React from "react";
 import '../../styles/service.css'

 const serviceData = [
   {
     id: 1,
     icon: "ri-apps-line",
     title: "Web Development",
     desc: "Proficient in anything concerning mobile app development from start to testing and hosting on all profesional platforms",
   },
   {
     id: 2,
     icon: "ri-window-2-line",
     title: "Mobile app Development",
     desc: "Proficient in anything concerning mobile app development from start to testing and hosting on all profesional platforms",
   },
   {
     id: 3,
     icon: "ri-mail-settings-fill",
     title: "Engineering",
     desc: "Proficient in anything concerning mobile app development from start to testing and hosting on all profesional platforms",
   },
 ];
const Services = () => {
  return (
    <section id='service'>
      <div className='container'>
        <div className='services__top-content'>
          <h6 className='subtitle'> Our Services</h6>
          <h2>Save time managing your businesses</h2>
          <h2 className='highlight'>Our Best Services </h2>
        </div>
        <div className='service__item-wrapper'>
          {serviceData.map((item) => (
            <div className='services__item' key={item.id}>
              <span className='service__icon'>
                <i class={item.icon}></i>
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
