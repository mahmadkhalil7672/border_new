import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import Logo from "../../Images/Logo.png";
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar-container">



      <div className="navbar-logo">
        <Link to="/">
          <img src={Logo} alt="Bodar Logo" className="logo-img" />
        </Link>
      </div>

      <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <div className={`nav-content ${isMenuOpen ? 'open' : ''}`}>
        <div className="navbar-pill">
          <NavLink to="/" className="nav-link" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" className="nav-link" onClick={closeMenu}>About</NavLink>
                    <NavLink to="/pricing" className="nav-link" onClick={closeMenu}>Pricing</NavLink>
                                        <NavLink to="/faqs" className="nav-link" onClick={closeMenu}>Faqs</NavLink>
          <NavLink to="/capabilities" className="nav-link" onClick={closeMenu}>Capabilities</NavLink>
          <NavLink to="/partner" className="nav-link" onClick={closeMenu}>Blog</NavLink>
        </div>

        <div className="navbar-right">
          {/* <NavLink to="/help" className="nav-link" onClick={closeMenu}>Help Center</NavLink> */}
          <button className="signup-btn" onClick={() => { navigate('/contact'); closeMenu(); }}>
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;