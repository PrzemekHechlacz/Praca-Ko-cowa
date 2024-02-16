import React, {useState} from "react";
import "./ArrangeServices.scss"
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';


const ArrangeServices = () => {


return (
        <>
<div className="section-div">
        <img src="/assets/foto-sekcja.jpg" alt="" className="foto-section" />
            <h1 className="h1-section">FOTOGRAFIA I FILMY Z DRONA</h1>
        <p className="p-section">Profesjonalne usługi z drona dla firm i instytucji oraz osób prywatnych, między innymi fotografia i filmowanie z powietrza budów, terenów inwestycyjnych, obiektów i terenów zielonych, inspekcje budowlane i wiele innych!</p>
        <nav> 
        <ul>
           <li className="li-arrange">
           <Link to="/link-arrange"><Button label="Sprawdź wolne terminy" icon="pi pi-check" size="large" className="btn-arrange" /></Link>
           </li>
       </ul>
      </nav>
</div>
         </>
    )
    }

export default ArrangeServices