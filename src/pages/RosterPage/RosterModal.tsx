import { motion, AnimatePresence } from "framer-motion";
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
            className="bg-cyan-500 text-white shadow-xl w-full max-w-4xl relative overflow-hidden"
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
              {/* Left - Avatar Section */}
              <div className="w-full md:w-1/2 h-60 md:h-auto">
                <img
                  src={player.avatar}
                  alt={player.gameName}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right - Player Info Section */}
              <div className="w-full md:w-1/2 p-6 flex flex-col text-left justify-start mt-5">
                <h2 className="text-5xl text-gray-900 font-bold font-roboto-condensed tracking-tight italic">
                  {player.gameName}
                </h2>
                <p className="text-sm text-gray-700 mb-4 font-manrope">
                  {player.realName} • {player.role} • {player.rank}
                </p>

                <div>
                  <h3 className="text-lg text-gray-800 font-semibold font-manrope">
                    Stats
                  </h3>
                  <div className="text-gray-700">
                    <p>Win Rate: {player.stats.winRate}</p>
                    <p>KDA: {player.stats.kda}</p>
                  </div>
                  <h3 className="font-semibold text-lg text-gray-700 font-manrope">
                    Main Champs:
                  </h3>
                  {player.stats.mainChampions.map((champ, idx) => (
                    <img
                      key={idx}
                      src={champ}
                      alt={`Main Champion ${idx + 1}`}
                      className="inline-block w-12 h-12 mx-1 mt-2"
                      style={{ clipPath: MAIN_CHAMPION_CLIP }}
                    />
                  ))}
                </div>

                <div className="mt-4">
                  <h3 className="text-lg text-gray-800 font-semibold font-manrope">
                    Achievements
                  </h3>
                  <ul className="list-disc list-inside text-sm text-gray-700 font-manrope">
                    {player.achievements.map((a, i) => (
                      <li key={i}>{a}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
