import AboutPageAchievementsSection from "./components/AboutPageAchievmentSection";
import AbouPageHeroSection from "./components/AboutPageHeroSection";
import { OurStorySection } from "./components/OurStorySection";
import { KeyFeaturesSection } from "./KeyFeaturesSection";
import { MissionVisionSection } from "./MissionVisionSection";
import { PhotoGallerySection } from "./PhotoGallerySection";

const AboutPage = () => {
  return (
    <div>
      <AbouPageHeroSection />
      <OurStorySection />
      <KeyFeaturesSection />
      <MissionVisionSection />
      <AboutPageAchievementsSection />
      <PhotoGallerySection />
    </div>
  );
};

export default AboutPage;
