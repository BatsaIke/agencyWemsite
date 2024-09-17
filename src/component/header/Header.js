import React, { useEffect, useRef, useState } from "react";
import "./header.css";
import logo from "../../images/Techfix_Logo_Blue.png"; 
import logolight from "../../images/Techfix_Logo_White.png"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; // Import the hamburger icon

const nav_links = [
  {
    path: "#home",
    display: "Home",
  },
  {
    path: "#about",
    display: "About",
  },
  {
    path: "#contact",
    display: "Contact Us",
  },
  {
    path: "#service",
    display: "Services",
  },
  {
    path: "#projects",
    display: "Projects",
  },
  {
    path: "#blog",
    display: "Blog",
  },
];

const Header = ({ theme, toggleTheme }) => {
  const headerRef = useRef(null);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const headerFunt = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add("header__shrink");
    } else {
      headerRef.current.classList.remove("header__shrink");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunt);
    return () => window.removeEventListener("scroll", headerFunt);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const targetAttr = e.target.getAttribute("href");
  
    if (window.location.pathname !== "/") {
      window.location.href = "/" + targetAttr;
    } else {
      const location = document.querySelector(targetAttr).offsetTop;
      window.scrollTo({
        left: 0,
        top: location - 80,
        behavior: "smooth",
      });
    }

    // Close the mobile menu after navigating
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen); // Toggle mobile menu
  };

  return (
    <header className={`header ${theme}`} ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper">
         

          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>

          <div className="logo">
            <img src={theme === "light-theme" ? logolight : logo} alt="Logo" />
          </div>

          {/* Mobile Menu */}
          <div className={`mobile-menu ${theme} ${isMenuOpen ? 'open' : ''}`}>
            <div className="mobile-logo">
              <img src={theme === "light-theme" ? logolight : logolight} alt="Mobile Logo" />
            </div>
            {/* Contact Number below the logo (only for mobile) */}
            {/* <div className="mobile-contact">
              <a href="tel:+233543869957">+233543869957</a>
            </div> */}
            <ul className="menu">
              {nav_links.map((item, index) => (
                <li className="menu_item" key={index}>
                  <a href={item.path} 
                    onClick={handleClick}
                    className="menu__link">
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Theme Toggle */}
          <div className="light__mode">
            <span onClick={toggleTheme}>
              {theme === "light-theme" ? (
                <span>
                  <i className="ri-moon-line"></i>Dark Mode
                </span>
              ) : (
                <span>
                  <i className="ri-sun-line"></i>Light Mode
                </span>
              )}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
