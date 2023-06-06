import React from 'react';
import './Footer.css';
import image from '../../essets/logo.svg';
import facebook from '../../essets/facebook.svg';
import instagram from '../../essets/instagram.svg';
import linkedin from '../../essets/linkedin.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__left">
          <img className="footer__image" src={image} alt="logo" />
          <h5>Libertate in perpetuum.</h5>
          <p>All rights reserved.2022</p>
        </div>
        <div className="footer__center">
          <ul className="footer__items">
            <li className="footer__item">
              <a className="footer__link" href="">
                For Investors
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="">
                HEH investors
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="">
                HEH foundation
              </a>
            </li>
          </ul>
          <ul className="footer__items">
            <li className="footer__item">
              <a className="footer__link" href="">
                Impressum
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="">
                AGB
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="">
                Privacy
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__right">
          <h5>Follow our socials:</h5>
          <ul className="footer__socials">
            <li className="footer__social">
              <a className="footer__link" href="">
                <img src={facebook} alt="facebook" />
              </a>
            </li>
            <li className="footer__social">
              <a className="footer__link" href="">
                <img src={instagram} alt="instagram" />
              </a>
            </li>
            <li className="footer__social">
              <a className="footer__link" href="">
                <img src={linkedin} alt="linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
