import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import image1 from '../../essets/service1.svg';
import image2 from '../../essets/service2.svg';
import image3 from '../../essets/service3.svg';
import image4 from '../../essets/service4.svg';
import image5 from '../../essets/service5.svg';
import image6 from '../../essets/service6.svg';
import './Services.css';
const ServiceData = [
  {
    id: 1,
    imageUrl: image1,
    title: 'Performance ',
    description:
      'Performers with each other and with the high performers of tomorrow. An invite-only app for political and professional exchange. Register now for the free beta version!',
  },
  {
    id: 2,
    imageUrl: image2,
    title: 'Rule of Law',
    description:
      'Performers with each other and with the high performers of tomorrow. An invite-only app for political and professional exchange. Register now for the free beta version!',
  },
  {
    id: 3,
    imageUrl: image3,
    title: 'Freedom',
    description:
      'Performers with each other and with the high performers of tomorrow. An invite-only app for political and professional exchange. Register now for the free beta version!',
  },
  {
    id: 4,
    imageUrl: image4,
    title: 'Progress',
    description:
      'Performers with each other and with the high performers of tomorrow. An invite-only app for political and professional exchange. Register now for the free beta version!',
  },
  {
    id: 5,
    imageUrl: image5,
    title: 'Law and Order',
    description:
      'Performers with each other and with the high performers of tomorrow. An invite-only app for political and professional exchange. Register now for the free beta version!',
  },
  {
    id: 6,
    imageUrl: image6,
    title: 'Traditionaly',
    description:
      'Performers with each other and with the high performers of tomorrow. An invite-only app for political and professional exchange. Register now for the free beta version!',
  },
];
function Services() {
  return (
    <section className="services">
      <h2 className="services__title">
        What we <span>stand</span> for
      </h2>
      <div className="service__card__wrapper">
        {ServiceData.map((card) => (
          <ServiceCard
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

export default Services;
