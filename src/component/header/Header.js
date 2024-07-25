import React, { useEffect, useRef, useState } from "react";
import "./header.css";
import logo from "../../images/Techfix_Logo_Blue.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faBars } from '@fortawesome/free-solid-svg-icons';

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
  const [isNavOpen, setIsNavOpen] = useState(false);
  const headerRef = useRef(null);

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
    const location = document.querySelector(targetAttr).offsetTop;
    window.scrollTo({
      left: 0,
      top: location - 80,
    });
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className={`header ${theme}`}>
      <div className='container'>
        <div className='nav__wrapper'>
          <div className='logo'>
            <img src={logo} alt="Logo" />
          </div>
          {/* Mobile hamburger icon */}
          <FontAwesomeIcon icon={faBars} className="hamburger-icon" onClick={toggleNav} />
          {/* =========navigation =======*/}
          <div className={`navigation ${isNavOpen ? 'open' : ''}`}>
            <ul className='menu'>
              {nav_links.map((item, index) => (
                <li className='menu_item' key={index}>
                  <a href={item.path} onClick={handleClick} className='menu__link'>
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* ============light mode========== */}
          <div className='light__mode'>
            <span onClick={toggleTheme}>
              {theme === "light-theme" ? (
                <span>
                  <FontAwesomeIcon icon={faMoon} /> Dark Mode
                </span>
              ) : (
                <span>
                  <FontAwesomeIcon icon={faSun} /> Light Mode
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
