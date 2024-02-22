import React, {useEffect, useState} from 'react';
import ".//Carousel.scss"

const Carousel = () => {

    const [docWidth, setDocWidth] = useState(document.body.clientWidth);
    

    useEffect(() => {
      const images = document.getElementById('imgs');
      
      const handleMouseEnter = (e) => {
        const mouseX = e.pageX;
        const rotate = (mouseX * 360) / (docWidth * 2);
      
        if (images) {
          images.style.transform = `rotate3d(0,1,0,${-rotate}deg)`;
        }
      };
      
      const handleMouseLeave = () => {
        if (images) {
          images.style.transform = `rotate3d(0,1,0,0deg)`;
        }
      };
      
      if (images) {
        images.addEventListener('mouseenter', handleMouseEnter);
        images.addEventListener('mouseleave', handleMouseLeave);
      }
      
      return () => {
        if (images) {
          images.removeEventListener('mouseenter', handleMouseEnter);
          images.removeEventListener('mouseleave', handleMouseLeave);
        }
      };
    }, [docWidth]);
    

  return (
    <div className="Carousel_img" id="imgs">
      <img src="/assets/kg1.jpg" alt="1" className='Carousel_img' />
      <img src="/assets/kg2.jpg" alt="2" className='Carousel_img'/>
      <img src="/assets/kg3.jpg" alt="3"className='Carousel_img' />
      <img src="/assets/kg12.jpg" alt="12" className='Carousel_img'/>
      <img src="/assets/kg13.jpg" alt="13" className='Carousel_img' />
      <img src="/assets/kg6.jpg" alt="6" className='Carousel_img'/>
      <img src="/assets/kg7.jpg" alt="7" className='Carousel_img'/>
      <img src="/assets/kg8.jpg" alt="8" className='Carousel_img'/>
      <img src="/assets/kg9.jpg" alt="9" className='Carousel_img' />
      <img src="/assets/kg10.jpg" alt="10" className='Carousel_img' />
      <img src="/assets/kg11.jpg" alt="11" className='Carousel_img'/>
  </div>
  );
};

export default Carousel;
