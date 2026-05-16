import HeroSection from "./components/HeroSection";
import LoveLetterSection from "./components/LoveLetterSection";
import MemoriesGallery from "./components/MemoriesGallery";
import InteractiveSection from "./components/InteractiveSection";
import VideoMemoriesSection from "./components/VideoMemoriesSection";
import IntimatePhoto from "./components/IntimatePhoto";
import SurpriseSection from "./components/SurpriseSection";
import FinalSection from "./components/FinalSection";
import FloatingHearts from "./components/FloatingHearts";

export default function App() {
  return (
    <div className="size-full overflow-y-auto overflow-x-hidden scroll-smooth">
      <FloatingHearts />
      <HeroSection />
      <LoveLetterSection />
      <MemoriesGallery />
      <VideoMemoriesSection />
      <InteractiveSection />
      <IntimatePhoto />
      <SurpriseSection />
      <FinalSection />
    </div>
  );
}
