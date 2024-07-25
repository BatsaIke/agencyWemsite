import React from "react";
import "../../styles/testimonials.css";
import ava01 from "../../images/ava-1.jpg";
import ava02 from "../../images/ava-2.jpg";
import ava03 from "../../images/ava-3.jpg";
import Slider from "react-slick";

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  return (
    <section>
      <div className='container'>
        <div className='slider__content-top'>
          <h6 className='subtitle'>Testimonials</h6>
          <h2>
            Trusted by more than{" "}
            <span className='highlight'>5,000 customers</span>
          </h2>
        </div>
        <div className='slider__wrapper'>
          <Slider {...settings}>
            {/* FIRST SLIDER */}
            <div className='slider__item'>
              <p className='description'>
                "Working with Techfix was a game-changer for our business. Their expertise in digital marketing and web development helped us achieve a significant increase in online engagement and sales."
              </p>
              <div className='customer__details'>
                <div className='customer__img'>
                  <img src={ava01} alt='John Doe' />
                </div>
                <div>
                  <h5 className='customer__name'>Jane Smith</h5>
                  <p className='description'>Founder & CEO, Innovate Co.</p>
                </div>
              </div>
            </div>
            {/* SECOND SLIDER */}
            <div className='slider__item'>
              <p className='description'>
                "The team at Techfix exceeded our expectations with their innovative solutions and excellent customer support. Our website looks fantastic and performs flawlessly."
              </p>
              <div className='customer__details'>
                <div className='customer__img'>
                  <img src={ava02} alt='Michael Johnson' />
                </div>
                <div>
                  <h5 className='customer__name'>Michael Johnson</h5>
                  <p className='description'>Marketing Director, TechWave</p>
                </div>
              </div>
            </div>
            {/* THIRD SLIDER */}
            <div className='slider__item'>
              <p className='description'>
                "Techfix's attention to detail and commitment to delivering high-quality results have been instrumental in our company's growth. Highly recommend their services."
              </p>
              <div className='customer__details'>
                <div className='customer__img'>
                  <img src={ava03} alt='Sarah Lee' />
                </div>
                <div>
                  <h5 className='customer__name'>Sarah Lee</h5>
                  <p className='description'>Product Manager, NextGen Solutions</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
