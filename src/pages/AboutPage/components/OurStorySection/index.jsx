import styled from "styled-components";
import authorImage from "../../../../assets/images/dhanush.jpg";

const OurStorySection = () => {
  return (
    <StoryContainer>
      <ContentWrapper>
        <SectionTitle>📖 Our <span>Story</span></SectionTitle>
        <StoryContent>
          <AuthorSection>
            <AuthorImage src={authorImage} alt="Dhanush K, Founder & CEO" />
            <AuthorInfo>
              <AuthorName>Dhanush K</AuthorName>
              <AuthorRole>Founder & CEO</AuthorRole>
              <AuthorDate>Monday, 20 June, 2022</AuthorDate>
            </AuthorInfo>
          </AuthorSection>
          <Separator />
          <StoryText>
            With shifting market dynamics, the IT Sector has played and will continue to play an important role in the world of business and infrastructure development. Having said that, there are several prospective firms in the IT business that are working hard to bring in the necessary innovation.
          </StoryText>
          <StoryText>
            As India is known for having the most inventive brains, a group of evangelists decided to build Future Tech IT Global Services by employing in-house resources to alter every area with new ideas using modern technology.
          </StoryText>
          <StoryText>
            “<strong>MOPEDO</strong> was our first foray into the Indian market with the adoption of Artificial Intelligence, making it the first-ever bike taxi in India to use AI in its services. After extensive market analysis, research, and development, we have successfully developed the most user-friendly Bike & Auto taxi mobile application, compatible with both Android and iOS.”
          </StoryText>
          <StoryText>
            Mopedo stands out with powerful AI technology, providing secure, risk-free onboarding, advanced tracking solutions, and a seamless user experience for both customers and drivers.
          </StoryText>
          <StoryText>
            Our goal remains to provide economical and dependable commuting services, prioritizing customer safety and satisfaction.
          </StoryText>
        </StoryContent>
      </ContentWrapper>
    </StoryContainer>
  );
};

const StoryContainer = styled.section`
  padding: 80px 20px;
  background: #fff;
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
  text-align: center;
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

const StoryContent = styled.div`
  margin-bottom: 40px;
`;

const AuthorSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  gap: 20px;
`;

const AuthorImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #272324;
`;

const AuthorRole = styled.p`
  font-size: 1rem;
  color: #555;
  margin: 5px 0;
`;

const AuthorDate = styled.p`
  font-size: 0.9rem;
  color: #888;
`;

const StoryText = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 20px;
  line-height: 1.6;
`;

const Separator = styled.hr`
  border: none;
  border-top: 2px solid #f9c935;
  margin: 20px 0;
  width: 50%;
`;

export { OurStorySection };
