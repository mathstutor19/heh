import React from 'react';
import './ForInvestors.css';
import logo from '../../essets/logo.svg';
import back from '../../essets/back.svg';
import Apply from '../../components/Apply/Apply';
function ForInvestors() {
  return (
    <section className="investors">
      <div className="investors__container">
        <nav className="investors__nav">
          <a href="">
            <img className="investors__logo" src={logo} alt="" />
          </a>
          <ul className="investors__items">
            <li className="investors__item">
              <a className="investors__link investors__link-active" href="">
                For investors
              </a>
            </li>
            <li className="investors__item">
              <a className="investors__link" href="">
                HEH news
              </a>
            </li>
            <li className="investors__item">
              <a className="investors__link" href="">
                HEH foundation
              </a>
            </li>
          </ul>
        </nav>
        <div className="investors__back">
          <img src={back} alt="back" />
          <p>Back</p>
        </div>
        <Apply />
        <p className='investors__text'>
          It's very simple: fill out the form below. If your profile fits our
          target group, you will receive an exclusive access link upon
          completion of the app, which you can use to start the registration
          process. This consists of two segments with political questions, in
          which it is necessary to achieve certain agreement values. We want to
          ensure a minimum consensus within the network and prevent politically
          extreme opinions from finding their way into the community.
        </p>
      </div>
    </section>
  );
}

export default ForInvestors;
