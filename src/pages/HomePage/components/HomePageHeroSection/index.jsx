import { FaLocationPin } from "react-icons/fa6";
import bikeImage from "../../../../assets/icons/bike.png";
import styled, { keyframes } from "styled-components";

const HomePageHeroSection = () => {
  return (
    <HeroSection>
      <HeroContent>
        <LeftContainer>
          <HeroTitle>Welcome to Mopedo India</HeroTitle>
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
        <RightContainer>
          <RightInnerContainer>
            <RightImageContainer>
              <StyledIcon
                size={500}
                color="#f9c935"
                style={{ width: "100%" }}
              />
              <BikeImageContainer>
                <BikeImage src={bikeImage} />
              </BikeImageContainer>
            </RightImageContainer>
          </RightInnerContainer>
        </RightContainer>
      </HeroContent>
    </HeroSection>
  );
};

const moveInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-10rem);
  }
  80% {
    transform: translateX(1rem);
  }
  100% {
    opacity: 1;
    transform: rotateX(0);
  }
`;

const moveInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(10rem);
  }
  80% {
    transform: translateX(-1rem);
  }
  100% {
    opacity: 1;
    transform: rotateX(0);
  }
`;

const moveInBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(3rem);
  }
  100% {
    opacity: 1;
    transform: rotateY(0);
  }
`;

const HeroSection = styled.div`
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  color: #272324;

  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
  }
`;

const HeroContent = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;

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
    text-align: center;
  }
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 16px;
  color: #000;
  animation: ${moveInLeft} 2s ease-out;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 16px;
  line-height: 1.6;
  animation: ${moveInLeft} 2s ease-out;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.5rem;
  margin-bottom: 30px;
  line-height: 1.6;
  color: #333;
  animation: ${moveInLeft} 2s ease-out;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
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
  width: 180px;
  height: 45px;
  font-size: 1.3rem;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: #e6b800;
  }

  @media (max-width: 480px) {
    width: 150px;
    height: 40px;
    font-size: 1.2rem;
  }
`;

const CTAButtonSecondary = styled(CTAButton)`
  background: #000;
  color: #fff;

  &:hover {
    background: #272324;
  }
`;

const RightContainer = styled.div`
  position: relative;
  width: 50%;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
    height: 500px;
    order: 1;
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const RightInnerContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0%, -50%);

  @media (max-width: 768px) {
    position: relative;
    top: auto;
    transform: none;
  }
`;

const RightImageContainer = styled.div`
  position: relative;
  animation: ${moveInRight} 2s ease-out;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const StyledIcon = styled(FaLocationPin)`
  width: 400px; /* Default size */
  height: auto;

  @media (max-width: 768px) {
    width: 300px; /* Smaller size for tablets */
  }

  @media (max-width: 480px) {
    width: 200px; /* Smaller size for phones */
  }
`;

const BikeImageContainer = styled.div`
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, 0%);

  @media (max-width: 768px) {
    width: 50%;
  }
`;

const BikeImage = styled.img`
  width: 300px;

  @media (max-width: 768px) {
    width: 200px;
  }

  @media (max-width: 480px) {
    width: 150px;
  }
`;

export default HomePageHeroSection;
