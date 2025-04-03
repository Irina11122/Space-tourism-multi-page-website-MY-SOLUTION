import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => {
      return !prevState;
    });
  };

  return (
    <header className="navbar-container">
      <img className="logo-img" src="../../public/shared/logo.svg" alt="" />{' '}
      <img
        className="hamburger-img"
        src="../../public/shared/icon-hamburger.svg"
        alt=""
        onClick={toggleMenu}
      />
      <nav className={`navbar-nav ${isMenuOpen ? 'active' : ''}`}>
        <img
          onClick={toggleMenu}
          className="close-icon"
          src="../../public/shared/icon-close.svg"
          alt=""
        />
        <Link className="nav_link" to="/">
          <span>00</span> HOME
        </Link>
        <Link className="nav_link" to="/destination">
          <span>01</span> DESTINATION
        </Link>
        <Link className="nav_link" to="/crew">
          <span>02</span> CREW
        </Link>
        <Link className="nav_link" to="/technology">
          <span>03</span> TECHNOLOGY
        </Link>
      </nav>
    </header>
  );
}
