import { motion, useInView, type Variants } from "framer-motion";
import { useState, useRef, type JSX } from "react";
import PlayerCard from "./PlayerCard";
import RosterModal from "./RosterModal";
// Avatar icons
import top from "../../assets/wr_champ/icon/shen.png";
import jungle from "../../assets/wr_champ/icon/lessin.png";
import mid from "../../assets/wr_champ/icon/ahri.png";
import adc from "../../assets/wr_champ/icon/lucian_icon.png";
import support from "../../assets/wr_champ/icon/thresh_icon.png";

// Champ icon top
import aatrox from "../../assets/wr_champ/square_champ/whiz/Aatrox_OriginalSquare_WR.png";
import shen from "../../assets/wr_champ/square_champ/whiz/Shen_OriginalSquare_WR.png";
import urgot from "../../assets/wr_champ/square_champ/whiz/Urgot_OriginalSquare_WR.png";
// Champ icon jungle
import leeSin from "../../assets/wr_champ/square_champ/lombos/Lee_Sin_OriginalSquare_WR.png";
import jarvan from "../../assets/wr_champ/square_champ/lombos/Jarvan_IV_OriginalSquare_WR.png";
import vi from "../../assets/wr_champ/square_champ/lombos/Vi_OriginalSquare_WR.png";
// Champ icon mid
import ryze from "../../assets/wr_champ/square_champ/gat/Ryze_OriginalSquare_WR.png";
import galio from "../../assets/wr_champ/square_champ/gat/Galio_OriginalSquare_WR.png";
import ahri from "../../assets/wr_champ/square_champ/gat/Ahri_OriginalSquare_WR.png";
// Champ icon adc
import vayne from "../../assets/wr_champ/square_champ/torres/Vayne_OriginalSquare_WR.png";
import jhin from "../../assets/wr_champ/square_champ/torres/Jhin_OriginalSquare_WR.png";
import lucian from "../../assets/wr_champ/square_champ/torres/Lucian_OriginalSquare_WR.png";
// Champ icon support
import nami from "../../assets/wr_champ/square_champ/melowe/Nami_OriginalSquare_WR.png";
import lulu from "../../assets/wr_champ/square_champ/melowe/Lulu_OriginalSquare_WR.png";
import thresh from "../../assets/wr_champ/square_champ/melowe/Thresh_OriginalSquare_WR.png";

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
    mainChampions: string[];
  };
  achievements: string[];
}

const PLAYERS: Player[] = [
  {
    id: 1,
    gameName: "SYNCRO",
    realName: "Whiz Villamor",
    role: "Top",
    rank: "Diamond I",
    avatar: top,
    stats: {
      winRate: "57%",
      kda: "4.9",
      mainChampions: [shen, aatrox, urgot],
    },
    achievements: ["Tank Specialist", "Initiator Extraordinaire"],
  },
  {
    id: 2,
    gameName: "MORTIFER",
    realName: "Heinrich Lombos",
    role: "Jungle",
    rank: "Challenger",
    avatar: jungle,
    stats: {
      winRate: "63%",
      kda: "6.4",
      mainChampions: [leeSin, jarvan, vi],
    },
    achievements: ["Objective Shotcaller", "Jungle Dominator"],
  },
  {
    id: 3,
    gameName: "SPARDA",
    realName: "Lester John Gatpolintan",
    role: "Mid",
    rank: "Grandmaster",
    avatar: mid,
    stats: {
      winRate: "62%",
      kda: "5.6",
      mainChampions: [ahri, ryze, galio],
    },
    achievements: ["Mage Maniac", "Clutch Master"],
  },
  {
    id: 4,
    gameName: "PLAYHARD",
    realName: "Josh Philip Torres",
    role: "AD Carry",
    rank: "Grandmaster",
    avatar: adc, // Replace with actual avatar URLs
    stats: {
      winRate: "59%",
      kda: "6.2",
      mainChampions: [lucian, vayne, jhin],
    },
    achievements: ["Phantom Kiter", "Auto Attack Architect"],
  },
  {
    id: 5,
    gameName: "FRAIL",
    realName: "John Remil Grafil",
    role: "Support",
    rank: "Grandmaster",
    avatar: support,
    stats: {
      winRate: "58%",
      kda: "4.8",
      mainChampions: [thresh, nami, lulu],
    },
    achievements: ["Vision Controller", "Team Savior"],
  },
];

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
