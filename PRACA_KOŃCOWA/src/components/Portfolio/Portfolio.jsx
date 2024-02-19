import React, { useState } from "react";
import Navigation from '../Navigation/Navigation';
import "./Portfolio.scss";

const Portfolio = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/assets/foto1.jpg',
    '/assets/kg1.jpg',
    '/assets/kg2.jpg',
    // ...add more image paths as needed
  ];

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <>
      
    <Navigation />
      
      <div className="gallery-container">
        <img id="portfolio" src={images[currentImage]} alt={`Image ${currentImage + 1}`} />
        <div className="navigation_portfolio">
          <button onClick={prevImage}>&lt; Prev</button>
          <button onClick={nextImage}>Next &gt;</button>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
