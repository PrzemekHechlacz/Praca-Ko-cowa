import React from 'react';
import Carousel from '../Carousel/Carousel';
import ArrangeServices from '../ArrangeServices/ArrangeServices';
import PlanTrening from '../PlanTrening/PlanTrening';
import Footer from '../Footer/Footer';
import MenuNav from '../MenuNav/MenuNav';
import "./FirstPage.scss"




const FirstPage = () => (
<>
    <MenuNav/>
    <Carousel />
    <ArrangeServices />
    <PlanTrening />
    <Footer />

   

  </>
);

export default FirstPage;
