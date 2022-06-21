import React from 'react';
import HeroImagePng from '../../Assets/Images/heroImage.png';
import PropTypes from 'prop-types';
import {
  HeroBackground,
  HeroContainer,
  HeroTextContainer,
  HeroHeader,
  HeroSubHeader,
  HeroButton,
  HeroImage,
  HeroImageContainer
} from './styled';

export default function HeroSection(props) {
  const { mainHeader, subHeader, buttonName, onClick, heroImage } = props;
  return (
    <HeroBackground>
      <HeroContainer>
        <HeroTextContainer>
          <HeroHeader>{mainHeader}</HeroHeader>
          <HeroSubHeader>{subHeader}</HeroSubHeader>
          <HeroButton onClick={onClick}>{buttonName}</HeroButton>
        </HeroTextContainer>
        <HeroImageContainer>
          <HeroImage src={heroImage} alt="hero" />
        </HeroImageContainer>
      </HeroContainer>
    </HeroBackground>
  );
}

HeroSection.propTypes = {
  mainHeader: PropTypes.string,
  subHeader: PropTypes.string,
  buttonName: PropTypes.string,
  heroImage: PropTypes.string,
  onClick: PropTypes.func
};

HeroSection.defaultProps = {
  mainHeader: 'Future-proof your business. WiFi 6E is here.',
  subHeader: ' Offer your customers the fastest performance possible with Plume.They’re ready.',
  buttonName: 'Learn more about WiFi 6E',
  heroImage: HeroImagePng,
  onClick: undefined
};
