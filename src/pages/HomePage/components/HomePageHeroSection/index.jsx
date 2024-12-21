import { FaLocationPin } from "react-icons/fa6";

import bikeImage from "../../../../assets/icons/bike.png";

import styled, { keyframes } from "styled-components";

const HomePageHeroSection = () => {
  return (
    <HeroSection>
      <HeroContent>
        <div style={{ width: "50%" }}>
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
        </div>
        <RightContainer>
          <RightInnerContainer>
            <RightImageContainer>
              <FaLocationPin size={600} color="#f9c935" style={{width: "400px"}}  />
              <BikeImageContainer>
                <img src={bikeImage} style={{ width: "300px" }} />
              </BikeImageContainer>
            </RightImageContainer>
          </RightInnerContainer>
        </RightContainer>
      </HeroContent>
    </HeroSection>
  )
}

const moveInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-10rem); }
  80% {
    transform: translateX(1rem); }
  100% {
    opacity: 1;
    transform: rotateX(0); } `

const moveInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(10rem); }
  80% {
    transform: translateX(-1rem); }
  100% {
    opacity: 1;
    transform: rotateX(0); }`

const moveInBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(3rem); }
  100% {
    opacity: 1;
    transform: rotateY(0); }`


const HeroSection = styled.div`
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  color: #272324;
`;

const HeroContent = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroTitle = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  margin-bottom: 16px;
  color: #000;
  animation: ${moveInLeft} 2s ease-out;
`;

const HeroSubtitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 16px;
  line-height: 1.6;
  animation: ${moveInLeft} 2s ease-out;
`;

const HeroDescription = styled.p`
  font-size: 1.8rem;
  margin-bottom: 30px;
  line-height: 1.6;
  color: #333;
  animation: ${moveInLeft} 2s ease-out;
`;

const HeroCTA = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 15px;
  animation: ${moveInBottom} 2s ease-out 1.2s;
  animation-fill-mode: backwards;
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
  position: relative;
  width: 50%;
  height: 100%;
`;

const RightInnerContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0%, -50%);
  
  
`;

const RightImageContainer = styled.div`
  position: relative;
  animation: ${moveInRight} 2s ease-out;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
const BikeImageContainer = styled.div`
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
`;



export default HomePageHeroSection;
