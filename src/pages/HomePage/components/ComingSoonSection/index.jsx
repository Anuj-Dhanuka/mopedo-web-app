import styled from "styled-components";

const ComingSoonSection = () => {
  return (
    <ComingSoonContainer>
      <ContentWrapper>
        <SectionTitle>
          <span>Coming Soon</span> to Your City
        </SectionTitle>
        <ComingSoonDescription>
          We&lsquo;re expanding rapidly to bring Mopido&apos;s seamless experience to more cities.
        </ComingSoonDescription>
        <NotificationText>
          Be the first to know when we launch in your city!
        </NotificationText>
        <NotificationButton>Notify Me</NotificationButton>
      </ContentWrapper>
    </ComingSoonContainer>
  );
};

const ComingSoonContainer = styled.section`
  padding: 80px 20px;
  background: linear-gradient(to right, #f9c935, #ffdd57);
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 16px;
  color: #fff;
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

const ComingSoonDescription = styled.p`
  font-size: 1.5rem;
  color: #333333;
  line-height: 1.6;
  max-width: 800px;
  margin-top: 0px;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const NotificationText = styled.p`
  font-size: 1.5rem;
  margin-bottom: 16px;
  color: #333333;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const NotificationButton = styled.button`
  text-transform: uppercase;
  background: #000;
  color: #fff;
  border: none;
  width: 170px;
  height: 40px;
  font-size: 1.4rem;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #272324;
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

export { ComingSoonSection };
