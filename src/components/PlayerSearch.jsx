import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PlayerSearch() {
  const [playerName, setPlayerName] = useState("");
  const [playerData, setPlayerData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [clearing, setClearing] = useState(false);

  const handleSearch = async () => {
    if (!playerName) return;

    setLoading(true);
    setError("");
    setPlayerData(null);

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/player-lookup/?name=${encodeURIComponent(
          playerName
        )}`
      );
      const data = await response.json();

      if (response.ok) {
        setPlayerData(data);

        setClearing(true);
        setTimeout(() => {
          setPlayerName("");
          setClearing(false);
        }, 150);
      } else {
        setError(data.error || "Player not found");
      }
    } catch {
      setError("Error fetching player data");
    }

    setLoading(false);
  };

  return (
    <motion.div
      className="relative w-full max-w-4xl mx-auto px-6 py-12 mt-12 mb-12 bg-black rounded-md shadow-lg"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
    >
      <h2 className="text-3xl font-light text-orange-500 text-center mb-6">
        Search Player Stats
      </h2>

      {/* Search input */}
      <motion.div
        className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6 rounded-md"
        whileFocusWithin={{
          boxShadow: "0 0 0 3px rgba(251, 146, 60, 0.25)",
        }}
        transition={{ duration: 0.2 }}
      >
        <motion.input
          type="text"
          placeholder="Enter player name"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          animate={{ opacity: clearing ? 0.4 : 1 }}
          transition={{ duration: 0.15 }}
          className="
            px-4 py-3 w-full md:w-2/3
            rounded-md
            bg-black text-white
            border border-white/20
            focus:border-orange-400
            focus:ring-2 focus:ring-orange-400/40
            outline-none
            transition-all duration-200
            placeholder:text-white/40
          "
        />

        <button
          onClick={handleSearch}
          className="
            px-6 py-3
            bg-orange-500/90
            text-black font-semibold
            rounded-md
            hover:bg-orange-500
            hover:scale-[1.02]
            active:scale-[0.98]
            transition-all duration-200
          "
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </motion.div>

      {error && (
        <p className="text-red-500 text-center mb-4">{error}</p>
      )}

      {/* Player stats */}
      <AnimatePresence>
        {playerData && (
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <table className="w-full text-left text-white border-collapse">
              <tbody>
                {Object.entries(playerData).map(([key, value]) => (
                  <motion.tr
                    key={key}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="
                      border-b border-white/20
                      hover:bg-orange-500/10
                      cursor-default
                      transition-colors duration-200
                    "
                  >
                    <td className="px-4 py-2 font-semibold capitalize text-white/80 group-hover:text-orange-400">
                      {key.replace("_", " ")}
                    </td>
                    <td className="px-4 py-2 text-white/90">
                      {value}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
