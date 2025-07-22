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
    totalMatches: string;
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
  const winRateRounded = useTransform(winRateMotion, (v) => v.toFixed(1));
  const [winRateValue, setWinRateValue] = useState("0.0");

  const kdaMotion = useMotionValue(0);
  const kdaRounded = useTransform(kdaMotion, (v) => v.toFixed(1));
  const [kdaValue, setKdaValue] = useState("0.0");

  const totalMatchesMotion = useMotionValue(0);
  const totalMatchesRounded = useTransform(totalMatchesMotion, (v) =>
    Math.round(v).toLocaleString()
  );
  const [totalMatchesValue, setTotalMatchesValue] = useState("0");

  useEffect(() => {
    isOpen
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !player) return;

    const rawWinRate = parseFloat(player.stats.winRate.replace("%", "")) || 0;
    const rawKDA = parseFloat(player.stats.kda) || 0;
    const rawTotalMatches =
      parseFloat(player.stats.totalMatches.replace(/,/g, "")) || 0;

    winRateMotion.set(0);
    kdaMotion.set(0);
    totalMatchesMotion.set(0);

    const totalMatchesControls = animate(totalMatchesMotion, rawTotalMatches, {
      duration: 1.5,
      ease: "easeInOut",
    });

    const winRateControls = animate(winRateMotion, rawWinRate, {
      duration: 1.5,
      ease: "easeInOut",
    });

    const kdaControls = animate(kdaMotion, rawKDA, {
      duration: 1.5,
      ease: "easeInOut",
    });

    const unsubTotalMatches = totalMatchesRounded.on("change", (v) =>
      setTotalMatchesValue(String(v))
    );
    const unsubWin = winRateRounded.on("change", (v) =>
      setWinRateValue(String(v))
    );
    const unsubKda = kdaRounded.on("change", (v) => setKdaValue(v));

    return () => {
      totalMatchesControls.stop();
      winRateControls.stop();
      kdaControls.stop();
      unsubTotalMatches;
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
            className="bg-cyan-500 text-white shadow-xl w-full max-w-5xl relative overflow-hidden max-h-screen"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ clipPath: CARD_CLIP }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-100 bg-sky-950 hover:bg-sky-800 p-1 rounded-sm z-10"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col md:flex-row gap-6 max-h-fit">
              {/* Left - Avatar */}
              <div className="w-full md:w-1/2 h-60 md:h-auto">
                <img
                  src={player.avatar}
                  alt={player.gameName}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right - Info */}
              <div className="w-full md:w-1/2 p-6 flex flex-col text-left justify-start -mt-5 md:mt-5">
                {/* Name */}
                <h2 className="text-4xl md:text-5xl text-center text-gray-900 font-bold font-roboto-condensed tracking-tight italic">
                  {player.gameName}
                </h2>
                <p className="text-md text-center text-gray-800 font-manrope mb-2">
                  {player.realName} • {player.role}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 font-manrope ">
                  {/* Rank */}
                  <div className="flex flex-col items-center">
                    <span className="text-sky-950 text-md md:text-lg mb-2 font-bold">
                      Rank
                    </span>
                    <img
                      src={player.rank}
                      alt="rank"
                      className="w-12 h-14 md:w-16 md:h-18 object-contain"
                    />
                  </div>

                  {/* Total Matches */}
                  <div className="flex flex-col items-center">
                    <span className="text-sky-950 text-md whitespace-nowrap md:text-lg font-bold mb-5">
                      Total Matches
                    </span>
                    <span className="text-3xl md:text-4xl font-semibold font-manrope text-gray-50">
                      {totalMatchesValue}
                    </span>
                  </div>

                  {/* Win Rate */}
                  <div className="flex flex-col items-center">
                    <span className="text-sky-950 text-md md:text-lg font-bold mb-5">
                      Win Rate
                    </span>
                    <span className="text-3xl md:text-4xl font-semibold font-manrope text-gray-50">
                      {winRateValue}%
                    </span>
                  </div>

                  {/* KDA */}
                  <div className="flex flex-col items-center">
                    <span className="text-sky-950 text-md md:text-lg font-bold mb-5">
                      KDA
                    </span>
                    <span className="text-3xl md:text-4xl font-semibold font-manrope text-gray-50">
                      {kdaValue}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center mx-4">
                  <h3 className="text-4xl md:text-5xl font-semibold font-roboto-condensed tracking-tight italic text-sky-950 -mt-3 md:mt-0">
                    Main Champions
                  </h3>
                  <div className="flex flex-wrap justify-center gap-4 md:mt-6">
                    {player.stats.mainChampions.map((champ, idx) => (
                      <img
                        key={idx}
                        src={champ}
                        alt={`Main Champion ${idx + 1}`}
                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-30 md:h-30"
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
