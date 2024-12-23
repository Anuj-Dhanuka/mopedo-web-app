import { AchievementsSection } from "./components/AchievementsSection"
import BannerSection from "../../components/BannerSection"
import { ComingSoonSection } from "./components/ComingSoonSection"
import { CTASection } from "./components/CTASection"
import { DownloadAppSection } from "./components/DownloadAppSection"
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
      <CTASection />
      <AchievementsSection />
      <TestimonialsSection />
      <DownloadAppSection />
    </div>
  )
}

export default HomePage
