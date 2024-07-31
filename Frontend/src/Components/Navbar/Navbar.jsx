import React, { useState } from 'react';
import './Navbar.css';
import logo from '/Images/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navDiv">
      <div className="navLogo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={isOpen ? "line line1 open" : "line line1"}></div>
        <div className={isOpen ? "line line2 open" : "line line2"}></div>
        <div className={isOpen ? "line line3 open" : "line line3"}></div>
      </div>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <ul className="navItems">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/features">Features</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <ul className={isOpen ? "authentication open" : "authentication"}>
        <li><a href="login" className='loginBtn'><i class="fa-solid fa-user"></i> Login</a></li>
        <li><a href="signup" className='signupBtn'>Sign up</a></li>
      </ul>
      </div>
    </div>
  );
}

export default Navbar;


      