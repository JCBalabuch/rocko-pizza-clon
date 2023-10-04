import './NavLinks.css'
import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

const NavLinks = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
        </div>
        <ul className={`menu NavLinks ${isOpen ? 'open' : ''}`}>
        <li>
          <NavLink to=''>Home</NavLink>
        </li>
        <li>
          <NavLink to='services'>Servicios</NavLink>
        </li>
        <li>
          <NavLink to='menu'>Menú</NavLink>
        </li>
        <li>
          <NavLink to='contact'>Contacto</NavLink>
        </li>
      </ul>
      </nav>
    </div>
  );
};

export default NavLinks;
