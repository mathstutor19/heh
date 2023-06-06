import React from 'react';
import './ServiceCard.css';
function ServiceCard({ title, description, imageUrl }) {
  return (
    <article className="service__card">
      <img src={imageUrl} alt={title} />
      <h3 className="service__card__title">{title}</h3>
      <p className="service__card__desc">{description}</p>
    </article>
  );
}

export default ServiceCard;
