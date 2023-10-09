import React from 'react';
import { FaceBookIcon, GmailIcon, InstagramIcon } from '../Icons/Icons';
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div></div>
      <ul className='social-links'>
        <li className='round'>
          <a href="https://www.instagram.com/rockopizza_ou/?hl=es">
            <InstagramIcon />
          </a>
        </li>
        <li className='round'>
          <a href="https://www.facebook.com/p/Pizzería-Rocko-Pizza-100072098045951/?paipv=0&eav=AfYzbkpicmQB8pAdMBLZDDoOSQ80g224D1m9q0sFUMmOXiiT9cK3VF-22lQozNrCr1E&_rdr">
            <FaceBookIcon />
          </a>
        </li>
        <li className='round'>
          <a href="mailto:info@rockopizza.com">
            <GmailIcon />
          </a>
        </li>
      </ul>
      <div>© 2023 ROCKO PIZZA Todos los derechos reservados</div>
    </footer>
  );
};

export default Footer;
