import React from 'react';
import { HomeHero } from '../components';

export default {
  title: 'Components/Hero',
  component: HomeHero,
  argTypes: {}
};

const Template = (args) => <HomeHero {...args} />;

export const HeroSection = Template.bind({});
HeroSection.args = {
  mainHeader: 'Future-proof your business. WiFi 6E is here.',
  subHeader: ' Offer your customers the fastest performance possible with Plume.They’re ready.',
  buttonName: 'Learn more about WiFi 6E',
  onClick: undefined
};
