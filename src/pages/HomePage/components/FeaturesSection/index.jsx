import styled from "styled-components";
import { FaShieldAlt, FaMapMarkerAlt, FaClock, FaUsers } from "react-icons/fa";

const FeaturesSection = () => {
  return (
    <FeaturesContainer>
      <ContentWrapper>
        <SectionTitle>Why Choose <span>Mopido</span>?</SectionTitle>
        <FeaturesGrid>
          <FeatureCard>
            <FaShieldAlt size={50} color="#f9c935" />
            <FeatureTitle>Safety First</FeatureTitle>
            <FeatureDescription>
              Verified drivers and robust safety protocols ensure a secure journey.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FaMapMarkerAlt size={50} color="#f9c935" />
            <FeatureTitle>Real-Time Tracking</FeatureTitle>
            <FeatureDescription>
              Track your ride in real-time with precision.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FaClock size={50} color="#f9c935" />
            <FeatureTitle>24/7 Availability</FeatureTitle>
            <FeatureDescription>
              Anytime, anywhere — we are always ready to serve.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FaUsers size={50} color="#f9c935" />
            <FeatureTitle>Customer Support</FeatureTitle>
            <FeatureDescription>
              Dedicated support team for seamless assistance.
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
      </ContentWrapper>
    </FeaturesContainer>
  );
};

const FeaturesContainer = styled.section`
  padding: 60px 20px;
  background-color: #f9fafc;
  text-align: center;
  display: flex;
  justify-content: center;
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
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const FeatureCard = styled.div`
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

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin: 15px 0 10px;
  color: #272324;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
`;

export default FeaturesSection;
