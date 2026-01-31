import { motion } from "framer-motion";
import StatImage from "../assets/stats-image.png";

function DescriptionBox() {
  return (
    <motion.div
      className="w-full flex items-center justify-center px-6 py-24 bg-center bg-cover relative"
      style={{
        backgroundImage: `url(${StatImage})`,
      }}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: 0.2 }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-orange-500/90"></div>

      {/* Text content */}
      <p className="relative text-2xl md:text-4xl font-bold text-black text-center max-w-3xl">
        Discover a curated hub of player statistics, trends, and insights to elevate your basketball knowledge.
      </p>
    </motion.div>
  );
}

export default DescriptionBox;
