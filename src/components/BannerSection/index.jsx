/* eslint-disable react/prop-types */
import styled from "styled-components";
import bannerImage from "../../assets/images/banner.jpg";

const BannerSection = ({ heading }) => {
  return (
    <div>
      <Banner>{heading && <StyledHeading>{heading}</StyledHeading>}</Banner>
    </div>
  );
};

const Banner = styled.div`
  height: 100vh; /* Full viewport height */
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${bannerImage}) no-repeat center center;
  background-size: cover; /* Ensures the image covers the whole area */
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
  position: relative;
  padding: 0 20px;

  /* Responsive height adjustments */
  @media (max-width: 768px) {
    height: 70vh; /* Slightly reduced height for tablets */
  }

  @media (max-width: 480px) {
    height: 60vh; /* Reduced height for smaller screens */
  }
`;

const StyledHeading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  animation: fadeIn 2s ease-out;
  margin: 0;
  padding: 0 20px;
  text-align: center;
  line-height: 1.2;

  /* Keyframe animation for fade-in effect */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Tablet responsive styling */
  @media (max-width: 768px) {
    font-size: 2rem; /* Adjust heading size for tablets */
  }

  /* Mobile responsive styling */
  @media (max-width: 480px) {
    font-size: 1.6rem; /* Adjust heading size for smaller screens */
  }
`;

export default BannerSection;
