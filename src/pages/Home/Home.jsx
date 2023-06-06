import React from 'react';
import Conservatism from '../../components/Conservatism/Conservatism';
import Footer from '../../components/Footer/Footer';
import Offer from '../../components/Offer/Offer';
import Services from '../../components/Services/Services';
import TargetGroup from '../../components/TargetGroup/TargetGroup';

function Home() {
  return (
    <div>
      <TargetGroup />
      <Conservatism />
      <Offer />
      <Services />
      <Footer />
    </div>
  );
}

export default Home;
