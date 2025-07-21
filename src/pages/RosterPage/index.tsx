import { Element } from "react-scroll";
import RosterHero from "./RosterHero";
import PlayerGrid from "./PlayerGrid";
import type { JSX } from "react";

export default function RosterPage(): JSX.Element {
  return (
    <Element
      name="roster"
      className="min-h-screen bg-white dark:bg-[#1e1e1e] px-4 sm:px-6 md:px-16 py-8 sm:py-12"
    >
      <div className="max-w-7xl mx-auto">
        <RosterHero />
        <PlayerGrid />
      </div>
    </Element>
  );
}
