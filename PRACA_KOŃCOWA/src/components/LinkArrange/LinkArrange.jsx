import React, { useState } from 'react';
import "./LinkArrange.scss";
import CalendarArrange from "../CalendarArrange/CalendarArrange";



const LinkArrange = () => {
  const [isCalendarVisible, setCalendarVisible] = useState(false);
  const [isGifVisible, setGifVisible] = useState(false);

  const openCalendar = () => {
    setTimeout(() => {
      setGifVisible(true);
      setTimeout(() => {
        setGifVisible(false);
        setCalendarVisible(true);
      }, 4800); // Czas trwania animacji GIF
    }, 800); // Opóźnienie przed rozpoczęciem animacji GIF
  };
 
  return (
    <>
    {isGifVisible && 
      <div style={{position: 'fixed', top: 0, left: 0, height: '100vh', width: '100vw', zIndex: 9999, background: `url(https://cdn.dribbble.com/users/3514558/screenshots/12813133/media/42dcba4e6548f607c4eea2ba9eb79745.gif) center / cover no-repeat`}}></div>
    }
      {isCalendarVisible ? <CalendarArrange/> :
      <div className="Link-Arrange">
        <span className="span-arrange1"><span className="span-arrange2"></span></span>
        <div className="wrap">
          <a href="#" className="a-arrange" id="first-link"><div></div></a>
          <a href="#" className="a-arrange"><div></div></a>
          <a href="#" className="a-arrange"><div></div></a>
          <a href="#" className="a-arrange"><div></div></a>
          <a href="#" className="a-arrange">
            <div>
              <button className="Calendar_button" onClick={openCalendar}></button>
            </div>
          </a>
        </div>
      </div>}
    </>
  );
};

export default LinkArrange;

