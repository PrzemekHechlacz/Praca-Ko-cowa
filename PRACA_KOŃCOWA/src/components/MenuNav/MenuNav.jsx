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
      // Po kilku sekundach zamknij menu
      setTimeout(() => {
        setIsOpen(false);
      }, 20000); // Dostosuj czas do własnych potrzeb
    }
  };

  return (
    <div style={{position: 'relative'}}>
    <div style={{ position: 'absolute', top: '4.5rem'}} id="mainMenu"  className={`mainMenuOverlay floating2 ${isOpen ? 'open' : ''}`}
    onAnimationEnd={handleAnimationEnd}>
      <div className={`navire floating3 ${isOpen ? 'visible' : ''}`} ></div>
      <div className="itemMenuBox bills">
      <Link to="/about-me" rel="noreferrer" className="itemMenu">
        <i className="fa fa-file-text-o" aria-hidden="true">o Mnie</i>
      </Link>
    </div>
      <div className="itemMenuBox tarsheed">
        <Link to="/portfolio" rel="noreferrer" className="itemMenu">
      <i className="fa fa-diamond" aria-hidden="true">f</i>
        </Link>
       </div>
      <div className="itemMenuBox employees">
        <a href="#" className="itemMenu ">
          <i className="fa fa-users" aria-hidden="true"><Link to="/contact"></Link></i>
        </a>
      </div>
      <div className="itemMenuBox location">
      <Link to="/" rel="noreferrer" className="itemMenu">
      <i className="fa fa-diamond" aria-hidden="true"></i>
        </Link>
      </div>
      <div className="itemMenuBox eservices">
        <a href="#" className="itemMenu ">
          <i className="fa fa-key" aria-hidden="true"></i>
        </a>
      </div>
      <div className="itemMenuBox contact">
      <Link to="/contact" rel="noreferrer" className="itemMenu">
          <i className="fa fa-phone" aria-hidden="true"></i>
        </Link>
      </div>
      <a href="#" className="toggleMenu floating" onClick={toggleMenu}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </a>
    </div>
</div>
  );
}

export default MenuNav



