
import React, { useState } from "react";
import { AnimatePresence, easeOut, motion } from "motion/react";
import { FaCamera } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Services", href: "#services" },
    { name: "How it works", href: "#works" },
    { name: "Features", href: "#features" },
    { name: "FAQs", href: "#faq" },
    { name: "Contact", href: "#contact" },
    {
      name: "Documentation",
      href: "/documentation/",
      external: true,
    },
  ];

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        className="relative z-40 container mx-auto max-w-7xl w-full px-4 pt-6 md:pt-8 flex items-center justify-between gap-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* LOGO */}
        <div className="flex shrink-0 items-center gap-2 text-lg sm:text-xl xl:text-3xl font-bold text-white whitespace-nowrap">
          <FaCamera className="shrink-0" />
          <p>Webzpot Studios</p>
        </div>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden lg:flex items-center">
          <ul className="flex items-center gap-10 2xl:gap-10 text-lg font-medium text-white whitespace-nowrap">
            {menuItems.map((item) => (
              <li key={item.name} className="shrink-0">
                <motion.a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="inline-block whitespace-nowrap"
                  whileHover={{ y: -3, opacity: 0.7 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                </motion.a>
              </li>
            ))}
          </ul>
        </div>

        {/* MOBILE / TABLET MENU BUTTON */}
        <motion.button
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
          className="shrink-0 cursor-pointer text-2xl text-white lg:hidden"
          whileTap={{ scale: 0.9 }}
        >
          ☰
        </motion.button>
      </motion.nav>

      {/* MOBILE / TABLET FULL SCREEN MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-lg lg:hidden"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            <div className="container mx-auto max-w-7xl px-4">

              {/* MENU HEADER */}
              <div className="flex items-center justify-between gap-4 pt-6 md:pt-8">

                {/* LOGO */}
                <motion.div
                  className="flex items-center gap-2 text-lg sm:text-xl font-bold text-white whitespace-nowrap"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaCamera className="shrink-0" />
                  <p>Webzpot Studios</p>
                </motion.div>

                {/* CLOSE BUTTON */}
                <motion.button
                  type="button"
                  aria-label="Close navigation menu"
                  onClick={() => setMenuOpen(false)}
                  className="shrink-0 cursor-pointer text-4xl font-light text-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ×
                </motion.button>
              </div>

              {/* MENU ITEMS */}
              <div className="mt-14 pb-12">
                <ul className="flex flex-col gap-7">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: index * 0.08,
                        duration: 0.5,
                        ease: easeOut,
                      }}
                    >
                      <motion.a
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        onClick={() => setMenuOpen(false)}
                        className="inline-block text-xl sm:text-2xl font-medium text-white"
                        whileHover={{ x: 10, opacity: 0.6 }}
                        transition={{ duration: 0.25 }}
                      >
                        {item.name}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
