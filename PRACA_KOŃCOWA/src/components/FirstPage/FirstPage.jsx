import React from 'react';
import Carousel from '../Carousel/Carousel';
import ArrangeServices from '../ArrangeServices/ArrangeServices';
import PlanTrening from '../PlanTrening/PlanTrening';
import Footer from '../Footer/Footer';
import MenuNav from '../MenuNav/MenuNav';
import Weather from '../Wather/Weather';
import "./FirstPage.scss"




const FirstPage = () => (
<>


    <MenuNav/>
        <h1 className='First-h1'>PROFESJONALNE SZKOLENIA, FOTOGRAFIA I FILMY Z DRONA
        <br/> <br/> ZAPRASZAM DO WSPÓŁPRACY </h1>
    <Carousel />
    <ArrangeServices />
    <Weather />
    <PlanTrening />
    <Footer />
    
</>
);

export default FirstPage;
