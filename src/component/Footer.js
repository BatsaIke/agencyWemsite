import React from "react";
import "../../src/styles/footer.css";

const quickLinks01 = [
  {
    id: 1,
    path: "#",
    display: "Marketing",
  },
  {
    id: 2,
    path: "#",
    display: "Analytics",
  },
  {
    id: 3,
    path: "#",
    display: "SEO",
  },
];

const quickLinks02 = [
  {
    id: 1,
    path: "#",
    display: "Pricing",
  },
  {
    id: 2,
    path: "#",
    display: "Documentation",
  },
  {
    id: 3,
    path: "#",
    display: "Guides",
  },
];

const quickLinks03 = [
  {
    id: 1,
    path: "#about",
    display: "About",
  },
  {
    id: 2,
    path: "#careers",
    display: "Careers",
  },
  {
    id: 3,
    path: "#blog",
    display: "Blog",
  },
];

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__wrapper'>
          <div className='footer__logo'>
            <h2>TechFix</h2>
            <p className='description'>Empowering Your Digital Journey</p>
            <p className='small__text description'>
              Join us to explore the latest in technology and innovation. At TechFix, we are committed to delivering exceptional services that drive your business forward.
            </p>
          </div>
          <div className='footer__quick-links'>
            <h3 className='quick__links-title'>Solutions</h3>
            <ul className='quick__links'>
              {quickLinks01.map((itm) => (
                <li className='quick__link-item' key={itm.id}>
                  <a href={itm.path}>{itm.display}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className='footer__quick-links'>
            <h3 className='quick__links-title'>Company</h3>
            <ul className='quick__links'>
              {quickLinks02.map((itm) => (
                <li className='quick__link-item' key={itm.id}>
                  <a href={itm.path}>{itm.display}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className='footer__quick-links'>
            <h3 className='quick__links-title'>Support</h3>
            <ul className='quick__links'>
              {quickLinks03.map((itm) => (
                <li className='quick__link-item' key={itm.id}>
                  <a href={itm.path}>{itm.display}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
