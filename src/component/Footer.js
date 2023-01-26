import React from "react";

import "../../src/styles/footer.css";
const quikLinks01 = [
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

const quikLinks02 = [
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

const quikLinks03 = [
  {
    id: 1,
    path: "#abount",
    display: "About",
  },
  {
    id: 2,
    path: "#job",
    display: "Job",
  },
  {
    id: 3,
    path: "#blog",
    display: "Blog",
  },
];
export const Footer = () => {
    // const date= new Date().getFullYear().toLocaleString()
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__wrapper'>
          <div className='footer__logo'>
            <h2>Digency</h2>
            <p className='description'>Grow with us</p>
            <p className='small__text description'>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              nesciunt enim sunt aliquid, libero hic repellendus. Nisi quae
              nostrum vero aut doloribus illum quidem quas beatae labore, ipsam
              aliquam suscipit.
            </p>
          </div>
          <div className='footer__quick-links'>
            <h3 className='quick__links-title'>Solutions</h3>
            <ul className='quick__links'>
              {quikLinks01.map((itm) => (
                <li className='quick__link-item' key={itm.id}>
                  <a href={itm.path}>{itm.display}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className='footer__quick-links'>
            <h3 className='quick__links-title'>Company</h3>
            <ul className='quick__links'>
              {quikLinks02.map((itm) => (
                <li className='quick__link-item' key={itm.id}>
                  <a href={itm.path}>{itm.display}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className='footer__quick-links'>
            <h3 className='quick__links-title'>Support</h3>
            <ul className='quick__links'>
              {quikLinks03.map((itm) => (
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
