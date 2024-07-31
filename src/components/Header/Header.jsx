import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <navbar className="navbar">
      <div className="logo-container">
        <div className="logo">
          <img src="/images/logo.svg" alt="logo" />
        </div>
        <div className="logo-header">
          <h4>Sourabh Rawat</h4>
          <h5>Developer</h5>
        </div>
      </div>
      <div className="nav-items">
        <div className="nav-item">
          <span className="line"></span>
          <Link to="/">Home</Link>
        </div>
        <div className="nav-item">
          <span className="line"></span>
          <Link to="/projects">Projects</Link>
        </div>
        <div className="nav-item">
          <span className="line"></span>
          <Link to="/about">About</Link>
        </div>
        {/* <div className="nav-item">
          <span className="line"></span>
          <Link to="/blog">Blog</Link>
        </div> */}
        <div className="nav-item">
          <span className="line"></span>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="social-in-nav">
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-x-twitter"></i>
        <i className="fa-brands fa-linkedin-in"></i>
      </div>
    </navbar>
  );
};

export default Header;
