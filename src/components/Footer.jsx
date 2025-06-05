import React from 'react';
import './Footer.css';
import { FaInstagram, FaWhatsappSquare,} from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} EllaTrends. All rights reserved.</p>
      <div className="footer-socials">
        <a href="https://www.instagram.com/ellatrends_?igsh=MTB6dGg2cGxldjEzbQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://t.co/PMlelyLoMs" target="_blank" rel="noopener noreferrer"><FaWhatsappSquare /></a>
      </div>
    </footer>
  );
};

export default Footer;
