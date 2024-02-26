import React, {useState} from "react";
import "./ArrangeServices.scss"
import { Link } from 'react-router-dom';



const ArrangeServices = () => {


return (
        <>
<div className="section-div">
    <h1 className="h1-section">FOTOGRAFIA I FILMY Z DRONA</h1>
            <p className="p-section">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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