import React, { useEffect, useState, useContext } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png';
import ThemeContext from '../../contexts/theme'; // Adjust the path as needed
import { FaSun, FaMoon } from 'react-icons/fa'; // Icons for light and dark mode

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const { themeName, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenu((prev) => !prev);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      {/* <img src={logo} alt="Logo" className="logo" /> */}
      <h3 className="logo">Akilas Amebaw</h3>

      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>

        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About us
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={-260} duration={500}>
          Projects
          </Link>
        </li>
        <li>
          <Link to="client" smooth={true} offset={-100} duration={500}>
            Client
          </Link>
        </li>

        <li>
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={-260} duration={500} className="btn">
            Contact us
          </Link>
        </li>
      </ul>
      <div className="navbar-icons">
        <button className="theme-toggle" onClick={toggleTheme}>
          {themeName === 'light' ? <FaMoon /> : <FaSun />}
        </button>
        <img src={menu_icon} className="menu-icon" onClick={toggleMenu} alt="Menu Icon" />
      </div>
    </nav>
  );
};

export default Navbar;
