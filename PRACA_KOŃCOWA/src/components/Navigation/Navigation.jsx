import React from 'react';
import { Link } from 'react-router-dom';
import "./Navigation.scss";

const Navigation = () => (
 <div className='Nav-div'>
 <nav>
      <ul className='Ul-nav'>
          <img src="/assets/logo.jpg" alt="" className="logo" />
            <li><Link to="/about-me">About Me</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
      </ul>
  </nav>
  </div>
);

export default Navigation;
