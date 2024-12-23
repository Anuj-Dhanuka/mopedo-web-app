import { FaBicycle, FaUtensils, FaBox } from "react-icons/fa";
import styled from "styled-components";

const ServicesCards = () => {
  return (
    <Container>
      <ContentWrapper>
        <SectionTitle>
          Our <span>Services</span>
        </SectionTitle>

        <ServicesGrid>
          <ServiceCard>
            <IconWrapper>
              <FaBicycle />
            </IconWrapper>
            <h3>Bike Taxi</h3>
            <p>Fast and reliable bike rides for daily commuting.</p>
          </ServiceCard>

          <ServiceCard>
            <IconWrapper>
              <FaUtensils />
            </IconWrapper>
            <h3>Food Delivery</h3>
            <p>Quick delivery of your favorite meals right to your doorstep.</p>
          </ServiceCard>

          <ServiceCard>
            <IconWrapper>
              <FaBox />
            </IconWrapper>
            <h3>Goods Delivery</h3>
            <p>Seamless transportation of goods with efficiency and care.</p>
          </ServiceCard>
        </ServicesGrid>
      </ContentWrapper>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  background: linear-gradient(to right, #f9c935, #ffdd57);
  padding: 80px 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 36px 20px;
  }

  @media (max-width: 480px) {
    padding: 36px 20px;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
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
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;

  @media (max-width: 480px) {
    gap: 15px;
  }
`;

const ServiceCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    font-size: 2rem;
    font-weight: bold;
    color: #000;
    margin: 10px 0;

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 1.2rem;
    font-weight: 600;
    color: #555;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: #f9c935;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export default ServicesCards;
