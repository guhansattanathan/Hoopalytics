import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header({ isLoggedIn, name, setIsLoggedIn, setName, setEmail }) {
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setName("");
    setEmail("");
  };

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
      <nav className="relative flex justify-center items-center py-6 text-white font-semibold uppercase tracking-wide z-10">
        {/* LEFT LINKS */}
        <div className="flex space-x-10">
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
        </div>

        {/* RIGHT AUTH LINKS */}
        <div className="absolute right-10">
          <div className="relative">
            <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
              {!isLoggedIn ? (
                <>
                  <a
                    href="/login"
                    className="hover:text-orange-500 transition-colors duration-200"
                  >
                    Login
                  </a>

                  <div className="w-px h-5 bg-white/30" />

                  <Link
                    to="/register"
                    className="hover:text-orange-500 transition-colors duration-200"
                  >
                    Register
                  </Link>
                </>
              ) : (
                <button
                  onClick={() => setOpen(!open)}
                  className="hover:text-orange-500 transition-colors duration-200 flex items-center gap-2"
                >
                  {name} ▾
                </button>
              )}
            </div>

            {/* DROPDOWN */}
            {isLoggedIn && open && (
              <div className="absolute right-0 mt-2 w-40 bg-black/80 backdrop-blur-md border border-white/20 rounded-lg shadow-lg overflow-hidden">
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-white/10 transition"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
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
