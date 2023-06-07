import React from 'react';
import Conservatism from '../../components/Conservatism/Conservatism';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Offer from '../../components/Offer/Offer';
import Services from '../../components/Services/Services';
import TargetGroup from '../../components/TargetGroup/TargetGroup';

function Home() {
  return (
    <>
      <Header />
      <TargetGroup />
      <Conservatism />
      <Offer />
      <Services />
    </>
  );
}

export default Home;
