import iron from "../../assets/wr_champ/rank_tier/iron_tier.webp";
import sovereign from "../../assets/wr_champ/rank_tier/sovereign_tier.webp";

export default function TierProgression() {
  return (
    <div className="w-full px-4 py-8 max-w-md">
      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* Iron Tier */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full p-2 border border-gray-400 dark:border-gray-500">
            <img
              src={iron}
              alt="Iron Tier"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-300">
            Iron
          </span>
        </div>

        {/* Dots */}
        <div className="flex items-center gap-2 mx-2">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="w-2.5 h-2.5 bg-gray-400 dark:bg-gray-300 rounded-full"
            />
          ))}
        </div>

        {/* Sovereign Tier */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full p-2 border border-yellow-500 dark:border-yellow-400">
            <img
              src={sovereign}
              alt="Sovereign Tier"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span className="mt-2 text-sm font-semibold text-gray-600 dark:text-gray-400">
            Sovereign
          </span>
        </div>
      </div>
    </div>
  );
}
