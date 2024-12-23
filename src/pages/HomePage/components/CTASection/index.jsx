import styled from "styled-components";

const CTASection = () => {
  return (
    <CTAContainer>
      <ContentWrapper>
        <SectionTitle>
          Ready to <span>Get Started?</span>
        </SectionTitle>
        <SectionSubtitle>
          Join us today and experience the future of urban mobility.
        </SectionSubtitle>
        <CTAButtonContainer>
          <CTAButtonPrimary>Book Your Ride Now!</CTAButtonPrimary>
          <CTAButtonSecondary>Join as a Driver!</CTAButtonSecondary>
        </CTAButtonContainer>
      </ContentWrapper>
    </CTAContainer>
  );
};

const CTAContainer = styled.section`
  padding: 80px 20px;
  background: linear-gradient(135deg, #ffcc0f, #f9c935);
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  
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
  margin-bottom: 6px;
  color: #272324;
  font-weight: bold;
  span {
    color: #000;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 24px;
  margin-top: 0px;
  color: #444;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const CTAButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 20px;

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const CTAButtonPrimary = styled.button`
  background: #000;
  color: #fff;
  width: 170px;
  height: 50px;
  font-size: 1.4rem;
  font-weight: 500;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #333;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    width: 150px;
    height: 45px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    width: 140px;
    height: 40px;
  }
`;

const CTAButtonSecondary = styled.button`
  background: #34a853;
  color: #fff;
  width: 170px;
  height: 50px;
  font-size: 1.4rem;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
  border: none;

  &:hover {
    background: #2c8c4b;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    width: 150px;
    height: 45px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    width: 140px;
    height: 40px;
  }
`;

export { CTASection };
