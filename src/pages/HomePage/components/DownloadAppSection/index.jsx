import styled from "styled-components";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const DownloadAppSection = () => {
  return (
    <DownloadContainer>
      <ContentWrapper>
        <SectionTitle>
          Download the <span>Mopido App</span>
        </SectionTitle>
        <SectionSubtitle>
          Get the best riding experience right at your fingertips.
        </SectionSubtitle>
        <ButtonContainer>
          <DownloadButton>
            <FaApple size={24} /> Download on the App Store
          </DownloadButton>
          <DownloadButton>
            <FaGooglePlay size={24} /> Get it on Google Play
          </DownloadButton>
        </ButtonContainer>
      </ContentWrapper>
    </DownloadContainer>
  );
};

const DownloadContainer = styled.section`
  padding: 80px 20px;
  background-color: #f9fafc;
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
  margin-bottom: 16px;
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

const SectionSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 26px;
  margin-top: 0px;
  color: #444;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 0px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const DownloadButton = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.2rem;
  padding: 14px 24px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s ease;
  width: auto;
  max-width: 300px;
  min-width: 180px;

  &:first-child {
    background: #000;
    color: #fff;
    &:hover {
      background: #333;
    }
  }

  &:last-child {
    background: #34a853;
    color: #fff;
    &:hover {
      background: #2c8c4b;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 12px 20px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 10px 18px;
  }
`;

export { DownloadAppSection };
