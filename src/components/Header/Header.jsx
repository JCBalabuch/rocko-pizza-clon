import './Header.css'
import React from 'react'
import NavLinks from '../NavLinks/NavLinks.jsx'

const Header = () => {
  return (
    <div className='header'>
        <div className='headerImg'>
            <img src="../../../public/Logotipo.png" alt="Logo Rocko Pizza" />
        </div>
        <NavLinks />
    </div>
  )
}

export default Header