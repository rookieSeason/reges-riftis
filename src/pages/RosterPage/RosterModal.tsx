import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

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

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  player: Player | null;
}

const CARD_CLIP =
  "polygon(30px 0%, 100% 0%, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0% 100%, 0% 30px)";
const MAIN_CHAMPION_CLIP =
  "polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px)";

export default function RosterModal({ isOpen, onClose, player }: ModalProps) {
  const winRateMotion = useMotionValue(0);
  const winRateRounded = useTransform(winRateMotion, (v) => Math.floor(v));
  const [winRateValue, setWinRateValue] = useState(0);

  const kdaMotion = useMotionValue(0);
  const kdaRounded = useTransform(kdaMotion, (v) => v.toFixed(1));
  const [kdaValue, setKdaValue] = useState("0.0");

  useEffect(() => {
    if (!isOpen || !player) return;

    const rawWinRate = parseFloat(player.stats.winRate.replace("%", "")) || 0;
    const rawKDA = parseFloat(player.stats.kda) || 0;

    winRateMotion.set(0);
    kdaMotion.set(0);

    const winRateControls = animate(winRateMotion, rawWinRate, {
      duration: 1.5,
      ease: "easeInOut",
    });

    const kdaControls = animate(kdaMotion, rawKDA, {
      duration: 1.5,
      ease: "easeInOut",
    });

    const unsubWin = winRateRounded.on("change", (v) => setWinRateValue(v));
    const unsubKda = kdaRounded.on("change", (v) => setKdaValue(v));

    return () => {
      winRateControls.stop();
      kdaControls.stop();
      unsubWin();
      unsubKda();
    };
  }, [isOpen, player]);

  return (
    <AnimatePresence>
      {isOpen && player && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-cyan-500 text-white shadow-xl w-full max-w-5xl relative overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ clipPath: CARD_CLIP }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-100 hover:bg-gray-900 p-1 rounded-sm z-10"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col md:flex-row gap-6 max-h-[90vh] overflow-y-auto">
              {/* Left - Avatar */}
              <div className="w-full md:w-1/2 h-60 md:h-auto">
                <img
                  src={player.avatar}
                  alt={player.gameName}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right - Info */}
              <div className="w-full md:w-1/2 p-6 flex flex-col text-left justify-start md:mt-5">
                {/* Name */}
                <h2 className="text-5xl text-center text-gray-900 font-bold font-roboto-condensed tracking-tight italic">
                  {player.gameName}
                </h2>
                <p className="text-md text-center text-gray-800 font-manrope mb-2">
                  {player.realName} • {player.role}
                </p>

                {/* Stats */}
                <div className="flex justify-evenly gap-8 mb-6 font-manrope">
                  {/* Rank */}
                  <div className="flex flex-col items-center">
                    <span className="text-sky-950 text-xl md:text-2xl mb-2 font-bold">
                      Rank
                    </span>
                    <img src={player.rank} alt="rank" className="w-20 h-20" />
                  </div>

                  {/* Win Rate */}
                  <div className="flex flex-col items-center">
                    <span className="text-sky-950 text-xl md:text-2xl font-bold mb-5">
                      Win Rate
                    </span>
                    <span className="text-5xl md:text-6xl font-semibold text-gray-900">
                      {winRateValue}%
                    </span>
                  </div>

                  {/* KDA */}
                  <div className="flex flex-col items-center">
                    <span className="text-sky-950 text-xl md:text-2xl font-bold mb-5">
                      KDA
                    </span>
                    <span className="text-5xl md:text-6xl font-semibold text-gray-900">
                      {kdaValue}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center mx-4">
                  <h3 className="text-4xl md:text-5xl font-semibold font-roboto-condensed italic text-sky-950">
                    Main Champions
                  </h3>
                  <div className="flex space-x-6 mt-3 md:mt-6">
                    {player.stats.mainChampions.map((champ, idx) => (
                      <img
                        key={idx}
                        src={champ}
                        alt={`Main Champion ${idx + 1}`}
                        className="w-20 h-20 md:w-30 md:h-30"
                        style={{ clipPath: MAIN_CHAMPION_CLIP }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
