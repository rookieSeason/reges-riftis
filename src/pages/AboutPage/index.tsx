import { Element } from "react-scroll";
import AboutHero from "./AboutHero";
import AboutCards from "./AboutCards";

export default function AboutPage() {
  return (
    <Element
      name="about"
      className="min-h-screen bg-white dark:bg-[#1e1e1e] px-6 py-16 md:px-16"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch justify-between gap-12">
        <AboutHero />
        <AboutCards />
      </div>
    </Element>
  );
}
