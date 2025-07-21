import { Element } from "react-scroll";
import CommunityHero from "./CommunityHero";
import CommunityTier from "./CommunityTier";
export default function CommunityPage() {
  return (
    <Element
      name="community"
      className="min-h-screen bg-white dark:bg-[#1e1e1e] px-6 py-16 md:px-16"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-stretch justify-between gap-12">
        <CommunityTier />
        <CommunityHero />
      </div>
    </Element>
  );
}
