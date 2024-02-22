import React, { useState} from "react";
import "./Portfolio.scss"; // załóżmy, że styles.css został zmieniony na Gallery.css
import MenuNav from "../MenuNav/MenuNav"

const Portfolio = () => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
 

  const showNextImg = () => {
    setCurrentImgIndex((prevIndex) =>
      prevIndex === thumbnails.length - 1 ? 0 : prevIndex + 1
    );
  };

  const thumbnails = [
    "/assets/foto-sekcja.jpg",
    '/assets/kg1.jpg',
    '/assets/kg3.jpg',
    '/assets/kg5.jpg',
    '/assets/kg6.jpg',
    '/assets/kg7.jpg',
    '/assets/kg8.jpg',
    '/assets/kg9.jpg',
    '/assets/kg10.jpg',
    '/assets/kg11.jpg',
    
  ];

  const showPreviousImg = () => {
    setCurrentImgIndex((prevIndex) =>
      prevIndex === 0 ? thumbnails.length - 1 : prevIndex - 1
    );
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const showPopup = (index) => {
    setCurrentImgIndex(index);
    setIsPopupOpen(true);
  };

  return (
    <div>
    <MenuNav />
    
    
    <div className="portfolio-container">
      <h1 className="portfolio-h1">Galeria lotów</h1>
      <ul className="gallery">
        {thumbnails.map((src, index) => (
          <li key={src} className="thumbnail">
            <img className="PortfolioImg" id="PortfolioImg"
              tabIndex="0"
              src={src}
              alt=""
              onClick={() => showPopup(index)}
              onKeyDown={(e) => e.key === "Enter" && showPopup(index)}
            />
          </li>
        ))}
      </ul>
      {isPopupOpen && (
        <div className="popup">
          <button
            aria-label="Zamknij popup"
            className="popup__close"
            onClick={closePopup}
          >
            X
          </button>
          <img src={thumbnails[currentImgIndex]} alt="" className="popup__img" />
          <button
            aria-label="Poprzednie zdjęcie"
            className="popup__arrow popup__arrow--left"
            onClick={showPreviousImg}
          >
            {"<"}
          </button>
          <button
            aria-label="Następne zdjęcie"
            className="popup__arrow popup__arrow--right"
            onClick={showNextImg}
          >
            {">"}
          </button>
        </div>
      )}
    </div>
    </div>
    
  );
};

export default Portfolio;
