import styled from "styled-components";

const KeyFeaturesSection = () => {
  return (
    <FeaturesContainer id="features">
      <ContentWrapper>
        <SectionTitle>🚀 Key <span>Features</span></SectionTitle>
        <FeaturesGrid>
          <FeatureCard>
            <FeatureTitle>🤖 AI Integration</FeatureTitle>
            <FeatureDescription>
              Advanced technology for optimized routes and real-time updates.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>🎯 Personalized User Experience</FeatureTitle>
            <FeatureDescription>
              Smart recommendations and seamless bookings.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>🛡️ Safety Standards</FeatureTitle>
            <FeatureDescription>
              Ensuring secure rides with helmets and 24/7 assistance.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>🌱 Eco-Friendly Options</FeatureTitle>
            <FeatureDescription>
              Testing e-bikes for a sustainable future.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>📍 Real-Time Tracking</FeatureTitle>
            <FeatureDescription>
              Stay informed with live updates on ride location and arrival time.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>💬 24/7 Customer Support</FeatureTitle>
            <FeatureDescription>
              Instant assistance with our dedicated support team.
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
      </ContentWrapper>
    </FeaturesContainer>
  );
};

// Styled Components
const FeaturesContainer = styled.section`
  padding: 80px 20px;
  background: linear-gradient(to right, #f9c935, #ffdd57); /* Yellow Gradient Background */
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
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 40px;
  color: #272324;
  font-weight: bold;

  span {
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 40px;

  @media (max-width: 768px) {
    gap: 20px;
    margin-top: 30px;
  }
`;

const FeatureCard = styled.div`
  background: #fff;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  color: #272324;
  margin-bottom: 10px;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
`;

export { KeyFeaturesSection };
