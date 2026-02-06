// Services.jsx
import BallBackground from "../assets/nets-background.jpg";
import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div
      className="relative w-full pb-24 flex flex-col items-center py-20"
      id="services"
      style={{
        backgroundImage: `url(${BallBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Title */}
        <motion.h1
          className="
            text-5xl md:text-6xl font-extrabold text-white uppercase
            tracking-tight leading-tight mb-6
          "
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          Services
        </motion.h1>

        {/* Buttons */}
        <div className="flex flex-wrap gap-8 justify-center px-4 mt-16">
          {/* Top 10 Players */}
          <button
            onClick={() => window.location.href = "/top-10-players"}
            className="
              w-72 h-40 text-white font-extralight rounded-lg
              flex flex-col justify-center items-center
              bg-white/10 backdrop-blur-md border border-white/20
              shadow-lg hover:bg-white/20 transition
            "
          >
            <span className="text-2xl tracking-tight">Top 10 Players</span>
            <span className="text-sm mt-2 text-white/70 tracking-wide">Filter top 10 players by stats</span>
          </button>

          {/* Player Lookup */}
          <button
            onClick={() => window.location.href = "/player-lookup"}
            className="
              w-72 h-40 text-white font-extralight rounded-lg
              flex flex-col justify-center items-center
              bg-white/10 backdrop-blur-md border border-white/20
              shadow-lg hover:bg-white/20 transition
            "
          >
            <span className="text-2xl tracking-tight">Player Lookup</span>
            <span className="text-sm mt-2 text-white/70 tracking-wide">Search for player stats and info</span>
          </button>

          {/* Team Visualizer */}
          <button
            onClick={() => window.location.href = "/reality-check"}
            className="
              w-72 h-40 text-white font-extralight rounded-lg
              flex flex-col justify-center items-center
              bg-white/10 backdrop-blur-md border border-white/20
              shadow-lg hover:bg-white/20 transition
            "
          >
            <span className="text-2xl tracking-tight">Reality Check</span>
            <span className="text-sm mt-2 text-white/70 tracking-wide">Is your team actually good?</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
