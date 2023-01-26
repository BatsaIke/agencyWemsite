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
    slidesShow: 1,
    sledesTOScrool: 1,
    swipeTOSLide: true,
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci harum, nemo debitis, libero dolorum accusamus earum ut
                quidem eos recusandae commodi impedit natus corrupti iusto.
                Eveniet voluptatem tempore, sint ratione odio et harum quod
                ducimus deserunt non est, maiores dolor.
              </p>
              <div className='customer__details'>
                <div className='customer__img'>
                  <img src={ava01} alt={ava01} />
                </div>
                <div>
                  <h5 className='customer__name'>John Doe</h5>
                  <p className='description'>CEO, Walkintop</p>
                </div>
              </div>
            </div>
            {/* SECOND SLIDER */}
            <div className='slider__item'>
              <p className='description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci harum, nemo debitis, libero dolorum accusamus earum ut
                quidem eos recusandae commodi impedit natus corrupti iusto.
                Eveniet voluptatem tempore, sint ratione odio et harum quod
                ducimus deserunt non est, maiores dolor.
              </p>
              <div className='customer__details'>
                <div className='customer__img'>
                  <img src={ava02} alt={ava02} />
                </div>
                <div>
                  <h5 className='customer__name'>Sissi Deo</h5>
                  <p className='description'>GM, TC Holdings</p>
                </div>
              </div>
            </div>
            {/* THORD SLIDER */}
            <div className='slider__item'>
              <p className='description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci harum, nemo debitis, libero dolorum accusamus earum ut
                quidem eos recusandae commodi impedit natus corrupti iusto.
                Eveniet voluptatem tempore, sint ratione odio et harum quod
                ducimus deserunt non est, maiores dolor.
              </p>
              <div className='customer__details'>
                <div className='customer__img'>
                  <img src={ava03} alt='ava03' />
                </div>
                <div>
                  <h5 className='customer__name'>Ogboo Nana</h5>
                  <p className='description'>Researc, Pantang</p>
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
