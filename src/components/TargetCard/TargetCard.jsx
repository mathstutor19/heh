import React from 'react';
import './TargerCard.css';
function TargetCard({ title, imageUrl, description }) {
  return (
    <article className="target__card">
      <img src={imageUrl} alt={title} />
      <h3 className='target__card__title'>{title}</h3>
      <p className='target__card__desc' >{description}</p>
    </article>
  );
}

export default TargetCard;
