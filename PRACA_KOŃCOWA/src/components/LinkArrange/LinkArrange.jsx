import "./LinkArrange.scss"
import { useState } from 'react';
import CalendarArrange from "../CalendarArrange/CalendarArrange";

const LinkArrange = () => {
 

  return (
    <>
      < CalendarArrange />
      <div className="Link-Arrange">
        <span className="span-arrange1"><span className="span-arrange2"></span></span>
        <div class="wrap">
          <a href="#" className="a-arrange"><div></div></a>
          <a href="#" className="a-arrange"><div></div></a>
          <a href="#" className="a-arrange"><div></div></a>
          <a href="#" className="a-arrange"><div></div></a>
          <a href="#" className="a-arrange"><div></div></a>
        </div>
      </div>
    </>
  )
}

export default LinkArrange
