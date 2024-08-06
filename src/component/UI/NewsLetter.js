import React from "react";
import "../../styles/newsletter.css";

const NewsLetter = () => {
  return (
    <section className='newsletter'>
      <div className='container'>
        <div className='newsletter__wrapper'>
          <div className='newsletter__content'>
            <h6 className='subtitle'>Stay Updated</h6>
            <h2>
              Uncover the <span className='highlight'>Latest Innovations</span> by Subscribing
            </h2>
          </div>
          <div className='newsletter__form'>
            <input type='email' placeholder="Enter your email" />
            <button className="secondary__btn subscribe__btn">Subscribe Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
