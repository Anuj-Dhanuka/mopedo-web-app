import styled from "styled-components";

import bannerImage from "../../../assets/images/banner.jpg"

const PhotoGallerySection = () => {
  return (
    <GalleryContainer id="gallery">
      <ContentWrapper>
        <SectionTitle>📸 Our <span>Gallery</span></SectionTitle>
        <GalleryGrid>
          <GalleryItem>
            <img src={bannerImage} alt="Office Environment" />
          </GalleryItem>
          <GalleryItem>
            <img src={bannerImage} alt="Team Collaboration" />
          </GalleryItem>
          <GalleryItem>
            <img src={bannerImage} alt="Behind the Scenes" />
          </GalleryItem>
          <GalleryItem>
            <img src={bannerImage} alt="Project Celebration" />
          </GalleryItem>
          <GalleryItem>
            <img src={bannerImage} alt="Team Meeting" />
          </GalleryItem>
          <GalleryItem>
            <img src={bannerImage} alt="Office Workspace" />
          </GalleryItem>
        </GalleryGrid>
      </ContentWrapper>
    </GalleryContainer>
  );
};

// Styled Components
const GalleryContainer = styled.section`
  padding: 80px 20px;
  background: #f9fafc;
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
    color: #f9c935;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 40px;
`;

const GalleryItem = styled.div`
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export { PhotoGallerySection };
