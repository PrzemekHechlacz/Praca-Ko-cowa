import React from "react"
import "./PlanTrening.scss"
import { Link } from 'react-router-dom';


const PlanTrening = () => {
    return (
        <>
<div className="trening-div">
       
            <h1 className="h1-section-trening">UMÓW SIĘ NA SZKOLENIE</h1>
        <p className="p-section-trening">Moje szkolenia są dostosowane zarówno dla początkujących, którzy dopiero planują zakup pierwszego drona, jak i dla pilotów dronów poszukujących doskonalenia swoich umiejętności.</p>
       <nav> 
         <ul>
            <li className="li-trening">
            <Link to="/link-trening"><button className="btn-trening">umów szkolenie</button></Link>
            </li>
        </ul>
       </nav>
</div>
         
         </>
    )
}

export default PlanTrening