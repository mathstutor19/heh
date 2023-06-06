import React from 'react';
import './Offer.css';
import imageUrl from '../../essets/offerphone.png';

function Offer() {
  return (
    <section className="offer">
      <h2 className="offer__title">
        What <span>we</span> offer
      </h2>
      <div className="offer__card__wrapper">
        <div className="offer__first">
          <div className="offer__card">
            <h3 className="offer__card__title">Offers</h3>
            <p className="offer__card__desc">
              Performers with each other and with the high performers of
              tomorrow.
            </p>
          </div>
          <div className="offer__card">
            <h3 className="offer__card__title">Offers one</h3>
            <p className="offer__card__desc">
              Performers with each other and with the high performers of
              tomorrow.
            </p>
          </div>
        </div>

        <img className="offer__image" src={imageUrl} alt="offer-bg" />
        <div className="offer__second">
          <div className="offer__card">
            <h3 className="offer__card__title">Feed</h3>
            <p className="offer__card__desc">
              Performers with each other and with the high performers of
              tomorrow. An invite-only app for political and professional
              exchange. Register now for the free beta version!
            </p>
          </div>
          <div className="offer__card">
            <h3 className="offer__card__title">Workspaces</h3>
            <p className="offer__card__desc">
              Performers with each other and with the high performers of
              tomorrow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offer;
