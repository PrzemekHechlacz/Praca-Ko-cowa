import React from 'react';
import Navigation from '../Navigation/Navigation';
import Carousel from '../Carousel/Carousel';
import ArrangeServices from '../ArrangeServices/ArrangeServices';
import PlanTrening from '../PlanTrening/PlanTrening';
import Footer from '../Footer/Footer';
import "./FirstPage.scss"




const FirstPage = () => (
<>
    <Navigation />
    <h1 className='h1-first'>Fotografia oraz Filmy z Drona – Portfolio✔
    <p>Wrocław i Okolice – Profesjonalna i Szybka Realizacja</p> </h1>
    <Carousel />
    <ArrangeServices />
    <PlanTrening />
    <Footer />

   

  </>
);

export default FirstPage;
