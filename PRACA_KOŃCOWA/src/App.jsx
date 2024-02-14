import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AboutMe from "./components/AboutMe/AboutMe";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";


const Navigation = () => (
  <nav>
    <ul>
      <li><Link to="/about-me">About Me</Link></li>
      <li><Link to="/portfolio">Portfolio</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
);

const FirstPage = () => (
  <div>
    <Navigation />
    <p>shhshshs</p>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<FirstPage />} />
      </Routes>
    </Router>
  );
};

export default App;
