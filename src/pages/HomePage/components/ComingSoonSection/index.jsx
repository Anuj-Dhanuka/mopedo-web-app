import styled from "styled-components";

const ComingSoonSection = () => {
  return (
    <ComingSoonContainer>
      <ContentWrapper>
        <SectionTitle>
          <span>Coming Soon</span> to Your City
        </SectionTitle>
        <ComingSoonDescription>
          We&apos;re expanding rapidly to bring Mopido&apos;s seamless
          experience to more cities
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
`;

const ComingSoonDescription = styled.p`
  font-size: 1.5rem;
  color: #333333;
  line-height: 1.6;
  max-width: 800px;
  margin-top: 0px;
`;

const NotificationText = styled.p`
  font-size: 1.5rem;
  margin-bottom: 16px;
  color: #333333;
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
  &:hover {
    background: #272324;
  }
`;

export { ComingSoonSection };
