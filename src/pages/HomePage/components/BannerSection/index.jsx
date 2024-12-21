import styled from "styled-components";

import bannerImage from "../../../../assets/images/banner.jpg"


const BannerSection = () => {
  return (
    <div>
      <Banner>
        
      </Banner>
    </div>
  );
}

const Banner = styled.div`
  height: 100vh; /* Full viewport height */
  background: 
    linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
    url(${bannerImage}) no-repeat center center fixed;
  background-size: cover; /* Ensures the image covers the whole area */
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
  position: relative;
`;

export default BannerSection;
