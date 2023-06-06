import React from 'react';
import image1 from '../../essets/target1.svg';
import image2 from '../../essets/target2.svg';
import image3 from '../../essets/target3.svg';
import TargetCard from '../TargetCard/TargetCard';
import './TargetGroup.css';
const TargetData = [
  {
    id: 1,
    imageUrl: image1,
    title: 'Bussines',
    description:
      'Performers with each other and with the high performers of tomorrow. An invite-only app for political and professional exchange. Register now for the free beta version!',
  },
  {
    id: 2,
    imageUrl: image2,
    title: 'Science',
    description:
      'Performers with each other and with the high performers of tomorrow. An invite-only app for political and professional exchange. Register now for the free beta version!',
  },
  {
    id: 3,
    imageUrl: image3,
    title: 'Craft',
    description:
      'Performers with each other and with the high performers of tomorrow. An invite-only app for political and professional exchange. Register now for the free beta version!',
  },
];
function TargetGroup() {
  return (
    <section className="target__section">
      <h2 className="target__title">Our target group</h2>
      <p className="target__subtitle">
        We are geared towards (aspiring) liberal-conservative top performers
      </p>
      <div className="target__card__wrapper">
        {TargetData.map((card) => (
          <TargetCard
            key={card.id}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default TargetGroup;
