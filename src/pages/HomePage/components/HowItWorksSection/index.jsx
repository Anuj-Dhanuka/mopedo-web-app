import styled from "styled-components";
import { FaDownload, FaTaxi, FaMap, FaSmile } from "react-icons/fa";

const HowItWorksSection = () => {
  return (
    <HowItWorksContainer>
      <ContentWrapper>
        <SectionTitle>How <span>It Works</span></SectionTitle>
        <StepsGrid>
          <StepCard>
            <FaDownload size={50} color="#f9c935" />
            <StepTitle>Download App</StepTitle>
            <StepDescription>
              Get the Mopido app from iOS or Android store.
            </StepDescription>
          </StepCard>
          <StepCard>
            <FaTaxi size={50} color="#f9c935" />
            <StepTitle>Book a Ride</StepTitle>
            <StepDescription>
              Choose your vehicle type and confirm your booking.
            </StepDescription>
          </StepCard>
          <StepCard>
            <FaMap size={50} color="#f9c935" />
            <StepTitle>Track Your Ride</StepTitle>
            <StepDescription>
              Real-time tracking for a hassle-free experience.
            </StepDescription>
          </StepCard>
          <StepCard>
            <FaSmile size={50} color="#f9c935" />
            <StepTitle>Enjoy the Ride</StepTitle>
            <StepDescription>
              Sit back, relax, and enjoy your journey.
            </StepDescription>
          </StepCard>
        </StepsGrid>
      </ContentWrapper>
    </HowItWorksContainer>
  );
};

const HowItWorksContainer = styled.section`
  padding: 80px 20px;
  background-color: #f9fafc;
  text-align: center;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 36px 20px;
  }

  @media (max-width: 480px) {
    padding: 36px 20px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 40px;
  color: #272324;
  font-weight: bold;
  span {
    color: #f9c935;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const StepCard = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const StepTitle = styled.h3`
  font-size: 1.5rem;
  margin: 15px 0 10px;
  color: #272324;
`;

const StepDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
`;

export default HowItWorksSection;
