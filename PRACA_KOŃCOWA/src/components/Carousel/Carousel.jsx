import React, {useEffect, useState} from 'react';
import ".//Carousel.scss"

const Carousel = () => {

    const [docWidth, setDocWidth] = useState(document.body.clientWidth);

    useEffect(() => {
      const handleResize = () => {
        setDocWidth(document.body.clientWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    const handleMouseMove = (e) => {
      const mouseX = e.pageX;
      const rotate = (mouseX * 360) / docWidth;
  
      const images = document.getElementById('imgs');
      if (images) {
        images.style.transform = `rotate3d(0,1,0,${-rotate}deg)`;
      }
    };
  
    useEffect(() => {
      document.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }, [docWidth]);

  return (
    <div id="imgs">
      <img src="/assets/kg1.jpg" alt="1" />
      <img src="/assets/kg2.jpg" alt="2" />
      <img src="/assets/kg3.jpg" alt="3" />
      <img src="/assets/kg12.jpg" alt="12" />
      <img src="/assets/kg13.jpg" alt="13" />
      <img src="/assets/kg6.jpg" alt="6" />
      <img src="/assets/kg7.jpg" alt="7" />
      <img src="/assets/kg8.jpg" alt="8" />
      <img src="/assets/kg9.jpg" alt="9" />
      <img src="/assets/kg10.jpg" alt="10" />
      <img src="/assets/kg11.jpg" alt="11" />
  </div>
  );
};

export default Carousel;
