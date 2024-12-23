import styled from "styled-components";

const MissionVisionSection = () => {
  return (
    <MissionVisionContainer>
      <ContentWrapper>
        <SectionTitle>
          🌟 Our <span>Mission & Vision</span>
        </SectionTitle>
        <MissionVisionContent>
          <MissionVisionItem>
            <h3>🚀 Our Mission</h3>
            <p>
              To revolutionize daily commuting by integrating cutting-edge AI
              technology, ensuring convenience, safety, and affordability for
              all users.
            </p>
          </MissionVisionItem>
          <MissionVisionItem>
            <h3>🎯 Our Vision</h3>
            <p>
              To become the leading bike taxi service provider globally,
              fostering innovation and setting new industry standards.
            </p>
          </MissionVisionItem>
        </MissionVisionContent>
      </ContentWrapper>
    </MissionVisionContainer>
  );
};


const MissionVisionContainer = styled.section`
  padding: 80px 20px;
  background: #f9fafc;
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

const MissionVisionContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  margin-top: 40px;
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


const MissionVisionItem = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  h3 {
    font-size: 1.8rem;
    margin-bottom: 10px;
    color: #272324;
  }
  p {
    font-size: 1.2rem;
    color: #555;
    line-height: 1.6;
  }
`;

export { MissionVisionSection };
