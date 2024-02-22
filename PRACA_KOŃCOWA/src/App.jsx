import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AboutMe from "./components/AboutMe/AboutMe";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import FirstPage from './components/FirstPage/FirstPage';
import LinkTrening from './components/LinkTrening/LinkTrening';
import LinkArrange from './components/LinkArrange/LinkArrange';


const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<FirstPage />} />
      <Route path="/link-arrange" element={<LinkArrange/>} />
       <Route path="/link-trening" element={<LinkTrening />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
       
      </Routes>
    </Router>
  );
};

export default App;
