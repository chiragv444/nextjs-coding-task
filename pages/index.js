import React from 'react';
import { HomeHero } from '../components';
import HeroImage from '../Assets/Images/image.svg';

const Home = () => (
  <div className="main">
    <HomeHero
      heroImage={HeroImage}
      mainHeader={'Future-proof your business. WiFi 6E is here.'}
      subHeader={' Offer your customers the fastest performance possible with Plume.They’re ready.'}
      buttonName={'Learn more about WiFi 6E'}
    />
  </div>
);

export default Home;
