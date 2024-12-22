import styled from "styled-components";

const CTASection = () => {
  return (
    <CTAContainer>
      <ContentWrapper>
        <SectionTitle>Ready to <span>Get Started?</span></SectionTitle>
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
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 8px;
  color: #272324;
  font-weight: bold;
  span {
    color: #000;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 24px;
  margin-top: 0px;
  color: #444;
`;

const CTAButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const CTAButtonPrimary = styled.button`
  background: #000;
  color: #fff;
  width: 170px;
  height: 40px;
font-size: 1.4rem;
  font-weight: 500;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #333;
  }
`;

const CTAButtonSecondary = styled.button`
  background: #34a853;
  color: #fff;
  font-size: 1.2rem;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s ease;

  &:hover {
    background: #2c8c4b;
  }
`;


export { CTASection };
