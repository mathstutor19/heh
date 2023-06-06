import React from 'react';

import logo from '../../essets/logo.svg';
import './Header.css';
function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <nav className="navbar">
          <a href="#">
            <img src={logo} alt="nav-logo" />
          </a>
          <ul className="nav__items">
            <li className="nav__item">
              <a className="nav__link" href="">
                For investors
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="">
                HEH news
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="">
                HEH foundation
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link-yellow" href="">
                Received invitation
              </a>
            </li>
          </ul>
        </nav>
        <h1 className="header__title">
          We network liberal <span>conservative</span> top
        </h1>
        <p className="header__text">
          Performers with each other and with the high performers of tomorrow.
          An invite-only app for political and professional exchange. Register
          now for the free beta version!
        </p>
        <button className="header__button" type="submit">
          Apply
        </button>
      </div>
    </header>
  );
}

export default Header;
