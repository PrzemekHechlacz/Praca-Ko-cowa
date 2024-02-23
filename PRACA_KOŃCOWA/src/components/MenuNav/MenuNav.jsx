import React, { useState} from 'react';
import"./MenuNav.scss"
import { Link } from 'react-router-dom';

const MenuNav = ({ style }) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);

  };

  const handleAnimationEnd = () => {
    if (isOpen && !isClosing) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 20000); 
    }
  };

  return (
    <div style={{position: 'relative'}}>
    <div style={{ position: 'absolute', top: '4.5rem'}} id="mainMenu"  className={`mainMenuOverlay floating2 ${isOpen ? 'open' : ''}`}
    onAnimationEnd={handleAnimationEnd}>
    <div className='logo-kg'><img  className="logo-kg" src="https://kgfotografia.pl/wp-content/uploads/2017/08/kgfotografia_logo_2020_bp.png" alt="" /></div>
      <div className={`navire floating3 ${isOpen ? 'visible' : ''}`} ></div>
      <div className="itemMenuBox bills">
      <Link to="/about-me" rel="noreferrer" className="itemMenu">
        <i className="fa fa-user-circle-o" ></i>
      </Link>
    </div>
      <div className="itemMenuBox tarsheed">
        <Link to="/portfolio" rel="noreferrer" className="itemMenu">
      <i className="fa fa-photo" ></i>
        </Link>
       </div>
      <div className="itemMenuBox employees">
        <a href="https://facebook.com" className="itemMenu ">
          <i className="fa fa-facebook" ><Link to="/contact"></Link></i>
        </a>
      </div>
      <div className="itemMenuBox location">
      <Link to="/" rel="noreferrer" className="itemMenu">
      <i className="fa fa-bars"></i>
        </Link>
      </div>
      <div className="itemMenuBox eservices">
        <a href="https://instagram.com" className="itemMenu ">
          <i className="fa fa-instagram"></i>
        </a>
      </div>
      <div className="itemMenuBox contact">
      <Link to="/contact" rel="noreferrer" className="itemMenu">
          <i className="fa fa-phone" ></i>
        </Link>
      </div>
      <a href="#" className="toggleMenu floating" onClick={toggleMenu}>
        <i className=""> <img  className="dron_menu" src="https://e7.pngegg.com/pngimages/586/13/png-clipart-computer-icons-button-play-android-play-angle-trademark-thumbnail.png" alt="" /></i>
      </a>
    </div>
</div>
  );
}

export default MenuNav



