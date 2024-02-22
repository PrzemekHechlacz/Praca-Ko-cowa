import React, {useState} from "react";
import "./ArrangeServices.scss"
import { Link } from 'react-router-dom';



const ArrangeServices = () => {


return (
        <>
<div className="section-div">
        
            <h1 className="h1-section">FOTOGRAFIA I FILMY Z DRONA</h1>
        <p className="p-section">Profesjonalne usługi z drona dla firm i instytucji oraz osób prywatnych, między innymi fotografia i filmowanie <br/>z powietrza budów, terenów inwestycyjnych, obiektów <br/>i terenów zielonych, inspekcje budowlane i wiele innych!</p>
        <nav> 
        <ul>
           <li className="li-arrange">
           <Link to="/link-arrange"><button className="btn-arrange">zamów usługę</button></Link>
           </li>
       </ul>
      </nav>
</div>
         </>
    )
    }

export default ArrangeServices