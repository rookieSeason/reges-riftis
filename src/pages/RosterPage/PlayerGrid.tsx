import { motion, useInView, type Variants } from "framer-motion";
import { useState, useRef, type JSX } from "react";
import { PLAYERS } from "../../data/players";
import PlayerCard from "./PlayerCard";
import RosterModal from "./RosterModal";

// Player data interface
interface Player {
  id: number;
  gameName: string;
  realName: string;
  role: string;
  rank: string;
  avatar: string;
  stats: {
    winRate: string;
    kda: string;
    totalMatches: string;
    mainChampions: string[];
  };
  achievements: string[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function PlayerGrid(): JSX.Element {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayerClick = (player: Player) => {
    setSelectedPlayer(player);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col items-center">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 mb-6 md:mb-8"
      >
        {PLAYERS.slice(0, 5).map((player, index) => (
          <PlayerCard
            key={player.id}
            player={player}
            index={index}
            onClick={() => handlePlayerClick(player)}
          />
        ))}
      </motion.div>
      <RosterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        player={selectedPlayer}
      />
    </div>
  );
}
