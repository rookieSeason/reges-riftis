import { Element } from "react-scroll";
import HeroContent from "./HeroContent";
import VideoPreview from "./VideoPreview";

export default function HomePage() {
  return (
    <Element
      name="home"
      className="min-h-screen flex justify-center px-6 md:px-16 py-12 bg-white dark:bg-[#1e1e1e]"
    >
      <div className="w-full max-w-screen-xl flex flex-col md:flex-row items-center justify-between">
        <HeroContent />
        <VideoPreview />
      </div>
    </Element>
  );
}
