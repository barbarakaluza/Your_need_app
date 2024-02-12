import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.instagram.com/">
          <FontAwesomeIcon icon={faInstagram} className="icon" />
        </a>
        <a href="https://www.google.com/">
          <FontAwesomeIcon icon={faGoogle} className="icon" />
        </a>
        <a href="https://www.facebook.com/">
          <FontAwesomeIcon icon={faFacebook} className="icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
