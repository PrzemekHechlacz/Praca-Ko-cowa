import React from "react"
import "./PlanTrening.scss"
import { Link } from 'react-router-dom';


const PlanTrening = () => {
    return (
        <>
<div className="trening-div">
       
            <h1 className="h1-section-trening">UMÓW SIĘ NA SZKOLENIE</h1>
        <p className="p-section-trening">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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