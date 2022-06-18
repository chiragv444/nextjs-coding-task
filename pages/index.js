import React from 'react';
import { HomeHero } from '../components';

const Home = () => (
  <div className="main">
    <HomeHero
      mainHeader={'Future-proof your business. WiFi 6E is here.'}
      subHeader={' Offer your customers the fastest performance possible with Plume.They’re ready.'}
      buttonName={'Learn more about WiFi 6E'}
    />
  </div>
);

export default Home;
