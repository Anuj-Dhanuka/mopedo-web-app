import BannerSection from "./components/BannerSection"
import { ComingSoonSection } from "./components/ComingSoonSection"
import FeaturesSection from "./components/FeaturesSection"
import HomePageHeroSection from "./components/HomePageHeroSection"
import HowItWorksSection from "./components/HowItWorksSection"
import { TestimonialsSection } from "./components/TestimonialsSection"

const HomePage = () => {
  return (
    <div>
      <HomePageHeroSection />
      <BannerSection />
      <FeaturesSection />
      <ComingSoonSection />
      <HowItWorksSection />
      <TestimonialsSection />
    </div>
  )
}

export default HomePage
