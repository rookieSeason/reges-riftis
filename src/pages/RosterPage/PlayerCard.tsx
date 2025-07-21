import { motion, type Variants } from "framer-motion";
import React from "react";

interface Player {
  id: number;
  gameName: string; // This will be used as the champion name
  avatar: string; // Full-size image
}

interface PlayerCardProps {
  player: Player;
  index: number;
  onClick?: () => void;
}

const CARD_CLIP_NORMAL: string = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
const CARD_CLIP_HOVER: string =
  "polygon(30px 0%, 100% 0%, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0% 100%, 0% 30px)";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function PlayerCard({
  player,
  onClick,
}: PlayerCardProps): React.JSX.Element {
  return (
    <div className="flex justify-center items-center">
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        onClick={onClick}
        className="relative group cursor-pointer w-[240px] sm:w-[260px] overflow-hidden"
      >
        <div
          className="relative w-full h-[320px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${player.avatar})`,
            clipPath: CARD_CLIP_NORMAL,
            transition:
              "clip-path 0.6s cubic-bezier(0.4, 0.0, 0.2, 1), transform 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.clipPath = CARD_CLIP_HOVER;
            e.currentTarget.style.transform = "scale(1.03)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.clipPath = CARD_CLIP_NORMAL;
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          {/* Bottom Label Bar */}
          <div className="absolute bottom-0 w-full bg-sky-950 dark:bg-cyan-500 text-white font-extrabold font-roboto-condensed text-lg text-center py-2 font-sans italic tracking-wide">
            {player.gameName}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
