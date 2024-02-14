import React from 'react';
import { Link } from 'react-router-dom';
import "./Navigation.scss";

const Navigation = () => (
 <div >
  <nav>
    <ul>
      <li><Link to="/about-me">About Me</Link></li>
      <li><Link to="/portfolio">Portfolio</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
  </div>
);

export default Navigation;
