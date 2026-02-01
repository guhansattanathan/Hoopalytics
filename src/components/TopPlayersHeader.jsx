import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // assuming you use react-router for navigation

const TopPlayersHeader = () => {
  return (
    <div className="relative bg-black w-full py-16 flex flex-col items-center">
      {/* Navbar */}
      <nav className="absolute top-4 left-0 w-full flex justify-start px-6 md:px-12 z-10">
        <Link
          to="/"
          className="text-white font-semibold uppercase tracking-wide hover:text-orange-500 transition-colors duration-200"
        >
          Home
        </Link>
      </nav>

      {/* Header Content */}
      <motion.div
        className="flex flex-col items-center text-center max-w-4xl px-6"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.h1
          className="text-6xl md:text-7xl font-extrabold text-white uppercase tracking-tight mb-4"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          Top 10 Players
        </motion.h1>

        <motion.p
          className="text-white/80 text-lg md:text-xl font-light"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          Find the top 10 players for every major stat category and discover
          who leads in points, rebounds, assists, and more.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default TopPlayersHeader;
