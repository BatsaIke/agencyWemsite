import React, { useEffect, useRef } from "react";
import "./header.css";

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
  return (
    <header className='header' ref={headerRef}>
      <div className='container'>
        <div className='nav__wrapper'>
          <div className='logo'>
            <h2>Digency</h2>
            {/* <p>Grow with us</p> */}
          </div>
          {/* =========navigation =======*/}
          <div className='navigation'>
            <ul className='menu'>
              {nav_links.map((item, index) => (
                <li className='menu_item' key={index}>
                  <a href={item.path} 
                  onClick={handleClick}
                  className='menu__link'>
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
                  <i class='ri-moon-line'></i>Dark Mode
                </span>
              ) : (
                <span>
                  <i class='ri-sun-line'> </i>Light Mode
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
