import styled from 'styled-components';

export const HeroBackground = styled.div`
  background: #111111;
`;

export const HeroContainer = styled.div`
  max-width: 1440px;
  min-height: 800px;
  display: flex;
  margin: auto;
  align-self: center;
  @media (max-width: 425px) {
    flex-direction: column;
  }
  height: 100%;
`;

export const HeroTextContainer = styled.div`
  align-self: center;
  width: 40%;
  padding-left: 88.76px;
  @media (max-width: 425px) {
    order: 2;
    padding: 0 44px;
    width: auto;
  }
`;

export const HeroImageContainer = styled.div`
  width: 60%;
  @media (max-width: 425px) {
    order: 1;
    width: auto;
  }
`;

export const HeroHeader = styled.h1`
  font-family: '-OC Rey';
  font-style: normal;
  font-weight: 400;
  font-size: 72px;
  line-height: 130%;
  color: #ffffff;
  margin-bottom: 31px;

  @media (max-width: 1024px) {
    font-size: 50px;
    line-height: 140%;
  }

  @media (max-width: 768px) {
    font-size: 40px;
    line-height: 140%;
  }
`;

export const HeroSubHeader = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 130%;
  color: #ffffff;
  font-family: 'Wigrum';
  margin: 0;
  margin-bottom: 31px;
  @media (max-width: 1024px) {
    font-size: 16px;
    line-height: 140%;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 140%;
  }
`;

export const HeroButton = styled.button`
  padding: 10px 32px;
  background: #656cff;
  border: 0px;
  border-radius: 135px;
  color: #ffffff;
  font-family: 'Wigrum';
  cursor: pointer;
  height: 47px;
`;

export const HeroImage = styled.img`
  /* padding: 10px 32px;
  background: #656cff;
  border: 0px;
  border-radius: 135px;
  color: #ffffff; */
  width: 100%;
  height: 100%;
  @media (max-width: 425px) {
    width: 100%;
    height: 360px;
  }
`;
