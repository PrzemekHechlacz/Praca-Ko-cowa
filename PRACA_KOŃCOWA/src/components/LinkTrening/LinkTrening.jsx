import React from "react"
import "./LinkTrening.scss"
import CalendarTrening from "../CalendarTrening/CalendarTrening"



const LinkTrening = () => {
    return (
        <>
        <CalendarTrening />
        <div className="Link-Trening">
        <span className="span-trening1"><span className="span-trening2"></span></span>
        <div class="wrap">
          <a href="#" className="a-trening"><div></div></a>
          <a href="#" className="a-trening"><div></div></a>
          <a href="#" className="a-trening"><div></div></a>
          <a href="#" className="a-trening"><div></div></a>
          <a href="#" className="a-trening"><div></div></a>
        </div>
        </div>
         </>
    )
}

export default LinkTrening