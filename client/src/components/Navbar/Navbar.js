import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/path/to/logo.png" alt="Logo" className="logo" />
        <ul className="nav-links">
          <li><a href="#">Buy Crypto</a></li>
          <li><a href="#">Prices</a></li>
          <li><a href="#">Trade</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul className="auth-links">
          <li><a href="#">Log In</a></li>
          <li><a href="#">Sign Up</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
