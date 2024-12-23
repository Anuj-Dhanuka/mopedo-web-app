import { FaLocationPin } from "react-icons/fa6";
import bikeImage from "../../../../assets/icons/bike.png";
import styled, { keyframes } from "styled-components";

const HomePageHeroSection = () => {
  return (
    <HeroSection>
      <HeroContent>
        <RightContainer>
          <RightInnerContainer>
            <RightImageContainer>
              <FaLocationPin size={600} color="#f9c935" style={{ width: "400px" }} />
              <BikeImageContainer>
                <img src={bikeImage} alt="Bike" style={{ width: "300px" }} />
              </BikeImageContainer>
            </RightImageContainer>
          </RightInnerContainer>
        </RightContainer>
        <LeftContainer>
          <HeroTitle>Welcome to Mopedo</HeroTitle>
          <HeroSubtitle>
            Swiftly evolving <span>Bike-Taxi service</span> integrated with
            advanced
            <span> Artificial Intelligence Technology</span>.
          </HeroSubtitle>
          <HeroDescription>
            Facilitating end-to-end pickup & drop services, food delivery, and
            goods delivery — all at your fingertips.
          </HeroDescription>
          <HeroCTA>
            <CTAButton>Get Started</CTAButton>
            <CTAButtonSecondary>Learn More</CTAButtonSecondary>
          </HeroCTA>
        </LeftContainer>
      </HeroContent>
    </HeroSection>
  );
};

const moveInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-10rem); }
  80% {
    transform: translateX(1rem); }
  100% {
    opacity: 1;
    transform: translateX(0); }`;

const moveInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(10rem); }
  80% {
    transform: translateX(-1rem); }
  100% {
    opacity: 1;
    transform: translateX(0); }`;

const moveInBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(3rem); }
  100% {
    opacity: 1;
    transform: translateY(0); }`;

const HeroSection = styled.div`
  height: 100vh;
  background-color: #f9fafc;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #272324;
  text-align: center;

  @media (max-width: 768px) {
    height: auto;
    padding: 20px 0;
  }
`;

const HeroContent = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftContainer = styled.div`
  width: 50%;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100%;
    order: 2;
  }
`;

const HeroTitle = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  margin-bottom: 16px;
  color: #000;
  animation: ${moveInLeft} 2s ease-out;

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2.8rem;
  }
`;

const HeroSubtitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 16px;
  line-height: 1.6;
  animation: ${moveInLeft} 2s ease-out;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.8rem;
  margin-bottom: 30px;
  line-height: 1.6;
  color: #333;
  animation: ${moveInLeft} 2s ease-out;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const HeroCTA = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 15px;
  animation: ${moveInBottom} 2s ease-out 1.2s;
  animation-fill-mode: backwards;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const CTAButton = styled.button`
  background: #ffcc0f;
  text-transform: uppercase;
  color: #000;
  border: none;
  width: 210px;
  height: 50px;
  font-size: 1.5rem;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: #e6b800;
  }
`;

const CTAButtonSecondary = styled.button`
  background: #000;
  color: #fff;
  border: none;
  width: 210px;
  height: 50px;
  font-size: 1.5rem;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background: #272324;
    color: #ffffff;
  }
`;

const RightContainer = styled.div`
  width: 50%;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    order: 1;
    margin-bottom: 20px;
  }
`;

const RightInnerContainer = styled.div`
  animation: ${moveInRight} 2s ease-out;
  position: relative;
`;

const RightImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BikeImageContainer = styled.div`
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, 0%);

  img {
    width: 300px;

    @media (max-width: 768px) {
      width: 250px;
    }

    @media (max-width: 480px) {
      width: 200px;
    }
  }
`;

export default HomePageHeroSection;
