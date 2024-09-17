import React from "react";
import "../../styles/contactUs.css";

const ContactUs = () => {
  return (
    <section className="contact">
      <div className="container">
        <h2 className="contact__title">Contact Us</h2>
        <p className="contact__description">
          We'd love to hear from you! Whether you have a question about services, pricing, or anything else, our team is ready to answer all your questions.
        </p>
        <div className="contact__info">
          <div className="contact__item">
            <h3>Phone</h3>
            <p>
              <a href="tel:+233543869957" className="contact__link">
                +233 543 869 957
              </a>
            </p>
          </div>
          <div className="contact__item">
            <h3>Email</h3>
            <p>
              <a href="mailto:techfixghana@gmail.com" className="contact__link">
                techfixghana@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
