import styled from "styled-components";
import youtubeVideo from "../../../../assets/videos/mopedo-youtube-video.mp4";
import { useEffect, useState } from "react";

const App = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollOffset = window.scrollY * 0.5; // Adjust this value for desired parallax speed
      setOffsetY(scrollOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <VideoContainer>
        <ParallaxVideo
          autoPlay
          loop
          muted
          $offsetY={offsetY}
        >
          <source src={youtubeVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </ParallaxVideo>
      </VideoContainer>
    </>
  );
};

const VideoContainer = styled.div`
  position: relative;
  height: 100vh; /* Full screen height */
  width: 100%;
  overflow: hidden;
  z-index: -1;

  @media (max-width: 768px) {
    height: 80vh; /* Reduce height on smaller screens */
  }

  @media (max-width: 480px) {
    height: 60vh; /* Further reduce height on very small screens */
  }
`;

const ParallaxVideo = styled.video`
  position: absolute;
  top: ${({ $offsetY }) => $offsetY}px;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure the video covers the screen without stretching */

  @media (max-width: 768px) {
    object-position: center center; /* Center the video for better appearance on smaller screens */
  }

  @media (max-width: 480px) {
    object-position: top center; /* Adjust position for very small screens */
  }
`;

export default App;
