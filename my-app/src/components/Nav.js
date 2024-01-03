import React from 'react';
import { Link } from 'react-scroll';

import './Styles/Nav.css'; 

const Nav = () => {
  return (
    <div id = "nav" className="navbar">
      <div className="logo">
          <b>JNS</b>
      </div>
      <div className="nav-links">
      <Link to="nav" smooth={true} duration={500}>Home</Link>
      <Link to="skills" smooth={true} duration={500}>Skills</Link>
      <Link to="experience" smooth={true} duration={500}>Experience</Link>
      <Link to="projects" smooth={true} duration={500}>Projects</Link>
      <Link to="blogs" smooth={true} duration={500}>Blogs</Link>
      </div>
      <div className="icons">
        <div className="connect-icon">
          <button className='connect-btn' >Connect</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
