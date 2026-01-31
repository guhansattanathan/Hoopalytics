import React from "react";
import { motion } from "framer-motion";
import InspirationBackground from "../assets/nba-inspiration.jpg";

const Inspiration = () => {
  return (
    <div
      className="relative w-full h-[60vh] flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${InspirationBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="inspiration"
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center px-6">
        {/* Title */}
        <motion.h1
          className="
            text-5xl md:text-6xl font-extrabold text-white uppercase
            tracking-tight leading-tight mb-4
          "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Inspiration
        </motion.h1>

        {/* Subtitle / Placeholder text */}
        <motion.p
          className="text-white/80 text-base md:text-lg font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. 
          Sed nisi. Nulla quis sem at nibh elementum imperdiet.
        </motion.p>
      </div>
    </div>
  );
};

export default Inspiration;