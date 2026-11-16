import React, { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Trust", href: "#trust" },
    { name: "How It Works", href: "#how" },
    { name: "Live tracking", href: "#live" },
    { name: "For Providers", href: "#providers" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#F8F5EE]/95 backdrop-blur-xl shadow-md py-3"
          : "bg-gradient-to-b from-[#F8F5EE]/95 via-[#F8F5EE]/50 to-transparent shadow-none py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* LOGO */}

        <a href="#about" className="flex items-center gap-2">
          <div>
            <img className="h-8" src="../Images/head-logo.png" alt="logo" />
          </div>
        </a>
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="relative text-sm font-semibold text-[#242B27] hover:text-[#2F5D50] transition-colors duration-300 group"
            >
              {link.name}

              <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-[#2F5D50] group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>

        <a
          href="#services"
          className="hidden lg:flex items-center gap-3 bg-[#2F5D50] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#24483E] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          Find Pet Care
          <ArrowUpRight size={17} />
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-[#2F5D50] p-2"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={27} /> : <Menu size={27} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className="lg:hidden overflow-hidden bg-[#F8F5EE] border-t border-[#DCE8D9]"
          >
            <div className="px-7 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[#242B27] font-medium hover:text-[#2F5D50] transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-[#2F5D50] text-white py-4 rounded-full"
              >
                Find Pet Care
                <ArrowUpRight size={18} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
