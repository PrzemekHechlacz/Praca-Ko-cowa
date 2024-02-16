import React from "react"
import "./PlanTrening.scss"
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';


const PlanTrening = () => {
    return (
        <>
<div className="trening-div">
        <img src="/assets/foto1.jpg" alt="" className="foto-section-trening" />
            <h1 className="h1-section-trening">UMÓW SIĘ NA SZKOLENIE</h1>
        <p className="p-section-trening">Moje szkolenia są dostosowane zarówno dla początkujących, którzy dopiero planują zakup pierwszego drona, jak i dla pilotów dronów poszukujących doskonalenia swoich umiejętności.</p>
       <nav> 
         <ul>
            <li className="li-trening">
            <Link to="/link-trening"><Button label="Umów szkolenie" icon="pi pi-check" size="large" className="btn-trening" /></Link>
            </li>
        </ul>
       </nav>
</div>
         
         </>
    )
}

export default PlanTrening