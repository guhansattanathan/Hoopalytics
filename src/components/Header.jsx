import { motion } from "framer-motion";

function Header() {
  return (
    <div
      className="relative bg-black bg-contain bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(nba-logo.png)`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Navbar */}
      <nav className="relative flex justify-center space-x-10 py-6 text-white font-semibold uppercase tracking-wide z-10">
        <a
          href="#services"
          className="hover:text-orange-500 transition-colors duration-200"
        >
          Services
        </a>
        <a
          href="#inspiration"
          className="hover:text-orange-500 transition-colors duration-200"
        >
          Inspiration
        </a>
        <a
          href="#about"
          className="hover:text-orange-500 transition-colors duration-200"
        >
          About Us
        </a>
      </nav>

      {/* Header */}
      <div className="relative pb-16 pt-0 z-10">
        <motion.h1
          className="
            text-7xl md:text-8xl text-center
            font-extrabold uppercase
            tracking-tight
            leading-[1.15]
            py-3
          "
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <span className="text-orange-500 transition-colors duration-200 hover:text-white">
            <span className="text-8xl md:text-9xl">H</span>OOPALYTICS
          </span>
        </motion.h1>

        {/* Divider */}
        <div className="w-36 h-1 bg-orange-500 mx-auto my-4 rounded-full" />

        <motion.h2
          className="text-3xl md:text-4xl text-center font-light text-white/80"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.1 }}
        >
          The go-to site for player insights
        </motion.h2>
      </div>
    </div>
  );
}

export default Header;
